## world-religions

Check out the live preview of this project on https://world-religions.omaression.com/

This project is a Service Project. It is intended as an assignment for my World Religions class.

Feel free to contribute to the project.

### Stack

A deliberately plain **vanilla HTML / CSS / JS** static site — no framework and no build step — kept that way to show the learning curve. Hosted on **Vercel** (previously GitHub Pages).

### Maintenance notes

Because there is no build step, a few things are maintained by hand:

- **Images** live in `imgs/` as a small resized `.webp` (served first) plus a `.jpg`/`.png` fallback, both sized for display. If you add or replace a photo, resize it (≈760px wide for cards, ≈840px for the hero) and export both formats so the `<picture>` markup stays valid.
- **Fonts** are self-hosted in `fonts/` (Poppins, latin subset) and declared with `@font-face` at the top of `styles/styles.css` — no external font request.
- **`sitemap.xml`** is hand-written; update it when you add or remove a page.
- **`vercel.json`** sets caching and security headers (CSP, HSTS, etc.). The CSP is `'self'`-only, so any new external resource must be added there.
- Header/footer are shared partials in `utilities/` and injected at runtime by `scripts.js`.

### Deploy

```bash
vercel            # preview deployment
vercel --prod     # production
```
