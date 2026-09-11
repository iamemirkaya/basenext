export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Hakkımda", href: "#aboutme" },
  {
    label: "Abonelikler",
    children: [
      { label: "Bireysel Abonelik", href: "#membership" },
      { label: "Kurumsal Abonelik", href: "#membership" },
    ],
  },
  { label: "Eğitimler", href: "#courses" },
  { label: "İletişim", href: "#contact" },
];