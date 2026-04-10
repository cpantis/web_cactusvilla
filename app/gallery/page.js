
import Image from 'next/image'

export const metadata = {
  title: 'Gallery',
  description: 'Preview the warm, elegant style of Cactus Villa through curated exterior and interior imagery.',
}

const items = [
  ['/images/gallery/exterior-collage.png', 'Exterior and curb appeal'],
  ['/images/gallery/luxury-collage.png', 'Warm common areas and bright interiors'],
  ['/images/gallery/daylight-collage.png', 'Clean daylight views and welcoming spaces'],
  ['/images/gallery/interior-collage.png', 'Interior details and comfortable rooms'],
]

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>A visual feel for the home.</h1>
          <p className="lead">A curated look at the style, atmosphere, and warmth Cactus Villa is designed to offer.</p>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          {items.map(([src, caption]) => (
            <figure className="card gallery-item" key={src}>
              <Image src={src} alt={caption} width={1400} height={1000} />
              <figcaption className="caption">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}
