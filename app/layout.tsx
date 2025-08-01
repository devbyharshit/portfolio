import { Analytics } from '@vercel/analytics/react';
import { Oswald as FontSans, Nunito_Sans } from 'next/font/google';
import ClientLayout from './client-layout';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['700'],
  display: 'swap',
});

const fontNunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  weight: ['400'],
  display: 'swap',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Harshit Anand',
  url: 'https://www.your-domain.com',
  sameAs: ['https://www.github.com/your-username', 'https://www.linkedin.com/in/your-username'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${fontSans.variable} ${fontNunitoSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
