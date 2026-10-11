import { Search } from 'lucide-react';
import { AREA_OPTIONS } from '@/lib/jobs';

interface JobSearchFormProps {
  query?: string;
  area?: string;
  action?: string;
  compact?: boolean;
}

export function JobSearchForm({ query = '', area = 'all', action = '/jobs', compact = false }: JobSearchFormProps) {
  return (
    <form action={action} method="get" className="grid gap-4 border border-hairline bg-surface p-4 sm:grid-cols-[minmax(0,1fr)_minmax(200px,.52fr)_auto] sm:items-end sm:p-5">
      <div>
        <label htmlFor={compact ? 'home-query' : 'jobs-query'} className="djb-label">Role or keyword</label>
        <div className="relative">
          <Search aria-hidden="true" size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id={compact ? 'home-query' : 'jobs-query'}
            name="q"
            type="search"
            defaultValue={query}
            placeholder="e.g. cashier, driver, barista"
            className="djb-field pl-10"
          />
        </div>
      </div>
      <div>
        <label htmlFor={compact ? 'home-area' : 'jobs-area'} className="djb-label">Barangay or area</label>
        <select id={compact ? 'home-area' : 'jobs-area'} name="area" defaultValue={area} className="djb-field">
          <option value="all">All areas in Digos City</option>
          {AREA_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
      <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-ink px-5 text-sm font-medium text-canvas transition duration-150 ease-standard hover:bg-body-strong active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
        <Search aria-hidden="true" size={16} />{compact ? 'Find jobs' : 'Search jobs'}
      </button>
    </form>
  );
}
