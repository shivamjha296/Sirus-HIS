import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, Download, FileText } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
            <p className="text-slate-600 mt-1">Generate and download hospital reports</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { 
                title: 'Patient Statistics Report',
                description: 'Detailed patient admission and discharge statistics',
                icon: FileText,
                period: 'Last 30 days'
              },
              { 
                title: 'Revenue Report',
                description: 'Financial summary and billing analytics',
                icon: BarChart3,
                period: 'This month'
              },
              { 
                title: 'Department Performance',
                description: 'Performance metrics for all departments',
                icon: BarChart3,
                period: 'Last quarter'
              },
              { 
                title: 'Staff Attendance Report',
                description: 'Complete attendance and shift records',
                icon: FileText,
                period: 'This month'
              },
              { 
                title: 'Bed Occupancy Report',
                description: 'Ward-wise bed utilization statistics',
                icon: BarChart3,
                period: 'Last 7 days'
              },
              { 
                title: 'Inventory Report',
                description: 'Stock levels and pharmacy inventory',
                icon: FileText,
                period: 'Current'
              },
            ].map((report, idx) => {
              const Icon = report.icon
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Icon className="h-6 w-6" style={{ color: '#2563eb' }} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{report.title}</h3>
                          <p className="text-sm text-slate-600 mt-1">{report.description}</p>
                          <p className="text-xs text-slate-500 mt-2">Period: {report.period}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4 border-t">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">View Report</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </MainContent>
    </div>
  )
}
