import Image from 'next/image';

export const metadata = { title: 'About | Cactus Villa' };

export default function AboutPage() {
  return (
    <main className="section container twoCol aboutPage">
      <div>
        <p className="eyebrow">About Cactus Villa</p>
        <h1>A home centered on comfort, dignity, and personal connection.</h1>
        <p className="lead">
          Cactus Villa is designed for families who want quality care in a more
          intimate, home-like setting. We believe the experience should feel warm,
          calm, and personal from the very first conversation.
        </p>
        <p>
          Families want to speak with a real person. At Cactus Villa, Anette is the
          visible point of contact for tours, questions, and next steps. That direct
          connection matters when you are making an important decision for someone you love.
        </p>
        <p>
          Located in Scottsdale, Arizona, Cactus Villa combines residential comfort,
          attentive support, and a setting that feels elevated without ever losing the
          sense of home.
        </p>
      </div>
      <div className="portraitWrap">
        <Image src="/anette-portrait.png" alt="Anette Giurgiu" width={640} height={900} className="portrait" />
      </div>
    </main>
  );
}
