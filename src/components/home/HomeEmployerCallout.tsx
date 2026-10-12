import Link from 'next/link';

export function HomeEmployerCallout() {
  return (
    <section aria-label="For local employers" className="djb-container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-9">
      <p className="mb-0 text-sm text-body sm:text-base">
        <span className="font-bold text-ink">Hiring in Digos?</span> Visit the employer portal to manage sample listings and drafts.
      </p>
      <Link href="/employer" className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-bold text-green underline decoration-hairline underline-offset-4 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
        Open employer portal <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
