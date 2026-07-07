# Project photos

Drop your project photos in this folder (JPG or PNG, ideally under ~500 KB each so the site stays fast).

Then open `js/main.js`, find the `galleries` object near the bottom, and list each photo under its project:

```js
"beetleweight": [
  { src: "images/beetleweight-cad.jpg", caption: "Weapon assembly CAD" },
  { src: "images/beetleweight-v1.jpg", caption: "First prototype after testing" },
],
```

Project keys: `robotic-foot`, `beetleweight`, `sunglow`, `lockbox`, `wind-turbine`, `parcel`.

Until a project has photos listed, clicking its card shows a "Photos coming soon" message.
