# Five-Seventeen Studio — Website

Static site. HTML/CSS/JS. Ready for Vercel.

## Structure

```
five-seventeen-web/
├── index.html        ← main page
├── css/
│   └── style.css     ← all styles
├── js/
│   └── main.js       ← scroll behavior, mobile nav
├── public/           ← images, favicons, assets (add here)
├── vercel.json       ← Vercel config (caching, security headers)
└── .gitignore
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import repo
3. Framework Preset: **Other** (no build step needed)
4. Root Directory: `/` (default)
5. Click Deploy

## Connect to five-seventeen.com

In Vercel dashboard → Project → Settings → Domains → Add `five-seventeen.com`

Then update your DNS (at your registrar):
- Type: `A`, Name: `@`, Value: `76.76.21.21`
- Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

## Add contact form (when ready)

1. Create account at formspree.io
2. Create a form → copy the endpoint URL (e.g. `https://formspree.io/f/xyzabc`)
3. In `index.html`, update the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the `id="contact-form"` attribute (not needed with Formspree)

## Add images to Work section

Replace the color blocks in `index.html` with:
```html
<div class="wcard c1">
  <img class="wcard-bg" src="public/project-01.jpg" alt="Project name">
  ...
</div>
```
Add `object-fit: cover; object-position: center;` to `.wcard-bg` in CSS.
