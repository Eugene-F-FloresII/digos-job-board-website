export function HomeTrustSection() {
  return (
    <section aria-label="How to find and apply for local work" className="border-y border-hairline bg-white">
      <div className="djb-container grid gap-8 py-10 sm:py-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start lg:py-[52px]">
        <div>
          <h2 className="mb-3 max-w-[600px] text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-[28px]">Browse first. Decide with the details.</h2>
          <p className="mb-0 max-w-[530px] text-sm leading-6 text-body sm:text-base sm:leading-7">
            Search by role and barangay, then compare pay, area, and the trip to work before choosing a listing.
          </p>
        </div>
        <div className="grid gap-6 border-t border-hairline pt-5 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <div>
            <h3 className="mb-2 text-base font-bold text-ink">No résumé required in the Talent Form</h3>
            <p className="mb-0 text-sm leading-6 text-body">The current form is a preview of the no-résumé flow. It checks required details but does not send or save them.</p>
          </div>
          <div>
            <h3 className="mb-2 text-base font-bold text-ink">What “Documents reviewed” means</h3>
            <p className="mb-0 text-sm leading-6 text-body">The employer’s submitted business documents were checked by the platform. Listings without the label remain available to browse.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
