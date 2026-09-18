# assets/

- `resume-fr.pdf` / `resume-en.pdf` — CV files, one per language. The Resume section
  shows a styled HTML replica of whichever one matches the site's current language
  (FR/EN toggle), and the Download / "open in new tab" buttons link straight to the
  matching PDF. Replace either file any time — same filename, new content.
- `icone.png` — site favicon. Replace it any time; the filename must stay `icone.png`.

Heads up: the HTML replica in `index.html` (`.resume-doc.lang-fr` / `.lang-en`) is a
manually transcribed copy of these PDFs' content, kept in sync by hand — not generated
from the files. If you edit a resume PDF, the matching HTML block in the Resume section
needs a manual update too, or the two will drift apart.
