import './globals.css';
import type { Metadata } from 'next';
import Header from './components/layout/navbar';
import Footer from './components/layout/footer';

export const metadata: Metadata = {
  title: 'Storo Grill',
  description: 'STORO GRILL & CAFE - Restaurant i Oslo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
