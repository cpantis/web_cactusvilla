
import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div>
          <strong>Cactus Villa Luxury Assisted Living</strong>
          <div style={{marginTop:8}}>7366 E. Paradise Drive, Scottsdale, AZ 85260</div>
          <div style={{marginTop:8}}>Anette Giurgiu · <a href="tel:7047265938">(704) 726-5938</a> · <a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></div>
        </div>
        <nav className="footer__nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
