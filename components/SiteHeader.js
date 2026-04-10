
import Image from 'next/image'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="Cactus Villa home">
          <Image src="/images/logo-cactus-villa.jpeg" alt="Cactus Villa logo" width={88} height={88} />
          <div>
            <div className="brand__title">Cactus Villa</div>
            <div className="brand__sub">Luxury Assisted Living</div>
          </div>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <a className="btn btn--secondary" href="tel:7047265938">Call Anette</a>
        </nav>
      </div>
    </header>
  )
}
