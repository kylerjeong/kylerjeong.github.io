/* ============================================================
   Kyler Jeong — Portfolio interactions
   Typed roles, scroll reveals, animated counters, mobile nav
   ============================================================ */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Typed role rotation ---------- */
(() => {
  const el = document.getElementById("typed-role");
  const roles = [
    "Mechanical Engineer.",
    "UC Berkeley ME '28.",
    "Combat robot builder.",
    "CAD designer.",
    "Prototype builder.",
  ];

  if (prefersReducedMotion) {
    el.textContent = roles[0];
    return;
  }

  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIdx];
    charIdx += deleting ? -1 : 1;
    el.textContent = current.slice(0, charIdx);

    let delay = deleting ? 40 : 75;
    if (!deleting && charIdx === current.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ---------- Scroll reveal ---------- */
(() => {
  const targets = document.querySelectorAll(".card, .section__title, .timeline__item");
  targets.forEach((t) => t.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((t) => observer.observe(t));
})();

/* ---------- Animated stat counters ---------- */
(() => {
  const stats = document.querySelectorAll(".stat__value");

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    if (prefersReducedMotion) { el.textContent = target; return; }
    const duration = 1200;
    const start = performance.now();
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  stats.forEach((s) => observer.observe(s));
})();

/* ---------- Mobile nav ---------- */
(() => {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();

/* ---------- Project photo galleries ----------
   To add photos: drop image files into the images/ folder, then list
   them here. Example:
     "beetleweight": [
       { src: "images/beetleweight-cad.jpg", caption: "Weapon assembly CAD" },
       { src: "images/beetleweight-v1.jpg", caption: "First prototype" },
     ],
*/
const galleries = {
  "robotic-foot": [],
  "beetleweight": [],
  "sunglow": [],
  "lockbox": [],
  "wind-turbine": [],
  "parcel": [],
};

/* ---------- Lightbox ---------- */
(() => {
  const lightbox = document.getElementById("lightbox");
  const titleEl = document.getElementById("lightbox-title");
  const imgEl = document.getElementById("lightbox-img");
  const emptyEl = document.getElementById("lightbox-empty");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  let images = [];
  let index = 0;
  let lastFocused = null;

  function render() {
    const hasImages = images.length > 0;
    imgEl.hidden = !hasImages;
    emptyEl.hidden = hasImages;
    prevBtn.disabled = !hasImages || images.length < 2;
    nextBtn.disabled = !hasImages || images.length < 2;

    if (hasImages) {
      const { src, caption } = images[index];
      imgEl.src = src;
      imgEl.alt = caption || "";
      captionEl.textContent = caption || "";
      counterEl.textContent = `${index + 1} / ${images.length}`;
    } else {
      imgEl.removeAttribute("src");
      captionEl.textContent = "";
      counterEl.textContent = "";
    }
  }

  function open(card) {
    const key = card.dataset.project;
    images = galleries[key] || [];
    index = 0;
    titleEl.textContent = card.querySelector(".project__title").textContent;
    lastFocused = card;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    render();
    lightbox.querySelector(".lightbox__close").focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function step(dir) {
    if (images.length < 2) return;
    index = (index + dir + images.length) % images.length;
    render();
  }

  document.querySelectorAll(".project[data-project]").forEach((card) => {
    card.addEventListener("click", () => open(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(card);
      }
    });

    // hover hint
    const hint = document.createElement("p");
    hint.className = "project__view";
    hint.textContent = "▸ View Photos";
    card.appendChild(hint);
  });

  lightbox.querySelectorAll("[data-close]").forEach((el) =>
    el.addEventListener("click", close)
  );
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
})();

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
