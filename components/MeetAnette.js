import Image from "next/image";

export default function MeetAnette() {
  return (
    <section className="meet-section">
      <div className="shell meet-grid">
        <div className="meet-copy">
          <p className="eyebrow">Meet Anette</p>
          <h2>Families want to speak with a real person — someone they can trust.</h2>
          <p>
            At Cactus Villa, Anette is personally available to guide you through every
            step. From your first call to your private tour, you&apos;ll speak directly with her —
            not a call center.
          </p>
          <p>
            She is here to answer your questions, understand your needs, and help you make
            the right decision for your loved one.
          </p>

          <div className="contact-block">
            <p><strong>Anette Giurgiu</strong></p>
            <p><a href="tel:7047265938">(704) 726-5938</a></p>
            <p><a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></p>
          </div>
        </div>

        <div className="portrait-card">
          <Image
            src="/anette.jpg"
            alt="Anette Giurgiu"
            width={820}
            height={980}
            className="portrait"
          />
        </div>
      </div>
    </section>
  );
}
