import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Users, Stethoscope } from 'lucide-react'

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Department Management</h1>
            <p className="text-slate-600 mt-1">Overview of all hospital departments</p>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { name: 'Cardiology', head: 'Dr. Rajesh Kumar', doctors: 12, patients: 45, beds: 35 },
              { name: 'Neurology', head: 'Dr. Priya Sharma', doctors: 8, patients: 32, beds: 28 },
              { name: 'Orthopedics', head: 'Dr. Amit Patel', doctors: 15, patients: 56, beds: 42 },
              { name: 'Pediatrics', head: 'Dr. Sneha Reddy', doctors: 10, patients: 38, beds: 30 },
              { name: 'Emergency', head: 'Dr. Vikram Singh', doctors: 18, patients: 28, beds: 25 },
              { name: 'General Medicine', head: 'Dr. Anita Desai', doctors: 20, patients: 64, beds: 50 },
            ].map((dept, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{dept.name}</CardTitle>
                      <p className="text-sm text-slate-600 mt-1">Head: {dept.head}</p>
                    </div>
                    <Activity className="h-8 w-8" style={{ color: '#2563eb' }} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Stethoscope className="h-5 w-5 mx-auto mb-2" style={{ color: '#2563eb' }} />
                      <p className="text-2xl font-bold text-slate-900">{dept.doctors}</p>
                      <p className="text-xs text-slate-600">Doctors</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Users className="h-5 w-5 mx-auto mb-2" style={{ color: '#22C55E' }} />
                      <p className="text-2xl font-bold text-slate-900">{dept.patients}</p>
                      <p className="text-xs text-slate-600">Patients</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <Activity className="h-5 w-5 mx-auto mb-2" style={{ color: '#2563eb' }} />
                      <p className="text-2xl font-bold text-slate-900">{dept.beds}</p>
                      <p className="text-xs text-slate-600">Beds</p>
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
