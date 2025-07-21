'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter as FontSans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { cn } from '@/lib/utils';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html lang="en" className="dark" suppressHydrationWarning>
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
