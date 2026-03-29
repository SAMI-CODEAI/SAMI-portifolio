# 🖥️ SAMI-CODEAI — Terminal Portfolio OS

> A retro-terminal-themed developer portfolio built as an interactive desktop OS simulation. Features a boot sequence, draggable windows, a matrix rain background, and CRT scanline aesthetics — all running in the browser.

---

## 🌐 Live Demo

Deployed via **GitHub Pages**: [sami-codeai.github.io/SAMI-portifolio](https://sami-codeai.github.io/SAMI-portifolio)

---

## ✨ Features

| Feature | Description |
|---|---|
| **Boot Sequence** | Simulates a terminal OS startup with staggered text animations and a loading bar |
| **Desktop Environment** | A persistent "MainWindow" hub and multiple floating, draggable TabWindows |
| **Draggable Windows** | Each section opens as an independently movable, z-index-managed floating window |
| **Smart Window Placement** | Auto-finds empty screen space for new windows to prevent overlap |
| **Matrix Rain Background** | Subtle CSS-animated matrix rain for ambience |
| **CRT Scanline Overlay** | Retro CRT monitor effect rendered via pure CSS |
| **Dark Terminal Aesthetic** | Consistent dark theme using the `Fira Code` monospace font and a custom green palette |
| **Sections / Tabs** | Projects, About, Experience, Research, Contact, Resume, and Side Quests |
| **Responsive Design** | Adapts layout for smaller screen breakpoints |
| **GitHub Pages Hosting** | Static build deployed with `.nojekyll` for clean routing |

---

## 🏗️ Project Architecture

```
sami-codeai-my-portfolio/
├── public/              # Static assets (favicon, manifest, etc.)
├── src/
│   ├── App.tsx          # Root: manages BootSequence → Desktop transition
│   ├── index.tsx        # React DOM entry point
│   ├── index.css        # Global design system (CSS variables, terminal classes, animations)
│   ├── assets/          # Images and static media
│   ├── types/           # Shared TypeScript type definitions
│   └── components/
│       ├── BootSequence.tsx     # Animated terminal startup screen (auto-dismisses after 4s)
│       ├── Desktop.tsx          # Core orchestrator: manages open tabs, z-indices, and window placement
│       ├── MainWindow.tsx       # Central hub displayed on startup; renders tab-launch buttons
│       ├── TabWindow.tsx        # Generic draggable floating window (drag-to-move, close button, z-index)
│       ├── TabButton.tsx        # Styled button to launch a specific tab from MainWindow
│       ├── HeaderBar.tsx        # Top status bar
│       ├── ThemeToggle.tsx      # Light/dark mode toggle
│       ├── Typewriter.tsx       # Animated typewriter text effect component
│       ├── ProjectsTab.tsx      # Project showcase cards with tags
│       ├── AboutTab.tsx         # Bio and personal summary
│       ├── ExperienceTab.tsx    # Work and internship history
│       ├── ResearchTab.tsx      # Academic research and publications
│       ├── SideQuestsTab.tsx    # Hobbies, side projects, and extracurriculars
│       ├── ContactTab.tsx       # Social links and contact information
│       ├── Resume.tsx           # Embedded resume / PDF viewer
│       ├── ProjectCard.tsx      # Reusable project card sub-component
│       ├── ShortcutHint.tsx     # Keyboard shortcut hint overlay
│       └── Footer.tsx           # Footer bar
├── tailwind.config.js   # Custom Tailwind theme (extended green palette, Fira Mono font)
├── postcss.config.js    # PostCSS with Autoprefixer
├── tsconfig.json        # TypeScript compiler configuration
└── package.json         # Dependencies and build scripts
```

### Component Interaction Flow

```
App.tsx
  └── [4s timer] BootSequence.tsx  →  Desktop.tsx
                                          ├── MainWindow.tsx  (fixed center)
                                          │     └── TabButton[]  →  openTab()
                                          └── TabWindow[]  (draggable, dynamic)
                                                └── [one of] ProjectsTab | AboutTab |
                                                            ExperienceTab | ResearchTab |
                                                            ContactTab | Resume | SideQuestsTab
```

---

## 🛠️ Tech Stack

### Core Framework

| Technology | Version | Role |
|---|---|---|
| **React** | `^18.2.0` | UI component library and rendering engine |
| **TypeScript** | `4.9.5` | Static typing for all components and props |
| **React DOM** | `^18.2.0` | Browser-side DOM rendering |

### Styling

| Technology | Version | Role |
|---|---|---|
| **Tailwind CSS** | `^3.4.18` | Utility-first CSS framework for layout and spacing |
| **PostCSS** | `^8.5.x` | CSS transformation pipeline |
| **Autoprefixer** | `^10.4.x` | Vendor prefix injection for cross-browser compatibility |
| **Vanilla CSS** (`index.css`) | — | Custom terminal design system, animations (boot lines, matrix rain, CRT scanline), scrollbar styling |
| **Fira Code** (Google Fonts) | — | Monospace font for the entire terminal aesthetic |

### Icons & UI Libraries

| Library | Version | Role |
|---|---|---|
| **Font Awesome** (`@fortawesome/react-fontawesome`) | `^3.1.0` | Icon components rendered as inline SVGs |
| **@fortawesome/free-solid-svg-icons** | `^7.1.0` | Solid icon pack |
| **@fortawesome/free-brands-svg-icons** | `^7.1.0` | Brand/social icon pack |
| **lucide-react** | `^0.562.0` | Additional modern SVG icon set |
| **react-icons** | `^5.5.0` | Multi-library icon aggregator |

### Build Tooling

| Tool | Version | Role |
|---|---|---|
| **Create React App** (`react-scripts`) | `^5.0.1` | Zero-config Webpack-based build pipeline |
| **webpack** (bundled in CRA) | — | Module bundler |
| **Babel** (bundled in CRA) | — | TypeScript & JSX transpilation |
| **css-loader** | `^7.0.0` | Webpack CSS module loader |
| **style-loader** | `^3.3.3` | Injects CSS into the DOM at runtime |

### Performance & Analytics

| Tool | Version | Role |
|---|---|---|
| **web-vitals** | `^5.1.0` | Core Web Vitals (LCP, FID, CLS) instrumentation |

### Deployment

| Tool | Role |
|---|---|
| **GitHub Pages** | Free static site hosting |
| **`.nojekyll`** | Prevents Jekyll from interfering with CRA's `build/` output |
| **`npm run build`** | Creates an optimized static production bundle in `build/` |

---

## 🎨 Design System

The portfolio uses a carefully crafted terminal/hacker theme:

- **Background**: Near-black `#0a0a0a` / `#0f0f0f`
- **Primary Text**: Muted green `#6b7b6b` (`--main-color`)
- **Highlight Text**: Soft green `#a8b5a8` (`--muted-color`)
- **Borders**: Dark gray `#2a2a2a`
- **Font**: `Fira Code` → monospace weight variants (300–700)
- **Custom Tailwind Palette**: Extended `green-100` through `green-900` for component-level utility classes

### CSS Animations

| Class | Effect |
|---|---|
| `.matrix-rain` | Cascading character rain effect on the background |
| `.scanline` | Horizontal CRT scan line sweep |
| `.crt-overlay` | Vignette + screen curvature impression |
| `.typing-effect-short` | Staged character-by-character text reveal |
| `.loading-bar` | Horizontal fill animation for the boot progress bar |
| `.boot-line:nth-child(n)` | Staggered `fadeIn` animations per boot line (0.3s intervals) |
| `fadeIn`, `slideDown` | General-purpose keyframe animations for tab content |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16.x
- **npm** ≥ 8.x

### Installation

```bash
# Clone the repository
git clone https://github.com/sami-codeai/SAMI-portifolio.git

# Navigate into the project
cd SAMI-portifolio/sami-codeai-my-portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000) with hot-module reloading.

### Production Build

```bash
npm run build
```

Outputs an optimized static bundle to `build/`. The `prebuild` script automatically sets correct execute permissions on `node_modules/.bin` for cross-platform compatibility.

### Running Tests

```bash
npm test
```

Launches the CRA test runner in interactive watch mode.

---

## 📦 Key Design Decisions

### Why a Desktop OS Metaphor?
The windowed desktop metaphor creates a memorable, interactive experience that stands out from a standard scrollable portfolio. Each "app" (tab) is self-contained and openable on demand, mimicking a real OS workflow.

### Why TypeScript?
All component props and state are strictly typed. The `TabType` union type (`'projects' | 'about' | 'experience' | ...`) enforces type safety across the window management system in `Desktop.tsx`.

### Why Tailwind + Custom CSS?
Tailwind handles responsive layout and spacing utilities. The terminal-specific design primitives (`.terminal-container`, `.scanline`, `.crt-overlay`, `.matrix-rain`) require highly custom CSS that is cleaner to write in a dedicated stylesheet than with utility classes alone.

### Window Management (No External Library)
Drag-and-drop window positioning is implemented from scratch in `TabWindow.tsx` using `mousedown`/`mousemove`/`mouseup` events and `useRef`/`useState`. Z-index stacking is managed in `Desktop.tsx` via an incrementing counter, bringing the last clicked window to front.

---

## 📁 Featured Projects Showcased

| Project | Key Technologies |
|---|---|
| **ResumeAgent** | Python, Gradio, PyPDF, Hugging Face |
| **LearnSphere** | Python, OpenAI API, FAISS, Streamlit, RAG |
| **AnimeSense** | TensorFlow/Keras, Flask, Docker, GCP, DVC |
| **OptiStay** | XGBoost, Flask, GCP, Jenkins, CI/CD |
| **Agentic Engineering Team** | Python, CrewAI, Gradio, Docker |
| **Automated Code Review Agent** | LangGraph, Gemini, Ollama, Bandit |
| **Controlled AI Resume Personalization** | TypeScript, Next.js, FastAPI, OpenAI |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ⚡ by <strong>Sami</strong> — <code>Booting Sami OS v2.0...</code></sub>
</div>
