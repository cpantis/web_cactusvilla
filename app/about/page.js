
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'Learn about the calm, boutique philosophy behind Cactus Villa and meet Anette, your direct point of contact.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Cactus Villa</p>
          <h1>A boutique home for comfort, dignity, and personal care.</h1>
          <p className="lead">
            Cactus Villa is designed to feel calm, elegant, and welcoming — more like home, less like an institution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>What families value most</h2>
            <p className="copy">
              Families want clarity, responsiveness, and reassurance. At Cactus Villa, they know exactly who to call. Our goal is simple: provide attentive support in a home-like Scottsdale setting where residents feel safe, respected, and genuinely cared for.
            </p>
          </div>
          <div className="card photo-card">
            <Image src="/images/gallery/interior-collage.png" alt="Interior preview of Cactus Villa" width={1200} height={900} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container meet-anette">
          <div className="card photo-card">
            <Image src="/images/anette.png" alt="Anette Giurgiu" width={900} height={1100} />
          </div>
          <div>
            <p className="eyebrow">Meet Anette</p>
            <h2>A real person you can trust.</h2>
            <p className="copy">
              Families want to speak with someone they can trust. At Cactus Villa, Anette is personally available to guide you through every step. From your first call to your private tour, you’ll speak directly with her — not a call center.
            </p>
            <p className="copy" style={{marginTop:18}}>
              She is here to answer your questions, understand your needs, and help you make the right decision for your loved one.
            </p>
            <div className="btn-row" style={{marginTop:24}}>
              <a className="btn btn--primary" href="tel:7047265938">Call Anette</a>
              <Link className="btn btn--secondary" href="/contact">Schedule a Tour</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container value-list">
          <div className="card value">
            <h3>Personalized Support</h3>
            <p>Every resident receives individualized attention and care tailored to their needs.</p>
          </div>
          <div className="card value">
            <h3>Warm Home Environment</h3>
            <p>A peaceful residential setting designed to feel comfortable, calm, and familiar.</p>
          </div>
          <div className="card value">
            <h3>Direct Communication</h3>
            <p>Families always know who to call and can speak directly with Anette.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
