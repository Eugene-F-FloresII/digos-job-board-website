import Link from 'next/link';
import { ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react';
import type { JobPosting } from '@/lib/jobs';

interface JobSummaryRowProps {
  job: JobPosting;
  href?: string;
  compact?: boolean;
  selected?: boolean;
}

export function JobSummaryRow({ job, href = `/jobs?jobId=${job.id}`, compact = false, selected = false }: JobSummaryRowProps) {
  return (
    <Link
      href={href}
      scroll={false}
      className={`group relative block border-b border-hairline no-underline transition-colors duration-150 last:border-b-0 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-green ${
        selected ? 'border-l-4 border-l-green bg-green-soft/70' : 'border-l-4 border-l-transparent hover:bg-canvas/80'
      } ${compact ? 'px-3 py-4 sm:px-4' : 'px-4 py-4 sm:px-5 sm:py-5'}`}
      aria-current={selected ? 'true' : undefined}
    >
      {compact ? (
        <>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="m-0 text-base font-semibold text-ink">{job.title}</h3>
              <p className="mb-0 mt-1 text-sm text-body">{job.company}</p>
            </div>
            <span className="shrink-0 text-right font-mono text-sm font-medium text-ink">
              {job.salary}<span className="ml-1 block font-sans text-xs font-normal text-muted">{job.payPeriod ?? 'period not specified'}</span>
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-body">
            <span className="inline-flex items-center gap-1.5"><MapPin aria-hidden="true" size={15} />{job.location}</span>
            <span>{job.type}</span>
            <span>{job.commute}</span>
            {job.verified ? (
              <span className="inline-flex items-center gap-1 text-green"><ShieldCheck aria-hidden="true" size={14} />Documents reviewed</span>
            ) : <span className="text-muted">Verification not shown</span>}
          </div>
          {selected && <span className="mt-3 inline-flex items-center rounded-pill bg-white px-2.5 py-1 text-xs font-semibold text-green">Selected job</span>}
          <span className="sr-only">View {job.title} details</span>
        </>
      ) : (
        <div className="grid gap-2 sm:grid-cols-[1.25fr_.8fr_.8fr_1.15fr_auto] sm:items-center sm:gap-4">
          <div className="min-w-0">
            <h3 className="m-0 text-base font-semibold text-ink">{job.title}</h3>
            <p className="mb-0 mt-1 text-sm text-body">{job.company}</p>
            <p className="mb-0 mt-1 inline-flex items-center gap-1.5 text-xs text-green">
              {job.verified ? <><ShieldCheck aria-hidden="true" size={13} />Documents reviewed</> : <span className="text-muted">Verification not shown</span>}
            </p>
          </div>
          <div>
            <p className="mb-0 font-mono text-sm font-medium text-ink">{job.salary}</p>
            <p className="mb-0 mt-1 text-xs text-muted">{job.payPeriod ?? 'Period not specified'} · {job.type}</p>
          </div>
          <p className="mb-0 inline-flex items-center gap-1.5 text-sm text-body"><MapPin aria-hidden="true" size={15} />{job.location}</p>
          <div>
            <p className="mb-0 text-xs text-muted">Getting there</p>
            <p className="mb-0 mt-1 text-sm text-body-strong">{job.commute}</p>
          </div>
          <span className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-green">
            View details <ArrowUpRight aria-hidden="true" size={16} />
          </span>
        </div>
      )}
    </Link>
  );
}
