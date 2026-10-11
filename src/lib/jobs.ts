export type EmploymentType = 'Full-time' | 'Part-time' | 'Daily Gig' | 'Contract';
export type ApplicationStatus = 'submitted' | 'under-review';
export type ListingStatus = 'published' | 'draft';
export type JobFilter = 'all' | 'documents-reviewed' | 'daily-gig';

export interface JobPosting {
  id: number;
  title: string;
  company: string;
  salary: string;
  payPeriod: string | null;
  location: string;
  commute: string;
  verified: boolean;
  type: EmploymentType;
  posted: string;
}

export const JOBS: readonly JobPosting[] = [
  {
    id: 1,
    title: 'Store Manager',
    company: 'Digos Central Mall',
    salary: '₱15k–₱20k',
    payPeriod: 'per month',
    location: 'Zone 1 (Poblacion)',
    commute: 'Walk from Public Market',
    verified: true,
    type: 'Full-time',
    posted: '2h ago',
  },
  {
    id: 2,
    title: 'Barista',
    company: 'Kapehan sa Digos',
    salary: '₱400',
    payPeriod: 'per day',
    location: 'Tres de Mayo',
    commute: '1 trike ride from Gaisano',
    verified: true,
    type: 'Daily Gig',
    posted: '5h ago',
  },
  {
    id: 3,
    title: 'Customer Service',
    company: 'Local Telco Branch',
    salary: '₱14k',
    payPeriod: 'per month',
    location: 'Matti Area',
    commute: 'Near Capitol',
    verified: true,
    type: 'Full-time',
    posted: '1d ago',
  },
  {
    id: 4,
    title: 'Delivery Rider',
    company: 'QuickDeliver',
    salary: '₱12k + tips',
    payPeriod: null,
    location: 'Cogon',
    commute: 'Has own motorcycle',
    verified: false,
    type: 'Contract',
    posted: '2d ago',
  },
];

export const AREA_OPTIONS = Array.from(new Set(JOBS.map((job) => job.location)));


export interface ApplicationDemo {
  jobId: number;
  status: ApplicationStatus;
  submittedAt: string;
  statusDescription: string;
}

export const APPLICATION_DEMO: ApplicationDemo = {
  jobId: 1,
  status: 'under-review',
  submittedAt: 'Oct 2, 2026 · 10:00 AM',
  statusDescription: 'The employer is currently reviewing your profile.',
};

export interface EmployerListingDemo {
  id: number;
  title: string;
  status: ListingStatus;
  type: EmploymentType;
  applicants: number;
  postedOrEdited: string;
  salary?: string;
  location?: string;
}

export const EMPLOYER_LISTINGS: readonly EmployerListingDemo[] = [
  {
    id: 1,
    title: 'Store Manager',
    status: 'published',
    type: 'Full-time',
    applicants: 12,
    postedOrEdited: 'Posted Oct 1',
    salary: '₱15k–₱20k / month',
    location: 'Zone 1 (Poblacion)',
  },
  {
    id: 2,
    title: 'Cashier',
    status: 'draft',
    type: 'Part-time',
    applicants: 0,
    postedOrEdited: 'Last edited 2h ago',
  },
];

export function findJob(jobId: number | string | null | undefined): JobPosting | undefined {
  if (jobId == null || jobId === '') return undefined;
  return JOBS.find((job) => job.id === Number(jobId));
}
