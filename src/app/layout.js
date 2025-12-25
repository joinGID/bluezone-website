import { Playfair_Display, Montserrat } from "next/font/google";
import NavbarDesktop from '../shared/container/NavbarDesktop'
import NavbarMobile from '../shared/container/NavbarMobile'
import Footer from '../shared/container/Footer';
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: {
    default: "BlueZone - Your Space for Better Living",
    template: "%s | BlueZone",
  },
  description: "Experience the best in eco-luxury living spaces with BlueZone in Manjeri, Kerala. Sustainable homes designed for better living.",
  keywords: ["BlueZone", "Eco-Luxury", "Manjeri", "Kerala", "Sustainable Living", "Villas in Manjeri"],
  authors: [{ name: "BlueZone Team" }],
  creator: "BlueZone",
  publisher: "BlueZone",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bluezonehabitat.com",
    title: "BlueZone - Your Space for Better Living",
    description: "Experience the best in eco-luxury living spaces with BlueZone in Manjeri, Kerala.",
    siteName: "BlueZone",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueZone - Your Space for Better Living",
    description: "Experience the best in eco-luxury living spaces with BlueZone in Manjeri, Kerala.",
  },
  icons: {
    icon: "/logos/favIcon.png",
    apple: "/logos/favIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
      >
         <NavbarDesktop  />
            <NavbarMobile/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
