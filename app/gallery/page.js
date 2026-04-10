import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function GalleryPage() {
  const items = [
    "Elegant exterior and entry",
    "Warm shared living spaces",
    "Comfortable private rooms",
    "Dining and gathering areas",
    "Outdoor seating and patio",
    "Thoughtful home details"
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Gallery</p>
            <h1 className="page-title">A look at the home-like setting families appreciate.</h1>
            <p className="lead">Replace these placeholders with your final property images whenever you’re ready.</p>
          </div>
        </section>

        <section className="section">
          <div className="container gallery-grid">
            {items.map((item) => (
              <div key={item} className="gallery-placeholder">{item}</div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
