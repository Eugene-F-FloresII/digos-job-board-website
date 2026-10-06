# Frontend Coding Standards

Guidelines and task delegation standards for architecting web applications using Next.js, Vue.js, Tailwind CSS, TypeScript, JavaScript, and JSON build configurations.

---

## 1\. Separation of Responsibilities

### TypeScript (Primary Structural and Markup Layer)

* Serves as the primary language for all UI structure, components, and layouts (acting as the typed replacement for traditional HTML markup via TSX/TypeScript).  
* Defines strict types, component interfaces, props, and data schemas across the entire frontend.  
* Every component skeleton, page layout, and template must be written in TypeScript (`.tsx` or `.ts`).

### Next.js (Application and Server Architecture)

* Manages page routing via the App Router (`app/` directory).  
* Handles server-side data fetching, caching, and Server Components (RSC).  
* Optimizes SEO, metadata, OpenGraph tags, and core web vitals.  
* Manages API route handlers, authentication middleware, and server actions.

### Tailwind CSS (Visual Presentation and Styling)

* Controls layout geometry (Flexbox, Grid, container queries, margins, padding).  
* Implements design tokens (colors, typography, shadows, borders) via utility classes.  
* Handles responsive design using standard screen breakpoints (`sm:`, `md:`, `lg:`, `xl:`).  
* Manages element states (`hover:`, `focus:`, `active:`, `disabled:`).  
* Controls theme variations, such as dark mode toggles (`dark:`).

### JavaScript (Bridge and Connection Layer Only)

* Strictly reserved for connecting the frontend and backend.  
* Implements API client connectors, request/response interceptors, and data serialization bridges.  
* Must not be used for UI markup, component rendering, or styling.

### JSON Configuration (Compilation and Build Orchestration)

* Governs compiler and build settings for each folder and package (e.g., `tsconfig.json`, `package.json`, build manifests).  
* Responsible for defining module paths, target outputs, dependencies, and build pipelines per folder.

### Vue.js (Alternative Frontend Component Layer)

* Used when projects specify Vue/Nuxt over React/Next.js for component logic.  
* Manages local reactive state, computed values, and watch effects.  
* Encapsulates template structure, scoped styles, and script setup logic.

---

## 2\. Specific Task Delegation for AI

When instructing an AI to implement website features, divide tasks strictly by layer:

### Tasks Assigned to TypeScript

* **Structural Markup and Component Blueprints:**  
  * Build all layout skeletons and UI components in `.tsx` files.  
  * Replace static HTML with typed JSX elements and semantic tags.  
* **Type Contracts and Interfaces:**  
  * Define explicit prop interfaces for every UI component.  
  * Define schema types for API payloads and data models.

### Tasks Assigned to Next.js

* **Page and Route Setup:**  
  * Define route segments and nested layouts in `app/page.tsx`, `app/layout.tsx`.  
  * Set up dynamic parameters (e.g., `app/products/[id]/page.tsx`).  
* **Data Fetching and Server Rendering:**  
  * Fetch data directly in React Server Components where client interactivity is not needed.  
  * Use Suspense boundaries with fallback loading states (`loading.tsx`).  
  * Implement error boundary handlers (`error.tsx`).  
* **SEO and Asset Optimization:**  
  * Configure `generateMetadata` for dynamic title, description, and canonical links.  
  * Utilize `next/image` for image compression and lazy loading.  
  * Utilize `next/font` for local font loading and zero layout shifts.  
* **Server Logic:**  
  * Create secure Server Actions or Route Handlers for form submissions and mutations.  
  * Handle session verification and route protection via `middleware.ts`.

### Tasks Assigned to Tailwind CSS

* **Layout and Structure:**  
  * Compose grid or flex layouts using utility classes (e.g., `grid grid-cols-1 md:grid-cols-3 gap-6`).  
  * Enforce consistent spacing scales (e.g., `p-4`, `m-6`, `space-y-4`).  
* **Design Tokens and Theme Enforcement:**  
  * Define colors, brand fonts, and custom border radii in `tailwind.config.js`.  
  * Apply consistent typography sizing (`text-sm font-medium text-slate-700`).  
* **Responsive and Interactive States:**  
  * Provide explicit mobile-first responsive rules for all viewports.  
  * Implement interactive styling for user actions (e.g., `hover:bg-primary-600 focus:ring-2`).  
  * Manage dark mode styling using the `dark:` prefix.  
* **Micro-interactions and Transitions:**  
  * Use transition utilities for smooth visual updates (e.g., `transition-all duration-200 ease-in-out`).

### Tasks Assigned to JavaScript

* **Backend-to-Frontend Connectivity:**  
  * Implement API fetch adapters and network connection utilities.  
  * Handle WebSocket or polling connection handlers to backend services.  
  * Manage data formatting and bridge transformations between server endpoints and client consumers.

### Tasks Assigned to JSON

* **Folder Compilation and Build Rules:**  
  * Configure compiler targets, paths, and module resolution in folder-level `tsconfig.json`.  
  * Define build, lint, and compile scripts in `package.json`.  
  * Manage workspace package manifests and bundler configuration options.

---

## 3\. Standard Implementation Workflow

1. **Step 1: Build & Compilation Setup (JSON)**  
   * Set up folder-level `package.json` and `tsconfig.json` to configure compilers and module paths.  
2. **Step 2: Component Structure & Type Contracts (TypeScript / Next.js)**  
   * Author the structural UI markup using TypeScript (`.tsx`), defining component interfaces and props.  
   * Set up route segments in Next.js.  
3. **Step 3: Styling & Responsive Presentation (Tailwind CSS)**  
   * Apply Tailwind CSS utility classes to style the markup.  
   * Configure responsive layout rules and interactive states.  
4. **Step 4: Backend Integration & Data Bridge (JavaScript)**  
   * Write network adapters and API connection handlers in JavaScript to connect the frontend to backend endpoints.

---

## 4\. Gotchas and Best Practices

* **Do not use JavaScript for UI components:** TypeScript is the required standard for all component files and structural markup.  
* **Keep JavaScript restricted to connection logic:** Do not mix business logic or presentation into connection scripts.  
* **Avoid monolithic build configurations:** Use folder-level JSON files to control compiler options and build boundaries cleanly across modules.  
* **Do not use arbitrary Tailwind values when theme tokens exist:** Avoid classes like `w-[347px]` or `bg-[#1a2b3c]`. Use standard spacing scales and configured palette variables.  
* **Keep Server Components pure:** Do not import client hooks into Next.js Server Components.