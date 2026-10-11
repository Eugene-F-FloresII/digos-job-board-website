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
export declare const JOBS: readonly JobPosting[];
export declare const AREA_OPTIONS: string[];
export interface ApplicationDemo {
    jobId: number;
    status: ApplicationStatus;
    submittedAt: string;
    statusDescription: string;
}
export declare const APPLICATION_DEMO: ApplicationDemo;
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
export declare const EMPLOYER_LISTINGS: readonly EmployerListingDemo[];
export declare function findJob(jobId: number | string | null | undefined): JobPosting | undefined;
