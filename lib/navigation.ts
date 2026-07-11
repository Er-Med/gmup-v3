import { ROUTES } from "./content";

export type NavItem = {
  label: string;
  href: string;
  current?: boolean;
};

export type NavEvent = {
  label: string;
  href: string;
  current?: boolean;
};

export function buildNav(pathname: string) {
  const home = ROUTES.home;
  const blog = ROUTES.blog;
  const events: NavEvent[] = [
    {
      label: "2ème journée d'urgences pédiatriques",
      href: ROUTES.event("2eme-journee-urgences-pediatriques"),
      current: pathname.includes("2eme-journee"),
    },
    {
      label: "3ème journée d'urgences pédiatriques",
      href: ROUTES.event("3eme-journee-urgences-pediatriques"),
      current: pathname.includes("3eme-journee"),
    },
    {
      label: "4ème Congrès des urgences pédiatriques",
      href: ROUTES.event("4eme-congres-urgences-pediatriques"),
      current: pathname.includes("4eme-congres"),
    },
  ];

  const isAgendaActive = events.some((event) => event.current);

  const items: NavItem[] = [
    {
      label: "Qui sommes-nous ?",
      href: home,
      current: pathname === home,
    },
    { label: "Activités scientifiques", href: "#" },
    { label: "Espace professionnel", href: "#" },
    {
      label: "Espace public",
      href: blog,
      current: pathname === blog,
    },
  ];

  return {
    home,
    blog,
    events,
    items,
    isAgendaActive,
  };
}
