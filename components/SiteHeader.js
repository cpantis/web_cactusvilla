import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">
            <Image
              src="/logo-cactus-villa.jpeg"
              alt="Cactus Villa Luxury Assisted Living"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="brand-copy">
            <span className="brand-title">Cactus Villa</span>
            <span className="brand-subtitle">Luxury Assisted Living</span>
          </div>
        </Link>

        <nav className="top-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="call-chip" href="tel:7047265938">
          <span>Call Anette</span>
          <strong>(704) 726-5938</strong>
        </a>
      </div>
    </header>
  );
}
