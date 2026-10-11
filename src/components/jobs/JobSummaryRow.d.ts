import type { JobPosting } from '@/lib/jobs';
interface JobSummaryRowProps {
    job: JobPosting;
    href?: string;
    compact?: boolean;
    selected?: boolean;
}
export declare function JobSummaryRow({ job, href, compact, selected }: JobSummaryRowProps): import("react").JSX.Element;
export {};
