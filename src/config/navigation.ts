export type NavChild = {
  title: string;
  href: string;
};

export type NavItem = {
  title: string;
  href: string;
  children?: NavChild[];
};


export const mainNav: NavItem[] = [
  {
    title: "Hakkımda",
    href: "#aboutme",
  },
  {
    title: "Abonelikler",
    href: "#membership",
    children: [
      { title: "Bireysel Abonelik", href: "#membership" },
      { title: "Kurumsal Abonelik", href: "#membership" },
    ],
  },
  {
    title: "Eğitimler",
    href: "#courses",
  },
  {
    title: "İletişim",
    href: "#contact",
  },
];