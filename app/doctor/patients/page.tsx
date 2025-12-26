import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function MyPatientsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Patients</h1>
            <p className="text-slate-600 mt-1">View and manage your patient list</p>
          </div>

          {/* Search */}
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search patients..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          {/* Patients List */}
          <Card>
            <CardHeader>
              <CardTitle>Active Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: 'P-2401', name: 'Rajesh Kumar', age: 45, gender: 'M', diagnosis: 'Hypertension', lastVisit: '2 days ago', status: 'Active' },
                  { id: 'P-2402', name: 'Priya Sharma', age: 32, gender: 'F', diagnosis: 'Migraine', lastVisit: '1 week ago', status: 'Active' },
                  { id: 'P-2403', name: 'Amit Patel', age: 28, gender: 'M', diagnosis: 'Back Pain', lastVisit: 'Today', status: 'Active' },
                  { id: 'P-2404', name: 'Sneha Reddy', age: 55, gender: 'F', diagnosis: 'Diabetes', lastVisit: '3 days ago', status: 'Active' },
                  { id: 'P-2405', name: 'Vikram Singh', age: 38, gender: 'M', diagnosis: 'Cholesterol', lastVisit: '1 week ago', status: 'Follow-up' },
                ].map((patient, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Users className="h-6 w-6" style={{ color: '#065429' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{patient.name}</p>
                        <p className="text-sm text-slate-600">{patient.id} • {patient.age}Y/{patient.gender}</p>
                        <p className="text-xs text-slate-500 mt-1">Last visit: {patient.lastVisit}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Diagnosis</p>
                        <p className="font-medium text-slate-900">{patient.diagnosis}</p>
                      </div>
                      <Badge variant={patient.status === 'Active' ? 'success' : 'secondary'}>
                        {patient.status}
                      </Badge>
                      <Button size="sm" style={{ backgroundColor: '#033053' }} className="text-white hover:opacity-90">View EMR</Button>
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
