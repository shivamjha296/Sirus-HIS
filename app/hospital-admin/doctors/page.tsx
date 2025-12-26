import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Stethoscope, Plus, Phone, Mail } from 'lucide-react'

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Doctor Management</h1>
              <p className="text-slate-600 mt-1">Manage medical staff and schedules</p>
            </div>
            <Button style={{ backgroundColor: '#2563eb' }} className="hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Add New Doctor
            </Button>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { 
                name: 'Dr. Rajesh Kumar', 
                specialization: 'Cardiologist',
                experience: '15 years',
                phone: '+91 98765 43210',
                email: 'rajesh.kumar@apollo.com',
                status: 'On Duty',
                patients: 32
              },
              { 
                name: 'Dr. Priya Sharma', 
                specialization: 'Neurologist',
                experience: '12 years',
                phone: '+91 98765 43211',
                email: 'priya.sharma@apollo.com',
                status: 'On Duty',
                patients: 28
              },
              { 
                name: 'Dr. Amit Patel', 
                specialization: 'Orthopedic Surgeon',
                experience: '18 years',
                phone: '+91 98765 43212',
                email: 'amit.patel@apollo.com',
                status: 'Off Duty',
                patients: 24
              },
              { 
                name: 'Dr. Sneha Reddy', 
                specialization: 'Pediatrician',
                experience: '10 years',
                phone: '+91 98765 43213',
                email: 'sneha.reddy@apollo.com',
                status: 'On Duty',
                patients: 35
              },
              { 
                name: 'Dr. Vikram Singh', 
                specialization: 'Emergency Medicine',
                experience: '8 years',
                phone: '+91 98765 43214',
                email: 'vikram.singh@apollo.com',
                status: 'On Duty',
                patients: 18
              },
              { 
                name: 'Dr. Anita Desai', 
                specialization: 'Gynecologist',
                experience: '14 years',
                phone: '+91 98765 43215',
                email: 'anita.desai@apollo.com',
                status: 'On Leave',
                patients: 22
              },
            ].map((doctor, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                        <Stethoscope className="h-8 w-8" style={{ color: '#2563eb' }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                        <p className="text-sm text-slate-600">{doctor.specialization}</p>
                        <p className="text-xs text-slate-500 mt-1">{doctor.experience} experience</p>
                      </div>
                    </div>
                    <Badge variant={
                      doctor.status === 'On Duty' ? 'success' :
                      doctor.status === 'Off Duty' ? 'secondary' : 'outline'
                    }>
                      {doctor.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <Phone className="h-4 w-4" /> {doctor.phone}
                    </p>
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <Mail className="h-4 w-4" /> {doctor.email}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-slate-600">Today's Patients</p>
                      <p className="text-2xl font-bold text-slate-900">{doctor.patients}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Schedule</Button>
                      <Button size="sm">View Profile</Button>
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
