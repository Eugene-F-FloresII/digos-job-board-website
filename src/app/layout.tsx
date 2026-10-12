import type { Metadata } from 'next';
import { DM_Mono, Inter, Nunito_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono', display: 'swap' });
const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-nunito-sans', display: 'swap', adjustFontFallback: false });

export const metadata: Metadata = {
  title: 'DigosJobs | Local jobs in Digos City',
  description: 'Browse job opportunities in Digos City by role, pay, area, and commute.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmMono.variable} ${nunitoSans.variable} min-h-screen bg-canvas font-sans text-body antialiased`}>
        <SiteHeader />
        <main className="min-h-[calc(100dvh-68px)]">{children}</main>
      </body>
    </html>
  );
}
