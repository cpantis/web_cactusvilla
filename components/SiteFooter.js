import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <h3>Cactus Villa</h3>
          <p>Luxury assisted living in Scottsdale, Arizona.</p>
          <p className="muted">
            Families speak directly with Anette for tours, questions, and next steps.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact Anette</h4>
          <p><a href="tel:7047265938">(704) 726-5938</a></p>
          <p><a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></p>
          <p>7366 E. Paradise Drive<br />Scottsdale, AZ 85260</p>
        </div>
      </div>
    </footer>
  );
}
