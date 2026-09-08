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

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('mobile-open');
      burger.setAttribute('aria-expanded', navLinks.classList.contains('mobile-open'));
    });
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
    a.addEventListener('click', () => {
      navLinks?.classList.remove('mobile-open');
      burger?.classList.remove('open');
    });
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
    if (e.key === 'Escape') searchOverlay?.classList.remove('open');
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

      // No backend is wired up in this template — this simulates a
      // successful submission so the flow is demonstrable end-to-end.
      // Replace with a real request (e.g. fetch() to your API, or a
      // service like Formspree/EmailJS) when you have a backend.
      const submitBtn = apptForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = t('appt.form.submitting_btn');

      setTimeout(() => {
        apptForm.reset();
        apptForm.style.display = 'none';
        successBox.classList.add('show');
        submitBtn.disabled = false;
        submitBtn.textContent = t('appt.form.submit_btn');
      }, 700);
    });
  }

});
