# Project: Ajuste de cuentas (ajuste-de-cuentas-web)

## Architecture
- SPA con Vue Router 4.4+
- `<router-view />` en `App.vue` como entry point principal

## Core Commands
- `npm run dev` — start Vite dev server
- `npm run build` — production build with Vite
- `npm run lint` — ESLint fix for Vue/JS files
- `npm run preview` — preview production build locally

## Project Structure
```
src/
├── App.vue                # Root component (router-view)
├── main.js                # App bootstrap, PrimeVue/Aura theme setup, router injection
├── assets/
│   ├── styles.scss        # Global Sass styles
│   └── tailwind.css       # Tailwind entry point
├── components/            # Reusable UI components (BlockViewer.vue, FloatingConfigurator.vue)
├── layout/                # Layout components
├── router/                # Vue Router index.js config
└── views/Dashboard.vue    # Main dashboard view
```

## Configuration Quirks
- **ESLint**: Disables multi-word component name and reserved name restrictions. Enforces script/template/style tag order.
- **Prettier (CRLF expected)**: Tabs=false, 4-space indent, `trailingComma=none`, `semi=true`, `singleQuote=true`, `printWidth=250`
- **Vite**: Uses `optimizeDeps: { noDiscovery: true }` for faster dependency resolution; aliased `@` to `./src`

## Theme & Styling
- PrimeVue Aura theme (configured in main.js)
- Dark mode selector: `.app-dark`
- Tailwind CSS 4.0 + Sass hybrid approach

## Tech Stack
- Vue 3.4+ with Composition API (`<script setup>`)
- Vite 5.x
- PrimeVue 4.5+
- Tailwind CSS 4.1+
- Vue Router 4.4+
- Chart.js 3.3.2

## Verification Order (if applicable)
1. `npm run lint`
2. `npm run build`
