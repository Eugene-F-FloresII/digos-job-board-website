import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FileText, CheckCircle2, Clock, Inbox, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ApplicantDashboard() {
  return (
    <div className="flex h-full bg-workspace-50">
      
      {/* Left Sidebar Menu */}
      <div className="w-64 border-r border-workspace-200 bg-workspace-100 p-4 shrink-0 hidden md:block">
        <div className="mb-8">
          <h2 className="text-sm font-bold text-workspace-500 uppercase tracking-wider mb-3">Your Portal</h2>
          <nav className="space-y-1">
            <Link href="#" className="flex items-center justify-between px-3 py-2 bg-white rounded-md border border-workspace-200 shadow-sm text-sm font-medium text-workspace-900">
              <span className="flex items-center gap-2"><Inbox className="w-4 h-4 text-workspace-400" /> My Pipeline</span>
              <Badge variant="info">1</Badge>
            </Link>
            <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-workspace-200 text-sm font-medium text-workspace-700">
              <FileText className="w-4 h-4 text-workspace-400" /> Digital Bio-Data
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold tracking-tight text-workspace-900 mb-6">Application Pipeline</h1>
        
        <div className="bg-white border border-workspace-200 rounded-lg overflow-hidden shadow-sm max-w-4xl">
          <div className="px-6 py-4 border-b border-workspace-100 flex items-center justify-between bg-workspace-50">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-workspace-900">Store Manager</h3>
              <Badge variant="warning">Under Review</Badge>
            </div>
            <span className="text-sm text-workspace-500">Applied 2 days ago</span>
          </div>
          
          <div className="p-6">
            <p className="text-sm font-medium text-workspace-600 mb-8">Digos Central Mall • Zone 1</p>
            
            {/* Minimalist Pipeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-workspace-200"></div>
              
              <div className="flex items-start gap-4 mb-6 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 z-10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-workspace-900">Application Submitted</h4>
                  <p className="text-xs text-workspace-500 mt-1">Oct 2, 2026 - 10:00 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6 relative">
                <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0 z-10">
                  <Clock className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-900">Under Review</h4>
                  <p className="text-xs text-brand-600/70 mt-1">Employer is currently reviewing your profile.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative opacity-50">
                <div className="w-8 h-8 rounded-full bg-workspace-100 border border-workspace-200 flex items-center justify-center shrink-0 z-10">
                  <div className="w-2 h-2 rounded-full bg-workspace-300"></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-workspace-500">Interview Stage</h4>
                  <p className="text-xs text-workspace-400 mt-1">Pending approval.</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="bg-workspace-50 px-6 py-3 border-t border-workspace-100 flex justify-end">
            <Button variant="outline" size="sm" className="gap-2">View Job Details <ChevronRight className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>

    </div>
  );
}
