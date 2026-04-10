import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="About Cactus Villa"
            title="Luxury assisted living with a personal, human approach"
            text="Cactus Villa was created to offer comfort, dignity, and attentive support in a home-like Scottsdale environment."
          />
          <p className="body-copy">
            Families often want more than a facility. They want a place that feels calm,
            residential, and caring. Cactus Villa is positioned around that idea — a
            refined home atmosphere, responsive communication, and direct access to a real
            point of contact.
          </p>
          <p className="body-copy">
            For questions, tours, or the next step, families can speak directly with
            <strong> Anette Giurgiu</strong> at <a href="tel:7047265938">(704) 726-5938</a>.
          </p>
        </div>
        <div className="portrait-card">
          <Image src="/anette.png" alt="Anette Giurgiu" width={640} height={840} className="portrait-image" />
          <div className="portrait-content">
            <h3>Direct Contact</h3>
            <p>Anette is prominently available for tours, questions, and family communication.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
