import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Link from 'next/link';
import { LayoutGrid, Briefcase, UserCircle, Bell } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Digos Job Board | Workspace',
  description: 'A faster way to find jobs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen flex flex-col overflow-hidden`}>
        {/* Workspace Navigation Bar */}
        <header className="h-16 bg-workspace-900 text-white flex items-center justify-between px-4 shrink-0 border-b border-workspace-800">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center font-bold">D</div>
              <span className="font-semibold tracking-tight">DigosJobs</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <Link href="/jobs" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-workspace-800 transition-colors">
                <Briefcase className="w-4 h-4" /> Jobs
              </Link>
              <Link href="/applicant" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-workspace-800 transition-colors">
                <LayoutGrid className="w-4 h-4" /> Pipeline
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/employer" className="text-sm font-medium hover:text-brand-300 transition-colors hidden md:block">
              Employer Portal
            </Link>
            <div className="w-px h-5 bg-workspace-700 hidden md:block"></div>
            <button className="text-workspace-300 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 hover:bg-workspace-800 px-2 py-1 rounded-md transition-colors">
              <div className="w-7 h-7 rounded-full bg-workspace-700 flex items-center justify-center text-xs font-bold">
                JS
              </div>
            </button>
          </div>
        </header>

        {/* Main Application Area */}
        <main className="flex-1 flex flex-col h-[calc(100vh-64px)] overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
