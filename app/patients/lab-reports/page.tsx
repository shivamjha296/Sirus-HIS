import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Activity, FileText, Download } from 'lucide-react'

export default function LabReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Lab Reports</h1>
            <p className="text-slate-600 mt-1">Access your laboratory test results</p>
          </div>

          {/* Lab Reports */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { test: 'Complete Blood Count (CBC)', date: 'Dec 18, 2025', status: 'Normal', lab: 'Apollo Diagnostics' },
              { test: 'Lipid Profile', date: 'Nov 20, 2025', status: 'Review Required', lab: 'Apollo Diagnostics' },
              { test: 'Liver Function Test (LFT)', date: 'Oct 15, 2025', status: 'Normal', lab: 'Apollo Diagnostics' },
              { test: 'Kidney Function Test', date: 'Sep 10, 2025', status: 'Normal', lab: 'Apollo Diagnostics' },
              { test: 'Thyroid Profile', date: 'Aug 5, 2025', status: 'Normal', lab: 'Apollo Diagnostics' },
            ].map((report, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Activity className="h-6 w-6" style={{ color: '#1FA34A' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{report.test}</h3>
                        <p className="text-sm text-slate-600">{report.lab} • {report.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={report.status === 'Normal' ? 'success' : 'warning'}>
                        {report.status}
                      </Badge>
                      <Button size="sm" variant="outline" style={{ borderColor: '#1FA34A', color: '#1FA34A' }} className="hover:bg-green-50">
                        <FileText className="h-4 w-4 mr-2" />
                        View Report
                      </Button>
                      <Button size="sm" style={{ backgroundColor: '#1FA34A' }} className="text-white hover:opacity-90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MainContent>
    </div>
  )
}
