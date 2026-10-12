import Link from 'next/link';

const JOB_SEEKER_STEPS = [
  { title: 'Search by role and area.', description: 'Pick a keyword or barangay to explore local listings.' },
  { title: 'Compare the details.', description: 'Check pay, location, commute, and whether documents are reviewed.' },
  { title: 'Explore the Talent Form.', description: 'Open it from a listing that interests you.' },
];

const EMPLOYER_STEPS = [
  { title: 'Review the workspace.', description: 'See example published listings and a sample draft.' },
  { title: 'Explore a job draft.', description: 'Preview fields for role, pay, work setup, address, and description.' },
  { title: 'Try the sample draft form.', description: 'Enter details to see the local required-field check.' },
];

export function HomePathways() {
  return (
    <section aria-labelledby="pathways-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <h2 id="pathways-title" className="mb-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
          Looking for work or hiring?
        </h2>
        <p className="mb-0 text-sm leading-6 text-body-strong sm:text-base">
          Choose the path that fits. These steps describe the current DigosJobs preview.
        </p>
      </div>

      <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
        <article className="relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-5 shadow-[0_16px_38px_-30px_rgba(16,34,63,.45)] sm:p-8 lg:p-9">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-green" />
          <header className="mb-7">
            <span className="inline-flex rounded-full bg-green-soft px-3 py-1.5 text-sm font-bold text-green">For job seekers</span>
            <h3 className="mb-2 mt-5 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-[28px]">Find work that fits your day.</h3>
            <p className="mb-0 max-w-lg text-sm leading-6 text-body sm:text-base">Browse Digos listings first—no account needed in this preview.</p>
          </header>
          <ol className="mb-7 grid gap-5">
            {JOB_SEEKER_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green/20 bg-green-soft font-mono text-sm font-bold text-green">{index + 1}</span>
                <span className="pt-1 text-sm leading-6 text-body-strong sm:text-base"><strong className="font-bold text-ink">{step.title}</strong> {step.description}</span>
              </li>
            ))}
          </ol>
          <aside className="mb-7 rounded-xl border border-green/15 bg-green-soft/60 p-4 sm:p-5">
            <p className="mb-1 text-sm font-extrabold text-green">Preview note</p>
            <p className="mb-0 text-sm leading-6 text-body-strong">Browse without an account. A résumé is optional; required details are checked locally and are not sent or saved.</p>
          </aside>
          <Link href="/jobs" className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-lg bg-ink px-5 text-sm font-bold text-white no-underline transition-colors hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
            Browse local jobs <span aria-hidden="true">→</span>
          </Link>
        </article>

        <article className="relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-5 shadow-[0_16px_38px_-30px_rgba(16,34,63,.45)] sm:p-8 lg:p-9">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gold" />
          <header className="mb-7">
            <span className="inline-flex rounded-full bg-gold-soft px-3 py-1.5 text-sm font-bold text-gold-ink">For local employers</span>
            <h3 className="mb-2 mt-5 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-[28px]">Hiring in Digos?</h3>
            <p className="mb-0 max-w-lg text-sm leading-6 text-body sm:text-base">Preview the employer workspace and its sample listing tools.</p>
          </header>
          <ol className="mb-7 grid gap-5">
            {EMPLOYER_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-border bg-gold-soft font-mono text-sm font-bold text-gold-ink">{index + 1}</span>
                <span className="pt-1 text-sm leading-6 text-body-strong sm:text-base"><strong className="font-bold text-ink">{step.title}</strong> {step.description}</span>
              </li>
            ))}
          </ol>
          <aside className="mb-7 rounded-xl border border-gold-border bg-gold-soft/70 p-4 sm:p-5">
            <p className="mb-1 text-sm font-extrabold text-gold-ink">Preview note</p>
            <p className="mb-0 text-sm leading-6 text-body-strong">Drafts cannot be saved or published. Applicant details and review actions are not connected.</p>
          </aside>
          <Link href="/employer" className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-lg border border-hairline bg-white px-5 text-sm font-bold text-ink no-underline transition-colors hover:bg-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
            Open employer preview <span aria-hidden="true">→</span>
          </Link>
        </article>
      </div>
    </section>
  );
}
