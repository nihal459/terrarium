# Terrarium — source code

This package contains the website source, homepage, shop, images, GLB models, reusable UI components, dependency lockfile, and build configuration.

## Run locally

Install Node.js 22.13 or newer (Node 22 LTS or newer supported LTS recommended) and pnpm 11.25.0. Open a terminal inside this folder:

```sh
npm install -g pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by the terminal (normally http://localhost:5173).

```sh
pnpm build
pnpm start
```

The build uses Vinext and the Cloudflare Vite plugin. `pnpm start` previews the built Worker locally; use its printed address. This is not a plain Vite SPA and its build output should not be uploaded as ordinary static HTML. The original README.md contains framework and hosting details. Use pnpm with the included lockfile rather than `npm ci` (there is no package-lock.json).

## Main files

- app/page.tsx — homepage and main section order
- app/hero-photo.tsx — three-photo scroll journey; top-view clockwise rotation
- app/about-diary.tsx — scroll-driven diary page turns
- app/customer-reviews.tsx — sample review cards and filters
- app/terrarium-scene.tsx — Three.js Forest in a Jar viewer
- app/explore-sections.tsx — lifestyle guide, buying tips and FAQ
- app/shop/page.tsx — product search, filters, sorting and product-detail dialog
- app/shop/products.ts — sample product records and prices
- app/globals.css — styling, responsiveness and animation
- public/ — supplied/generated photographs and GLB assets
- components/ui/ — reusable interface primitives

## Current scope

The shop is a catalogue preview: products, prices and reviews are samples. Checkout, payment processing, stock management and a real contact backend are not connected. The hero uses photographs, not a 3D model. The separate living gallery uses Three.js. The earlier experimental hero GLB is included as an unused asset.

## Asset credits

Preserve the attribution already included in the 3D viewer. Forest in a Jar is credited to kairo.german under CC BY 4.0:
https://sketchfab.com/3d-models/forest-in-a-jar-e33dece0424e4888836aa903c2630e57
https://creativecommons.org/licenses/by/4.0/

The unused miniature garden model is credited in app/terrarium-scene.tsx. Retain and review applicable source licensing before reusing third-party assets. Third-party package licenses remain applicable.

## Export

Source commit: 35b1b24da36772fe1be24a8f9ec6cc5d3e95ddac

Dependencies, generated builds, caches, Git history and local credentials are excluded. The .openai/hosting.json file is included because vite.config.ts imports it; it contains the existing Site identifier and binding configuration, not credentials. This export does not modify the live website.
