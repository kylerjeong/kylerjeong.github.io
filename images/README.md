# Project photos & videos

Drop your project photos and short video clips in this folder.

- **Photos**: JPG or PNG, ideally under ~500 KB each so the site stays fast.
- **Videos**: short .mp4 or .webm clips only, and keep them small (under ~10 MB). For longer footage (like full combat matches), upload to YouTube and link it instead — GitHub isn't meant for hosting big video files.

Then open `js/main.js`, find the `galleries` object near the bottom, and list each item under its project:

```js
"beetleweight": [
  { src: "images/beetleweight-cad.jpg", caption: "Weapon assembly CAD" },
  { src: "images/beetleweight-spinup.mp4", caption: "Weapon spin-up test" },
  { src: "https://youtu.be/VIDEO_ID", caption: "First match" },
],
```

Photos, video files, and YouTube links can be mixed in any order. The lightbox figures out which is which automatically.

Project keys: `robotic-foot`, `beetleweight`, `sunglow`, `lockbox`, `wind-turbine`, `parcel`.

Until a project has media listed, clicking its card shows a "Gallery coming soon" message.
