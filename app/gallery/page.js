import { SectionHeading } from '@/components/SectionHeading';

const galleryItems = [
  ['Elegant Home Setting', 'Use this area to replace with real property photos once available.'],
  ['Warm Common Spaces', 'Designed to suggest the atmosphere families care about: calm, bright, comfortable.'],
  ['Private Comfort', 'A gallery can be updated later with actual rooms, outdoor space, and amenities.'],
  ['Outdoor Scottsdale Living', 'Prepared as a premium gallery layout that can easily be updated.'],
  ['Dining & Hospitality', 'The layout is ready for real photos or future CMS integration.'],
  ['Tour Experience', 'Highlight the best spaces families want to see first.'],
];

export default function GalleryPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A premium layout ready for real Cactus Villa photography"
          text="This page is intentionally structured so you can replace each tile with actual villa photos later without changing the design."
        />
        <div className="gallery-grid">
          {galleryItems.map(([title, text], idx) => (
            <div className="gallery-card" key={title}>
              <div className="gallery-placeholder">{String(idx + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
