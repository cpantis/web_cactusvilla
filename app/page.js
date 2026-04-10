import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Scottsdale, Arizona</p>
              <h1 className="display">A warm, elegant home with personal care you can trust.</h1>
              <p className="lead">
                Cactus Villa offers a boutique assisted living experience with comfort,
                dignity, and thoughtful day-to-day support in a beautiful Scottsdale neighborhood.
              </p>
              <div className="hero-actions">
                <a href="tel:7047265938" className="btn btn--primary">Call Anette</a>
                <a href="/contact" className="btn btn--secondary">Schedule a Tour</a>
              </div>
            </div>

            <div className="card hero-card">
              <div className="hero-card__inner">
                <div className="stack-lg">
                  <p className="section-kicker">Meet Anette</p>
                  <h2 className="section-title">A real person you can trust</h2>
                  <div className="body-lg stack-md">
                    <p>Families want to speak with a real person — someone they can trust.</p>
                    <p>
                      At Cactus Villa, Anette is personally available to guide you through every
                      step. From your first call to your private tour, you’ll speak directly with her — not a call center.
                    </p>
                    <p>
                      She is here to answer your questions, understand your needs, and help you make
                      the right decision for your loved one.
                    </p>
                  </div>

                  <div className="contact-inline">
                    <strong>Anette Giurgiu</strong>
                    <div>(704) 726-5938</div>
                    <div>anettegiurgiu@gmail.com</div>
                  </div>
                </div>

                <Image
                  src="/images/anette-original.png"
                  alt="Anette Giurgiu"
                  width={560}
                  height={700}
                  className="anette-photo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container values">
            <div className="card value-card">
              <h3>Personalized Support</h3>
              <p className="body-md">Attentive daily support tailored to each resident’s needs, preferences, and comfort.</p>
            </div>
            <div className="card value-card">
              <h3>Warm Home Environment</h3>
              <p className="body-md">A calm residential setting designed to feel elegant, welcoming, and reassuring.</p>
            </div>
            <div className="card value-card">
              <h3>Direct Communication</h3>
              <p className="body-md">Families always know who to call and can speak directly with Anette about tours and next steps.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
