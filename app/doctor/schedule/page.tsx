import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Calendar } from 'lucide-react'

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Schedule</h1>
            <p className="text-slate-600 mt-1">View your weekly schedule and availability</p>
          </div>

          {/* Weekly Schedule */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { day: 'Monday', slots: '09:00 AM - 01:00 PM, 03:00 PM - 06:00 PM', patients: 12 },
              { day: 'Tuesday', slots: '09:00 AM - 01:00 PM, 03:00 PM - 06:00 PM', patients: 14 },
              { day: 'Wednesday', slots: '09:00 AM - 01:00 PM, 03:00 PM - 06:00 PM', patients: 11 },
              { day: 'Thursday', slots: '09:00 AM - 01:00 PM', patients: 8 },
              { day: 'Friday', slots: '09:00 AM - 01:00 PM, 03:00 PM - 06:00 PM', patients: 13 },
              { day: 'Saturday', slots: '09:00 AM - 12:00 PM', patients: 6 },
            ].map((schedule, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Calendar className="h-6 w-6" style={{ color: '#065429' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{schedule.day}</h3>
                        <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                          <Clock className="h-4 w-4" />
                          {schedule.slots}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold" style={{ color: '#8BC53F' }}>{schedule.patients}</p>
                      <p className="text-sm text-slate-600">Appointments</p>
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
