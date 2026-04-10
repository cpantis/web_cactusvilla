import PageIntro from "../../components/PageIntro";
import Image from "next/image";

const images = [
  { src: "/gallery-home-1.png", alt: "Cactus Villa exterior and interiors" },
  { src: "/gallery-home-2.png", alt: "Cactus Villa living and dining areas" },
  { src: "/gallery-home-3.png", alt: "Cactus Villa home collage" },
];

export default function GalleryPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Gallery"
        title="A look at the warm, residential style of Cactus Villa."
        text="These visuals reflect the calm, elegant, home-like feeling families can expect."
      />

      <section className="shell gallery-grid">
        {images.map((image) => (
          <div key={image.src} className="gallery-card">
            <Image src={image.src} alt={image.alt} width={1200} height={900} />
          </div>
        ))}
      </section>
    </main>
  );
}
