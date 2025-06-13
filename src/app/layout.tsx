import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
// const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Duvano Studio - India’s First Indie Anime Studio',
  description: 'Join the team building a 40–50 minute anime movie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
          <ToastContainer position="top-center" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
