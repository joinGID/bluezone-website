import { Playfair_Display, Montserrat } from "next/font/google";
import { Suspense } from "react";
import NavbarDesktop from '../shared/container/NavbarDesktop'
import NavbarMobile from '../shared/container/NavbarMobile'
import Footer from '../shared/container/Footer';
import SmoothScroll from "@/src/shared/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://bluezonehabitat.com"),
  title: {
    default: "BlueZone Habitat — Premium Eco-Luxury Villas in Manjeri, Kerala",
    template: "%s | BlueZone Habitat",
  },
  description:
    "Discover BlueZone Habitat — premium eco-luxury villas and apartments in Manjeri, Malappuram, Kerala. Sustainable architecture, modern amenities, and serene living by Infravision Developers.",
  keywords: [
    "BlueZone Habitat",
    "luxury villas Manjeri",
    "eco-luxury apartments Kerala",
    "premium homes Malappuram",
    "sustainable living Kerala",
    "villas in Manjeri",
    "apartments Malappuram",
    "Infravision Developers",
    "gated community Kerala",
    "green homes Manjeri",
  ],
  authors: [{ name: "BlueZone Habitat", url: "https://bluezonehabitat.com" }],
  creator: "Infravision Developers",
  publisher: "BlueZone Habitat",
  alternates: {
    canonical: "https://bluezonehabitat.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bluezonehabitat.com",
    title: "BlueZone Habitat — Premium Eco-Luxury Villas in Manjeri, Kerala",
    description:
      "Premium eco-luxury villas and apartments in Manjeri, Malappuram. Sustainable architecture with modern amenities.",
    siteName: "BlueZone Habitat",
    images: [
      {
        url: "/landing/infravision.png",
        width: 1200,
        height: 630,
        alt: "BlueZone Habitat — Eco-Luxury Living in Manjeri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueZone Habitat — Premium Eco-Luxury Villas in Manjeri",
    description:
      "Discover premium eco-luxury villas and apartments in Manjeri, Kerala. By Infravision Developers.",
    images: ["/landing/infravision.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logos/favIcon.png",
    apple: "/logos/favIcon.png",
  },
};

// JSON-LD structured data for Local Business SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "BlueZone Habitat",
  description:
    "Premium eco-luxury villas and apartments in Manjeri, Malappuram, Kerala. By Infravision Developers.",
  url: "https://bluezonehabitat.com",
  logo: "https://bluezonehabitat.com/logos/blueZoneLogo1.png",
  image: "https://bluezonehabitat.com/landing/infravision.png",
  telephone: "+91-7356523534",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manjeri",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    postalCode: "676121",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.1212,
    longitude: 76.1198,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={null}>
          <SmoothScroll>
            <NavbarDesktop />
            <NavbarMobile />
            {children}
            <Footer />
          </SmoothScroll>
        </Suspense>
      </body>
    </html>
  );
}
