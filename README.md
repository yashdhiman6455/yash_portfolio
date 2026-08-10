# Yash Dhiman — Portfolio

A premium, production-ready personal portfolio for **Yash Dhiman**, PHP Laravel developer
moving toward full-stack / MERN.

Built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion** and **Lucide icons**.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Customizing content

All personal info, links, experience, skills and project data live in **one file**:

```
src/config/site.js
```

Replace the placeholder values there once and every link across the site updates:

| Field | Placeholder to replace |
| --- | --- |
| Site URL | `YOUR_SITE_URL` (canonical, OG, sitemap) |
| Live demos | `YOUR_LIVE_DEMO_URL` (any remaining projects) |
| Project GitHub links | `YOUR_GITHUB_URL` under `projects[].links.github` |

Also replace the placeholder resume with your own PDF at:

```
public/resume/Yash-Resume.pdf
```

Every "Download Resume" link uses the `download="Yash-Dhiman-Resume.pdf"` filename (set `resumeDownloadName` in `src/config/site.js`), and the "View Resume" link opens it in a new tab.

## Contact form

The form validates input and delivers each message straight to WhatsApp via a prefilled
`wa.me` link (`whatsappUrl` in `src/config/site.js`). No backend required.

## Design notes

- Dark-first theme with an optional light mode (persisted in localStorage).
- Semantic color tokens in `src/index.css` — flip once, both themes adapt.
- Animations respect `prefers-reduced-motion`.
- Semantic HTML, focus states, ARIA labels, SEO/OG metadata included.
- Project case-study modal driven by structured data in `src/config/site.js`.
