import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <h1>A warm, elegant home with personal care you can trust.</h1>
          <p className="hero-text">
            Cactus Villa offers a boutique assisted living experience with comfort,
            dignity, and thoughtful day-to-day support in a beautiful Scottsdale neighborhood.
          </p>

          <div className="hero-actions">
            <a className="button button-solid" href="tel:7047265938">Call Anette</a>
            <Link className="button button-outline" href="/contact">Schedule a Tour</Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <Image
              src="/logo-cactus-villa.jpeg"
              alt="Cactus Villa logo"
              width={420}
              height={420}
              className="hero-logo"
            />
            <p>
              Family-focused luxury assisted living with visible, direct communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
