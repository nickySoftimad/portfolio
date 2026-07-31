# Portfolio — Nicky Rabesoa

Portfolio personnel de Nicky Rabesoa, ingénieur frontend React et développeur fullstack freelance basé à Madagascar. Présente le profil, l'expérience et les projets réalisés (PureControl, Aligneurs Français, DynamikMood, Simulateur de crédit).

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- [motion](https://motion.dev) pour les animations (transitions de page, fade-in)

## Structure

```
src/
  app/
    page.tsx            Accueil
    about/               Page profil / expérience
    projects/            Liste des projets
    projects/[slug]/     Détail d'un projet
    contact/             Page contact
  components/
    SideNav.tsx          Navigation latérale
    PageTransition.tsx   Transition entre pages
    FadeIn.tsx           Animation d'apparition
  data/
    profile.ts           Données du profil (expérience, skills, formation)
    projects.ts           Données des projets (contexte, défi, solution, résultat)
```

Le contenu (profil, projets) est centralisé dans `src/data/` — pas de CMS, tout est en dur en TypeScript.

## Getting Started

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Déploiement

Déployé sur [Vercel](https://vercel.com).
