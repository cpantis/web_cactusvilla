import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h1 className="page-title">Personal support in a warm residential setting.</h1>
            <p className="lead">Designed around comfort, dignity, communication, and attentive daily care.</p>
          </div>
        </section>

        <section className="section">
          <div className="container values">
            <div className="card service-card">
              <h3>Assisted Living Support</h3>
              <p className="body-md">Daily assistance tailored to each resident’s needs and routines.</p>
            </div>
            <div className="card service-card">
              <h3>Direct Family Communication</h3>
              <p className="body-md">Families can reach out directly to Anette for questions, updates, and next steps.</p>
            </div>
            <div className="card service-card">
              <h3>Comfortable Home Environment</h3>
              <p className="body-md">A boutique Scottsdale setting designed to feel calm, private, and welcoming.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
