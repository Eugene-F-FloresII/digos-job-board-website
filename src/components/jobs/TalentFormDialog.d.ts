import { type JobPosting } from '@/lib/jobs';
interface TalentFormDialogProps {
    open: boolean;
    job: JobPosting;
    onClose: () => void;
}
export declare function TalentFormDialog({ open, job, onClose }: TalentFormDialogProps): import("react").JSX.Element;
export {};
