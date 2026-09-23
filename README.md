# Ahmed Bassoul . Portfolio

> Personal portfolio website of **Ahmed Bassoul**, Full-Stack Developer & AI/ML Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue) ![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🔗 Live Demo

**[ahmedbassoul1.github.io/my-portfolio/](https://ahmedbassoul1.github.io/my-portfolio/)**

---

## 📋 About

Personal portfolio showcasing background, skills, projects, and work experience as a
Full-Stack Developer & AI/ML Engineer based in Morocco . including a live AI demo,
an embedded resume, and a bilingual (FR/EN) interface.

---

## 🗂️ Project Structure

```
my-portfolio/
├── index.html          # Main page . all sections live here
├── css/
│   └── styles.css      # All styling (theme tokens, layout, components)
├── js/
│   ├── i18n.js          # FR/EN translation dictionary + language toggle logic
│   └── script.js        # All interactivity (nav, tabs, FAQ, AI demo, contact form...)
├── assets/
│   ├── resume.pdf       # CV shown/downloaded from the Resume section
│   └── icone.png        # Site favicon
└── README.md
```

Everything is plain HTML/CSS/JS . no build step, no dependencies. Open `index.html`
directly or serve the folder with any static file server.

---

## ⚙️ Setup notes

- **Resume**: replace `assets/resume.pdf` with an updated CV any time . the Resume
  section picks it up automatically (and gracefully shows a fallback message if the
  file is ever missing).
- **Favicon**: swap `assets/icone.png` for a new icon whenever you like . same filename.
- **Contact form**: works out of the box via a `mailto:` fallback (opens the visitor's
  email client, pre-filled). To get inline "Success!" submissions without leaving the
  page, create a free key at [web3forms.com](https://web3forms.com) and paste it into
  the hidden `access_key` input in `index.html` (search for `YOUR_WEB3FORMS_ACCESS_KEY`)
  . the form automatically switches to that mode once a real key is set.

---

## 🛠️ Built With

- **HTML5** . Semantic markup
- **CSS3** . Custom styling, animations, responsive design
- **JavaScript (Vanilla)** . Interactivity, i18n, and a dependency-free client-side NLP demo

---

## 📬 Contact

- **Email:** bassoulahmed@gmail.com
- **LinkedIn:** [ahmed-bassoul](https://linkedin.com/in/ahmed-bassoul)
- **GitHub:** [@AhmedBassoul1](https://github.com/AhmedBassoul1)
- **Location:** Tanger, Morocco

---

*Built with ❤️ by Ahmed Bassoul*
