import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Upload, Download } from 'lucide-react'

export default function EMRPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Electronic Medical Records</h1>
              <p className="text-slate-600 mt-1">Access and manage patient records</p>
            </div>
            <Button style={{ backgroundColor: '#065429' }} className="hover:opacity-90">
              <Upload className="h-4 w-4 mr-2" />
              Upload Record
            </Button>
          </div>

          {/* Recent Records */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { patient: 'Rajesh Kumar', record: 'Consultation Notes', date: 'Today', type: 'Notes' },
              { patient: 'Priya Sharma', record: 'Lab Report - Blood Test', date: 'Yesterday', type: 'Lab' },
              { patient: 'Amit Patel', record: 'X-Ray Report', date: '2 days ago', type: 'Imaging' },
              { patient: 'Sneha Reddy', record: 'Prescription', date: '3 days ago', type: 'Prescription' },
              { patient: 'Vikram Singh', record: 'Follow-up Notes', date: '1 week ago', type: 'Notes' },
              { patient: 'Anita Desai', record: 'ECG Report', date: '1 week ago', type: 'Test' },
            ].map((record, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                        <FileText className="h-6 w-6" style={{ color: '#065429' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{record.record}</h3>
                        <p className="text-sm text-slate-600 mt-1">Patient: {record.patient}</p>
                        <p className="text-xs text-slate-500 mt-1">{record.date} • {record.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <Button size="sm" className="flex-1 text-white hover:opacity-90" style={{ backgroundColor: '#033053' }}>View Record</Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
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
