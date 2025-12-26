<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/17dPoIEY8loZUEEVm2CuU8gD9fbS_jrPI

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Assets & Branding

- Asset locations:
  - `public/logo.png` used for the site logo in the navbar and footer
  - `public/favicon.png` referenced in `index.html` as the favicon
  - `public/assets/` contains site imagery (portfolio, team, renders)
- Integration:
  - Logo is loaded with `fetchPriority="high"` to improve LCP
  - Portfolio and modal images use `loading="lazy"` and `decoding="async"`
  - Images are referenced via absolute paths (e.g., `/assets/<file>`) for Vite

## Directory Structure

- `public/` static files served at site root
  - `logo.png`, `favicon.png`, `assets/*`
- `components/` React UI components
- `pages/` route-level pages
- `services/` external integrations

## Technical Specifications

- Favicon: `index.html` links to `/favicon.png` with `sizes="32x32"`
- Logo: `components/Layout.tsx` uses `/logo.png` with explicit width/height to reduce layout shift
- Portfolio: `constants.ts` maps local images from `public/assets/` to `PORTFOLIO`
- Accessibility:
  - Added `aria-label` to interactive buttons
  - Ensured `alt` text on images
  - Dropdown buttons expose `aria-expanded` and `aria-haspopup`
- Performance:
  - Lazy-load non-critical images
  - `fetchPriority="high"` on logo, `decoding="async"` on images
  - Build with Vite (`npm run build`)

## Testing Protocols

- Functional:
  - Navigate all routes: Home, About, Services detail, Startup pages, Contact
  - Verify logo and favicon render across refreshes and routes
  - Check portfolio grid and modal open/close behavior
- Performance:
  - Run `npm run build` and inspect bundle warnings
  - Use browser DevTools: Lighthouse for LCP, CLS, and image loading
- Cross-device:
  - Test on desktop and mobile viewports (Chrome, Edge)
  - Validate navbar behavior, dropdowns, and modals

## Version Control & Backup

- Recommended Git workflow:
  - Branch naming: `feature/brand-assets`, `chore/optimize-images`
  - Protect `main` via PR reviews
- Backup:
  - Archive `dist/` after a successful build
  - Keep `public/assets/` under version control for traceability

## Review Process

- Initial checkpoint after branding swap and asset integration
- Verify:
  - No regressions in navigation and routing
  - Images load correctly and are optimized
  - Accessibility checks pass
- Approval gates:
  - Stakeholder sign-off on visual changes
  - Performance and accessibility score thresholds met

## Enhancement Roadmap (Prioritized)

- Short-term:
  - Add responsive image sizes (`srcset`) for portfolio
  - Introduce code-splitting for heavy routes
- Mid-term:
  - Implement a simple image CDN or optimization pipeline
  - Add unit tests for critical UI flows
- Long-term:
  - Accessibility audit and remediation (keyboard nav, focus states)
  - Progressive Web App support (manifest + service worker)
