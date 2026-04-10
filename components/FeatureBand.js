export default function FeatureBand() {
  const items = [
    {
      title: "Personal attention",
      text: "A smaller, home-like setting where residents are known personally and cared for with dignity.",
    },
    {
      title: "Visible point of contact",
      text: "Families can reach Anette directly for tours, questions, and next steps.",
    },
    {
      title: "Scottsdale location",
      text: "A beautiful neighborhood setting that feels calm, warm, and residential.",
    },
  ];

  return (
    <section className="feature-band">
      <div className="shell feature-grid">
        {items.map((item) => (
          <article key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
