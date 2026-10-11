import { Check } from 'lucide-react';
import { APPLICATION_DEMO } from '@/lib/jobs';

export function ApplicationTimeline() {
  return (
    <section aria-labelledby="application-history" className="border-t border-hairline px-5 py-5 sm:px-6">
      <h2 id="application-history" className="mb-4 text-sm font-medium text-ink">Application history</h2>
      <ol className="mb-0 space-y-4">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline bg-ink text-canvas" aria-hidden="true"><Check size={14} /></span>
          <div>
            <p className="mb-1 text-sm font-medium text-ink">Application submitted</p>
            <time className="font-mono text-xs text-muted">{APPLICATION_DEMO.submittedAt}</time>
          </div>
        </li>
        <li className="flex items-start gap-3" aria-current="step">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink text-ink" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-ink" /></span>
          <div>
            <p className="mb-1 text-sm font-medium text-ink">Under review <span className="ml-1 text-xs font-normal text-muted">Current status</span></p>
            <p className="mb-0 text-sm leading-6 text-body">{APPLICATION_DEMO.statusDescription}</p>
          </div>
        </li>
      </ol>
    </section>
  );
}
