import { SectionHeading } from '@/components/SectionHeading';

const items = [
  ['24/7 Support', 'Attentive day and night support in a residential setting.'],
  ['Personal Care', 'Assistance tailored to daily routine, comfort, and independence.'],
  ['Meals & Hospitality', 'Warm, home-style dining and hospitality throughout the day.'],
  ['Family Communication', 'Clear, direct communication with Anette for tours and updates.'],
  ['Comfortable Living', 'Private and shared spaces designed to feel calm and welcoming.'],
  ['Scottsdale Location', 'A desirable location convenient for local families and visitors.'],
];

export default function ServicesPage() {
  return (
    <main className="section section-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Support designed around comfort, dignity, and peace of mind"
          text="Cactus Villa combines attentive care with the look and feel of a high-quality residential home."
        />
        <div className="cards-grid">
          {items.map(([title, text]) => (
            <article key={title} className="info-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
