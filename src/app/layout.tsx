import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'G&A Foundation | Behavioral Health Access in the Bluegrass',
    template: '%s | G&A Foundation',
  },
  description:
    'G&A Foundation is a 501(c)(3) nonprofit working to expand access to mental health and substance abuse services across the Bluegrass region of Kentucky.',
  metadataBase: new URL('https://gandafoundation.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'G&A Foundation',
    title: 'G&A Foundation | Behavioral Health Access in the Bluegrass',
    description:
      'G&A Foundation is a 501(c)(3) nonprofit working to expand access to mental health and substance abuse services across the Bluegrass region of Kentucky.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
