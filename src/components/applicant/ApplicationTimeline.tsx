import { Check, Circle } from 'lucide-react';
import { APPLICATION_DEMO } from '@/lib/jobs';

export function ApplicationTimeline() {
  return (
    <section aria-labelledby="application-history" className="border-t border-hairline px-5 py-5 sm:px-6">
      <h2 id="application-history" className="mb-4 text-sm font-semibold text-ink">Application history</h2>
      <ol className="mb-0 space-y-0">
        <li className="relative flex items-start gap-3 pb-5">
          <span className="absolute left-[11px] top-6 h-[calc(100%-4px)] w-px bg-hairline" aria-hidden="true" />
          <span className="relative mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-white" aria-hidden="true"><Check size={14} /></span>
          <div>
            <p className="mb-1 text-sm font-semibold text-ink">Application submitted</p>
            <time className="font-mono text-xs text-muted">{APPLICATION_DEMO.submittedAt}</time>
          </div>
        </li>
        <li className="relative flex items-start gap-3" aria-current="step">
          <span className="relative mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-green bg-white text-green" aria-hidden="true"><Circle size={8} fill="currentColor" /></span>
          <div>
            <p className="mb-1 text-sm font-semibold text-ink">Under review <span className="ml-1 text-xs font-normal text-muted">Current status</span></p>
            <p className="mb-0 text-sm leading-6 text-body">{APPLICATION_DEMO.statusDescription}</p>
          </div>
        </li>
      </ol>
    </section>
  );
}
