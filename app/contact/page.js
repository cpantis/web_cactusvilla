import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Schedule a tour or speak with Anette directly.</h1>
            <p className="lead">Families usually want a real conversation first. Reach out any time.</p>
          </div>
        </section>

        <section className="section">
          <div className="container grid-2">
            <div className="card contact-card">
              <h3>Direct Contact</h3>
              <div className="body-lg stack-md">
                <p><strong>Anette Giurgiu</strong></p>
                <p>(704) 726-5938</p>
                <p>anettegiurgiu@gmail.com</p>
                <p>7366 E. Paradise Drive<br />Scottsdale, AZ 85260</p>
              </div>
            </div>

            <div className="card contact-card">
              <h3>Request a Tour</h3>
              <form className="form" action="/api/inquiry" method="post">
                <input className="input" name="name" placeholder="Your name" />
                <input className="input" name="phone" placeholder="Phone number" />
                <input className="input" name="email" placeholder="Email address" />
                <textarea className="textarea" name="message" placeholder="How can Anette help?" />
                <button className="btn btn--primary" type="submit">Send Inquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
