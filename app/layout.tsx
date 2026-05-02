import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Los Montes de Galicia · Restaurante gallego en Madrid',
  description:
    'Cocina tradicional gallega en Madrid. Mariscos del día, carnes a la brasa y recetas de casa con producto llegado directamente del norte.',
  keywords: [
    'restaurante gallego Madrid',
    'Los Montes de Galicia',
    'marisco gallego Madrid',
    'vaca rubia gallega',
    'cocina tradicional gallega',
    'restaurante Galicia Madrid'
  ],
  openGraph: {
    title: 'Los Montes de Galicia · Restaurante gallego en Madrid',
    description:
      'Cocina tradicional gallega en Madrid. Mariscos del día, carnes a la brasa y recetas de casa.',
    type: 'website',
    locale: 'es_ES'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Los Montes de Galicia',
  servesCuisine: 'Gallega',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES'
  },
  description:
    'Restaurante gallego en Madrid. Mariscos del día, carnes a la brasa y recetas tradicionales.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
