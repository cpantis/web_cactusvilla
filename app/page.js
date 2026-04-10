import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';

const services = [
  '24/7 attentive care in a residential setting',
  'Personalized support tailored to each resident',
  'Comfortable private spaces and welcoming common areas',
  'Meals, companionship, and daily routine support',
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Luxury Assisted Living in Scottsdale, Arizona</div>
            <h1>A warm, elegant home with personal care you can trust.</h1>
            <p className="hero-copy">
              Cactus Villa offers a boutique assisted living experience with comfort,
              dignity, and day-to-day support in a beautiful Scottsdale neighborhood.
            </p>
            <div className="hero-actions">
              <a href="tel:7047265938" className="btn btn-primary">Call Anette</a>
              <Link href="/contact" className="btn btn-secondary">Schedule a Tour</Link>
            </div>
            <div className="contact-strip">
              <strong>Anette Giurgiu</strong>
              <span>Direct Contact: (704) 726-5938</span>
              <span>anettegiurgiu@gmail.com</span>
            </div>
          </div>

          <div className="hero-card">
            <Image
              src="/logo-cactus-villa.jpeg"
              alt="Cactus Villa logo"
              width={300}
              height={300}
              className="hero-logo"
            />
            <div className="hero-card-text">
              Family-focused luxury assisted living with visible, direct communication.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading
              eyebrow="Why Families Choose Cactus Villa"
              title="A refined residential setting, not an institutional environment."
              text="Designed for comfort, calm, and personalized attention, Cactus Villa is built to feel like home while delivering dependable day-to-day support."
            />
            <div className="feature-list">
              {services.map((item) => (
                <div key={item} className="feature-item">{item}</div>
              ))}
            </div>
          </div>
          <div className="portrait-card">
            <Image
              src="/anette.png"
              alt="Anette Giurgiu"
              width={640}
              height={840}
              className="portrait-image"
            />
            <div className="portrait-content">
              <h3>Meet Anette</h3>
              <p>
                Families want to speak to a real person. At Cactus Villa, Anette is the
                visible point of contact for tours, questions, and next steps.
              </p>
              <a href="tel:7047265938" className="text-link">Talk with Anette</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Experience"
            title="Thoughtful care in a premium Scottsdale location"
            text="Every detail is centered on safety, comfort, dignity, and a welcoming atmosphere for residents and their families."
          />
          <div className="cards-grid">
            <article className="info-card">
              <h3>Personalized Care</h3>
              <p>Support plans shaped around each resident’s needs, routine, and comfort level.</p>
            </article>
            <article className="info-card">
              <h3>Beautiful Home Setting</h3>
              <p>A polished residential environment that feels calm, warm, and inviting.</p>
            </article>
            <article className="info-card">
              <h3>Responsive Communication</h3>
              <p>Anette remains easy to reach for tours, questions, and updates.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div>
            <div className="eyebrow">Private Tours</div>
            <h2>See whether Cactus Villa is the right fit for your family.</h2>
            <p>Schedule a private conversation and tour directly with Anette.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:7047265938" className="btn btn-primary">Call Now</a>
            <a href="mailto:anettegiurgiu@gmail.com" className="btn btn-secondary">Email Anette</a>
          </div>
        </div>
      </section>
    </main>
  );
}
