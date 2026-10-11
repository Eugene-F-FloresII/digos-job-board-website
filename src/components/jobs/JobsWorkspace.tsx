'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { JobDetail } from '@/components/jobs/JobDetail';
import { JobSearchForm } from '@/components/jobs/JobSearchForm';
import { JobSummaryRow } from '@/components/jobs/JobSummaryRow';
import { TalentFormDialog } from '@/components/jobs/TalentFormDialog';
import { JOBS, type JobFilter, type JobPosting } from '@/lib/jobs';

function normalizeFilter(value: string | null): JobFilter {
  if (value === 'documents-reviewed' || value === 'daily-gig') return value;
  return 'all';
}

export function JobsWorkspace() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const area = searchParams.get('area') ?? 'all';
  const filter = normalizeFilter(searchParams.get('filter'));
  const requestedJobId = searchParams.get('jobId');
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [applicationJob, setApplicationJob] = useState<JobPosting | null>(null);

  const searchedJobs = useMemo(() => JOBS.filter((job) => {
    const matchesQuery = !query || `${job.title} ${job.company} ${job.location} ${job.commute}`.toLowerCase().includes(query.toLowerCase());
    const matchesArea = area === 'all' || job.location === area;
    return matchesQuery && matchesArea;
  }), [area, query]);

  const visibleJobs = useMemo(() => searchedJobs.filter((job) => {
    if (filter === 'documents-reviewed') return job.verified;
    if (filter === 'daily-gig') return job.type === 'Daily Gig';
    return true;
  }), [filter, searchedJobs]);

  const selectedInResults = visibleJobs.find((job) => String(job.id) === requestedJobId);
  const activeJob = selectedInResults ?? visibleJobs[0];
  const hasMobileSelection = Boolean(selectedInResults);
  const saved = Boolean(activeJob && savedIds.includes(activeJob.id));

  function withParams(changes: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(changes).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    const queryString = params.toString();
    return queryString ? `/jobs?${queryString}` : '/jobs';
  }

  function toggleSaved(id: number) {
    setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]);
  }

  const filters: { value: JobFilter; label: string; count: number }[] = [
    { value: 'all', label: 'All opportunities', count: searchedJobs.length },
    { value: 'documents-reviewed', label: 'Documents reviewed', count: searchedJobs.filter((job) => job.verified).length },
    { value: 'daily-gig', label: 'Daily gigs', count: searchedJobs.filter((job) => job.type === 'Daily Gig').length },
  ];

  return (
    <div className="djb-container pb-10 pt-7 sm:pb-12 sm:pt-9">
      <section className={`${hasMobileSelection ? 'hidden md:flex' : 'flex'} mb-5 flex-wrap items-end justify-between gap-3`}>
        <div>
          <h1 className="mb-2 text-3xl font-normal tracking-[-0.04em] text-ink sm:text-4xl">Find work that fits your day in Digos.</h1>
          <p className="mb-0 text-sm leading-6 text-body-strong sm:text-base">Compare pay, area, and the way to get there before you apply.</p>
        </div>
        <span className="font-mono text-xs text-muted">{visibleJobs.length} sample {visibleJobs.length === 1 ? 'opportunity' : 'opportunities'} shown</span>
      </section>

      <div className={hasMobileSelection ? 'hidden md:block' : 'block'}>
        <JobSearchForm query={query} area={area} />
      </div>

      <div className={`${hasMobileSelection ? 'hidden md:flex' : 'flex'} mt-4 flex-wrap items-center justify-between gap-3 border-b border-hairline pb-3`}>
        <nav aria-label="Filter jobs" className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <Link
              key={item.value}
              href={withParams({ filter: item.value === 'all' ? null : item.value, jobId: null })}
              scroll={false}
              aria-current={filter === item.value ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center gap-2 rounded-control border px-3 text-sm no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                filter === item.value ? 'border-ink bg-surface text-ink' : 'border-hairline text-body hover:bg-surface hover:text-ink'
              }`}
            >
              {item.label}<span className="font-mono text-xs text-muted">{item.count}</span>
            </Link>
          ))}
        </nav>
        <p className="mb-0 text-xs text-body">Browse first. No account is needed to view jobs.</p>
      </div>

      <div className="mt-4 grid gap-0 md:grid-cols-[minmax(310px,.76fr)_minmax(0,1.55fr)] md:items-stretch md:border md:border-hairline">
        <section aria-labelledby="results-heading" className={`${hasMobileSelection ? 'hidden' : 'block'} min-w-0 md:block md:border-r md:border-hairline`}>
          <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
            <h2 id="results-heading" className="mb-0 text-sm font-medium text-ink">Available jobs in Digos City</h2>
            <span className="font-mono text-xs text-muted">{visibleJobs.length} shown</span>
          </div>
          {visibleJobs.length ? (
            <div>
              {visibleJobs.map((job) => (
                <JobSummaryRow key={job.id} job={job} href={withParams({ jobId: String(job.id) })} compact selected={job.id === selectedInResults?.id} />
              ))}
            </div>
          ) : (
            <div className="p-5" role="status">
              <h3 className="mb-2 text-base font-medium text-ink">No jobs match these filters</h3>
              <p className="mb-3 text-sm leading-6 text-body">Try another role keyword or choose a different area.</p>
              <Link href="/jobs" className="inline-flex min-h-11 items-center text-sm text-ink underline underline-offset-4">Clear search and filters</Link>
            </div>
          )}
        </section>

        <section aria-label="Selected job details" className={`${hasMobileSelection ? 'block' : 'hidden'} min-w-0 md:block`}>
          {activeJob ? (
            <JobDetail
              key={activeJob.id}
              job={activeJob}
              onApply={() => setApplicationJob(activeJob)}
              saved={saved}
              onToggleSaved={() => toggleSaved(activeJob.id)}
              backHref={withParams({ jobId: null })}
              mobile={hasMobileSelection}
            />
          ) : (
            <div className="hidden min-h-full items-center justify-center p-8 text-sm text-body md:flex">Select a job to see its details.</div>
          )}
        </section>
      </div>

      {activeJob && <DemoSaveStatus saved={saved} />}
      {applicationJob && <TalentFormDialog open job={applicationJob} onClose={() => setApplicationJob(null)} />}
    </div>
  );
}

function DemoSaveStatus({ saved }: { saved: boolean }) {
  if (!saved) return null;
  return <p role="status" aria-live="polite" className="mt-3 text-xs text-muted">Saved for this page session only; this preview does not store saved jobs.</p>;
}
