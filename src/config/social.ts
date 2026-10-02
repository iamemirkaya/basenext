import type { IconType } from "react-icons";
import { FaKaggle, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/iamemirkaya", icon: SiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iamemirkaya/", icon: FaLinkedin },
  { label: "Kaggle", href: "https://www.kaggle.com/iamemirkaya", icon: FaKaggle },
  { label: "Email", href: "mailto:iamemirkaya@gmail.com", icon: MdEmail },
];
