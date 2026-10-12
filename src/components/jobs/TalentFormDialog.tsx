'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AREA_OPTIONS, type JobPosting } from '@/lib/jobs';

interface TalentFormDialogProps {
  open: boolean;
  job: JobPosting;
  onClose: () => void;
}

export function TalentFormDialog({ open, job, onClose }: TalentFormDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="talent-form-title"
      aria-modal="true"
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="m-auto max-h-[min(90dvh,820px)] w-[min(100%-24px,620px)] overflow-y-auto rounded-tile border border-hairline bg-white p-0 text-body shadow-dialog backdrop:bg-ink/35"
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-hairline bg-white/95 p-5 backdrop-blur-sm sm:p-6">
        <div>
          <p className="mb-1 text-sm text-body">Applying for <span className="font-semibold text-ink">{job.title}</span> · {job.company}</p>
          <h2 id="talent-form-title" className="mb-0 text-xl font-semibold text-ink">Digos Talent Form</h2>
          <p className="mb-0 mt-1 text-sm text-green">A résumé is optional.</p>
        </div>
        <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close application form" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control text-body transition-colors hover:bg-canvas hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">
          <X aria-hidden="true" size={18} />
        </button>
      </div>

      {submitted ? (
        <div role="status" aria-live="polite" className="space-y-4 p-5 sm:p-6">
          <div className="rounded-control border border-green/15 bg-green-soft/60 p-4">
            <h3 className="mb-2 text-lg font-semibold text-ink">Your details pass this demo form check</h3>
            <p className="mb-0 text-sm leading-6 text-body">No application has been sent. This prototype does not connect to an employer or save your details.</p>
          </div>
          <Button onClick={() => dialogRef.current?.close()}>Close</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          <div className="sm:col-span-2">
            <label htmlFor="applicant-name" className="djb-label">Full name <span aria-hidden="true" className="text-green">*</span></label>
            <input id="applicant-name" name="fullName" autoComplete="name" required className="djb-field" />
          </div>
          <div>
            <label htmlFor="applicant-phone" className="djb-label">Phone number <span aria-hidden="true" className="text-green">*</span></label>
            <input id="applicant-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[0-9+() -]{7,20}" aria-describedby="phone-help" className="djb-field" />
            <p id="phone-help" className="mb-0 mt-1 text-xs text-muted">Enter a number the employer can use to contact you.</p>
          </div>
          <div>
            <label htmlFor="applicant-area" className="djb-label">Current barangay or area <span aria-hidden="true" className="text-green">*</span></label>
            <select id="applicant-area" name="area" required defaultValue="" className="djb-field">
              <option value="" disabled>Select an area</option>
              {AREA_OPTIONS.map((area) => <option key={area}>{area}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="applicant-education" className="djb-label">Highest education <span aria-hidden="true" className="text-green">*</span></label>
            <input id="applicant-education" name="education" required className="djb-field" />
          </div>
          <div>
            <label htmlFor="applicant-resume" className="djb-label">Résumé <span className="font-normal text-muted">(optional)</span></label>
            <input id="applicant-resume" name="resume" type="file" accept=".pdf,application/pdf" className="djb-field file:mr-3 file:border-0 file:bg-transparent file:text-sm file:text-body" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="applicant-experience" className="djb-label">Skills and experience <span aria-hidden="true" className="text-green">*</span></label>
            <textarea id="applicant-experience" name="experience" rows={3} required className="djb-field min-h-24 py-2" />
          </div>
          <div className="space-y-3 border-t border-hairline pt-4 sm:col-span-2">
            <p className="mb-0 text-sm leading-6 text-body">Your résumé is optional. This local prototype will not upload or transmit your information.</p>
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="ghost" onClick={() => dialogRef.current?.close()}>Cancel</Button>
              <Button type="submit">Check required details</Button>
            </div>
          </div>
        </form>
      )}
    </dialog>
  );
}
