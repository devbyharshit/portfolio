'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { Oswald as FontSans } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
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

const queryClient = new QueryClient();

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
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
        suppressHydrationWarning
      >
        <QueryClientProvider client={queryClient}>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </QueryClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
