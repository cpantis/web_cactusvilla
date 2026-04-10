import "./globals.css";

export const metadata = {
  title: "Cactus Villa Luxury Assisted Living",
  description: "Boutique assisted living in Scottsdale, Arizona."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
