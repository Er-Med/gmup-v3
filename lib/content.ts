export type BureauMember = {
  initials: string;
  role: string;
  name: string;
};

export type BlogPost = {
  slug: string;
  date: string;
  dateTime: string;
  title: string;
  excerpt: string;
};

export type Event = {
  slug: string;
  title: string;
  shortTitle: string;
  date: string;
  location: string;
  eventType: string;
  programmeImage: string;
  /** Optional save-the-date / affiche shown beside the programme. */
  afficheImage?: string;
  excerpt?: string;
};

export const SITE = {
  name: "GMUP",
  fullName: "Groupe Marocain des Urgences Pédiatriques",
  description:
    "Groupe Marocain des Urgences Pédiatriques — Mot du Président et Bureau.",
  locale: "fr",
  facebook: "https://www.facebook.com/share/1HDhUsLrXA/",
  linkedin:
    "https://www.linkedin.com/in/groupe-marocain-des-urgences-p%C3%A9diatriques-b39392422/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  organizer: {
    name: "Agence organisatrice, ARKAYN HEALTH",
    phone: "+212665730530",
    phoneDisplay: "(+212 6 65 73 05 30)",
    email: "chadia.haji@arkaynhealth.org",
    website: "http://www.arkaynhealth.org",
  },
} as const;

export const ROUTES = {
  home: "/",
  blog: "/blog",
  event: (slug: string) => `/evenements/${slug}`,
} as const;

export const PRESIDENT_MESSAGE = {
  label: "Mot de la Présidente",
  heroLabel: "Mot du Président",
  heading: "Un engagement pour l'avenir des urgences pédiatriques au Maroc",
  excerpt:
    "La médecine d'urgence pédiatrique mérite une reconnaissance à la hauteur de son rôle essentiel dans notre système de santé. Le GMUP œuvre pour renforcer la formation, harmoniser les pratiques et fédérer les professionnels afin d'améliorer la prise en charge des enfants en situation d'urgence partout au Maroc.",
  ctaLabel: "Lire le message complet",
  heroPrimaryCta: "Découvrir le GMUP",
  heroSecondaryCta: "Nos activités",
  portraitAlt: "Portrait de Dr Widad Gueddari, Présidente du GMUP",
  portraitSrc: "/president-widad-gueddari.png",
  signatureName: "Dr Widad GUEDDARI",
  signatureRole: "Présidente du GMUP",
} as const;

export const PRESIDENT_LETTER = {
  lead: "La médecine d'urgence en pédiatrie n'est pas encore reconnue comme sous-spécia­lité au Maroc, comme c'est le cas dans des pays anglo­phones et certains pays euro­péens.",
  intro: [
    "Toute­fois, certains Centres Hospi­ta­liers Univer­si­taires maro­cains, notam­ment les plus anciens, ont ressenti l'impor­tance de la mise en place d'un Service d'Accueil des Urgences Pédia­triques (SAUP) avec une équipe aussi bien médi­cale que para­mé­di­cale dédiée unique­ment à l'accueil et à la prise en charge des enfants consul­tants en urgence.",
    "Cette indivi­dua­li­sa­tion des locaux et du personnel pour les urgences pédia­triques ne s'est pas accom­pa­gnée par l'élabo­ra­tion des normes concer­nant la défi­ni­tion des rôles (service des urgences et services d'hospi­ta­li­sa­tion), de l'archi­tec­ture des locaux néces­saires, de l'orga­ni­sa­tion interne selon le niveau des soins demandés, ni de la défi­ni­tion des profils (médical et para­mé­dical) qui devraient y travailler. Les pédia­tres des urgences se sentent souvent dépassés et non valori­sés, malgré les efforts énormes qu'ils four­nissent ; seuls ceux qui y travaillent le savent. Il y a heureu­se­ment de jeunes médecins qui demandent à se former pour pouvoir iden­ti­fier les vraies urgences, les prendre en charge rapi­de­ment et d'une façon adéquate.",
  ],
  quote:
    "La création du Groupe Marocain des Urgences Pédia­triques (GMUP) est venue répondre essen­tiel­le­ment au besoin en forma­tion, et vise à réunir les diffé­rents pédia­tres et urgen­tistes qui s'occupent de la prise en charge des urgences pédia­triques.",
  closing: [
    "Cette action sera béné­fique grâce au partage des expé­riences, à l'harmo­ni­sa­tion des proto­coles et procé­dures de prise en charge, et à l'élabo­ra­tion de réfé­ren­tiels natio­naux avec les sociétés savantes et les instances respon­sables. Tout cela permettra certa­i­ne­ment de valori­ser l'acti­vité des services des urgences, d'iden­ti­fier les points de force et de faiblesse et d'amé­lio­rer la prise en charge des enfants malades dès leur arrivée dans un service d'urgences.",
    "Nous espérons, qu'avec l'effort de tous, faire recon­naître la médecine d'urgence en pédiatrie en tant que sous-spécia­lité pédia­trique et la rendre plus attrac­tive.",
  ],
  president: {
    initials: "WG",
    role: "Présidente",
    name: "DR. Widad GUEDDARI",
    note: "Présidente du groupe marocain des urgences pédiatriques",
  },
} as const;

export const BUREAU_MEMBERS: BureauMember[] = [
  { initials: "WG", role: "Présidente", name: "W. Gueddari" },
  { initials: "ND", role: "Vice-Présidente", name: "N. Dini" },
  { initials: "LK", role: "Secrétaire Générale", name: "L. Karboubi" },
  { initials: "WK", role: "Secrétaire Générale Adjointe", name: "W. Kojmane" },
  { initials: "NM", role: "Trésorier", name: "N. Mekaoui" },
  { initials: "WL", role: "Vice-Trésorier", name: "W. Lahmini" },
];

export const ADVISORS =
  "M. Borrous · M. El-Bouz · Y. Jeddi · Fz. El Amrani Idrissi · N. Benbouziane";

export const OBJECTIVES = [
  "Créer des liens d'entraide et de collaboration entre ses différents membres.",
  "Œuvrer au développement de la médecine d'urgences pédiatriques pré-hospitalière et hospitalière.",
  "Participer, avec les différentes sociétés savantes et association à la promotion, éducation sanitaire et sociale et à la prévention des maladies de l'enfant.",
  "Elaborer des protocoles de prise en charge des enfants malades se présentant aux différents services des urgences.",
  "Participer à la formation continue.",
  "Coopérer avec tout organisme privé ou public, national ou international, ayant des objectifs similaires.",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "triage-pediatrique",
    date: "12 mars 2025",
    dateTime: "2025-03-12",
    title: "Triage pédiatrique : retour sur les recommandations nationales",
    excerpt:
      "Synthèse des échanges tenus lors de la dernière session du GMUP sur l'harmonisation des échelles de tri dans les services d'urgence pédiatriques marocains.",
  },
  {
    slug: "intoxications-pediatriques",
    date: "28 janvier 2025",
    dateTime: "2025-01-28",
    title: "Intoxications pédiatriques : outils d'aide à la décision",
    excerpt:
      "Présentation des fiches pratiques élaborées par le groupe de travail toxicologie, destinées aux équipes des urgences pédiatriques.",
  },
  {
    slug: "compte-rendu-2eme-journee",
    date: "5 novembre 2024",
    dateTime: "2024-11-05",
    title: "Compte rendu de la 2ème journée d'urgences pédiatriques",
    excerpt:
      "Retour sur les conférences et ateliers de la journée scientifique : réanimation, voies aériennes et gestion des flux aux urgences pédiatriques.",
  },
];

export const EVENTS: Event[] = [
  {
    slug: "2eme-journee-urgences-pediatriques",
    title: "2ème journée d'urgences pédiatriques",
    shortTitle: "2ème journée",
    date: "19 octobre 2024",
    location: "Hôtel le Barceló Anfa Casablanca",
    eventType: "Journée scientifique",
    programmeImage: "/2eme-journee-programme.png",
    afficheImage: "/2eme-journee-savethedate.png",
    excerpt:
      "Journée scientifique dédiée aux urgences pédiatriques : états de mal convulsif et convulsions fébriles.",
  },
  {
    slug: "3eme-journee-urgences-pediatriques",
    title: "3ème journée d'urgences pédiatriques",
    shortTitle: "3ème journée",
    date: "25 octobre 2025",
    location: "Hôtel Barceló Anfa, Casablanca",
    eventType: "Journée scientifique",
    programmeImage: "/affiche-3eme-journee.png",
    afficheImage: "/3eme-journee-save-the-date.png",
    excerpt:
      "Affiche de l'édition 2025 et best-of de la journée SAUP Casablanca.",
  },
  {
    slug: "4eme-congres-urgences-pediatriques",
    title: "4ème Congrès des urgences pédiatriques",
    shortTitle: "4ème Congrès",
    date: "30 et 31 octobre 2026",
    location: "Hôtel le Marriott Casablanca",
    eventType: "Congrès",
    programmeImage: "/programme-3eme.jpg",
    excerpt:
      "Ensemble pour des urgences pédiatriques plus performantes et humaines. Save the date — professionnels de santé.",
  },
];

export function getEvent(slug: string) {
  return EVENTS.find((event) => event.slug === slug);
}
