import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <Image
            src="/logo-cactus-villa.jpeg"
            alt="Cactus Villa Luxury Assisted Living logo"
            width={170}
            height={170}
            className="brand-logo"
            priority
          />
          <div>
            <div className="brand-name">Cactus Villa</div>
            <div className="brand-subtitle">Luxury Assisted Living</div>
          </div>
        </Link>

        <nav className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <a className="call-chip" href="tel:7047265938">
          Call Anette
          <span>(704) 726-5938</span>
        </a>
      </div>
    </header>
  );
}
