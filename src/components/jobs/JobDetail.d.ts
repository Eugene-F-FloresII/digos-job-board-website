import type { JobPosting } from '@/lib/jobs';
interface JobDetailProps {
    job: JobPosting;
    onApply: () => void;
    saved: boolean;
    onToggleSaved: () => void;
    backHref: string;
    mobile?: boolean;
}
export declare function JobDetail({ job, onApply, saved, onToggleSaved, backHref, mobile }: JobDetailProps): import("react").JSX.Element;
export {};
