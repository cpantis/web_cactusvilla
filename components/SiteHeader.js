import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
];

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container navWrap">
        <Link href="/" className="brand">
          <Image src="/logo-cactus-villa.jpeg" alt="Cactus Villa logo" width={180} height={180} className="navLogo" />
        </Link>
        <nav className="navLinks">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
        <a className="headerCta" href="tel:7047265938">Call Anette</a>
      </div>
    </header>
  );
}
