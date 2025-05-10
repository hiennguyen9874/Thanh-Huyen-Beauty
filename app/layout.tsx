import { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';

import SmoothScroll from '@/components/layout/SmoothScroll';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['vietnamese', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Thanh Huyền Beauty - Spa Chăm Sóc Da Chuyên Nghiệp',
  description:
    'Thanh Huyền Beauty Spa - Nơi chăm sóc da chuyên nghiệp với công nghệ hiện đại và đội ngũ chuyên viên giàu kinh nghiệm.',
  keywords: 'spa, chăm sóc da, trị mụn, dưỡng trắng, chống lão hóa, thanh huyền beauty',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://thanh-huyen-beauty.com/',
    title: 'Thanh Huyền Beauty - Spa Chăm Sóc Da Chuyên Nghiệp',
    description:
      'Thanh Huyền Beauty Spa - Nơi chăm sóc da chuyên nghiệp với công nghệ hiện đại và đội ngũ chuyên viên giàu kinh nghiệm.',
    siteName: 'Thanh Huyền Beauty',
    images: [
      {
        url: 'https://thanh-huyen-beauty.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thanh Huyền Beauty Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thanh Huyền Beauty - Spa Chăm Sóc Da Chuyên Nghiệp',
    description:
      'Thanh Huyền Beauty Spa - Nơi chăm sóc da chuyên nghiệp với công nghệ hiện đại và đội ngũ chuyên viên giàu kinh nghiệm.',
    images: ['https://thanh-huyen-beauty.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://thanh-huyen-beauty.com',
  },
  metadataBase: new URL('https://thanh-huyen-beauty.com'),
  manifest: '/manifest.json',
  themeColor: '#d6a863',
  appleWebApp: {
    title: 'Thanh Huyền Beauty',
    statusBarStyle: 'default',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d6a863" />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
