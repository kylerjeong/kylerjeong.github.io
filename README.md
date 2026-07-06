# Kyler Jeong — Mechanical Engineering Portfolio

An industrial-themed mechanical engineering portfolio — gunmetal and safety orange, hard machined edges. Built with vanilla HTML/CSS/JS — no frameworks, no build step — so it deploys straight to GitHub Pages.

## Features

- 📐 Clean industrial hero with typed role rotation
- 🗒️ Graph-paper grid background with monochrome gunmetal palette and steel-blue highlights
- 🃏 Steel-bordered project cards, skill chips, and a pinned timeline
- 📱 Fully responsive with a mobile nav
- ♿ Respects `prefers-reduced-motion`

## Structure

```
├── index.html      # All content lives here — edit this to personalize
├── css/style.css   # Theme (colors are CSS variables at the top)
└── js/main.js      # Typing effect, scroll reveals, counters, mobile nav
```

## Personalize

1. **Projects** — edit the `<article class="project">` blocks in `index.html` and point the GitHub/demo links at your real repos.
2. **Skills** — swap out the `<li class="chip">` entries.
3. **Experience** — update the timeline items.
4. **Socials** — replace the `https://github.com/` and LinkedIn placeholder links with your profiles.
5. **Resume** — drop a `resume.pdf` in the root (or delete the Resume nav link).
6. **Colors** — tweak the CSS variables at the top of `css/style.css` (`--accent`, `--accent-2`, etc.).

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / root**.

Naming the repo `<your-username>.github.io` makes the site live at `https://<your-username>.github.io/`. Any other repo name works too — it'll be served at `https://<your-username>.github.io/<repo-name>/`.
