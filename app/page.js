
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Luxury Assisted Living in Scottsdale, Arizona',
  description: 'A warm, elegant home with personal care you can trust. Speak directly with Anette for tours, questions, and next steps.',
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Scottsdale, Arizona</p>
            <h1>A warm, elegant home with personal care you can trust.</h1>
            <p className="lead">
              Cactus Villa offers a boutique assisted living experience with comfort, dignity, and thoughtful day-to-day support in a beautiful Scottsdale neighborhood.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Schedule a Tour</Link>
              <a className="btn btn--secondary" href="tel:7047265938">Call Anette</a>
            </div>
          </div>

          <aside className="card hero-card">
            <Image src="/images/anette.png" alt="Anette Giurgiu" width={800} height={920} style={{width:'100%', height:'auto', borderRadius:22}} />
            <div className="hero-card__meta">
              <h3>Meet Anette</h3>
              <p>
                Families want to speak with a real person. At Cactus Villa, Anette is the visible point of contact for tours, questions, and next steps.
              </p>
              <p style={{marginTop:12}}>
                <strong>Anette Giurgiu</strong><br />
                <a href="tel:7047265938">(704) 726-5938</a><br />
                <a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card panel">
            <h3>Direct Family Communication</h3>
            <p>You always know who to call. Families can speak directly with Anette rather than a call center.</p>
          </div>
          <div className="card panel">
            <h3>Warm Home Environment</h3>
            <p>A calm residential setting designed to feel welcoming, peaceful, and more like home than an institution.</p>
          </div>
          <div className="card panel">
            <h3>Personalized Support</h3>
            <p>Attentive care with dignity, comfort, and thoughtful support tailored to each resident’s day-to-day needs.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container meet-anette">
          <div className="photo-card card">
            <Image src="/images/gallery/daylight-collage.png" alt="Cactus Villa gallery preview" width={1200} height={900} />
          </div>
          <div>
            <p className="eyebrow">Why families choose Cactus Villa</p>
            <h2>Calm, clear, and personal from the very first call.</h2>
            <p className="copy">
              Families often start with questions about timing, care needs, and whether a home will feel right. At Cactus Villa, the process is personal from day one. You can tour, ask questions, and speak directly with Anette about the next best step for your loved one.
            </p>
            <div className="btn-row" style={{marginTop:26}}>
              <Link className="btn btn--primary" href="/about">Learn More</Link>
              <Link className="btn btn--secondary" href="/gallery">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
