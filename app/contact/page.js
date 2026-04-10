
import InquiryForm from '@/components/InquiryForm'

export const metadata = {
  title: 'Contact',
  description: 'Contact Cactus Villa in Scottsdale, Arizona. Speak directly with Anette for tours, questions, and next steps.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Speak directly with Anette.</h1>
          <p className="lead">Families want a real person. At Cactus Villa, Anette is your visible point of contact for tours, questions, and next steps.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card card">
            <h3>Contact information</h3>
            <div className="contact-list">
              <div><strong>Anette Giurgiu</strong></div>
              <div><a href="tel:7047265938">(704) 726-5938</a></div>
              <div><a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></div>
              <div>7366 E. Paradise Drive<br />Scottsdale, AZ 85260</div>
            </div>
            <div className="notice" style={{marginTop:18}}>
              For the fastest response, please call Anette directly.
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
