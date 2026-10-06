import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Search, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-workspace-50">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-workspace-900">
          Work at the speed of thought.
        </h1>
        <p className="text-xl text-workspace-600 max-w-xl mx-auto">
          The high-performance job directory for Digos City. No bloated pages, no spam—just instant access to verified local opportunities.
        </p>
        
        <div className="bg-white p-2 rounded-xl shadow-sm border border-workspace-200 flex flex-col md:flex-row gap-2 max-w-xl mx-auto mt-8">
          <div className="flex-1 flex items-center px-4 bg-workspace-50 rounded-lg border border-workspace-100">
            <Search className="w-5 h-5 text-workspace-400 mr-2" />
            <input type="text" placeholder="Role or keyword" className="bg-transparent h-12 w-full outline-none text-sm font-medium" />
          </div>
          <Link href="/jobs" className="w-full md:w-auto">
            <Button size="lg" className="w-full">Search Jobs</Button>
          </Link>
        </div>

        <div className="pt-12 flex items-center justify-center gap-8 text-sm font-medium text-workspace-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            100% Verified Employers
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-500"></div>
            Zero Page Reloads
          </div>
        </div>
      </div>
    </div>
  );
}
