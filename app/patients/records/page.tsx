import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download } from 'lucide-react'

export default function HealthRecordsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Health Records</h1>
            <p className="text-slate-600 mt-1">View your complete medical history</p>
          </div>

          {/* Medical Records */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { type: 'Consultation', doctor: 'Dr. Rajesh Kumar', date: 'Dec 20, 2025', title: 'Cardiology Follow-up' },
              { type: 'Lab Report', doctor: 'Pathology Lab', date: 'Dec 18, 2025', title: 'Complete Blood Count' },
              { type: 'Prescription', doctor: 'Dr. Rajesh Kumar', date: 'Dec 20, 2025', title: 'Hypertension Medication' },
              { type: 'X-Ray Report', doctor: 'Radiology', date: 'Nov 25, 2025', title: 'Chest X-Ray' },
              { type: 'Consultation', doctor: 'Dr. Priya Sharma', date: 'Nov 10, 2025', title: 'Migraine Treatment' },
              { type: 'Lab Report', doctor: 'Pathology Lab', date: 'Oct 15, 2025', title: 'Lipid Profile' },
            ].map((record, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <FileText className="h-6 w-6" style={{ color: '#033053' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{record.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{record.doctor}</p>
                        <p className="text-xs text-slate-500 mt-1">{record.date} • {record.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <Button size="sm" className="flex-1 text-white hover:opacity-90" style={{ backgroundColor: '#033053' }}>View Record</Button>
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-blue-50" style={{ borderColor: '#033053', color: '#033053' }}>
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
