# Cameroon Oncology Center — Website

A static, responsive multi-page website built with plain **HTML, CSS and JavaScript** (no build tools, no frameworks required) — **24 pages** covering the home page, About/Leadership, thirteen clinical service pages, a Patients & Families hub, Research/Training, Community Outreach, and a functional appointment-request page. All 24 pages are fully bilingual (EN/FR).

## Pages

| File | Description |
|---|---|
| `index.html` | Home page — hero, stats, clinical services, technology, values, partners |
| `about.html` | About Us — milestones, regional reach, and the leadership team |
| `histopathology.html` | Histopathology & Laboratory Services detail page |
| `medical-oncology.html` | Medical Oncology — treatments, cancers treated, team, impact stats |
| `surgical-oncology.html` | Surgical Oncology — general, urologic, gynecologic and head & neck surgery, care pathway, team |
| `radiation-oncology.html` | Radiation Oncology — two linear accelerators, 9-step simulation-to-treatment process, IROC-verified quality, full team |
| `radiology-imaging.html` | Radiology & Diagnostic Imaging — CT, MRI, ultrasound, CT simulation, team, impact stats |
| `nuclear-medicine.html` | Nuclear Medicine — SPECT-CT services, how a study works, team, patient safety |
| `spect-ct-womens-health.html` | SPECT-CT for Women's Health — clinical applications table by medical area |
| `cardiology.html` | Cardiology & Cardio-Oncology — team, symptoms, services, cardio-oncology program |
| `urology.html` | Urology & Urologic Oncology — services, prostate cancer pathway, theranostics preview |
| `gynecology.html` | Gynecology & Gynecologic Oncology — services, cervical cancer pathway, CCF partnership |
| `nutrition-dietetics.html` | Nutrition & Dietetics — nutrition care pathway, screening data, support types |
| `psycho-oncology.html` | Psychology & Psycho-Oncology — specialist, services, care journey, impact stats |
| `head-neck-thyroid.html` | Head & Neck (ENT) Cancer and Thyroid Cancer — combined two-column treatment flyer |
| `patients-families.html` | Patients & Families — first visit, care journey, financial guidance, support services |
| `urgent-care.html` | Urgent Care & Emergency Services — oncology, general medical and maternity emergencies |
| `inpatient-care.html` | Hospitalization & Inpatient Care — four levels of care, facilities, medical coverage |
| `nurse-navigation.html` | Oncology Nurse Navigation — the 6-step closed-loop navigation pathway |
| `affiliate-physician-network.html` | Affiliate Physician Network — hub-and-spoke model, four affiliate levels, shared-care pathway |
| `community-outreach.html` | Community Outreach, Cancer Screening & Prevention — joint COC / Cameroon Cancer Foundation page |
| `research-training.html` | Research, Education & Training — publications, COC-SHS, residency, tele-oncology |
| `directions.html` | Directions — location, route, landmarks, travel time, payment options |
| `appointment.html` | "Book an Appointment" form with client-side validation |

## Structure

```
shege/
├── index.html
├── about.html
├── histopathology.html
├── medical-oncology.html
├── surgical-oncology.html
├── radiation-oncology.html
├── radiology-imaging.html
├── nuclear-medicine.html
├── spect-ct-womens-health.html
├── cardiology.html
├── urology.html
├── gynecology.html
├── nutrition-dietetics.html
├── psycho-oncology.html
├── head-neck-thyroid.html
├── patients-families.html
├── urgent-care.html
├── inpatient-care.html
├── nurse-navigation.html
├── affiliate-physician-network.html
├── community-outreach.html
├── research-training.html
├── directions.html
├── appointment.html
├── css/
│   └── style.css
├── js/
│   ├── i18n.js
│   └── main.js
├── images/            (empty — see "Adding real photos" below)
└── README.md
```

## Features

- Fully responsive layout (desktop, tablet, mobile) with a hamburger menu on small screens
- Dropdown navigation menus (hover on desktop, tap on mobile)
- Sticky header, "back to top" button, and scroll-reveal animations
- A working search overlay that jumps to the closest matching page
- **A fully functional EN/FR language switch** — every page translates live (nav, headings, body copy, buttons, form labels/placeholders, and validation messages), the choice is saved in `localStorage`, and it stays selected as you move between pages. See "How the language switch works" below.
- A fully validated appointment request form (name, email, phone, service, date) with inline error messages and a success confirmation — no backend required to try it
- Uses [Font Awesome](https://fontawesome.com/) (via CDN) for icons and Google Fonts (Poppins/Inter) for type

## Running it locally

No build step is required — it's plain static HTML/CSS/JS.

**Option 1 — just open it**
Double-click `index.html`, or open it in a browser.

**Option 2 — VS Code Live Server (recommended)**
1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. The site opens at `http://127.0.0.1:5500` with auto-reload on save.

**Option 3 — any static server**
```bash
npx serve .
```
or
```bash
python -m http.server 8080
```

## Publishing to GitHub / GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: Cameroon Oncology Center website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then enable **GitHub Pages**: repo **Settings → Pages → Source: `main` branch, `/ (root)`**. Your site will be published at `https://<username>.github.io/<repo-name>/`.

## Adding real photos

All photography in this template is a labeled placeholder (a gradient block with an icon and caption) so the site remains fully self-contained and license-free. To use real photos:

1. Drop your image files into `images/` (e.g. `images/hero-building.jpg`).
2. In the HTML, replace the relevant `<div class="ph ...">...</div>` block with an `<img src="images/your-file.jpg" alt="...">`, or set it as a CSS `background-image` on the `.ph` element.

## Notes on functionality

- The appointment form is **front-end only** — submitting it simulates success so you can see the full flow. To actually receive submissions, connect it to a backend endpoint (`fetch()` to your own API) or a form service such as [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).
- The header search box is a lightweight client-side router (keyword → page), not a full-text search engine.

## How the language switch works

`js/i18n.js` holds an `en`/`fr` dictionary and a small engine (`applyLanguage`, `t()`), loaded on every page **before** `js/main.js`. Translatable elements are marked with an attribute instead of hardcoded text:

- `data-i18n="some.key"` — sets the element's `textContent`
- `data-i18n-html="some.key"` — sets `innerHTML` (only used for the handful of strings that need an embedded tag, like a `<br>` or a highlighted `<span>`)
- `data-i18n-placeholder="some.key"` — sets an `<input>`/`<textarea>` placeholder
- `data-i18n-title="some.key"` — sets a `title` attribute

Clicking **EN** / **FR** in the top bar calls `applyLanguage(lang)`, which re-renders every tagged element on the current page, saves the choice to `localStorage` (`coc_lang`), and updates `<html lang>`. Because the choice is read from `localStorage` on every page load, it stays selected as a visitor moves between `index.html`, `about.html`, `histopathology.html` and `appointment.html`. The appointment form's validation messages also come from the same dictionary (via `t('appt.validation.*')`), so error text matches whichever language is active, even if you switch languages while an error is showing.

To add a new translatable string: add an `en` and `fr` entry to `translations` in `js/i18n.js` under the right page namespace (`common`, `home`, `about`, `histo`, `appt`, `patients`, `research`, `medonc`, `nuclearmed`, `spectct`, `directions`, `radiology`, `urgentcare`, `nutrition`, `cardiology`, `outreach`, `gynecology`, `psycho`, `inpatient`, `headneck`, `surgical`, `radiation`, `urology`, `nursenav`, `affiliate`), then tag the corresponding HTML element with `data-i18n="namespace.key"`. Several pages intentionally reuse another page's keys (e.g. `directions.html` reuses `patients.payment.*` for its payment-methods box, `nuclear-medicine.html` reuses `medonc.contact.btn1/2/3`) rather than duplicating identical copy — check for an existing key before adding a new one.

**Fixed bug — language switch doing nothing:** in some contexts (certain `file://` access patterns, sandboxed previews, strict browser privacy settings) reading or writing `localStorage` throws a `SecurityError`. The switcher used to call `localStorage` directly with no safety net, so that exception fired during page init — *before* the EN/FR buttons ever got their click listeners attached — making the whole switcher look completely dead, with no console-visible symptom beyond a silently failed script. `getCurrentLang()`/`applyLanguage()` in `js/i18n.js` now wrap every `localStorage` call in `try/catch` with an in-memory fallback, so switching languages always works for the current page view; it just won't persist across a reload if storage truly isn't available in that context.

## Customizing

- Colors, fonts, spacing and component styles live in `css/style.css` as CSS custom properties (`:root`) at the top of the file — change `--navy`, `--gold`, `--red`, etc. to re-theme the whole site.
- Shared interactive behavior (nav, dropdowns, form validation, scroll reveal) lives in `js/main.js`; translations live in `js/i18n.js`. Both are loaded on every page.
