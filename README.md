# N7 Banking Platform

A modern, highly responsive, and interactive landing page for the N7 Digital Banking Platform. Built with a focus on clean architecture, reusability, and scalable modular design.

## 🚀 Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with global CSS variable tokens)
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom PNG Assets

## 📁 Project Architecture

The project is structured following enterprise-level React best practices, strictly separating layout from reusable UI components and static data.

```text
src/
├── assets/             # Static assets like images and custom icons
├── components/         # Highly reusable, small-scale components
│   ├── layout/         # Layout components (Navbar, Footer, TrustedByLogos)
│   └── ui/             # Generic UI elements (PrimaryButton, SecondaryButton)
├── data/               # Centralized mock data and content (sections-data.ts)
├── hooks/              # Reusable custom React hooks (useCarousel, useScrollState)
├── sections/           # Large, page-specific layout blocks (Header, Features, etc.)
├── App.tsx             # Main application entry orchestrating all sections
├── index.css           # Global CSS, Tailwind directives, and design system tokens
└── main.tsx            # React DOM rendering
```

### Architecture Breakdown:
- **`sections/`**: Contains the major page-level blocks (e.g., Dashboard, Features, Header). These sections act as the structural "glue" that compose the page by bringing together smaller components.
- **`components/`**: Houses the highly reusable pieces of the UI, divided into distinct layers:
  - **`ui/`**: Core reusable elements like standard buttons and interactive primitives.
  - **`layout/`**: Structural elements used across the app, such as the Navbar, Marquee Banner, and Footer.
- **`data/`**: Centralizes all mock data (e.g., `sections-data.ts`). This allows text, links, and content to be updated dynamically without altering the React component logic.
- **`hooks/`**: Contains reusable custom React hooks (e.g., `useCarousel`, `useScrollState`) that abstract complex logic away from the UI rendering layer.
- **`types/`**: The dedicated home for TypeScript interfaces and type definitions, ensuring type safety without cluttering executable code.
- **`index.css` & Tailwind**: Tailwind CSS drives utility-first styling, while `index.css` acts as the global design system root. It defines essential CSS variables (like `primary-color`, `bg-dark`) and custom media queries used globally across the app.
- **`assets/`**: The storage hub for all static images, branding, and custom icons.

## 💻 Getting Started

First, ensure you have [Node.js](https://nodejs.org/) installed.

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`.*

3. **Build for Production:**
   ```bash
   npm run build
   ```
   *This compiles the TypeScript and generates the optimized bundle via Vite.*

## ✨ Features
- Fully responsive design (Mobile, Tablet, Desktop)
- Complex grid and flexbox layouts mapped perfectly to Figma designs
- High-performance micro-animations using Framer Motion
- Dark-mode optimized aesthetic with glowing drop-shadows and gradients
