import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Image src="/logo-cactus-villa.jpeg" alt="Cactus Villa logo" width={180} height={180} className="footerLogo" />
          <p className="footerText">Luxury Assisted Living in Scottsdale, Arizona.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footerLinks">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Contact Anette</h4>
          <p className="footerText">Anette Giurgiu</p>
          <p className="footerText"><a href="tel:7047265938">(704) 726-5938</a></p>
          <p className="footerText"><a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></p>
          <p className="footerText">7366 E. Paradise Drive<br />Scottsdale, AZ 85260</p>
        </div>
      </div>
    </footer>
  );
}
