"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Search, MapPin, Briefcase, Clock, ShieldCheck, BusFront, FileText, Send, Building2 } from 'lucide-react';
import Link from 'next/link';

// Dummy Data
const JOBS = [
  { id: 1, title: 'Store Manager', company: 'Digos Central Mall', salary: '₱15k - ₱20k / mo', location: 'Zone 1 (Poblacion)', commute: 'Walk from Public Market', verified: true, type: 'Full-time', posted: '2h ago' },
  { id: 2, title: 'Barista', company: 'Kapehan sa Digos', salary: '₱400 / day', location: 'Tres de Mayo', commute: '1 trike ride from Gaisano', verified: true, type: 'Daily Gig', posted: '5h ago' },
  { id: 3, title: 'Customer Service', company: 'Local Telco Branch', salary: '₱14k / mo', location: 'Matti Area', commute: 'Near Capitol', verified: true, type: 'Full-time', posted: '1d ago' },
  { id: 4, title: 'Delivery Rider', company: 'QuickDeliver', salary: '₱12k + tips', location: 'Cogon', commute: 'Has own motorcycle', verified: false, type: 'Contract', posted: '2d ago' },
];

function JobContent() {
  const searchParams = useSearchParams();
  const jobIdParam = searchParams.get('jobId');
  const activeJobId = jobIdParam ? parseInt(jobIdParam) : JOBS[0].id;
  const activeJob = JOBS.find(j => j.id === activeJobId) || JOBS[0];

  return (
    <div className="flex flex-col md:flex-row h-full bg-workspace-50">
      
      {/* LEFT PANE: Master List (35%) */}
      <div className="w-full md:w-[380px] lg:w-[420px] workspace-pane flex flex-col shrink-0">
        
        {/* Sticky Header / Filters */}
        <div className="p-4 border-b border-workspace-200 bg-white sticky top-0 z-10">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-workspace-400" />
            <input type="text" placeholder="Filter jobs (⌘K)" className="w-full pl-9 pr-3 py-2 bg-workspace-100 border-none rounded-md text-sm font-medium outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            <Badge variant="info">All (12)</Badge>
            <Badge variant="success">Verified</Badge>
            <Badge variant="default">Daily Gigs</Badge>
          </div>
        </div>

        {/* Scrollable Job List */}
        <div className="flex-1 overflow-y-auto">
          {JOBS.map((job) => {
            const isActive = job.id === activeJobId;
            return (
              <Link key={job.id} href={`/jobs?jobId=${job.id}`} scroll={false} className="block">
                <div className={isActive ? 'workspace-card-active' : 'workspace-card'}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`font-semibold ${isActive ? 'text-brand-900' : 'text-workspace-900'}`}>{job.title}</h3>
                    <span className="text-xs text-workspace-500">{job.posted}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-workspace-600 mb-2">
                    {job.company}
                    {job.verified && <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-bold text-workspace-900">{job.salary}</span>
                    <div className="flex items-center gap-1 text-xs font-medium text-workspace-500">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* RIGHT PANE: Details (65%) */}
      <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto bg-white relative hidden md:block">
        
        {/* Detail Header */}
        <div className="p-8 border-b border-workspace-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-xl bg-workspace-100 border border-workspace-200 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-workspace-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-workspace-900">{activeJob.title}</h1>
              <div className="flex items-center gap-2 text-workspace-600 mt-1">
                <span className="font-medium">{activeJob.company}</span>
                {activeJob.verified && <Badge variant="success" className="px-2 text-[10px]">Verified Employer</Badge>}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 bg-workspace-50 px-3 py-2 rounded-md border border-workspace-200">
              <Clock className="w-4 h-4 text-workspace-500" />
              <span className="text-sm font-semibold">{activeJob.salary}</span>
            </div>
            <div className="flex items-center gap-2 bg-workspace-50 px-3 py-2 rounded-md border border-workspace-200">
              <Briefcase className="w-4 h-4 text-workspace-500" />
              <span className="text-sm font-semibold">{activeJob.type}</span>
            </div>
            <div className="flex items-center gap-2 bg-workspace-50 px-3 py-2 rounded-md border border-workspace-200">
              <BusFront className="w-4 h-4 text-workspace-500" />
              <span className="text-sm font-semibold">{activeJob.commute}</span>
            </div>
          </div>
        </div>

        {/* Detail Body */}
        <div className="p-8 max-w-3xl space-y-8 pb-32">
          <section>
            <h3 className="text-lg font-bold mb-3 text-workspace-900">About the Role</h3>
            <p className="text-workspace-700 leading-relaxed text-sm">
              We are looking for a reliable and energetic individual to join our team in Digos City. You will be responsible for daily operations, ensuring customer satisfaction, and managing local inventory. This role requires someone who lives nearby and can commit to our standard operating hours.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-bold mb-3 text-workspace-900">Requirements</h3>
            <ul className="list-disc pl-5 text-workspace-700 text-sm space-y-2">
              <li>Must be a resident of Digos City (preferably near {activeJob.location}).</li>
              <li>At least 6 months of experience in a related field.</li>
              <li>Strong communication skills and customer-first attitude.</li>
              <li>Available to start immediately.</li>
            </ul>
          </section>
        </div>

        {/* Sticky Action Footer */}
        <div className="sticky bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-workspace-200 flex items-center justify-between z-10">
          <p className="text-sm text-workspace-500">Apply with your 1-Click Digital Bio-Data.</p>
          <div className="flex gap-3">
            <Button variant="outline">Save for later</Button>
            <Button className="gap-2"><Send className="w-4 h-4" /> Apply Now</Button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default function JobsSplitPane() {
  return (
    <Suspense fallback={<div className="p-8">Loading jobs...</div>}>
      <JobContent />
    </Suspense>
  );
}
