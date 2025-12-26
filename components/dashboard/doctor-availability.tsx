import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, Video } from 'lucide-react'

interface Doctor {
  id: number
  name: string
  specialty: string
  status: 'online' | 'offline'
  nextPatient: string
  nextPatientTime?: string
  hasVideo?: boolean
  avatar?: string
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Rahul Mehta',
    specialty: 'Dr. Rahul Mehta',
    status: 'online',
    nextPatient: 'Aman Patel - Age 61',
    nextPatientTime: '10:30 AM',
    hasVideo: true,
    avatar: '/images/doctor1.jpg',
  },
  {
    id: 2,
    name: 'Sneha Kapoor',
    specialty: 'Dr. Sneha Kapoor',
    status: 'offline',
    nextPatient: 'Scheduled',
    avatar: '/images/doctor2.jpg',
  },
  {
    id: 3,
    name: 'Michael Green',
    specialty: 'Dr. Michael Green',
    status: 'online',
    nextPatient: '1pm',
    nextPatientTime: '10:30 AM',
    avatar: '/images/doctor3.jpg',
  },
]

export function DoctorAvailability() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Doctor Availability</CardTitle>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <button className="hover:text-blue-600">← View</button>
            <button className="hover:text-blue-600">Online →</button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="pb-3 text-sm font-medium text-slate-600">Name</th>
                <th className="pb-3 text-sm font-medium text-slate-600">Specialty</th>
                <th className="pb-3 text-sm font-medium text-slate-600">Status</th>
                <th className="pb-3 text-sm font-medium text-slate-600">Next Patient</th>
                <th className="pb-3 text-sm font-medium text-slate-600">View All</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={doctor.avatar} alt={doctor.name} />
                        <AvatarFallback className="bg-slate-200 text-slate-600 text-xs">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-slate-900">{doctor.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-slate-600">{doctor.specialty}</td>
                  <td className="py-4">
                    <Badge 
                      variant={doctor.status === 'online' ? 'success' : 'outline'}
                      className={doctor.status === 'offline' ? 'bg-slate-100 text-slate-600' : ''}
                    >
                      ● {doctor.status === 'online' ? 'Online' : 'Offline'}
                    </Badge>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      {doctor.hasVideo && (
                        <Video className="h-4 w-4 text-blue-600" />
                      )}
                      {doctor.nextPatient === 'Scheduled' ? (
                        <div className="flex items-center gap-1.5 text-sm">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-blue-600">Scheduled</span>
                        </div>
                      ) : (
                        <div className="text-sm">
                          <span className="text-slate-900">{doctor.nextPatient}</span>
                          {doctor.nextPatientTime && (
                            <>
                              <span className="mx-1">-</span>
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">
                                {doctor.nextPatientTime}
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4">
                    {doctor.status === 'online' ? (
                      <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                        View EMR
                      </Button>
                    ) : (
                      <Button size="sm" variant="secondary" className="bg-green-500 hover:bg-green-600 text-white">
                        Online
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
