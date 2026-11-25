# Personal Portfolio — Jacklin Munoz

A modern, modular, and responsive single-page portfolio web application built with **React** and **Vite**, designed to showcase professional experience across **IT Technical Support, Network & Cybersecurity**, and **AI & Software Development**.

**Live Demo:** [https://munozjh.github.io/Project-3/](https://munozjh.github.io/Project-3/)

---

## Overview

This project serves as an interactive digital portfolio highlighting over 12 years of enterprise telecommunications and network security engineering alongside software development projects in **C#/.NET, Python, JavaScript, and React**.

### Key Features

- **Modular Component Architecture:** Clean parent-child component hierarchy separating layout, sections (`Portfolio`, `About`, `Experience`, `Contact`), reusable cards, and footer.
- **Fixed Sidebar Navigation:** Dark-themed sidebar featuring custom cybersecurity background imagery, profile summary, availability badge, direct section links, and email contact.
- **Interactive Project Filtering:** Dynamic category filters (`ALL`, `IT & Security`, `Software Dev`, `Web & UI`) managed via React state in `App.jsx`.
- **Data-Driven Content:** Centralized data model in `src/data/portfolioData.js`, keeping profile details, skills, project cards, work history, and education/certifications decoupled from UI components.
- **Responsive Design:** Adapts cleanly across desktop, tablet, and mobile viewports using modern CSS Grid, Flexbox, and custom media queries.
- **GitHub Pages Ready:** Configured with Vite's `base` path and `gh-pages` deployment scripts.

---

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool & Dev Server:** Vite
- **Styling:** Custom CSS3 (CSS Variables, Flexbox, Grid, Responsive Media Queries)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (`gh-pages`)

---

## Project Structure

```text
Project-3/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx            # Child of App
│   │   ├── PortfolioSection.jsx   # Child of App
│   │   ├── ProjectCard.jsx        # Child of PortfolioSection (Grandchild of App)
│   │   ├── AboutSection.jsx       # Child of App
│   │   ├── SkillGroupCard.jsx     # Child of AboutSection (Grandchild of App)
│   │   ├── ExperienceSection.jsx  # Child of App
│   │   ├── TimelineCard.jsx       # Child of ExperienceSection (Grandchild of App)
│   │   ├── ContactSection.jsx     # Child of App
│   │   └── Footer.jsx             # Child of App
│   ├── data/
│   │   └── portfolioData.js       # Centralized portfolio data
│   ├── images/
│   │   └── seguridad-appgate.jpg  # Sidebar background image
│   ├── App.jsx                    # Parent Component (holds state & handlers)
│   ├── App.css                    # Global styles, theme variables & responsive rules
│   └── main.jsx                   # React DOM entry point
├── index.html                     # HTML root template
├── package.json                   # Dependencies and npm scripts
└── vite.config.js                 # Vite configuration with GitHub Pages base path
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (included with Node.js)

### Local Installation & Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/munozjh/Project-3.git](https://github.com/munozjh/Project-3.git)
   cd Project-3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles the application for production into the `dist/` folder. |
| `npm run preview` | Locally previews the production build generated in `dist/`. |
| `npm run lint` | Runs ESLint across the codebase to check code quality and syntax rules. |
| `npm run deploy` | Builds the production bundle and publishes `dist/` to the `gh-pages` branch. |

---

## Deployment to GitHub Pages

1. Confirm `base` in `vite.config.js` matches your repository name:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Project-3/',
   })
   ```
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
3. In your GitHub repository, go to **Settings → Pages** and verify the source branch is set to **`gh-pages`** (`/ (root)`).

---

## Author

**Jacklin Munoz**  
Location: Karlskrona, Sweden  
