Migration notes — Svelte -> Next.js

Quick steps to finish the migration and run locally:

1. Move static assets to Next.js `public/` directory (or create a symlink):

   mv static public

   or

   ln -s $PWD/static $PWD/public

2. Install dependencies:

   npm install

3. Run the Next.js dev server:

   npm run dev

Notes:
- The repository still contains Svelte-specific files. This scaffold provides a working Next.js start and basic pages (`/` and `/certifications`). You may want to port additional routes and components from `src/routes/` into `pages/` or `app/`.
- Tailwind is configured; the global styles import `src/app.css` utilities into `styles/globals.css`. If you changed filenames, update imports accordingly.
