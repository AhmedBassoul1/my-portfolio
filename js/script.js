// ===== Theme toggle (persists across reloads via localStorage) =====

const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const THEME_KEY = "portfolio_theme";

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch (e) {
    return null;
  }
}

// Stored choice wins; otherwise fall back to OS preference, then dark.
let theme =
  getStoredTheme() ||
  (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
root.setAttribute("data-theme", theme);

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
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
  if (e.target.closest("a")) navLinks.classList.remove("open");
});

// ===== Scroll reveal =====
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
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
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
};
window.addEventListener("scroll", setActive, { passive: true });
setActive();

// ===== Back to top =====
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  const toggleBackToTop = () => backToTop.classList.toggle("show", window.scrollY > 500);
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ===== Experience / Education tabs =====
const tabButtons = document.querySelectorAll(".tab");
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    const targetId = btn.getAttribute("data-target");
    document.querySelectorAll("#panelExperience, #panelEducation").forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });
  });
});

// ===== FAQ accordion =====
document.querySelectorAll(".faq-q").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.closest(".faq-item");
    const answer = item.querySelector(".faq-a");
    const isOpen = q.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-q").forEach((other) => {
      if (other !== q) {
        other.setAttribute("aria-expanded", "false");
        other.closest(".faq-item").querySelector(".faq-a").style.maxHeight = null;
      }
    });

    q.setAttribute("aria-expanded", isOpen ? "false" : "true");
    answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
  });
});

// ===== Contact form (Web3Forms) =====
(function initContactForm() {
  const form = document.getElementById("contactForm");
  const banner = document.getElementById("formBanner");
  if (!form) return;

  // Anti-bot #1: a hidden checkbox named "botcheck" (see index.html) that's
  // invisible to humans but visible to naive scrapers, who tend to fill in
  // every field they find. Web3Forms silently drops the submission server-side
  // if it's checked.
  //
  // Anti-bot #2: a time trap. Real visitors need at least a few seconds to
  // read the form and type a message; bots submit near-instantly after the
  // page loads. Anything under 4s is treated as automated and rejected
  // client-side, before it ever reaches Web3Forms.
  const loadedAt = Date.now();
  const MIN_HUMAN_SECONDS = 4000;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dict = window.__i18n ? window.__i18n.dict() : {};
    const submitBtn = form.querySelector(".form-submit");
    const originalLabel = submitBtn.querySelector("span").textContent;

    banner.hidden = true;
    banner.className = "form-banner";

    const formData = new FormData(form);
    const accessKey = formData.get("access_key");
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    const isConfigured = accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY";
    const isBot = form.querySelector('[name="botcheck"]').checked || Date.now() - loadedAt < MIN_HUMAN_SECONDS;

    if (isBot) {
      // Don't reveal to the bot that it was caught — just look successful.
      banner.textContent = dict["contact.success"] || "Success! Your message has been sent — I'll get back to you soon.";
      banner.classList.add("success");
      banner.hidden = false;
      form.reset();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.querySelector("span").textContent = dict["contact.sending"] || "Sending…";

    try {
      if (isConfigured) {
        // Shape the notification email as: "<name> (<email>) sent you this
        // message: "<message>"" — replaces the raw "message" field so the
        // email Ahmed receives reads exactly that way.
        formData.set("message", `${name} (${email}) t'a envoyé ce message :\n\n"${message}"`);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message || "Request failed");
      } else {
        // No Web3Forms key configured yet — fall back to opening the
        // visitor's email client with everything pre-filled, so the form
        // still works with zero setup. Swap in a real access_key on the
        // hidden input in index.html to switch to automatic inline delivery.
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:bassoulahmed@gmail.com?subject=${subject}&body=${body}`;
      }

      banner.textContent = dict["contact.success"] || "Success! Your message has been sent — I'll get back to you soon.";
      banner.classList.add("success");
      banner.hidden = false;
      form.reset();
    } catch (err) {
      banner.textContent = dict["contact.error"] || "Something went wrong. Please email me directly instead.";
      banner.classList.add("error");
      banner.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector("span").textContent = originalLabel;
    }
  });
})();

// ===== Resume: keep the "Download" button pointed at the matching PDF =====
// The two styled resume-doc replicas (FR/EN) are toggled purely by CSS via
// <html lang>, but the download link is shared UI, so it needs JS.
(function syncResumeDownload() {
  const downloadBtn = document.getElementById("resumeDownload");
  if (!downloadBtn) return;
  function sync() {
    const lang = (window.__i18n && window.__i18n.getLang()) || "fr";
    downloadBtn.setAttribute("href", `assets/resume-${lang === "en" ? "en" : "fr"}.pdf`);
  }
  sync();
  window.addEventListener("i18n:changed", sync);
})();

// ===== Initialize i18n =====
if (window.__i18n) {
  window.__i18n.applyTranslations();
  window.__i18n.setupLangToggle();
}
