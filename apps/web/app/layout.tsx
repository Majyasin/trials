import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Woap - AI-Powered No-Code Backend Builder',
  description:
    'Build complete REST APIs, database models, and deployment configurations through a conversational AI interface.',
  keywords: [
    'no-code',
    'backend builder',
    'API generator',
    'database designer',
    'AI',
    'REST API',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
