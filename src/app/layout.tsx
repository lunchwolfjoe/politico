import { Inter } from "next/font/google";
import { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#B91C1C',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://campaign.com'),
  title: "N. Lee Plumb | Leadership Forged in Service",
  description: "N. Lee Plumb: Leadership Forged in Service, Innovation Built on Experience. A battle-tested leader with military JAG Corps experience in both Army and Navy, and executive leadership at Walmart and Amazon.",
  keywords: "N. Lee Plumb, congress, campaign, veteran, JAG Corps, military, leadership, tech executive, Amazon, Walmart, conservative, innovation",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#B91C1C',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://campaign.com',
    siteName: 'N. Lee Plumb for Congress',
    title: 'N. Lee Plumb | Leadership Forged in Service',
    description: 'N. Lee Plumb: Leadership Forged in Service, Innovation Built on Experience. A battle-tested leader with military JAG Corps experience in both Army and Navy, and executive leadership at Walmart and Amazon.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N. Lee Plumb for Congress',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N. Lee Plumb | Leadership Forged in Service',
    description: 'N. Lee Plumb: Leadership Forged in Service, Innovation Built on Experience. A battle-tested leader with military JAG Corps experience in both Army and Navy, and executive leadership at Walmart and Amazon.',
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 