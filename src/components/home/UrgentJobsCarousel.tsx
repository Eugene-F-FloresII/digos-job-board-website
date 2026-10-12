'use client';

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { JOBS } from '@/lib/jobs';

export function UrgentJobsCarousel() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollState = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
    setCanScrollBack(rail.scrollLeft > 1);
    setCanScrollForward(rail.scrollLeft < maxScrollLeft - 1);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(rail);
    return () => {
      window.removeEventListener('resize', updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  function scrollByPage(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.85, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function handleRailKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowLeft' && canScrollBack) {
      event.preventDefault();
      scrollByPage(-1);
    }
    if (event.key === 'ArrowRight' && canScrollForward) {
      event.preventDefault();
      scrollByPage(1);
    }
  }

  return (
    <section aria-labelledby="urgent-title" className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-[84px] lg:px-10">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-5">
        <div>
          <h2 id="urgent-title" className="mb-2 text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl">Urgent hirings</h2>
          <p className="mb-0 text-sm leading-6 text-body sm:text-base">Illustrative sample listings. Urgency and current availability have not been confirmed.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/jobs" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-green underline decoration-hairline underline-offset-4 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
            Browse all jobs <span aria-hidden="true">→</span>
          </Link>
          <div className="flex items-center gap-2" aria-label="Carousel controls">
            <button type="button" aria-label="Previous sample jobs" onClick={() => scrollByPage(-1)} disabled={!canScrollBack} className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-hairline bg-white text-ink transition-colors hover:bg-green-soft disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
              <ChevronLeft aria-hidden="true" size={19} />
            </button>
            <button type="button" aria-label="Next sample jobs" onClick={() => scrollByPage(1)} disabled={!canScrollForward} className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-hairline bg-white text-ink transition-colors hover:bg-green-soft disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
              <ChevronRight aria-hidden="true" size={19} />
            </button>
          </div>
        </div>
      </div>

      <p className="mb-5 rounded-md border border-gold-border bg-gold-soft px-4 py-3 text-sm leading-6 text-gold-ink">
        <strong className="font-bold">Sample preview:</strong> Card order is illustrative only; it is not a live urgency signal, ranking, or recommendation.
      </p>

      <div
        ref={railRef}
        role="region"
        aria-label="Sample Digos job listings"
        aria-roledescription="carousel"
        tabIndex={0}
        onScroll={updateScrollState}
        onKeyDown={handleRailKeyDown}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green motion-reduce:scroll-auto"
      >
        {JOBS.map((job, index) => (
          <article key={job.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${JOBS.length} sample listings: ${job.title}`} className="flex min-h-[390px] w-[min(86vw,380px)] shrink-0 snap-start flex-col rounded-xl border border-hairline bg-white p-5 sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <Badge variant="success"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />Example listing</Badge>
              <Badge variant={job.verified ? 'default' : 'info'}>{job.verified ? 'Documents reviewed' : 'Verification not shown'}</Badge>
            </div>
            <h3 className="mb-1 text-2xl font-extrabold leading-tight tracking-[-0.025em] text-ink">{job.title}</h3>
            <p className="mb-5 text-sm text-body">{job.company}</p>
            <div className="mb-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-y border-hairline py-4">
              <span className="font-mono text-2xl font-medium tracking-tight text-ink">{job.salary}</span>
              <span className="text-sm text-muted">{job.payPeriod ?? 'Pay period not specified'}</span>
              <span className="ml-auto rounded-full bg-canvas px-2.5 py-1 text-xs font-medium text-body-strong">{job.type}</span>
            </div>
            <dl className="mb-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted">Area</dt>
                <dd className="m-0 text-sm font-medium text-body-strong">{job.location}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted">Getting there</dt>
                <dd className="m-0 text-sm font-medium text-body-strong">{job.commute}</dd>
              </div>
            </dl>
            <Link href={`/jobs?jobId=${job.id}`} className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-ink px-4 text-sm font-bold text-white no-underline transition-colors hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
              View details <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
      <div aria-hidden="true" className="mt-1 flex items-center gap-3">
        <span className="shrink-0 text-xs font-medium text-muted">Swipe or scroll to explore all {JOBS.length} examples</span>
        <span className="h-px flex-1 bg-hairline" />
      </div>
    </section>
  );
}
