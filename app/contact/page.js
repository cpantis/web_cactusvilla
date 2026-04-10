export const metadata = { title: 'Contact | Cactus Villa' };

export default function ContactPage() {
  return (
    <main className="section container contactPage">
      <div>
        <p className="eyebrow">Contact</p>
        <h1>Connect directly with Anette.</h1>
        <p className="lead">
          Families often want a direct conversation. At Cactus Villa, Anette is available
          for tours, questions, and next steps.
        </p>
        <div className="contactCard">
          <strong>Anette Giurgiu</strong>
          <span>Phone: <a href="tel:7047265938">(704) 726-5938</a></span>
          <span>Email: <a href="mailto:anettegiurgiu@gmail.com">anettegiurgiu@gmail.com</a></span>
          <span>Address: 7366 E. Paradise Drive, Scottsdale, AZ 85260</span>
        </div>
      </div>
      <form className="formCard">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Phone
          <input type="tel" placeholder="Your phone number" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Your email" />
        </label>
        <label>
          Message
          <textarea rows="6" placeholder="Tell us how Anette can help" />
        </label>
        <a className="button gold" href="mailto:anettegiurgiu@gmail.com?subject=Cactus%20Villa%20Tour%20Inquiry">Email This Inquiry</a>
      </form>
    </main>
  );
}
