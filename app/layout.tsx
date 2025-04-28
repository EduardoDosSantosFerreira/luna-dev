import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { Poppins } from 'next/font/google'; // IMPORTA A FONTE

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // você pode ajustar os pesos conforme usar
});

export const metadata: Metadata = {
  title: 'LunaDev',
  description: 'Created with v0',
  generator: 'v0.dev',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Favicon padrão */}
        <link rel="icon" href="/images/luna-clean2.ico" type="image/x-icon" />
      </head>
      <body className={poppins.className}> {/* APLICA AQUI */}
        {children}
      </body>
    </html>
  );
}
