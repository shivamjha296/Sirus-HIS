import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Pill } from 'lucide-react'

export default function PrescriptionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Prescriptions</h1>
            <p className="text-slate-600 mt-1">View your current and past prescriptions</p>
          </div>

          {/* Active Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Active Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { medicine: 'Aspirin 75mg', dosage: '1 tablet daily', doctor: 'Dr. Rajesh Kumar', prescribed: 'Dec 20, 2025', duration: '30 days', status: 'Active' },
                  { medicine: 'Atorvastatin 20mg', dosage: '1 tablet at night', doctor: 'Dr. Rajesh Kumar', prescribed: 'Dec 20, 2025', duration: '30 days', status: 'Active' },
                  { medicine: 'Metoprolol 50mg', dosage: '1 tablet twice daily', doctor: 'Dr. Rajesh Kumar', prescribed: 'Dec 20, 2025', duration: '30 days', status: 'Active' },
                ].map((prescription, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Pill className="h-6 w-6" style={{ color: '#1FA34A' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{prescription.medicine}</p>
                        <p className="text-sm text-slate-600">{prescription.dosage}</p>
                        <p className="text-xs text-slate-500 mt-1">Prescribed by {prescription.doctor} • {prescription.prescribed}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Duration</p>
                        <p className="font-medium text-slate-900">{prescription.duration}</p>
                      </div>
                      <Badge variant="success">{prescription.status}</Badge>
                      <Button size="sm" variant="outline" style={{ borderColor: '#1FA34A', color: '#1FA34A' }} className="hover:bg-green-50">Refill</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Past Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Past Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { medicine: 'Sumatriptan 50mg', dosage: 'As needed for migraine', doctor: 'Dr. Priya Sharma', prescribed: 'Nov 10, 2025', status: 'Completed' },
                  { medicine: 'Ibuprofen 400mg', dosage: '1 tablet when needed', doctor: 'Dr. Amit Patel', prescribed: 'Oct 5, 2025', status: 'Completed' },
                ].map((prescription, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <Pill className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{prescription.medicine}</p>
                        <p className="text-sm text-slate-600">{prescription.dosage}</p>
                        <p className="text-xs text-slate-500 mt-1">Prescribed by {prescription.doctor} • {prescription.prescribed}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{prescription.status}</Badge>
                      <Button size="sm" style={{ backgroundColor: '#033053' }} className="text-white hover:opacity-90">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </MainContent>
    </div>
  )
}
