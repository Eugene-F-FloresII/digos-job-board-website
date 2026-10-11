import { Suspense } from 'react';
import { JobsWorkspace } from '@/components/jobs/JobsWorkspace';

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="djb-container py-8 text-sm text-body" role="status">Loading jobs…</div>}>
      <JobsWorkspace />
    </Suspense>
  );
}
