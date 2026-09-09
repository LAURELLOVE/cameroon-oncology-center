/* ==========================================================================
   Cameroon Oncology Center — shared site behaviour
   Mobile nav, dropdowns, search overlay, language toggle, back-to-top,
   scroll reveal, and active-link highlighting.
   ========================================================================== */

/* Captured while this script is still the "current" one executing (only
   true synchronously at load time) so relative navigation below works the
   same from root pages and from one-level-deep pages like team/*.html. */
const sitePrefix = (document.currentScript?.getAttribute('src') || 'js/main.js').replace(/js\/main\.js.*$/, '');

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');

  function closeMobileNav() {
    navLinks?.classList.remove('mobile-open');
    burger?.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const opening = !navLinks.classList.contains('mobile-open');
      burger.classList.toggle('open', opening);
      navLinks.classList.toggle('mobile-open', opening);
      burger.setAttribute('aria-expanded', String(opening));
      document.body.classList.toggle('nav-open', opening);
    });
  }

  /* ---------- Full-screen mobile drawer footer (CTA + contact + language) ----------
     Injected here instead of duplicated across every page's markup, so it
     shows up consistently everywhere the drawer does. */
  if (navLinks && !navLinks.querySelector('.nav-menu-footer')) {
    const footerLi = document.createElement('li');
    footerLi.className = 'nav-menu-footer';
    footerLi.innerHTML = `
      <a href="${sitePrefix}appointment.html" class="btn btn-primary">${t('common.buttons.book_appointment')}</a>
      <div class="nav-menu-contact">
        <a href="tel:+237676199595"><i class="fa-solid fa-phone"></i> +237 6 76 19 95 95</a>
        <a href="mailto:info@camoncenter.org"><i class="fa-solid fa-envelope"></i> info@camoncenter.org</a>
      </div>
      <div class="nav-menu-langs lang-switch"></div>
    `;
    navLinks.appendChild(footerLi);

    // Reuse the same dropdown-building logic as the topbar's switcher
    // (defined in js/i18n.js, loaded before this file) rather than
    // duplicating it here.
    if (typeof buildLanguageSwitcher === 'function') {
      buildLanguageSwitcher(footerLi.querySelector('.lang-switch'));
    }
  }

  /* ---------- Dropdown menus (click-to-open on touch/mobile, hover on desktop via CSS) ---------- */
  document.querySelectorAll('.has-dropdown > .nav-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = btn.closest('.has-dropdown');
      const wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.has-dropdown.open').forEach((el) => el.classList.remove('open'));
      if (!wasOpen) parent.classList.add('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.open').forEach((el) => el.classList.remove('open'));
    }
  });

  /* ---------- Close mobile menu when a plain link is clicked ---------- */
  document.querySelectorAll('.nav-links a:not(.nav-toggle)').forEach((a) => {
    a.addEventListener('click', closeMobileNav);
  });

  /* ---------- Search overlay ---------- */
  const searchBtns = document.querySelectorAll('[data-open-search]');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('.search-box input');
  const closeSearchBtn = document.querySelector('.close-search');
  const searchForm = document.querySelector('.search-box');

  searchBtns.forEach((btn) => btn.addEventListener('click', () => {
    searchOverlay?.classList.add('open');
    setTimeout(() => searchInput?.focus(), 150);
  }));

  closeSearchBtn?.addEventListener('click', () => searchOverlay?.classList.remove('open'));

  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) searchOverlay.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchOverlay?.classList.remove('open');
      closeMobileNav();
    }
  });

  document.querySelector('.search-box .go')?.addEventListener('click', () => runSiteSearch());
  searchInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') runSiteSearch(); });

  function runSiteSearch() {
    const term = (searchInput?.value || '').trim();
    if (!term) return;
    // Client-side only demo: jump to the most relevant page for common keywords.
    const map = {
      leadership: 'about.html#leadership', team: 'about.html#leadership',
      about: 'about.html', history: 'about.html',
      histopathology: 'histopathology.html', pathology: 'histopathology.html', laboratory: 'histopathology.html', lab: 'histopathology.html',
      appointment: 'appointment.html', book: 'appointment.html', contact: 'appointment.html'
    };
    const key = Object.keys(map).find((k) => term.toLowerCase().includes(k));
    window.location.href = sitePrefix + (key ? map[key] : `about.html?q=${encodeURIComponent(term)}`);
  }

  /* ---------- Language toggle ---------- */
  /* Handled by js/i18n.js (applyLanguage), which also persists the choice
     in localStorage so it stays selected across page navigation. */

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 480);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Active nav link highlighting ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach((a) => {
    const href = a.getAttribute('href').split('#')[0];
    if (href === currentPage) a.classList.add('router-active');
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Appointment form validation (appointment.html) ---------- */
  const apptForm = document.querySelector('#appointment-form');
  if (apptForm) {
    const successBox = document.querySelector('.form-success');

    // Messages are looked up live from js/i18n.js's t() so they always
    // reflect whichever language is currently selected.
    const validators = {
      fullName: (v) => v.trim().length >= 3 || t('appt.validation.fullName'),
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || t('appt.validation.email'),
      phone: (v) => /^[+0-9\s()-]{7,}$/.test(v) || t('appt.validation.phone'),
      service: (v) => v !== '' || t('appt.validation.service'),
      date: (v) => v !== '' || t('appt.validation.date'),
    };

    function validateField(field) {
      const rule = validators[field.name];
      const group = field.closest('.form-group');
      const errorEl = group?.querySelector('.form-error');
      if (!rule) return true;
      const result = rule(field.value);
      if (result === true) {
        group.classList.remove('invalid');
        if (errorEl) errorEl.textContent = '';
        return true;
      }
      group.classList.add('invalid');
      if (errorEl) errorEl.textContent = result;
      return false;
    }

    apptForm.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('blur', () => validateField(field));
    });

    // If the visitor switches language while an error is showing, refresh
    // its wording instead of leaving the previous language's text behind.
    document.addEventListener('coc:language-changed', () => {
      apptForm.querySelectorAll('.form-group.invalid').forEach((group) => {
        const field = group.querySelector('input, select, textarea');
        if (field) validateField(field);
      });
    });

    apptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      apptForm.querySelectorAll('input, select, textarea').forEach((field) => {
        if (validators[field.name] && !validateField(field)) valid = false;
      });

      if (!valid) {
        apptForm.querySelector('.invalid input, .invalid select, .invalid textarea')?.focus();
        return;
      }

      // No server backend is wired up — submitting opens the visitor's own
      // email app with the request pre-filled and addressed to the patient
      // coordination team, so it's actually delivered somewhere real
      // instead of being silently discarded.
      const submitBtn = apptForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = t('appt.form.submitting_btn');

      const data = Object.fromEntries(new FormData(apptForm).entries());
      const serviceField = apptForm.querySelector('#service');
      const serviceLabel = serviceField?.selectedOptions[0]?.textContent || data.service;
      const subject = `Appointment Request — ${data.fullName}`;
      const body = [
        `Full Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Service Needed: ${serviceLabel}`,
        `Preferred Date: ${data.date}`,
        `Additional Notes: ${data.message || '(none)'}`,
      ].join('\n');
      const mailtoUrl = `mailto:info@camoncenter.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
        apptForm.reset();
        apptForm.style.display = 'none';
        successBox.classList.add('show');
        submitBtn.disabled = false;
        submitBtn.textContent = t('appt.form.submit_btn');
      }, 700);
    });
  }

});
