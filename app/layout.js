
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import StickyCall from '@/components/StickyCall'

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Cactus Villa Luxury Assisted Living',
    template: '%s | Cactus Villa',
  },
  description: 'Luxury assisted living in Scottsdale, Arizona with a warm, boutique home environment and direct communication with Anette.',
  keywords: ['Assisted Living Scottsdale AZ', 'Luxury Assisted Living Scottsdale', 'Residential Assisted Living Scottsdale'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyCall />
      </body>
    </html>
  )
}
