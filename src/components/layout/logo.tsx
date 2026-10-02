import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Emir Kaya - Ana sayfa"
      className={className ?? "flex items-center p-2"}
    >
      <Image
        src="/images/eklogo.png"
        alt="Emir Kaya"
        width={75}
        height={75}
        priority
      />
    </Link>
  );
}