import { SectionHeading } from '@/components/SectionHeading';

export default function ContactPage() {
  return (
    <main className="section section-soft">
      <div className="container two-col contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Schedule a private tour with Anette"
            text="For questions, availability, and next steps, families can reach out directly by phone or email."
          />
          <div className="contact-box">
            <p><strong>Anette Giurgiu</strong></p>
            <p><a href="tel:7047265938">(704) 726-5938</a></p>
            <p><a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></p>
            <p>7366 E. Paradise Drive<br />Scottsdale, AZ 85260</p>
          </div>
        </div>

        <form className="form-card" action="mailto:anettegiurgiu@gmail.com" method="post" encType="text/plain">
          <label>
            Your Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone
            <input type="text" name="phone" placeholder="Phone number" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Email address" />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" placeholder="Tell us about your needs" />
          </label>
          <button className="btn btn-primary" type="submit">Request a Tour</button>
        </form>
      </div>
    </main>
  );
}
