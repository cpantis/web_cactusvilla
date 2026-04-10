import PageIntro from "../../components/PageIntro";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About Cactus Villa"
        title="A boutique home for comfort, dignity, and personal care."
        text="Cactus Villa is designed to feel calm, elegant, and welcoming — more like home, less like an institution."
      />

      <section className="shell two-col">
        <div>
          <h2>What families value most</h2>
          <p>
            Families want clarity, responsiveness, and reassurance. At Cactus Villa, they
            know who to call. Anette is the visible point of contact for tours, questions,
            and next steps.
          </p>
          <p>
            Our goal is simple: provide attentive support in a home-like Scottsdale setting
            where residents feel safe, respected, and genuinely cared for.
          </p>
        </div>

        <div className="soft-card">
          <Image
            src="/anette.jpg"
            alt="Anette Giurgiu"
            width={720}
            height={860}
            className="portrait"
          />
        </div>
      </section>
    </main>
  );
}
