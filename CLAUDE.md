@AGENTS.md

# Portfolio — suivi du projet

Portfolio personnel de Nicky Rabesoa (ingénieur frontend React / fullstack freelance). Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, animations avec `motion`.

## Structure

- `src/app/` — pages : accueil, `about`, `projects` (liste + `[slug]` détail), `contact`
- `src/components/` — `SideNav`, `PageTransition`, `FadeIn`
- `src/data/profile.ts` — profil, expérience, skills, formation
- `src/data/projects.ts` — projets détaillés (contexte, défi, solution, résultat, stack)

Pas de CMS : tout le contenu éditorial vit dans `src/data/`. Pour ajouter un projet, ajouter une entrée à `projects.ts` (respecter le type `Project`) — la page `[slug]` s'en sert automatiquement.

## État actuel

- Site de base en place : accueil, about, liste + détail projets, contact, thème bleu, animations de transition.
- 4 projets renseignés dans `projects.ts`.

## À faire / idées

- [x] SEO : `sitemap.ts`, `robots.ts`, metadata Open Graph/Twitter + `metadataBase` dans `layout.tsx`. Déployé sur `https://nicky-rabesoa.vercel.app` — correspond déjà au `baseUrl` utilisé dans le code.
- [x] Nettoyage `public/` : SVG par défaut de `create-next-app` supprimés.
- [x] Favicon (`icon.tsx`) et image Open Graph (`opengraph-image.tsx`) générés dynamiquement avec `next/og`, thème bleu + initiales N.R.
- [x] Accessibilité : styles `focus-visible` ajoutés dans `globals.css` pour liens et boutons.
- [ ] Page contact : actuellement seulement des liens (email/tel/LinkedIn), pas de formulaire — laissé tel quel (choix de design valable), à revoir si besoin d'un formulaire.
