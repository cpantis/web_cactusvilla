export const metadata = { title: 'Services | Cactus Villa' };

const services = [
  {
    title: 'Assisted Living Support',
    text: 'Daily support designed around each resident’s needs, routines, and level of independence.'
  },
  {
    title: 'Personalized Attention',
    text: 'An intimate setting where care can feel more personal, attentive, and relationship-based.'
  },
  {
    title: 'Comfortable Home Environment',
    text: 'Beautiful shared spaces and private areas that feel calm, residential, and welcoming.'
  },
  {
    title: 'Tour Guidance with Anette',
    text: 'Families can speak directly with Anette for questions, tours, and next steps without a confusing handoff.'
  }
];

export default function ServicesPage() {
  return (
    <main className="section container">
      <p className="eyebrow">Services</p>
      <h1>Thoughtful support in a beautiful, home-like setting.</h1>
      <div className="serviceGrid">
        {services.map((item) => (
          <article className="featureCard" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
