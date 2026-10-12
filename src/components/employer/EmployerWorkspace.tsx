'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Plus, X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EMPLOYER_LISTINGS, type EmployerListingDemo } from '@/lib/jobs';

type EmployerDialog = 'applicants' | 'draft' | 'new' | null;

export function EmployerWorkspace() {
  const [dialog, setDialog] = useState<EmployerDialog>(null);
  const [message, setMessage] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const published = EMPLOYER_LISTINGS.filter((listing) => listing.status === 'published');
  const drafts = EMPLOYER_LISTINGS.filter((listing) => listing.status === 'draft');

  useEffect(() => {
    const element = dialogRef.current;
    if (!element) return;
    if (dialog && !element.open) element.showModal();
    if (!dialog && element.open) element.close();
  }, [dialog]);

  function submitLocalDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('The sample draft form was checked. This prototype does not save drafts or publish jobs.');
  }

  function handleDialogClose() {
    setDialog(null);
    setMessage('');
  }

  function openDialog(next: Exclude<EmployerDialog, null>) {
    setMessage('');
    setDialog(next);
  }

  return (
    <>
      <div className="djb-container pb-12 pt-6 sm:pb-16 sm:pt-9">
        <header className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-5">
          <div>
            <h1 className="mb-2 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">Employer workspace</h1>
            <p className="mb-0 text-sm text-body-strong sm:text-base">Digos Central Mall · Digos City</p>
          </div>
          <Button size="md" onClick={() => openDialog('new')}><Plus aria-hidden="true" size={17} />Start a job draft</Button>
        </header>

        <section aria-labelledby="attention-heading" className="mb-7 rounded-tile border border-green/20 bg-green-soft/50 p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 id="attention-heading" className="mb-1 text-lg font-semibold text-ink">Needs your attention</h2>
              <p className="mb-0 text-sm text-body">Two next steps for your current listings.</p>
            </div>
            <span className="rounded-pill bg-white px-3 py-1 font-mono text-xs font-medium text-green">2 next steps</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-control border border-hairline bg-white p-4 sm:px-5">
              <div>
                <p className="mb-1 text-base font-semibold text-ink">Review Store Manager applicants</p>
                <p className="mb-0 text-sm text-body">12 applicants · Digos Central Mall</p>
              </div>
              <Button size="sm" onClick={() => openDialog('applicants')}>Review 12 applicants <ArrowRight aria-hidden="true" size={15} /></Button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-control border border-hairline bg-white p-4 sm:px-5">
              <div>
                <p className="mb-1 text-base font-semibold text-ink">Finish the Cashier listing</p>
                <p className="mb-0 text-sm text-body">Draft · Part-time · 0 applicants</p>
              </div>
              <Button size="sm" variant="outline" onClick={() => openDialog('draft')}>Continue Cashier draft <ArrowRight aria-hidden="true" size={15} /></Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="listings-heading">
          <header className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="listings-heading" className="mb-1 text-lg font-semibold text-ink">Job listings</h2>
              <p className="mb-0 text-sm text-body">Review published roles and unfinished drafts.</p>
            </div>
            <span className="font-mono text-xs text-muted">{EMPLOYER_LISTINGS.length} total · {published.length} published · {drafts.length} draft</span>
          </header>
          <div className="overflow-hidden rounded-tile border border-hairline bg-white">
            <ListingGroup title="Published" listings={published} onReview={() => openDialog('applicants')} onEdit={() => openDialog('draft')} />
            <ListingGroup title="Drafts" listings={drafts} onReview={() => openDialog('applicants')} onEdit={() => openDialog('draft')} />
          </div>
        </section>

        <p className="mt-7 max-w-3xl rounded-control border border-gold/40 bg-gold-soft/70 px-4 py-3 text-sm leading-6 text-body-strong">Include salary, job address, and work setup so local applicants can decide whether a role fits.</p>
        {message && <p role="status" aria-live="polite" className="mt-4 rounded-control border border-green/20 bg-green-soft px-4 py-3 text-sm leading-6 text-body-strong">{message}</p>}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="employer-dialog-title"
        aria-modal="true"
        onClose={handleDialogClose}
        onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}
        className="m-auto max-h-[min(90dvh,820px)] w-[min(100%-24px,640px)] overflow-y-auto rounded-tile border border-hairline bg-white p-0 text-body shadow-dialog backdrop:bg-ink/35"
      >
        <EmployerDialogContents dialog={dialog} message={message} onSubmit={submitLocalDraft} onClose={() => dialogRef.current?.close()} />
      </dialog>
    </>
  );
}

function ListingGroup({ title, listings, onReview, onEdit }: { title: string; listings: readonly EmployerListingDemo[]; onReview: () => void; onEdit: () => void }) {
  return (
    <section aria-label={title} className="border-b border-hairline last:border-b-0">
      <div className="flex items-center justify-between bg-canvas/70 px-4 py-3 sm:px-5">
        <h3 className="mb-0 text-sm font-semibold text-ink">{title}</h3>
        <span className="font-mono text-xs text-muted">{listings.length} {listings.length === 1 ? 'listing' : 'listings'}</span>
      </div>
      {listings.map((listing) => (
        <article key={listing.id} className="grid gap-3 border-t border-hairline px-4 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:px-5 sm:py-4">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
            <h4 className="mb-0 text-base font-semibold text-ink">{listing.title}</h4>
            <Badge variant={listing.status === 'published' ? 'success' : 'warning'}>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />{listing.status === 'published' ? 'Published' : 'Draft'}
            </Badge>
            <p className="mb-0 basis-full text-sm leading-6 text-body">
              {listing.type}{listing.salary ? ` · ${listing.salary}` : ''}{listing.location ? ` · ${listing.location}` : ''} · {listing.applicants} applicants · {listing.postedOrEdited}
            </p>
          </div>
          {listing.status === 'published' ? (
            <Button variant="ghost" onClick={onReview} className="justify-self-start sm:justify-self-end">View {listing.applicants} applicants <ArrowRight aria-hidden="true" size={15} /></Button>
          ) : (
            <Button variant="outline" onClick={onEdit} className="justify-self-start sm:justify-self-end">Continue editing <ArrowRight aria-hidden="true" size={15} /></Button>
          )}
        </article>
      ))}
      {listings.length === 0 && <p className="mb-0 px-4 py-4 text-sm text-muted sm:px-5">No {title.toLowerCase()} listings.</p>}
    </section>
  );
}

function EmployerDialogContents({ dialog, message, onSubmit, onClose }: { dialog: EmployerDialog; message: string; onSubmit: (event: FormEvent<HTMLFormElement>) => void; onClose: () => void }) {
  if (dialog === 'applicants') {
    return (
      <div>
        <div className="border-b border-hairline bg-canvas/50 p-5 sm:p-6">
          <p className="mb-1 text-sm text-body">Digos Central Mall</p>
          <h2 id="employer-dialog-title" className="mb-1 text-xl font-semibold text-ink">Store Manager applicants</h2>
          <p className="mb-0 text-sm text-body">12 applicants are listed in this sample.</p>
        </div>
        <div role="status" className="space-y-4 p-5 sm:p-6">
          <p className="mb-0 text-sm leading-6 text-body">Applicant profiles and review actions are not connected in this preview, so no candidate details are shown.</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4 border-b border-hairline bg-canvas/50 p-5 sm:p-6">
        <div>
          <p className="mb-1 text-sm text-body">{dialog === 'draft' ? 'Continue the saved sample draft' : 'Create a local sample draft'}</p>
          <h2 id="employer-dialog-title" className="mb-0 text-xl font-semibold text-ink">{dialog === 'draft' ? 'Cashier listing' : 'Start a job draft'}</h2>
        </div>
        <button type="button" onClick={onClose} aria-label="Close job draft form" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control text-body transition-colors hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"><X aria-hidden="true" size={18} /></button>
      </div>
      <form onSubmit={onSubmit} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
        <div className="sm:col-span-2"><label htmlFor="draft-title" className="djb-label">Job title <span aria-hidden="true" className="text-green">*</span></label><input id="draft-title" name="title" required defaultValue={dialog === 'draft' ? 'Cashier' : ''} className="djb-field" /></div>
        <div><label htmlFor="draft-salary" className="djb-label">Salary and pay period <span aria-hidden="true" className="text-green">*</span></label><input id="draft-salary" name="salary" required className="djb-field" placeholder="e.g. ₱15,000 per month" /></div>
        <div><label htmlFor="draft-work-setup" className="djb-label">Work setup</label><select id="draft-work-setup" name="workSetup" defaultValue="" className="djb-field"><option value="">Select setup</option><option>Face-to-face</option><option>Remote</option><option>Not specified</option></select></div>
        <div className="sm:col-span-2"><label htmlFor="draft-address" className="djb-label">Job address or area <span aria-hidden="true" className="text-green">*</span></label><input id="draft-address" name="address" required className="djb-field" placeholder="Barangay or work address" /></div>
        <div className="sm:col-span-2"><label htmlFor="draft-description" className="djb-label">Job description <span aria-hidden="true" className="text-green">*</span></label><textarea id="draft-description" name="description" rows={4} required className="djb-field min-h-28 py-2" /></div>
        <details className="rounded-control border border-hairline px-3 pt-1 sm:col-span-2">
          <summary className="min-h-11 cursor-pointer py-2 text-sm font-medium text-body-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-green">Optional applicant requirements</summary>
          <div className="mb-3 space-y-3"><p className="mb-0 text-sm text-body">Add up to two additional questions or attachment requests.</p><label htmlFor="draft-extra" className="djb-label">Additional requirement</label><input id="draft-extra" name="extraRequirement" className="djb-field" /></div>
        </details>
        <div className="space-y-3 border-t border-hairline pt-4 sm:col-span-2">
          {message ? <p role="status" aria-live="polite" className="mb-0 text-sm leading-6 text-body-strong">{message}</p> : <p className="mb-0 text-sm leading-6 text-body">This local preview will not save a job or publish it.</p>}
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><Button type="button" variant="ghost" onClick={onClose}>Close</Button><Button type="submit">Save sample draft</Button></div>
        </div>
      </form>
    </div>
  );
}
