import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Can Boz - Ana sayfa"
      className={className ?? "flex items-center p-2"}
    >
      <Image
        src="/images/eklogo.png"
        alt="Can Boz"
        width={75}
        height={75}
        priority
      />
    </Link>
  );
}