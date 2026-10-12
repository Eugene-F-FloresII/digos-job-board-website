import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ApplicationTimeline } from '@/components/applicant/ApplicationTimeline';
import { APPLICATION_DEMO, findJob } from '@/lib/jobs';

export default function ApplicantDashboard() {
  const job = findJob(APPLICATION_DEMO.jobId);

  if (!job) return null;

  return (
    <div className="djb-container pb-12 pt-6 sm:pb-16 sm:pt-9">
      <header className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-5">
        <div>
          <h1 className="mb-2 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">Your applications</h1>
          <p className="mb-0 text-sm text-body-strong sm:text-base">Check the latest status for jobs you’ve applied to.</p>
        </div>
        <Badge variant="info">Digos City</Badge>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(250px,.72fr)] lg:gap-8">
        <article className="min-w-0 overflow-hidden rounded-tile border border-hairline bg-white">
          <header className="border-b border-hairline bg-canvas/60 p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="mb-1 text-xl font-semibold text-ink">{job.title}</h2>
                <p className="mb-0 text-sm text-body">{job.company}</p>
              </div>
              <Badge variant="success"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />Under review</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-body">
              <span className="inline-flex items-center gap-1.5"><MapPin aria-hidden="true" size={15} />{job.location}</span>
              <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness aria-hidden="true" size={15} />{job.type}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-body-strong"><CalendarDays aria-hidden="true" size={14} />{APPLICATION_DEMO.submittedAt}</span>
            </div>
          </header>

          <div className="mx-5 mt-5 rounded-control border border-green/15 bg-green-soft/60 px-4 py-3 sm:mx-6">
            <h2 className="mb-1 text-sm font-semibold text-ink">Latest update</h2>
            <p className="mb-0 text-sm leading-6 text-body">Your application is under review. No further update is shown yet.</p>
          </div>
          <ApplicationTimeline />
          <div className="flex flex-wrap items-center gap-2 border-t border-hairline bg-canvas/40 px-5 py-4 sm:px-6">
            <Link href={`/jobs?jobId=${job.id}`} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-control bg-ink px-4 text-sm font-semibold text-white transition-colors hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:w-auto">View {job.title} job <ArrowRight aria-hidden="true" size={15} /></Link>
            <Link href="/jobs" className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-green underline decoration-hairline underline-offset-4 hover:text-ink">Browse more jobs</Link>
          </div>
        </article>

        <aside className="space-y-4 lg:pt-1">
          <section className="rounded-tile border border-hairline bg-white p-5" aria-labelledby="return-job-heading">
            <h2 id="return-job-heading" className="mb-2 text-base font-semibold text-ink">Return to the job</h2>
            <p className="mb-4 text-sm leading-6 text-body">Review the Store Manager listing and the details shared by Digos Central Mall.</p>
            <dl className="mb-4 space-y-2 border-y border-hairline py-3 text-sm">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3"><dt className="text-muted">Pay</dt><dd className="m-0 break-words text-right font-mono font-medium text-body-strong">{job.salary} / {job.payPeriod?.replace('per ', '')}</dd></div>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3"><dt className="text-muted">Area</dt><dd className="m-0 break-words text-right text-body-strong">{job.location}</dd></div>
            </dl>
            <Link href={`/jobs?jobId=${job.id}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-green underline decoration-hairline underline-offset-4 hover:text-ink">View Store Manager job <ArrowRight aria-hidden="true" size={15} /></Link>
          </section>

          <section className="rounded-tile border border-hairline bg-white p-5" aria-labelledby="while-waiting-heading">
            <h2 id="while-waiting-heading" className="mb-2 text-base font-semibold text-ink">While you wait</h2>
            <p className="mb-3 text-sm leading-6 text-body">Browse other openings in Digos City.</p>
            <Link href="/jobs" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-green underline decoration-hairline underline-offset-4 hover:text-ink">Find more jobs <ArrowRight aria-hidden="true" size={15} /></Link>
          </section>
        </aside>
      </div>
      <p className="mt-7 border-t border-hairline pt-4 text-xs leading-5 text-muted">Application status is shown as provided by the employer.</p>
    </div>
  );
}
