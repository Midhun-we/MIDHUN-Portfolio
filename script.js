/* ============================================================
   PREMIUM PORTFOLIO — script.js
   Author: Midhun Manoj
   ============================================================ */


/* ------------------------------------------------------------
   PRELOADER
------------------------------------------------------------ */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 700);
});


/* ------------------------------------------------------------
   DARK / LIGHT MODE TOGGLE
------------------------------------------------------------ */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

let savedTheme = localStorage.getItem("theme");

// Apply saved theme
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  themeIcon.setAttribute("name", "sunny-outline");
}

themeToggle.addEventListener("click", () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "light") {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.setAttribute("name", "moon-outline");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.setAttribute("name", "sunny-outline");
    localStorage.setItem("theme", "light");
  }
});


/* ------------------------------------------------------------
   TYPEWRITER EFFECT
------------------------------------------------------------ */
const words = [
  "beautiful websites",
  "responsive UI",
  "secure web apps",
  "smooth animations",
  "interactive experiences",
  "modern front-end designs"
];

let typeIndex = 0;
let charIndex = 0;
let deleting = false;

const typeTarget = document.getElementById("typewriter");

function typeWriter() {
  const word = words[typeIndex];

  if (!deleting) {
    typeTarget.textContent = word.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeWriter, 900);
      return;
    }
  } else {
    typeTarget.textContent = word.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      typeIndex = (typeIndex + 1) % words.length;
    }
  }

  setTimeout(typeWriter, deleting ? 60 : 110);
}

typeWriter();


/* ------------------------------------------------------------
   FLOATING PROFILE BUBBLE (PARALLAX)
------------------------------------------------------------ */
const floatingBubble = document.querySelector(".floating-bubble");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  floatingBubble.style.transform = `translate(${x}px, ${y}px)`;
});


/* ------------------------------------------------------------
   3D PROJECT CARD HOVER EFFECT
------------------------------------------------------------ */
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let rotateX = (y - rect.height / 2) / 15;
    let rotateY = (rect.width / 2 - x) / 15;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});


/* ------------------------------------------------------------
   SKILL BAR ANIMATION
------------------------------------------------------------ */
const skillBars = document.querySelectorAll(".skill-bar div");

function animateSkills() {
  skillBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    bar.style.width = value + "%";
  });
}

const skillsPanel = document.querySelector(".skills-panel");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) animateSkills();
    });
  },
  { threshold: 0.4 }
);

if (skillsPanel) skillObserver.observe(skillsPanel);


/* ------------------------------------------------------------
   PANEL FADE-IN ON SCROLL
------------------------------------------------------------ */
const panels = document.querySelectorAll(".panel");

const panelObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible-panel");
    });
  },
  { threshold: 0.2 }
);

panels.forEach((p) => panelObserver.observe(p));


/* ------------------------------------------------------------
   SMOOTH SCROLL FOR INTERNAL LINKS
------------------------------------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});


/* ------------------------------------------------------------
   SCROLL-TO-TOP BUTTON
------------------------------------------------------------ */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ------------------------------------------------------------
   DEBUG MESSAGE (Good for console check)
------------------------------------------------------------ */
console.log("%cPortfolio Loaded Successfully ✨", "color:#7da1ff; font-size:16px;");
