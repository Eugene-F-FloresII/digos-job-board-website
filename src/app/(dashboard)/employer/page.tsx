import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Users, FileText, Plus, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function EmployerDashboard() {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-workspace-50">
      
      <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-workspace-900">Digos Central Mall</h1>
          <p className="text-sm text-workspace-500 mt-1">Employer Workspace</p>
        </div>
        <Button className="gap-2"><Plus className="w-4 h-4" /> Post Job</Button>
      </div>
      
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Table/List View */}
        <div className="bg-white border border-workspace-200 rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-workspace-200 bg-workspace-50 px-6 py-3 flex items-center justify-between">
            <h3 className="font-semibold text-sm text-workspace-700 uppercase tracking-wider">Active Listings</h3>
            <Badge variant="default">2 Total</Badge>
          </div>
          
          <div className="divide-y divide-workspace-100">
            {/* Row 1 */}
            <div className="p-6 flex items-center justify-between hover:bg-workspace-50 transition-colors group cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-base font-bold text-workspace-900 group-hover:text-brand-600 transition-colors">Store Manager</h4>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-workspace-500">
                  <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Full-time</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 12 Applicants</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-workspace-400">Posted Oct 1</span>
                <ChevronRight className="w-5 h-5 text-workspace-300" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="p-6 flex items-center justify-between hover:bg-workspace-50 transition-colors group cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-base font-bold text-workspace-900 group-hover:text-brand-600 transition-colors">Cashier</h4>
                  <Badge variant="default">Draft</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-workspace-500">
                  <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Part-time</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 0 Applicants</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-workspace-400">Last edited 2h ago</span>
                <ChevronRight className="w-5 h-5 text-workspace-300" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
