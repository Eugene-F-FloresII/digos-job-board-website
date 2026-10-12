'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/jobs', label: 'Find jobs', match: (path: string) => path.startsWith('/jobs') },
  { href: '/applicant', label: 'Applications', match: (path: string) => path.startsWith('/applicant') },
  { href: '/employer', label: 'Employer portal', match: (path: string) => path.startsWith('/employer') },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={`sticky top-0 z-40 border-b border-hairline bg-white/95 backdrop-blur-sm ${pathname === '/' ? 'font-nunito' : ''}`}>
      <div className="djb-container flex min-h-[76px] flex-wrap items-center justify-between gap-x-6 max-md:gap-y-0 max-md:py-1">
        <Link href="/" className="inline-flex min-h-11 shrink-0 items-center" aria-label="DigosJobs home">
          <Image
            src="/images/digosjobs-logo.png"
            alt="DigosJobs — Opportunities for everyone"
            width={672}
            height={224}
            priority
            className="h-auto w-[164px] sm:w-[190px]"
          />
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-2 text-sm max-md:order-3 max-md:w-full max-md:justify-between max-md:gap-1 max-md:border-t max-md:border-hairline max-md:pt-1 md:gap-5">
          {NAV_ITEMS.map((item) => {
            const active = item.match(pathname) || (pathname === '/' && item.href === '/jobs');
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex min-h-11 items-center rounded-control border-b-2 px-2 text-center no-underline transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:px-3 ${
                  active ? 'border-green bg-green-soft/60 font-semibold text-ink' : 'border-transparent text-body hover:bg-canvas hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <span className="ml-auto inline-flex items-center gap-2 text-xs font-medium text-body-strong max-md:hidden">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green" />
          Digos City
        </span>
      </div>
    </header>
  );
}
