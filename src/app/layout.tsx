import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/shared/providers';
import { Navbar } from '@/shared/components/navigation/Navbar';
import '@/shared/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RentFlow - Streamline Your Rental Process',
  description: 'The all-in-one platform for landlords and tenants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}