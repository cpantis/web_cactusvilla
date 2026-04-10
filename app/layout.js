import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Cactus Villa Luxury Assisted Living',
  description: 'Luxury assisted living in Scottsdale, Arizona. Speak directly with Anette for tours, questions, and next steps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
