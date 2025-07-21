import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Harshit Anand - Full-Stack Developer',
  description:
    'The portfolio of Harshit Anand, a senior software engineer with five years of React / Next.js experience and growing Java back-end skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
