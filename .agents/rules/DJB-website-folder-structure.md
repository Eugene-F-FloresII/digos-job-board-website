# Standard Website Folder Structure

This architecture implements a scalable Next.js (App Router) project structure adhering to your team's established frontend coding standards:

- **TypeScript** as the primary markup and structural layer (`.tsx` / `.ts`).  
- **Tailwind CSS** for layout, responsive design, and styling tokens.  
- **JavaScript** strictly isolated as the backend-to-frontend connection bridge (`connectors/`).  
- **JSON** governing folder-level compiler settings and build pipelines.

---

## 1\. Directory Tree Overview

my-project/

├── .vscode/

│   └── settings.json                  \# Editor and workspace formatting rules

├── public/                            \# Static assets (favicons, public SVGs, robots.txt)

│   ├── fonts/

│   └── images/

├── config/                            \# Build, toolchain, and linting JSON definitions

│   └── build-targets.json             \# Build pipeline targets and environment flags

├── src/

│   ├── app/                           \# Next.js App Router (Routes, Layouts, Server Components)

│   │   ├── (auth)/                    \# Route group: Authentication

│   │   │   ├── login/

│   │   │   │   └── page.tsx

│   │   │   └── layout.tsx

│   │   ├── (dashboard)/               \# Route group: Authenticated dashboard

│   │   │   ├── settings/

│   │   │   │   └── page.tsx

│   │   │   └── page.tsx

│   │   ├── api/                       \# Next.js Server Route Handlers / Webhooks

│   │   │   └── webhooks/

│   │   │       └── route.ts

│   │   ├── error.tsx                  \# Global error boundary

│   │   ├── layout.tsx                 \# Root layout (HTML shell, font imports)

│   │   ├── loading.tsx                \# Root Suspense fallback

│   │   ├── not-found.tsx              \# 404 page handler

│   │   └── page.tsx                   \# Landing / home page

│   │

│   ├── components/                    \# TypeScript Structural UI Layer (.tsx)

│   │   ├── tsconfig.json              \# Folder-level compiler config for UI components

│   │   ├── ui/                        \# Low-level primitive components (buttons, modals, inputs)

│   │   │   ├── Button.tsx

│   │   │   ├── Modal.tsx

│   │   │   └── TextField.tsx

│   │   ├── layout/                    \# Structural layout components (Navbars, Footers, Sidebars)

│   │   │   ├── Header.tsx

│   │   │   └── Footer.tsx

│   │   └── features/                  \# Domain/feature-specific composite components

│   │       ├── auth/

│   │       │   └── LoginForm.tsx

│   │       └── dashboard/

│   │           └── MetricCard.tsx

│   │

│   ├── connectors/                    \# JavaScript Backend-to-Frontend Bridge (.js)

│   │   ├── tsconfig.json              \# Folder-level compiler config for JS connection modules

│   │   ├── apiClient.js               \# Central fetch/HTTP client wrapper and interceptors

│   │   ├── authConnector.js           \# Authentication and session API bridge

│   │   ├── dataSerializer.js          \# Request/response normalization bridge

│   │   └── socketConnector.js         \# WebSocket and real-time backend connection handlers

│   │

│   ├── styles/                        \# Tailwind CSS Layer

│   │   └── globals.css                \# Tailwind directives (@tailwind base, components, utilities)

│   │

│   └── types/                         \# Shared TypeScript Interfaces and Data Schemas (.ts)

│       ├── tsconfig.json              \# Folder-level compiler config for type declarations

│       ├── api.d.ts                   \# Backend response contracts

│       ├── auth.d.ts                  \# User and authentication contracts

│       └── components.d.ts            \# Component prop contracts

│

├── package.json                       \# Root dependencies and script definitions

├── tsconfig.json                      \# Root TypeScript project references orchestrator

├── tsconfig.base.json                 \# Base compiler options shared across folders

├── tailwind.config.ts                 \# Design tokens, themes, breakpoints, and plugins

├── postcss.config.js                  \# PostCSS plugins for Tailwind processing

├── next.config.mjs                    \# Next.js framework configuration

└── README.md

---

## 2\. Layer-by-Layer Responsibilities

### `src/app/` (Next.js Application Architecture)

* Organizes pages and routing following modern Next.js App Router standards.  
* Utilizes route groups `(auth)` and `(dashboard)` to logically separate layouts without modifying URL paths.  
* Keeps Server Components pure for static data fetching and SEO optimization.

### `src/components/` (TypeScript Structural & Markup Layer)

* Every component is authored in TypeScript (`.tsx`), serving as the typed markup standard.  
* Uses folder-level modularity (`ui/`, `layout/`, `features/`).  
* Includes an isolated `tsconfig.json` scoping compilation rules and JSX settings specifically for components.

### `src/connectors/` (JavaScript Bridge Layer)

* Houses pure JavaScript modules (`.js`) dedicated strictly to connecting frontend consumers with backend endpoints.  
* Handles low-level networking, headers, cookies, token injection, and response transformers.  
* Prevents leaking backend transport logic into presentation components.

### `src/styles/` & `tailwind.config.ts` (Tailwind CSS Layer)

* `globals.css` injects Tailwind base styles, component utilities, and CSS variables.  
* `tailwind.config.ts` centralizes brand design tokens (colors, fonts, border radii, media breakpoints).

### JSON Build & Compilation Configuration

* **`tsconfig.json` & `tsconfig.base.json`:** Uses TypeScript Project References (`references: [{ "path": "./src/components" }, ...]`), enabling folder-level compilation boundaries.  
* **Folder-level `tsconfig.json` files:** Set granular compiler flags per directory (e.g., allowing JS compilation in `src/connectors` while enforcing strict JSX in `src/components`).  
* **`config/build-targets.json`:** Manages environment-specific build flags and compiler targets.