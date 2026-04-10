import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">About Cactus Villa</p>
            <h1 className="page-title">A boutique home for comfort, dignity, and personal care.</h1>
            <p className="lead">
              Cactus Villa is designed to feel calm, elegant, and welcoming — more like home, less like an institution.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container grid-2">
            <div className="stack-lg">
              <h2 className="section-title">What families value most</h2>
              <div className="body-lg stack-md">
                <p>Families want clarity, responsiveness, and reassurance. At Cactus Villa, they know exactly who to call.</p>
                <p>Our goal is simple: provide attentive support in a home-like Scottsdale setting where residents feel safe, respected, and genuinely cared for.</p>
                <p>We focus on comfort, dignity, and thoughtful day-to-day care — creating an environment where both residents and families feel at ease.</p>
              </div>
            </div>

            <div className="card service-card">
              <p className="section-kicker">Our Approach</p>
              <h2 className="section-title">Thoughtful care in a residential setting</h2>
              <p className="body-lg">
                We combine attentive support, direct family communication, and a warm home atmosphere designed to feel peaceful and familiar.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-2">
            <Image
              src="/images/anette-original.png"
              alt="Anette Giurgiu"
              width={560}
              height={700}
              className="anette-photo"
            />
            <div className="stack-lg">
              <p className="section-kicker">Meet Anette</p>
              <h2 className="section-title">A real person you can trust</h2>
              <div className="body-lg stack-md">
                <p>Families want to speak with someone they can trust. At Cactus Villa, Anette is personally available to guide you through every step.</p>
                <p>From your first call to your private tour, you’ll speak directly with her — not a call center.</p>
                <p>She is here to answer your questions, understand your needs, and help you make the right decision for your loved one.</p>
              </div>
              <div className="contact-inline">
                <strong>Anette Giurgiu</strong>
                <div>(704) 726-5938</div>
                <div>anettegiurgiu@gmail.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
