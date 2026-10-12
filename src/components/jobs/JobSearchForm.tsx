import { Search } from 'lucide-react';
import { AREA_OPTIONS } from '@/lib/jobs';
import { withBasePath } from '@/lib/paths';

interface JobSearchFormProps {
  query?: string;
  area?: string;
  action?: string;
  compact?: boolean;
  homeHero?: boolean;
}

export function JobSearchForm({ query = '', area = 'all', action = '/jobs', compact = false, homeHero = false }: JobSearchFormProps) {
  const queryId = homeHero ? 'home-role-search' : compact ? 'home-query' : 'jobs-query';
  const areaId = homeHero ? 'home-area-search' : compact ? 'home-area' : 'jobs-area';

  return (
    <form action={withBasePath(action)} method="get" className={homeHero
      ? 'relative z-10 mx-auto -mt-[58px] grid w-[calc(100%-2.5rem)] max-w-[1280px] gap-4 rounded-xl border border-hairline bg-white p-4 shadow-[0_18px_48px_-26px_rgba(16,34,63,.30)] sm:w-[calc(100%-4rem)] sm:grid-cols-[minmax(0,1.3fr)_minmax(220px,.72fr)_auto] sm:items-end sm:p-5 lg:w-full lg:px-6 lg:py-5'
      : 'grid gap-4 rounded-tile border border-hairline bg-white p-4 sm:grid-cols-[minmax(0,1fr)_minmax(200px,.52fr)_auto] sm:items-end sm:p-5'}>
      <div>
        <label htmlFor={queryId} className="djb-label">Role or keyword</label>
        <div className="relative">
          <Search aria-hidden="true" size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id={queryId}
            name="q"
            type="search"
            defaultValue={query}
            placeholder="e.g. cashier, driver, barista"
            className={`djb-field pl-10 ${homeHero ? 'min-h-12' : ''}`}
          />
        </div>
      </div>
      <div>
        <label htmlFor={areaId} className="djb-label">Barangay or area</label>
        <select id={areaId} name="area" defaultValue={area} className={`djb-field ${homeHero ? 'min-h-12' : ''}`}>
          <option value="all">All areas in Digos City</option>
          {AREA_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
      <button type="submit" className={`inline-flex items-center justify-center gap-2 rounded-control bg-ink text-sm font-semibold text-white transition duration-150 ease-standard hover:bg-green active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green ${homeHero ? 'min-h-12 px-6' : 'min-h-11 px-5'}`}>
        <Search aria-hidden="true" size={16} />{compact ? 'Find jobs' : 'Search jobs'}
      </button>
    </form>
  );
}
