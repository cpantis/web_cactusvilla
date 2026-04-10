import PageIntro from "../../components/PageIntro";

const services = [
  {
    title: "Assisted Living Support",
    text: "Day-to-day support in a warm residential setting with attention to dignity, comfort, and routine.",
  },
  {
    title: "Personalized Communication",
    text: "Families can speak directly with Anette regarding tours, questions, and care conversations.",
  },
  {
    title: "Comfortable Home Environment",
    text: "A calm Scottsdale home designed to feel elegant, peaceful, and welcoming.",
  },
  {
    title: "Thoughtful Next Steps",
    text: "We help families understand the process clearly, without pressure and without confusion.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Services"
        title="Personal support in an elegant home setting."
        text="Cactus Villa is built around comfort, clear communication, and thoughtful day-to-day care."
      />

      <section className="shell cards-grid">
        {services.map((service) => (
          <article key={service.title} className="feature-card">
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
