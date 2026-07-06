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

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
