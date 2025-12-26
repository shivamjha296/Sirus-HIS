import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Users, Search, Plus, Phone, Mail } from 'lucide-react'

export default function PatientsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Patient Management</h1>
              <p className="text-slate-600 mt-1">View and manage all patients</p>
            </div>
            <Button style={{ backgroundColor: '#2563eb' }} className="hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Add New Patient
            </Button>
          </div>

          {/* Search */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input placeholder="Search patients by name, ID, phone..." className="pl-10" />
                </div>
                <Button variant="outline">Filter</Button>
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
                  { id: 'P-2401', name: 'Rajesh Kumar', age: 45, gender: 'Male', phone: '+91 98765 43210', status: 'IPD', department: 'Cardiology' },
                  { id: 'P-2402', name: 'Priya Sharma', age: 32, gender: 'Female', phone: '+91 98765 43211', status: 'OPD', department: 'Neurology' },
                  { id: 'P-2403', name: 'Amit Patel', age: 28, gender: 'Male', phone: '+91 98765 43212', status: 'IPD', department: 'Orthopedics' },
                  { id: 'P-2404', name: 'Sneha Reddy', age: 55, gender: 'Female', phone: '+91 98765 43213', status: 'OPD', department: 'Pediatrics' },
                  { id: 'P-2405', name: 'Vikram Singh', age: 38, gender: 'Male', phone: '+91 98765 43214', status: 'Emergency', department: 'Emergency' },
                ].map((patient, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                        <Users className="h-6 w-6" style={{ color: '#2563eb' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{patient.name}</p>
                        <p className="text-sm text-slate-600">{patient.id} • {patient.age}Y/{patient.gender}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                          <Phone className="h-3 w-3" /> {patient.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Department</p>
                        <p className="font-medium text-slate-900">{patient.department}</p>
                      </div>
                      <Badge variant={
                        patient.status === 'IPD' ? 'default' :
                        patient.status === 'Emergency' ? 'destructive' : 'secondary'
                      }>
                        {patient.status}
                      </Badge>
                      <Button size="sm">View Details</Button>
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
