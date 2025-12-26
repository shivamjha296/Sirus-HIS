import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User } from 'lucide-react'

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Appointments</h1>
            <p className="text-slate-600 mt-1">Today's schedule and upcoming appointments</p>
          </div>

          {/* Today's Appointments */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule - December 26, 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { time: '09:00 AM', patient: 'Rajesh Kumar', age: 45, type: 'Follow-up', status: 'Completed' },
                  { time: '09:30 AM', patient: 'Priya Sharma', age: 32, type: 'New Consultation', status: 'Completed' },
                  { time: '10:00 AM', patient: 'Amit Patel', age: 28, type: 'Follow-up', status: 'In Progress' },
                  { time: '10:30 AM', patient: 'Sneha Reddy', age: 55, type: 'Routine Checkup', status: 'Waiting' },
                  { time: '11:00 AM', patient: 'Vikram Singh', age: 38, type: 'New Consultation', status: 'Scheduled' },
                  { time: '11:30 AM', patient: 'Anita Desai', age: 42, type: 'Follow-up', status: 'Scheduled' },
                  { time: '02:00 PM', patient: 'Suresh Kumar', age: 60, type: 'Routine Checkup', status: 'Scheduled' },
                  { time: '02:30 PM', patient: 'Kavita Singh', age: 35, type: 'New Consultation', status: 'Scheduled' },
                ].map((appointment, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Clock className="h-6 w-6" style={{ color: '#065429' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{appointment.patient}</p>
                        <p className="text-sm text-slate-600">{appointment.age}Y • {appointment.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Time</p>
                        <p className="font-medium text-slate-900">{appointment.time}</p>
                      </div>
                      <Badge variant={
                        appointment.status === 'Completed' ? 'success' :
                        appointment.status === 'In Progress' ? 'default' :
                        appointment.status === 'Waiting' ? 'warning' : 'secondary'
                      }>
                        {appointment.status}
                      </Badge>
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
