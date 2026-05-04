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
      'Producto del norte tratado con respeto. Una casa donde el Atlántico llega cada día y la sobremesa nunca tiene prisa.',
    locale: 'es_ES',
    type: 'website'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Los Montes de Galicia',
  servesCuisine: ['Galician', 'Spanish'],
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  description:
    'Restaurante gallego en Madrid. Cocina tradicional, mariscos del día y carnes a la brasa.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
