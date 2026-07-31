export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  tags: string[];
  summary: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  color: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "purecontrol",
    title: "PureControl",
    client: "Softimad ESN",
    year: "2024 - 2026",
    role: "Développeur Fullstack Lead Frontend",
    tags: ["SaaS", "Médical", "React", "TypeScript"],
    summary:
      "Plateforme SaaS médicale complète construite de zéro pour la gestion de workflows dentaires.",
    context:
      "Softimad ESN avait besoin d'une plateforme SaaS médicale robuste pour digitaliser et centraliser la gestion des workflows dentaires de ses clients.",
    challenge:
      "Concevoir une interface hautement interactive et réactive capable de gérer des flux de données complexes (dossiers patients, plans de traitement, suivi) tout en restant simple d'utilisation pour des équipes médicales non techniques.",
    solution:
      "Développement de l'application de zéro avec React.js et TypeScript, composants UI robustes avec Tailwind CSS en respectant des principes de design modernes, intégration transparente avec les API REST du backend. Mise en place des bonnes pratiques React et mentorat de l'équipe technique.",
    result:
      "Plateforme en production utilisée par des professionnels de santé, avec une base de code maintenable et scalable, et une équipe alignée sur des standards React solides.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "API REST", "Node.js"],
    color: "#6366f1",
    images: [
      "/projects/purecontrol/1.png",
      "/projects/purecontrol/2.png",
      "/projects/purecontrol/3.png",
    ],
  },
  {
    slug: "aligneurs-francais",
    title: "Aligneurs Français — Plateforme LAF",
    client: "Aligneurs Français",
    year: "2024 - Aujourd'hui",
    role: "Développeur Fullstack Freelance",
    tags: ["Médical", "Refonte", "React", "Freelance"],
    summary:
      "Refonte et modernisation continue d'une plateforme médicale de gestion, d'abord en mission chez Softimad puis en freelance direct avec le client à Paris.",
    context:
      "Une plateforme médicale existante nécessitait une optimisation frontend et des améliorations UI/UX pour mieux accompagner le workflow métier des équipes.",
    challenge:
      "Faire évoluer une application existante sans casser les workflows en place, tout en améliorant significativement l'engagement utilisateur et l'efficacité opérationnelle, en coordination étroite avec les équipes backend.",
    solution:
      "Direction de l'optimisation du frontend avec React.js, ajout de nouvelles fonctionnalités ciblées, collaboration rapprochée avec le backend pour une récupération de données fluide et une gestion d'état cohérente. Depuis avril 2026, poursuite du projet en freelance indépendant en télétravail complet.",
    result:
      "Amélioration mesurable de l'expérience utilisateur et de l'efficacité opérationnelle, relation de confiance long terme avec le client menant à une collaboration freelance directe.",
    stack: ["React.js", "JavaScript", "API REST", "Gestion d'état"],
    color: "#0ea5e9",
    images: [
      "/projects/laf/1.png",
      "/projects/laf/2.png",
      "/projects/laf/3.png",
    ],
  },
  {
    slug: "dynamikmood",
    title: "DynamikMood",
    client: "Sofimad ESN",
    year: "2024",
    role: "Stagiaire Développement Web",
    tags: ["Dashboard", "Data Viz", "Stage"],
    summary:
      "Application de suivi d'humeur avec tableaux de bord dynamiques pour visualiser des analyses et statistiques.",
    context:
      "Besoin de tableaux de bord web permettant de visualiser des données d'humeur collectées, de façon claire et accessible sur tout type d'appareil.",
    challenge:
      "Construire des visualisations dynamiques et fiables tout en assurant compatibilité multi-navigateurs, conception responsive, et un flux d'authentification sécurisé.",
    solution:
      "Développement de tableaux de bord web dynamiques pour la visualisation des analyses et statistiques d'humeur, tests responsive sur plusieurs navigateurs et appareils, participation à l'implémentation de l'authentification sécurisée et de modules de test interactifs.",
    result:
      "Dashboard fonctionnel et responsive livré, première expérience professionnelle solide sur des problématiques de data visualisation et d'authentification.",
    stack: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    color: "#f59e0b",
  },
  {
    slug: "simulateur-credit",
    title: "Simulateur de Crédit Web",
    client: "Caisse d'Épargne de Madagascar",
    year: "2021",
    role: "Stagiaire Développeur",
    tags: ["Finance", "React", "Stage"],
    summary:
      "Simulateur de crédit responsive permettant de calculer des scénarios financiers côté client en temps réel.",
    context:
      "La Caisse d'Épargne de Madagascar souhaitait offrir à ses clients un outil de simulation de crédit en ligne, accessible et performant.",
    challenge:
      "Gérer des calculs financiers complexes directement côté client tout en maintenant de bonnes performances et une expérience fluide sur tous les appareils.",
    solution:
      "Conception et développement du simulateur avec React.js, logique de calcul financier côté client optimisée, intégration avec un backend Express.js/Node.js pour la persistance des données.",
    result:
      "Premier projet fullstack JavaScript complet, posant les bases de l'expertise React.js et Node.js développée depuis.",
    stack: ["React.js", "Express.js", "Node.js"],
    color: "#10b981",
  },
];
