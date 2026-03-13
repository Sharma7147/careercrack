# CareerCrack

CareerCrack is a **"coming soon" landing page** for a placement-preparation platform built with **React 19** and **Vite 7**. It showcases the product's core features, displays a branded hero section with entrance animations, and links out to social media — all wrapped in a responsive dark-purple theme.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [File-by-File Explanation](#file-by-file-explanation)
   - [index.html](#indexhtml)
   - [src/main.jsx](#srcmainjsx)
   - [src/App.jsx](#srcappjsx)
   - [src/App.css](#srcappcss)
   - [src/index.css](#srcindexcss)
   - [vite.config.js](#viteconfigjs)
   - [eslint.config.js](#eslintconfigjs)
   - [package.json](#packagejson)
4. [Key Concepts](#key-concepts)
5. [Getting Started](#getting-started)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev/) | UI component library |
| [Vite 7](https://vite.dev/) | Lightning-fast dev server & build tool |
| [react-icons](https://react-icons.github.io/react-icons/) | SVG icon pack (Font Awesome subset used) |
| [ESLint 9](https://eslint.org/) | Code quality & style linting |

---

## Project Structure

```
careercrack/
├── public/
│   └── vite.svg          # Favicon shown in the browser tab
├── src/
│   ├── assets/
│   │   └── react.svg     # React logo asset (not rendered in current UI)
│   ├── App.css           # All component-level styles for the landing page
│   ├── App.jsx           # Root React component — the entire UI lives here
│   ├── index.css         # Global baseline styles (reset, typography, links)
│   └── main.jsx          # Application entry point — mounts React into the DOM
├── .gitignore            # Files/folders excluded from version control
├── eslint.config.js      # ESLint flat-config rules
├── index.html            # HTML shell — the single page loaded by the browser
├── package.json          # Project metadata, scripts, and dependencies
└── vite.config.js        # Vite bundler configuration
```

---

## File-by-File Explanation

### `index.html`

The single HTML file served to the browser. Key points:

- Sets `charset`, `viewport`, and the page `<title>` (`CareerCrack`).
- Contains a single `<div id="root">` — the mount point where React injects the entire UI.
- Loads `/src/main.jsx` as an ES-module script (`type="module"`), which is the entry point Vite processes.
- Links `/public/vite.svg` as the browser tab favicon.

---

### `src/main.jsx`

The application entry point. It:

1. Imports `StrictMode` from React — a development helper that highlights potential problems (double-renders components in development to surface side effects).
2. Imports `createRoot` from `react-dom/client` — the React 18+ API for concurrent rendering.
3. Mounts the `<App />` component inside `StrictMode` into the `#root` div defined in `index.html`.
4. Imports `index.css` so global baseline styles are applied before any component renders.

---

### `src/App.jsx`

The sole React component — the entire landing page UI. It is broken into four sections:

#### State & Effect

```jsx
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setIsVisible(true);   // fires once on mount
}, []);
```

`isVisible` starts as `false` and is immediately set to `true` when the component mounts. This single boolean drives CSS entrance animations: elements begin invisible/offset and transition to their final state when the `animate` class is added.

#### Header

A sticky, blurred navigation bar (stays at the top while scrolling) containing the **CareerCrack** logo composed of the `<FaCode />` icon and text within a `<span>`.

#### Hero Section (`<main>` → `<section className="hero">`)

Full-viewport-height section with three animated children:

| Element | Description |
|---------|-------------|
| `.coming-soon` badge | Pill-shaped gradient badge with a pulsing glow animation |
| `.hero-title` | Gradient text heading — *"Empowering Your Placement Journey"* |
| `.hero-description` | Muted subtitle describing the platform |

All three receive the `animate` class once `isVisible` is `true`, triggering CSS `opacity` and `translateY` transitions.

#### Features Section (`<section className="features">`)

A responsive CSS Grid of four **feature cards**, each rendered from an inline array using `.map()`:

| Feature | Icon | Description |
|---------|------|-------------|
| Smart Aptitude Practice | `FaBrain` | Adaptive quizzes and detailed solutions |
| Company Insights | `FaBuilding` | Profiles, interview experiences, hiring trends |
| Mock Interviews | `FaMicrophone` | AI-powered simulations with feedback |
| Expert-Led Courses | `FaGraduationCap` | Courses covering technical and soft skills |

Cards animate in on mount and lift on hover.

#### Footer

Contains:
- Company name: **Sixora Technologies**
- Social media icon links (Facebook, Twitter, Instagram, LinkedIn via `react-icons`) — currently pointing to `#` placeholder hrefs.
- Copyright notice.

---

### `src/App.css`

All styles for the landing page, organised into sections:

| Section | What it does |
|---------|--------------|
| **CSS Variables (`:root`)** | Defines the design token palette: `--primary-purple`, `--secondary-purple`, `--dark-bg`, `--card-bg`, `--accent-blue`, `--text-light`, `--text-muted` |
| **Reset** | Zero-out default margin/padding and apply `box-sizing: border-box` on `*` |
| **Body / `.App`** | Dark purple gradient background, full-height flexbox column layout so the footer is always pinned to the bottom |
| **`.container`** | Centred, max-width `1200px` layout wrapper with horizontal padding |
| **`.header`** | Sticky top bar with a semi-transparent background and `backdrop-filter: blur` for a frosted-glass effect |
| **`.hero`** | Full-viewport-height centred column with `clamp()`-based responsive font sizes |
| **`.coming-soon`** | Gradient pill badge with an infinite `@keyframes pulse` box-shadow animation |
| **`.hero-title` / `.hero-description`** | Start at `opacity: 0` and `translateY(20px)`; transition to visible when `.animate` class is added |
| **`.features-grid`** | `auto-fit` CSS Grid that adapts from 1 to 4 columns depending on viewport width |
| **`.feature-card`** | Dark card with a subtle purple border; animates in on mount; translates upward and gains a glow shadow on hover |
| **`.footer`** | Near-black background, centred column layout; `margin-top: auto` ensures it sticks to the page bottom |

---

### `src/index.css`

Global baseline styles generated by the Vite React template:

- Sets the default font stack, line height, and font weight on `:root`.
- Enables `color-scheme: light dark` for system-level dark/light mode awareness.
- Applies smooth font rendering (`-webkit-font-smoothing`, `-moz-osx-font-smoothing`).
- Styles `<a>` tags (indigo colour, no underline).
- Styles `<button>` elements with a rounded, borderless appearance.
- Provides a `@media (prefers-color-scheme: light)` override for light-mode users.

> **Note:** Because `App.css` re-declares `body` styles with its own gradient background and flex layout, the `body` rules in `index.css` are largely overridden by `App.css`.

---

### `vite.config.js`

Minimal Vite configuration:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- Registers the official `@vitejs/plugin-react` plugin, which enables **Babel-based Fast Refresh** (instant component re-renders during development without losing state) and JSX transformation.

---

### `eslint.config.js`

Uses ESLint's modern **flat config** format (ESLint 9+). It:

- Applies `js.configs.recommended` rules for general JavaScript best practices.
- Enables `eslint-plugin-react-hooks` rules to enforce the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) (e.g., only call hooks at the top level).
- Enables `eslint-plugin-react-refresh` to warn when components are not exported in a way that supports Vite's Hot Module Replacement.
- Targets only `**/*.{js,jsx}` files and sets the browser global environment.

---

### `package.json`

Defines the project metadata and available scripts:

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `vite` | Start the local development server with HMR at `http://localhost:5173` |
| `build` | `vite build` | Bundle the app for production into the `dist/` folder |
| `lint` | `eslint .` | Run ESLint across the entire project |
| `preview` | `vite preview` | Locally preview the production build |

**Runtime dependencies:**

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19 | Core React library |
| `react-dom` | ^19 | React renderer for the browser DOM |
| `react-icons` | ^5 | SVG icon components (Font Awesome, etc.) |

**Dev dependencies** include Vite, the React Vite plugin, ESLint, and TypeScript type definitions for editor autocompletion.

---

## Key Concepts

### Entrance Animations

The pattern used throughout `App.jsx` and `App.css` is:

1. An element starts in a hidden/offset state (CSS: `opacity: 0; transform: translateY(20px)`).
2. When the component mounts, `useEffect` sets `isVisible = true`.
3. The `animate` class is conditionally added via a template literal: `` `hero-title ${isVisible ? 'animate' : ''}` ``.
4. CSS transitions (`transition: opacity 1s ease, transform 1s ease`) animate the element smoothly into view.

This creates a gentle "fade-up" entrance for the hero content and feature cards on first load.

### CSS Design Tokens

All colours are defined as CSS custom properties (variables) in `:root` inside `App.css`. Components reference them via `var(--token-name)`, making it trivial to retheme the entire site by editing a single block.

### Responsive Layout

- The hero font sizes use `clamp(min, preferred, max)` so they scale fluidly between mobile and desktop.
- The features grid uses `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` — it automatically reflows from 1 column on mobile to 4 columns on wide screens.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads automatically when you save a file.

### Build for production

```bash
npm run build
```

The optimised output is written to the `dist/` folder and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

### Preview the production build locally

```bash
npm run preview
```

### Lint the code

```bash
npm run lint
```
