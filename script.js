/* ============================================================
   Ahmed Bassoul — Portfolio interactions
   ============================================================ */

/* Reveal-on-scroll for content */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
  );

  const targets = document.querySelectorAll(
    '.work-row, .proj, .stack-block, .card-edu, .about-text, .about-side, .cl, .sec-head'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 0.04, 0.4)}s`;
    observer.observe(el);
  });
})();

/* Subtle topbar shadow on scroll */
(function () {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  let lastY = 0;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (y > 20 && lastY <= 20) {
        bar.style.boxShadow = '0 1px 0 rgba(26,24,20,0.08), 0 8px 24px -16px rgba(26,24,20,0.18)';
      }
      if (y <= 20 && lastY > 20) {
        bar.style.boxShadow = '';
      }
      lastY = y;
    },
    { passive: true }
  );
})();

/* Active section indicator in topnav */
(function () {
  const links = document.querySelectorAll('.topnav a[href^="#"]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((l) => {
      const isActive = l.getAttribute('href') === `#${id}`;
      l.style.color = isActive ? 'var(--accent)' : '';
      const n = l.querySelector('.n');
      if (n) n.style.color = isActive ? 'var(--accent)' : '';
    });
  };

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );
  sections.forEach((s) => obs.observe(s));
})();

/* Console signature */
console.log(
  '%c Ahmed Bassoul %c Data Scientist & ML Engineer ',
  'background:#8a1c2b;color:#f1ece1;padding:6px 10px;font-family:Georgia,serif;font-style:italic;font-size:13px;border-radius:3px 0 0 3px;',
  'background:#1a1814;color:#f1ece1;padding:6px 10px;font-family:monospace;font-size:11px;letter-spacing:0.08em;border-radius:0 3px 3px 0;'
);
console.log(
  '%cCurious about the build? Drop a line: bassoulahmed@gmail.com',
  'color:#4a4339;font-style:italic;font-family:Georgia,serif;font-size:12px;'
);
