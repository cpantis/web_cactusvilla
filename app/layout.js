export const metadata = {
  title: "Cactus Villa Luxury Assisted Living",
  description: "Luxury Assisted Living in Scottsdale, Arizona"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
