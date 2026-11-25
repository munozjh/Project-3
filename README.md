# 🛡️ Jacklin Munoz — Personal Portfolio

A modern, responsive single-page portfolio web application built with **React** and **Vite**, designed with a dark cybersecurity-inspired UI to showcase experience across **IT Technical Support, Network & Cybersecurity**, and **AI & Full-Stack Software Development**, and deployed on **GitHub Pages** and **Netlify**.

## 🔗 Live Links

- **GitHub Pages:** https://munozjh.github.io/Project-3/
- **Netlify:** https://project3portafolio.netlify.app/
- **GitHub Repository:** https://github.com/munozjh/Project-3

## ✨ Features

- **Modular Component Architecture:** Parent-child React component hierarchy separating layout, sections (`Portfolio`, `About`, `Experience`, `Contact`), reusable cards, and footer.
- **Fixed Cybersecurity Sidebar:** Dark-themed sidebar with custom background imagery (`seguridad-appgate.jpg`), profile summary, contact details, location, and section navigation.
- **Downloadable CV (`CV.pdf`):** Direct CV download button in the sidebar served from the `public/` directory.
- **Interactive Project Filtering:** Dynamic category filters (`ALL`, `IT & Security`, `Software Dev`, `Web & UI`) managed via React state in `App.jsx`.
- **Centralized Data Model:** Content organized in `src/data/portfolioData.js` to keep profile info, skills, projects, work experience, and education/certifications decoupled from UI components.
- **Responsive Design:** Adapts cleanly across desktop, tablet, and mobile viewports using custom CSS, Flexbox, Grid, and media queries.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool & Dev Server:** Vite
- **Styling:** Custom CSS3 (CSS Variables, Flexbox, Grid, Responsive Media Queries)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (`gh-pages`) & Netlify

---

## 📁 Project Structure

```text
Project-3/
├── public/
│   └── CV.pdf       # Downloadable CV PDF file
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx            # Child of App (navigation, profile & CV download)
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
└── vite.config.js                 # Vite configuration
```

---

## 🚀 Getting Started

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
   Open `http://localhost:5173` in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles the application for production into the `dist/` folder. |
| `npm run preview` | Locally previews the production build generated in `dist/`. |
| `npm run lint` | Runs ESLint across the codebase to check code quality and syntax rules. |
| `npm run deploy` | Builds the production bundle and publishes `dist/` to the `gh-pages` branch. |

---

## 🌐 Deployment

### Netlify
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base path (`vite.config.js`):** `./` (recommended for root deployment on Netlify)

### GitHub Pages
1. Set `base: '/Project-3/'` in `vite.config.js` when deploying to GitHub Pages.
2. Run `npm run deploy` to build and publish to the `gh-pages` branch.
3. In **Settings → Pages** on GitHub, ensure the source branch is set to **`gh-pages`** (`/ (root)`).

---

## 👩‍💻 Author

**Jacklin Munoz**  
 Location: Karlskrona, Sweden  