# kylerjeong.github.io

Personal engineering portfolio of **Kyler Jeong**, mechanical engineering student at UC Berkeley.

**Live site: [kylerjeong.github.io](https://kylerjeong.github.io)**

Built with vanilla HTML/CSS/JS. No frameworks, no build step. Hosted on GitHub Pages.

## Structure

```
├── index.html      # All page content: about, skills, projects, experience, contact
├── css/style.css   # Theme (colors are CSS variables at the top of the file)
├── js/main.js      # Typing effect, scroll reveals, counters, mobile nav, gallery lightbox
├── images/         # Web-optimized project photos and videos
├── resume.pdf      # Linked from the nav
└── favicon.svg     # Browser tab icon
```

## Making updates

1. Edit the files (most content lives in `index.html`)
2. Commit and push:
   ```
   git add -A
   git commit -m "Describe the change"
   git push
   ```
3. GitHub Pages redeploys automatically in about a minute. Hard-refresh (Ctrl+F5) if the browser shows the old version.

### Adding project photos or videos

Each project card opens a gallery lightbox. Drop web-sized files into `images/` and list them in the `galleries` object at the bottom of `js/main.js`. Images, local video files, and YouTube links all work; see [images/README.md](images/README.md) for the format. Full-size originals stay in `originals/`, which is not committed.

### Updating the resume

Replace `resume.pdf` with the new version, then commit and push.
