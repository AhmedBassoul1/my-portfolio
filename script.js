// ===== Theme toggle (persists in memory for the session) =====
const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
let theme = "dark";

// Respect OS preference on first load
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
  theme = "light";
  root.setAttribute("data-theme", "light");
}

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", theme);
});

// ===== Navbar shadow on scroll =====
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ===== Mobile menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// ===== Scroll reveal =====
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger for items in the same viewport
          setTimeout(() => entry.target.classList.add("in"), i * 60);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

// ===== Active nav link on scroll =====
const sections = [...document.querySelectorAll("section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];
const setActive = () => {
  const y = window.scrollY + 120;
  let current = "";
  for (const sec of sections) {
    if (sec.offsetTop <= y) current = sec.id;
  }
  links.forEach((a) =>
    a.style.setProperty("color", a.getAttribute("href") === "#" + current ? "var(--text)" : "")
  );
};
window.addEventListener("scroll", setActive, { passive: true });
setActive();
