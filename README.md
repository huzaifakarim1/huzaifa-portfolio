<img src="public/favicon.svg" alt="Portfolio favicon" width="64" align="left" />

# Muhammad Huzaifa Karim — Portfolio

<br clear="left"/>

![Portfolio](https://img.shields.io/badge/Portfolio-3D%20%26%20Interactive-839CB5?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React%20Three%20Fiber-000000?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge&logo=maildotru&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

🔗 **Live Demo:** Coming Soon!

---

## 📖 Overview

This is my personal **3D, interactive developer portfolio** — built with
**React 19**, **Vite**, **Three.js / React Three Fiber**, and **GSAP**, styled
with **Tailwind CSS v4**. It's designed to show real, verifiable work instead
of filler content: real projects, real certifications with verification
links, and real leadership experience — not stock testimonials or fabricated
stats.

Key highlights include:

- **3D hero & contact scenes** built with React Three Fiber, with lazy-loaded
  canvases so the 3D work stays smooth without tanking load time.
- **Filterable, paginated projects showcase** with side-arrow navigation (no
  scrolling required to browse).
- **Certifications marquee** — custom, theme-matched SVG logos for every
  issuer (Meta, Google, IBM, AWS/Udacity, Cisco, DataCamp, Harvard, University
  of Colorado, DigiSkills.pk), each linking to a real verification page.
- **Leadership & Achievements section** — real university leadership
  experience in place of generic client testimonials.
- **Working contact form** via EmailJS with inline send/fail feedback.
- **GSAP scroll animations** throughout, and a fully responsive, mobile-first
  layout.

---

## 📸 Screenshots & Preview

> Put your images and GIF in a **`docs/screenshots/`** folder at the repo
> root (create it), then commit them — GitHub renders these relative paths.
> Suggested names are used below; rename the files or the links to match.
> Record the preview GIF with ScreenToGif / Kap / LICEcap while scrolling
> through the site.

### Hero & Projects
<!-- ![Hero section](docs/screenshots/hero.png) -->
<!-- ![Projects showcase](docs/screenshots/projects.png) -->

### Certifications & Experience
<!-- ![Certifications marquee](docs/screenshots/certifications.png) -->
<!-- ![Experience timeline](docs/screenshots/experience.png) -->

### Leadership & Contact
<!-- ![Leadership section](docs/screenshots/leadership.png) -->
<!-- ![Contact section](docs/screenshots/contact.png) -->

### Preview GIF
<!-- ![Full-page scroll preview](docs/screenshots/preview.gif) -->

> Uncomment each line (remove the `<!--` and `-->`) once the matching file
> exists. Keep images ≤ ~1–2 MB and the GIF ≤ ~10 MB so the README stays fast.

---

## 🏗️ Features

- **Hero** — animated 3D scene with a rotating word slider and CTA.
- **Projects** — category filters, 3 projects per page, side-arrow pagination
  on desktop and a top control bar on mobile (no scroll-to-navigate).
- **Certifications** — auto-scrolling logo marquee; clicking an issuer opens a
  panel listing every credential earned from them, each with a **Verify**
  link to the real credential page.
- **Experience** — scroll-driven timeline with real roles and a **tech-stack**
  pill list per role (no fabricated ratings or quotes).
- **Leadership & Achievements** — a dedicated section for real leadership
  experience, with an interactive glow-border photo card.
- **Contact** — 3D contact scene + EmailJS-powered form with **Message
  Sent / Failed** inline feedback.
- **Resume download** — pick between Full-Stack and AI/ML resume variants
  from the footer.
- **SEO-ready** — Open Graph / Twitter meta tags and a custom SVG favicon.

---

## 💻 Technologies Used

### **Core**

- [**React 19**](https://react.dev/) — UI library
- [**Vite 7**](https://vitejs.dev/) — build tool & dev server
- [**Tailwind CSS 4**](https://tailwindcss.com/) — utility-first styling

### **3D & Animation**

- [**Three.js**](https://threejs.org/) — WebGL 3D engine
- [**React Three Fiber**](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [**@react-three/drei**](https://github.com/pmndrs/drei) — R3F helpers (loaders, controls, environment)
- [**@react-three/postprocessing**](https://github.com/pmndrs/react-postprocessing) — post-processing effects
- [**GSAP**](https://gsap.com/) + [**@gsap/react**](https://gsap.com/resources/React/) — scroll-triggered animation

### **Utilities**

- [**EmailJS**](https://www.emailjs.com/) — contact form email delivery (no backend needed)
- [**react-countup**](https://github.com/glennreyes/react-countup) — animated stat counters
- [**react-responsive**](https://github.com/yocontra/react-responsive) — responsive breakpoint hooks

### **Tooling**

- [**ESLint 9**](https://eslint.org/) — linting
- [**Vercel**](https://vercel.com/) — hosting & deployment

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+**
- **npm**
- An **EmailJS** account (for the contact form to send real emails)

### 1. Clone

```bash
git clone https://github.com/huzaifakarim1/huzaifa-portfolio.git
cd huzaifa-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run in development

```bash
npm run dev
```

Open **http://localhost:5173**.

### 5. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Repository Structure

```
├── public/              Static assets — images, logos, resumes, 3D models
│   ├── images/          Icons, project screenshots, certification logos
│   ├── models/          .glb 3D models
│   └── resume/          Downloadable resume PDFs
├── src/
│   ├── components/      Reusable UI + 3D model components
│   ├── sections/        Page sections (Hero, Projects, Certifications, ...)
│   └── constants/       Site content — projects, certifications, nav links
└── index.html           SEO meta tags & favicon
```

---

## 🔧 Customizing the Content

Almost everything on the site is data-driven from **`src/constants/index.js`**:

- `projects` / `projectCategories` — the projects grid & filters
- `certifications` — issuer logos, credential titles, verify links
- `leadership` — the Leadership & Achievements section
- `expCards` — work experience & tech stack
- `socialImgs` / `navLinks` — footer socials & navbar links

Resume PDFs go in `public/resume/`, and the leadership photo goes in
`public/images/leadership/` — see the `README.txt` files in those folders for
exact paths and naming.

---

## 📜 License

This project is licensed under the **MIT License** — see the `LICENSE` file
for details.

---

## ✍️ Author

**Muhammad Huzaifa Karim**
[GitHub](https://github.com/huzaifakarim1) · [LinkedIn](http://www.linkedin.com/in/muhammad-huzaifa-karim-590k) · karimhuzaifa590@gmail.com

---

## 🌟 Show Your Support

If you found this portfolio helpful or inspiring, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features

---

© 2026 Muhammad Huzaifa Karim
