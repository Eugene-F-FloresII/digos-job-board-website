import Image from 'next/image';
import Link from 'next/link';

export function HomeFooter() {
  return (
    <footer className="border-t-4 border-gold bg-ink text-white">
      <div className="djb-container grid gap-8 py-9 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:py-12">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <Image src="/images/digosjobs-logo.png" alt="DigosJobs" width={672} height={224} className="h-auto w-[148px] rounded-md bg-white px-2 py-1 sm:w-[164px]" />
          <div className="border-l-2 border-gold pl-4">
            <p className="mb-1 text-base font-extrabold tracking-[-0.02em] text-white sm:text-lg">DigosJobs · Local openings for Digos City</p>
            <p className="mb-0 text-sm text-white/75">Opportunities for everyone, close to home.</p>
          </div>
        </div>
        <nav aria-label="Footer navigation" className="grid gap-5 border-t border-white/20 pt-5 sm:grid-cols-2 sm:gap-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">Explore</p>
            <div className="flex flex-col gap-1">
              <Link href="/jobs" className="inline-flex min-h-11 items-center rounded-md pr-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">Find jobs <span aria-hidden="true" className="ml-2 text-gold">→</span></Link>
              <Link href="/applicant" className="inline-flex min-h-11 items-center rounded-md pr-3 text-sm font-semibold text-white/85 no-underline transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">Already applied? View applications</Link>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">For employers</p>
            <Link href="/employer" className="inline-flex min-h-11 items-center rounded-md pr-3 text-sm font-semibold text-white/85 no-underline transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">Employer portal <span aria-hidden="true" className="ml-2 text-gold">→</span></Link>
          </div>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="djb-container flex flex-col gap-1 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>Made for the Digos community</span>
          <span>Browse local work. Find your next step.</span>
        </div>
      </div>
    </footer>
  );
}
