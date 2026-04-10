import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/hero-home.png"
          alt="Cactus Villa exterior"
          fill
          priority
          className="heroImage"
        />
        <div className="heroOverlay" />
        <div className="heroContent container">
          <Image
            src="/logo-cactus-villa.jpeg"
            alt="Cactus Villa Luxury Assisted Living logo"
            width={340}
            height={340}
            className="heroLogo"
            priority
          />
          <h1>Luxury Assisted Living in Scottsdale, Arizona</h1>
          <p>
            A warm, elevated home environment with personalized care, comfort,
            dignity, and direct guidance from Anette.
          </p>
          <div className="heroButtons">
            <a className="button gold" href="tel:7047265938">Call Anette</a>
            <Link className="button light" href="/contact">Schedule a Tour</Link>
          </div>
        </div>
      </section>

      <section className="section container twoCol">
        <div>
          <p className="eyebrow">Meet Anette</p>
          <h2>Families want to speak with a real person — someone they can trust.</h2>
          <p className="lead">
            At Cactus Villa, Anette is personally available to guide you through
            every step. From your first call to your private tour, you’ll speak
            directly with her — not a call center.
          </p>
          <p>
            She is here to answer your questions, understand your needs, and help
            you make the right decision for your loved one.
          </p>
          <div className="contactCard compact">
            <strong>Anette Giurgiu</strong>
            <span>Phone: <a href="tel:7047265938">(704) 726-5938</a></span>
            <span>Email: <a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></span>
          </div>
        </div>
        <div className="portraitWrap">
          <Image
            src="/anette-portrait.png"
            alt="Anette Giurgiu"
            width={640}
            height={900}
            className="portrait"
          />
        </div>
      </section>

      <section className="section altSection">
        <div className="container featureGrid">
          <div className="featureCard">
            <h3>Personalized Care</h3>
            <p>Support tailored to each resident’s routines, preferences, and level of care.</p>
          </div>
          <div className="featureCard">
            <h3>Home-Like Comfort</h3>
            <p>An intimate setting designed to feel calm, welcoming, and residential — never institutional.</p>
          </div>
          <div className="featureCard">
            <h3>Visible Point of Contact</h3>
            <p>Anette is clearly available for tours, questions, and next steps, helping families feel informed and supported.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Gallery Preview</p>
            <h2>Refined spaces with a warm Arizona feel.</h2>
          </div>
          <Link href="/gallery" className="textLink">View full gallery</Link>
        </div>
        <div className="galleryGrid">
          <Image src="/gallery/exterior.png" alt="Exterior" width={1200} height={700} className="galleryLarge" />
          <Image src="/gallery/living.png" alt="Living room" width={600} height={600} className="gallerySmall" />
          <Image src="/gallery/bedroom.png" alt="Bedroom" width={600} height={600} className="gallerySmall" />
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaBox">
          <div>
            <p className="eyebrow">Schedule a Private Tour</p>
            <h2>Speak directly with Anette today.</h2>
            <p>
              Whether you are exploring options now or planning ahead, Anette can
              answer your questions and help you understand the next steps.
            </p>
          </div>
          <div className="ctaButtons">
            <a className="button gold" href="tel:7047265938">Call (704) 726-5938</a>
            <a className="button dark" href="mailto:anettegiurgiu@gmail.com">Email Anette</a>
          </div>
        </div>
      </section>
    </main>
  );
}
