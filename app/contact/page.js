import PageIntro from "../../components/PageIntro";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Speak directly with Anette."
        text="If you would like to ask a question or schedule a private tour, Anette is the direct point of contact."
      />

      <section className="shell two-col">
        <div className="soft-card contact-card">
          <h2>Anette Giurgiu</h2>
          <p><a href="tel:7047265938">(704) 726-5938</a></p>
          <p><a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></p>
          <p>
            7366 E. Paradise Drive<br />
            Scottsdale, AZ 85260
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="tel:7047265938">Call Anette</a>
            <a className="button button-outline" href="mailto:anettegiurgiu@gmail.com">Email Anette</a>
          </div>
        </div>

        <div className="map-card">
          <iframe
            title="Cactus Villa map"
            src="https://www.google.com/maps?q=7366%20E.%20Paradise%20Drive%20Scottsdale%20AZ%2085260&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
