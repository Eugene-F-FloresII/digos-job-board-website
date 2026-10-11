'use client';

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
    <header className="border-b border-hairline bg-canvas">
      <div className="djb-container flex min-h-[68px] flex-wrap items-center justify-between gap-x-5 max-md:gap-y-0 max-md:py-1">
        <Link href="/" className="flex min-h-11 items-center gap-3 text-ink no-underline" aria-label="DigosJobs home">
          <span className="flex h-8 w-8 items-center justify-center border border-muted text-sm font-medium" aria-hidden="true">D</span>
          <span className="font-medium tracking-tight">DigosJobs</span>
          <span className="hidden border-l border-hairline pl-3 text-sm text-muted sm:inline">Digos City</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm max-md:order-3 max-md:w-full max-md:justify-between max-md:gap-1 max-md:border-t max-md:border-hairline max-md:pt-1">
          {NAV_ITEMS.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex min-h-11 items-center border-b px-1 text-center no-underline transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                  active ? 'border-ink text-ink' : 'border-transparent text-body hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <span className="text-sm text-muted max-md:ml-auto md:hidden" aria-hidden="true">Digos City</span>
      </div>
    </header>
  );
}
