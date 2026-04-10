import Image from 'next/image';

export const metadata = { title: 'Gallery | Cactus Villa' };

const images = [
  ['Exterior', '/gallery/exterior.png'],
  ['Living Room', '/gallery/living.png'],
  ['Bedroom', '/gallery/bedroom.png'],
  ['Dining Area', '/gallery/dining.png'],
  ['Patio', '/gallery/patio.png'],
];

export default function GalleryPage() {
  return (
    <main className="section container">
      <p className="eyebrow">Gallery</p>
      <h1>Spaces designed to feel calm, bright, and welcoming.</h1>
      <div className="fullGallery">
        {images.map(([label, src]) => (
          <figure className="galleryFigure" key={src}>
            <Image src={src} alt={label} width={900} height={700} className="galleryPhoto" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
