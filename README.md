# onepiece010938.github.io

Personal user-site hosting **landing pages, privacy policies, terms of service**,
and the root-level `app-ads.txt` shared across all my published apps.

Served at <https://onepiece010938.github.io>.

## Layout

```
.
├── index.html            ← root landing (https://onepiece010938.github.io/)
├── app-ads.txt           ← AdMob declaration (root, shared by all apps)
├── assets/style.css      ← shared CSS
└── wattrent/
    ├── index.html        ← https://onepiece010938.github.io/wattrent/
    ├── privacy/
    │   └── index.html    ← https://onepiece010938.github.io/wattrent/privacy/
    └── terms/
        └── index.html    ← https://onepiece010938.github.io/wattrent/terms/
```

Plain static HTML + one shared stylesheet — no Jekyll, no build step.
`.nojekyll` is present so GitHub Pages skips Jekyll processing entirely.

## Adding a new app

1. Create a folder named after the app at the repo root (e.g. `myapp/`).
2. Add `index.html`, `privacy/index.html`, `terms/index.html` based on the
   `wattrent/` structure.
3. Add a row to the **App list** on the root `index.html`.
4. If the app uses AdMob and has its own publisher account, append a new
   line to `app-ads.txt` (one line per AdMob publisher).
5. Commit and push — Pages auto-deploys from `main` within ~60 seconds.

## Maintainer

Yu-Chuan (Raymond) Chen — <onepiece010938@gmail.com>
