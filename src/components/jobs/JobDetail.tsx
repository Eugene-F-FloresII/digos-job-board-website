'use client';

import Link from 'next/link';
import { ArrowLeft, Bookmark, BriefcaseBusiness, MapPin, ShieldCheck, TrainFront } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { JobPosting } from '@/lib/jobs';

interface JobDetailProps {
  job: JobPosting;
  onApply: () => void;
  saved: boolean;
  onToggleSaved: () => void;
  backHref: string;
  mobile?: boolean;
}

export function JobDetail({ job, onApply, saved, onToggleSaved, backHref, mobile = false }: JobDetailProps) {
  return (
    <article className="flex min-h-full flex-col bg-white">
      {mobile && (
        <Link href={backHref} className="inline-flex min-h-11 items-center gap-2 px-4 pt-2 text-sm font-medium text-green no-underline hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:hidden">
          <ArrowLeft aria-hidden="true" size={17} />Back to jobs
        </Link>
      )}

      <div className="flex items-start justify-between gap-4 border-b border-hairline p-5 sm:p-6">
        <div className="min-w-0">
          <p className="mb-2 text-sm font-medium text-body">{job.company}</p>
          <h1 className="mb-2 text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-3xl">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-body">
            <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness aria-hidden="true" size={15} />{job.type}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin aria-hidden="true" size={15} />{job.location}</span>
          </div>
          <div className="mt-3">
            <Badge variant={job.verified ? 'success' : 'default'}>
              {job.verified && <ShieldCheck aria-hidden="true" size={13} />}
              {job.verified ? 'Employer documents reviewed' : 'Verification not shown'}
            </Badge>
          </div>
        </div>
        <button
          type="button"
          onClick={onToggleSaved}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`}
          title={saved ? 'Remove saved job for this page session' : 'Save job for this page session'}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-control border border-hairline bg-white text-body transition-colors hover:border-green/30 hover:bg-green-soft hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        >
          <Bookmark aria-hidden="true" size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-px bg-hairline sm:grid-cols-4">
        <Fact label="Pay" value={job.salary} detail={job.payPeriod ?? 'Period not specified'} mono />
        <Fact label="Area" value={job.location} detail="Digos City" />
        <Fact label="Getting there" value={job.commute} icon={<TrainFront aria-hidden="true" size={15} />} />
        <Fact label="Work setup" value="Not specified" detail="Confirm with employer" />
      </div>

      <div className="grid flex-1 gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(260px,.76fr)]">
        <section className="border-b border-hairline p-5 sm:p-6 lg:border-b-0 lg:border-r" aria-labelledby="listing-about">
          <h2 id="listing-about" className="mb-3 text-base font-semibold text-ink">About this listing</h2>
          <p className="mb-0 max-w-prose text-sm leading-6 text-body">
            A job-specific role description was not provided in this sample listing. Confirm the duties and details with the employer before making arrangements.
          </p>
        </section>
        <section className="p-5 sm:p-6" aria-labelledby="requirements-heading">
          <h2 id="requirements-heading" className="mb-2 text-base font-semibold text-ink">General sample requirements</h2>
          <p className="mb-3 text-sm leading-6 text-body">These are general sample requirements, not employer-specific qualifications.</p>
          <ul className="mb-0 space-y-2 pl-5 text-sm leading-6 text-body marker:text-green">
            <li>Resident of Digos City, preferably near Zone 1 (Poblacion).</li>
            <li>At least 6 months of related experience.</li>
            <li>Strong communication skills and a customer-first attitude.</li>
            <li>Available to start immediately.</li>
          </ul>
        </section>
      </div>

      <div className="sticky bottom-0 z-10 flex flex-col gap-3 border-t border-hairline bg-white p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between sm:px-6 md:static md:pb-4">
        <p className="mb-0 max-w-xl text-sm leading-5 text-body">Apply with the Digos Talent Form. A résumé is optional. Starting the form does not submit an application.</p>
        <Button size="lg" onClick={onApply} className="w-full shrink-0 sm:w-auto">Apply for {job.title}</Button>
      </div>
    </article>
  );
}

function Fact({ label, value, detail, icon, mono = false }: { label: string; value: string; detail?: string; icon?: React.ReactNode; mono?: boolean }) {
  return (
    <div className="min-w-0 bg-canvas p-3 sm:p-4">
      <p className="mb-1 text-xs font-medium text-muted">{label}</p>
      <p className={`mb-0 flex items-center gap-1.5 text-sm leading-5 text-ink ${mono ? 'font-mono font-medium' : 'font-semibold'}`}>
        {icon}{value}
      </p>
      {detail && <p className="mb-0 mt-1 text-xs leading-4 text-body">{detail}</p>}
    </div>
  );
}
