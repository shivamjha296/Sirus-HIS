import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Plus } from 'lucide-react'

export default function MyAppointmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">My Appointments</h1>
              <p className="text-slate-600 mt-1">View and manage your appointments</p>
            </div>
            <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { doctor: 'Dr. Rajesh Kumar', specialization: 'Cardiologist', date: 'Dec 28, 2025', time: '10:00 AM', status: 'Confirmed' },
                  { doctor: 'Dr. Priya Sharma', specialization: 'Neurologist', date: 'Jan 5, 2026', time: '02:30 PM', status: 'Confirmed' },
                  { doctor: 'Dr. Amit Patel', specialization: 'Orthopedic', date: 'Jan 12, 2026', time: '11:00 AM', status: 'Pending' },
                ].map((appointment, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Calendar className="h-6 w-6" style={{ color: '#1FA34A' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{appointment.doctor}</p>
                        <p className="text-sm text-slate-600">{appointment.specialization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-medium text-slate-900">{appointment.date}</p>
                        <p className="text-sm text-slate-600 flex items-center gap-1 justify-end">
                          <Clock className="h-3 w-3" /> {appointment.time}
                        </p>
                      </div>
                      <Badge variant={appointment.status === 'Confirmed' ? 'success' : 'secondary'}>
                        {appointment.status}
                      </Badge>
                      <Button size="sm" variant="outline" style={{ borderColor: '#1FA34A', color: '#1FA34A' }} className="hover:bg-green-50">Reschedule</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Past Appointments */}
          <Card>
            <CardHeader>
              <CardTitle>Past Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { doctor: 'Dr. Rajesh Kumar', specialization: 'Cardiologist', date: 'Dec 20, 2025', time: '10:00 AM', status: 'Completed' },
                  { doctor: 'Dr. Sneha Reddy', specialization: 'Pediatrician', date: 'Nov 15, 2025', time: '03:00 PM', status: 'Completed' },
                ].map((appointment, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{appointment.doctor}</p>
                        <p className="text-sm text-slate-600">{appointment.specialization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-medium text-slate-900">{appointment.date}</p>
                        <p className="text-sm text-slate-600">{appointment.time}</p>
                      </div>
                      <Badge variant="secondary">{appointment.status}</Badge>
                      <Button size="sm" variant="outline">View Details</Button>
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
