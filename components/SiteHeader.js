import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand">
          <Image
            src="/images/logo-cactus-villa.jpeg"
            alt="Cactus Villa"
            width={92}
            height={92}
            className="brand__logo"
            priority
          />
          <div>
            <div className="brand__title">Cactus Villa</div>
            <div className="brand__subtitle">Luxury Assisted Living</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a href="tel:7047265938" className="header-cta">
          Call Anette
          <strong>(704) 726-5938</strong>
        </a>
      </div>
    </header>
  );
}
