import Hero from "../components/Hero";
import MeetAnette from "../components/MeetAnette";
import FeatureBand from "../components/FeatureBand";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MeetAnette />
      <FeatureBand />

      <section className="shell home-cta">
        <div>
          <p className="eyebrow">Next steps</p>
          <h2>Schedule a private tour or call Anette directly.</h2>
          <p>
            We are happy to answer questions, discuss care needs, and help your family
            understand whether Cactus Villa is the right fit.
          </p>
        </div>

        <div className="hero-actions">
          <a className="button button-solid" href="tel:7047265938">Call Anette</a>
          <Link className="button button-outline" href="/contact">Schedule a Tour</Link>
        </div>
      </section>
    </main>
  );
}
