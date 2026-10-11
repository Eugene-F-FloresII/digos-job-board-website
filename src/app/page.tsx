import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { JobSearchForm } from '@/components/jobs/JobSearchForm';
import { JobSummaryRow } from '@/components/jobs/JobSummaryRow';
import { JOBS } from '@/lib/jobs';

export default function HomePage() {
  return (
    <div className="djb-container pb-12 pt-8 sm:pb-16 sm:pt-12">
      <section aria-labelledby="home-title" className="grid gap-5 border-b border-hairline pb-8 sm:grid-cols-[minmax(0,1.35fr)_minmax(240px,.65fr)] sm:items-end sm:pb-10">
        <div>
          <h1 id="home-title" className="mb-3 max-w-3xl text-[clamp(2.2rem,5vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.045em] text-ink">
            Find work that fits your day in Digos.
          </h1>
          <p className="mb-0 max-w-2xl text-base leading-7 text-body-strong sm:text-lg">
            Search by role and barangay. Compare pay, location, and how to get there before you apply.
          </p>
        </div>
        <p className="mb-1 flex items-start gap-3 border-l border-hairline pl-4 text-sm leading-6 text-body sm:justify-self-end">
          <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-ink" />
          <span><strong className="block font-medium text-ink">Local job listings</strong>Digos City, Davao del Sur</span>
        </p>
      </section>

      <section aria-label="Search local jobs" className="py-6 sm:py-7">
        <JobSearchForm compact />
      </section>

      <section aria-labelledby="open-jobs-title" className="mt-1">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-hairline pb-4">
          <div>
            <h2 id="open-jobs-title" className="mb-1 text-xl font-medium tracking-tight text-ink">Jobs open in Digos City</h2>
            <p className="mb-0 text-sm text-body">Pay, place, and commute details shown where provided.</p>
          </div>
          <span className="font-mono text-xs text-muted">{JOBS.length} sample opportunities</span>
        </div>

        <div className="hidden grid-cols-[1.25fr_.8fr_.8fr_1.15fr_auto] gap-4 py-3 text-xs font-medium text-muted sm:grid" aria-hidden="true">
          <span>Role and employer</span><span>Pay and period</span><span>Area</span><span>Getting there</span><span className="sr-only">Details</span>
        </div>
        <div>
          {JOBS.map((job) => <JobSummaryRow key={job.id} job={job} />)}
        </div>

        <div className="mt-6 max-w-3xl border-l border-hairline pl-4 text-sm leading-6 text-body">
          <p className="mb-1 font-medium text-body-strong">Employer document review</p>
          <p className="mb-0">“Documents reviewed” means the employer’s submitted business documents were checked by the platform. Jobs without this label remain available to browse.</p>
        </div>
      </section>

      <footer className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-hairline pt-5 text-sm text-body">
        <span className="mr-auto text-muted">DigosJobs · Local openings for Digos City</span>
        <Link href="/applicant" className="inline-flex min-h-11 items-center gap-1 underline decoration-hairline underline-offset-4 hover:text-ink">Already applied? View applications <ArrowRight aria-hidden="true" size={15} /></Link>
        <Link href="/employer" className="inline-flex min-h-11 items-center gap-1 underline decoration-hairline underline-offset-4 hover:text-ink">Posting a job? Employer portal <ArrowRight aria-hidden="true" size={15} /></Link>
      </footer>
    </div>
  );
}
