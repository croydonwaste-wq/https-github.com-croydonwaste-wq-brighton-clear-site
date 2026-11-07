# Gutter Cleanings Near Me — guttercleaningsnearme.co.uk

Source for the live site at https://guttercleaningsnearme.co.uk (React + Vite + Tailwind + shadcn/ui, Supabase edge function for quotes).

## Origin
Imported from Lovable project **"Brighton Waste Whiz (86)"** (`0eb5ffa0-f765-4191-921a-7343dd147145`) at commit `35302abe`, the commit currently deployed on the live domain.

- Site-specific source, config, `public/` and Supabase files were copied verbatim.
- Images were downloaded from the live build (byte-identical, same Vite hashes).
- Stock shadcn/ui primitives in `src/components/ui/` were regenerated with the shadcn CLI (only the ones the app imports).
- Not copied: `bun.lockb`, the Supabase SQL migration, the unused `generate-image` function and unused shadcn components.

**This repo is not linked to Lovable.** Changes here do not deploy automatically — see `docs/SEO-AUDIT.md` for how to get them live.

## Develop
```
npm install
npm run dev     # http://localhost:8080
npm run build
```
