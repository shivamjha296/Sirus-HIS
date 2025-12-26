import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Activity, FileText } from 'lucide-react'

export default function LabResultsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Lab Results</h1>
            <p className="text-slate-600 mt-1">View patient lab reports and test results</p>
          </div>

          {/* Lab Results */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                patient: 'Rajesh Kumar', 
                test: 'Complete Blood Count',
                date: 'Today',
                status: 'Ready',
                result: 'Normal'
              },
              { 
                patient: 'Priya Sharma', 
                test: 'CT Scan - Brain',
                date: 'Yesterday',
                status: 'Ready',
                result: 'Reviewed'
              },
              { 
                patient: 'Amit Patel', 
                test: 'X-Ray - Lumbar Spine',
                date: 'Today',
                status: 'Pending',
                result: 'In Progress'
              },
              { 
                patient: 'Sneha Reddy', 
                test: 'HbA1c Test',
                date: '2 days ago',
                status: 'Ready',
                result: 'Review Required'
              },
              { 
                patient: 'Vikram Singh', 
                test: 'Lipid Profile',
                date: '1 week ago',
                status: 'Ready',
                result: 'Normal'
              },
            ].map((lab, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Activity className="h-6 w-6" style={{ color: '#065429' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{lab.test}</h3>
                        <p className="text-sm text-slate-600">Patient: {lab.patient}</p>
                        <p className="text-xs text-slate-500 mt-1">{lab.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <Badge variant={lab.status === 'Ready' ? 'success' : 'secondary'}>
                          {lab.status}
                        </Badge>
                        <p className="text-sm text-slate-600 mt-2">{lab.result}</p>
                      </div>
                      <Button size="sm" style={{ backgroundColor: '#033053' }} className="text-white hover:opacity-90">
                        <FileText className="h-4 w-4 mr-2" />
                        View Report
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
