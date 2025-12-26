import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Pill, Plus } from 'lucide-react'

export default function PrescriptionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Prescriptions</h1>
              <p className="text-slate-600 mt-1">Manage patient prescriptions</p>
            </div>
            <Button style={{ backgroundColor: '#065429' }} className="hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              New Prescription
            </Button>
          </div>

          {/* Recent Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { 
                    patient: 'Rajesh Kumar', 
                    medicines: 'Aspirin 75mg, Atorvastatin 20mg',
                    date: 'Today',
                    duration: '30 days',
                    status: 'Active'
                  },
                  { 
                    patient: 'Priya Sharma', 
                    medicines: 'Sumatriptan 50mg',
                    date: 'Yesterday',
                    duration: '15 days',
                    status: 'Active'
                  },
                  { 
                    patient: 'Amit Patel', 
                    medicines: 'Ibuprofen 400mg, Muscle Relaxant',
                    date: 'Today',
                    duration: '7 days',
                    status: 'Active'
                  },
                  { 
                    patient: 'Sneha Reddy', 
                    medicines: 'Metformin 500mg',
                    date: '3 days ago',
                    duration: '90 days',
                    status: 'Active'
                  },
                  { 
                    patient: 'Vikram Singh', 
                    medicines: 'Rosuvastatin 10mg',
                    date: '1 week ago',
                    duration: '60 days',
                    status: 'Completed'
                  },
                ].map((prescription, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Pill className="h-6 w-6" style={{ color: '#065429' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{prescription.patient}</p>
                        <p className="text-sm text-slate-600">{prescription.medicines}</p>
                        <p className="text-xs text-slate-500 mt-1">{prescription.date} • {prescription.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={prescription.status === 'Active' ? 'success' : 'secondary'}>
                        {prescription.status}
                      </Badge>
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm" style={{ backgroundColor: '#033053' }} className="text-white hover:opacity-90">Edit</Button>
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
