@AGENTS.md

# Portfolio — suivi du projet

Portfolio personnel de Nicky Rabesoa (ingénieur frontend React / fullstack freelance). Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, animations avec `motion`.

## Structure

- `src/app/` — pages : accueil, `about`, `projects` (liste + `[slug]` détail), `contact`
- `src/components/` — `SideNav`, `PageTransition`, `FadeIn`
- `src/data/profile.ts` — profil, expérience, skills, formation
- `src/data/projects.ts` — projets détaillés (contexte, défi, solution, résultat, stack)

Pas de CMS : tout le contenu éditorial vit dans `src/data/`. Pour ajouter un projet, ajouter une entrée à `projects.ts` (respecter le type `Project`) — la page `[slug]` s'en sert automatiquement. Champs optionnels `repoUrl`/`liveUrl` pour les projets avec un lien externe (utilisé par Streaklet).

## État actuel

- Site de base en place : accueil, about, liste + détail projets, contact, thème bleu, animations de transition.
- 5 projets renseignés dans `projects.ts` (4 missions client + 1 projet personnel : Streaklet).

## À faire / idées

- [x] SEO : `sitemap.ts`, `robots.ts`, metadata Open Graph/Twitter + `metadataBase` dans `layout.tsx`. Déployé sur `https://nicky-rabesoa.vercel.app` — correspond déjà au `baseUrl` utilisé dans le code.
- [x] Nettoyage `public/` : SVG par défaut de `create-next-app` supprimés.
- [x] Favicon (`icon.tsx`) et image Open Graph (`opengraph-image.tsx`) générés dynamiquement avec `next/og`, thème bleu + initiales N.R.
- [x] Accessibilité : styles `focus-visible` ajoutés dans `globals.css` pour liens et boutons.
- [x] Metadata par page : `title` + `description` dédiés sur `about`, `projects` (liste + détail dynamique par projet), `contact`.
- [x] Captures d'écran ajoutées sur les pages projets PureControl et Aligneurs Français (`public/projects/`, champ `images` optionnel dans `Project`) — avec accord de l'utilisateur pour publication publique.
- [ ] Page contact : actuellement seulement des liens (email/tel/LinkedIn), pas de formulaire — laissé tel quel (choix de design valable), à revoir si besoin d'un formulaire.
- [ ] Captures manquantes pour DynamikMood et Simulateur de Crédit (projets plus anciens).
- [ ] Logos clients (Softimad, Aligneurs Français) sur les pages projets — pas de fichiers disponibles pour l'instant, actuellement juste le nom en texte.
- [x] JSON-LD `Person` dans `layout.tsx` pour le SEO (rich results Google).
- [x] Titre d'onglet raccourci ("Dev Frontend React" au lieu de "Ingénieur Frontend React") pour éviter la troncature.
- [x] Mention du délai de réponse (24h ouvrées) ajoutée dès l'accueil, pas seulement sur Contact.
- [x] Section "Comment on travaille ensemble" (3 étapes) ajoutée en bas de la page Contact.
- [x] Streaklet (projet personnel, tracker d'habitudes) ajouté comme 5e projet — repo public et démo déployée, liens affichés sur la page détail via `repoUrl`/`liveUrl`.
