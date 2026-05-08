// Reveal-on-scroll for sections
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
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document
    .querySelectorAll('.work-card, .project, .stack-block, .card-edu, .about-text, .about-side, .contact-link')
    .forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
})();

// Subtle nav background on scroll
(function () {
  const nav = document.querySelector('.nav');
  let last = 0;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (y > 30 && last <= 30) nav.style.borderBottomColor = 'rgba(201,48,74,0.15)';
      if (y <= 30 && last > 30) nav.style.borderBottomColor = '';
      last = y;
    },
    { passive: true }
  );
})();

// Console signature
console.log(
  '%c Ahmed Bassoul %c Data Scientist & ML Engineer ',
  'background:#c9304a;color:#fff;padding:6px 10px;font-weight:600;border-radius:4px 0 0 4px;',
  'background:#15140f;color:#f3ede2;padding:6px 10px;border-radius:0 4px 4px 0;'
);
console.log('Curious about the build? Drop me a line: bassoulahmed@gmail.com');
