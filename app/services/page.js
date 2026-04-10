
import Link from 'next/link'

export const metadata = {
  title: 'Services',
  description: 'Explore services at Cactus Villa, including attentive daily support, family communication, and a warm home environment.',
}

export default function ServicesPage() {
  const services = [
    ['Attentive Daily Support', 'Day-to-day assistance designed around comfort, dignity, and the needs of each resident.'],
    ['Warm Residential Setting', 'A boutique home atmosphere that feels peaceful, welcoming, and personal.'],
    ['Family Communication', 'Clear updates and direct access to Anette for tours, questions, and next steps.'],
    ['Tour Guidance', 'Private tours with a real person who can answer practical questions clearly and honestly.'],
    ['Comfort-Focused Living', 'Thoughtful spaces, calm surroundings, and a setting designed to feel like home.'],
    ['Scottsdale Location', 'A beautiful neighborhood setting that feels convenient, established, and serene.'],
  ]

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Thoughtful support in a calm, beautiful home.</h1>
          <p className="lead">Cactus Villa is centered on comfort, responsiveness, and a more personal experience for both residents and families.</p>
        </div>
      </section>

      <section className="section">
        <div className="container services-grid">
          {services.map(([title, text]) => (
            <div className="card service-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container card panel" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:20, flexWrap:'wrap'}}>
          <div>
            <h3 style={{marginBottom:8}}>Have questions about care or timing?</h3>
            <p style={{margin:0, color:'var(--muted)'}}>Speak directly with Anette for the fastest and most personal response.</p>
          </div>
          <div className="btn-row">
            <a className="btn btn--primary" href="tel:7047265938">Call Anette</a>
            <Link className="btn btn--secondary" href="/contact">Request a Tour</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
