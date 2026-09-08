# Image Manifest

The site code is already wired to load images from the exact paths below. **Save each photo you pasted in chat into the matching file**, then commit/push — no code changes needed, they'll appear automatically (there's a graceful fallback to initials/icons everywhere until then, so nothing looks "broken" in the meantime).

## Logo & Facility (used across every page)

| File to save | What it is |
|---|---|
| `images/logo/coc-logo.png` | The small blue/red "C O C" square logo — used in the header and footer on all 24 pages, and the site's blue/red color palette was already retuned to match it. |
| `images/facility/coc-building.jpg` | The COC building exterior photo (with the ambulance) — used on the home page hero, and the Histopathology, Urgent Care and Directions page heroes. |

## Team photos

Matched from your name list to the photo I judged the best fit. **A few of these are genuinely hard to tell apart from a plain white-coat headshot with no other identifying detail** (marked ⚠️ below) — if any look swapped once you see them live, just tell me and I'll fix the filename references in seconds; the code doesn't need to change, only which photo you save under which name.

| File to save | Name | Where it appears |
|---|---|---|
| `images/team/waleed-mourad.jpg` | Professor Waleed Mourad | Home (partners), Radiation Oncology (team) |
| `images/team/edmund-folefac.jpg` | Professor Edmund Folefac | Home (partners), Medical Oncology (team) |
| `images/team/paul-mobit.jpg` | Professor Mobit | About Us (leadership) — this was the photo explicitly labeled "Paul Mobit, PhD" in your message |
| `images/team/fidele-eyebe.jpg` | Dr. Fidele (Psychologist) ⚠️ | Psychology & Psycho-Oncology page |
| `images/team/lanyuy-irene.jpg` | Lanyuy K. Irene (Nurse Anesthetist) | Surgical Oncology (team) — new card |
| `images/team/samkoh-tepong-victor.jpg` | Samkoh Tepong Victor (Sales Development) | About Us (executive leadership) — new card |
| `images/team/nilay-majumder.jpg` | Nilay Majumder ⚠️ | Radiation Oncology (team) |
| `images/team/dr-kamdem.jpg` | Dr. Kamdem (Generalist) ⚠️ | About Us (executive leadership) — new card |
| `images/team/mbole-awomo-gabriela.jpg` | Dr. Mbole Awomo Gabriela ⚠️ | Surgical Oncology (team) — new card |
| `images/team/difo-djiokeng-blondelle.jpg` | Dr. Difo Djiokeng Mibelle Blondelle ⚠️ | Nuclear Medicine (team) — new card |
| `images/team/fri-isabella-tayong.jpg` | Mme Fri Isabella Tayong (HR Manager) | About Us (leadership) |
| `images/team/farzaneh-mirkhaghani.jpg` | Farzaneh Mirkhaghani (Chief Medical Physicist) | Radiation Oncology (team) |
| `images/team/lana-mohamed.jpg` | Dr. Lana Mohamed (Chief of Medical Oncology) | Medical Oncology (team) |
| `images/team/rouly-tabod.jpg` | Engineer Rouly Tabod (Chief Engineer) | About Us (leadership) |
| `images/team/ava-louis-georges.jpg` | Dr. Ava (Head & Neck Surgeon) | Head & Neck/Thyroid page, Surgical Oncology (team) |

## How to add them in VS Code

1. Open the `images/team/`, `images/logo/`, and `images/facility/` folders in the Explorer sidebar.
2. Drag each photo from wherever you have it saved locally into the matching folder, and rename it to the exact filename above (case-sensitive, must end in the same extension the code expects — `.jpg` for team/facility, `.png` for the logo; if yours is a different format, either convert it or tell me the actual extension and I'll update the code to match).
3. Save, then `git add images/ && git commit -m "Add team, logo and facility photos" && git push`.

If you don't have local copies of the pasted photos, right-click each image in this chat and "Save image as…" first.
