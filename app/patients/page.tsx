import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Calendar, 
  FileText, 
  Pill, 
  Heart,
  Download,
  Video,
  Bell,
  MessageSquare,
  Activity,
  Clock,
  Plus,
  CreditCard
} from 'lucide-react'

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          {/* Welcome Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                <AvatarImage src="/images/patient-avatar.jpg" />
                <AvatarFallback style={{ backgroundColor: '#1FA34A' }} className="text-white text-xl">
                  RK
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Welcome, Rajesh Kumar</h1>
                <p className="text-slate-600 mt-1">MRN: 2024-001234 • Last visit: Dec 20, 2025</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Video className="h-4 w-4 mr-2" />
                Tele-Consult
              </Button>
              <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90">
                <Plus className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Health Overview Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#1FA34A' }} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Upcoming</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">2</p>
                    <p className="text-xs text-slate-500 mt-1">Appointments</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5', color: '#1FA34A' }}>
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#1FA34A' }} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">3</p>
                    <p className="text-xs text-slate-500 mt-1">Prescriptions</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5', color: '#1FA34A' }}>
                    <Pill className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#1FA34A' }} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pending</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">5</p>
                    <p className="text-xs text-slate-500 mt-1">Lab Reports</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5', color: '#1FA34A' }}>
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#1FA34A' }} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Health Score</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">85</p>
                    <p className="text-xs mt-1" style={{ color: '#1FA34A' }}>Good ✓</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5', color: '#1FA34A' }}>
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column - Appointments & Documents */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        doctor: 'Dr. Priya Sharma', 
                        specialty: 'Cardiologist', 
                        date: 'Dec 28, 2025', 
                        time: '10:30 AM',
                        type: 'Follow-up',
                        status: 'Confirmed'
                      },
                      { 
                        doctor: 'Dr. Amit Verma', 
                        specialty: 'General Physician', 
                        date: 'Jan 05, 2026', 
                        time: '02:00 PM',
                        type: 'Consultation',
                        status: 'Confirmed'
                      },
                    ].map((apt, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-lg" style={{ borderLeftWidth: '4px', borderLeftColor: '#1FA34A', backgroundColor: '#D1FAE5' }}>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback style={{ backgroundColor: '#1FA34A' }} className="text-white">
                              {apt.doctor.split(' ')[1][0]}{apt.doctor.split(' ')[2]?.[0] || ''}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-900">{apt.doctor}</p>
                            <p className="text-sm text-slate-600">{apt.specialty}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="h-3 w-3 text-slate-500" />
                              <span className="text-xs text-slate-600">{apt.date} • {apt.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="success">{apt.status}</Badge>
                          <Button size="sm" variant="outline">Details</Button>
                          <Button size="sm" className="bg-red-500 hover:bg-red-600">Cancel</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Lab Reports */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Lab Reports</CardTitle>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ask AI
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Complete Blood Count (CBC)', date: 'Dec 20, 2025', status: 'Available', critical: false },
                      { name: 'Lipid Profile', date: 'Dec 18, 2025', status: 'Available', critical: false },
                      { name: 'Blood Sugar (Fasting)', date: 'Dec 15, 2025', status: 'Available', critical: true },
                      { name: 'Thyroid Function Test', date: 'Dec 10, 2025', status: 'Available', critical: false },
                      { name: 'Kidney Function Test', date: 'Pending', status: 'Processing', critical: false },
                    ].map((report, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                            report.critical ? 'bg-red-100' : ''
                          }`} style={!report.critical ? { backgroundColor: '#D1FAE5', color: '#1FA34A' } : {}}>
                            <Activity className={`h-5 w-5 ${report.critical ? 'text-red-600' : ''}`} style={!report.critical ? { color: '#1FA34A' } : {}} />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{report.name}</p>
                            <p className="text-sm text-slate-600">{report.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {report.critical && <Badge variant="destructive">Critical</Badge>}
                          <Badge variant={report.status === 'Available' ? 'success' : 'outline'}>
                            {report.status}
                          </Badge>
                          {report.status === 'Available' && (
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Medical History */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Medical History</CardTitle>
                    <Button variant="outline" size="sm">Upload Document</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: 'Diabetes Type 2', date: 'Diagnosed: Jan 2020', doctor: 'Dr. Sharma' },
                      { title: 'Hypertension', date: 'Diagnosed: Mar 2019', doctor: 'Dr. Verma' },
                      { title: 'Appendectomy', date: 'Surgery: Jul 2018', doctor: 'Dr. Singh' },
                    ].map((history, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">{history.title}</p>
                          <p className="text-xs text-slate-600">{history.date} • {history.doctor}</p>
                        </div>
                        <Button size="sm" variant="ghost">View</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Actions & Reminders */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start hover:opacity-90" style={{ backgroundColor: '#1FA34A' }}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Video className="h-4 w-4 mr-2" />
                    Start Tele-Consult
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    View All Reports
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment History
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat with Support
                  </Button>
                </CardContent>
              </Card>

              {/* Health Reminders */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Health Reminders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#D1FAE5', borderColor: '#1FA34A', borderWidth: '1px' }}>
                    <Bell className="h-5 w-5 mt-0.5" style={{ color: '#1FA34A' }} />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Medication</p>
                      <p className="text-xs text-slate-600 mt-1">Take Metformin - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#D1FAE5', borderColor: '#1FA34A', borderWidth: '1px' }}>
                    <Activity className="h-5 w-5 mt-0.5" style={{ color: '#1FA34A' }} />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Exercise</p>
                      <p className="text-xs text-slate-600 mt-1">30 min walk - Evening</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#D1FAE5', borderColor: '#1FA34A', borderWidth: '1px' }}>
                    <FileText className="h-5 w-5 mt-0.5" style={{ color: '#1FA34A' }} />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Lab Test</p>
                      <p className="text-xs text-slate-600 mt-1">HbA1c due in 5 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Prescriptions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active Prescriptions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { medicine: 'Metformin 500mg', dosage: 'Twice daily', days: '15 days left' },
                    { medicine: 'Amlodipine 5mg', dosage: 'Once daily', days: '22 days left' },
                    { medicine: 'Aspirin 75mg', dosage: 'Once daily', days: '8 days left' },
                  ].map((med, idx) => (
                    <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: '#D1FAE5', borderColor: '#1FA34A', borderWidth: '1px' }}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-2">
                          <Pill className="h-4 w-4 mt-1" style={{ color: '#1FA34A' }} />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{med.medicine}</p>
                            <p className="text-xs text-slate-600">{med.dosage}</p>
                            <p className="text-xs mt-1" style={{ color: '#1FA34A' }}>{med.days}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline" size="sm">
                    Refill Prescription
                  </Button>
                </CardContent>
              </Card>

              {/* Billing Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Bills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Consultation</p>
                      <p className="text-xs text-slate-600">Dec 20, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">₹800</p>
                      <Badge variant="success" className="text-xs">Paid</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Lab Tests</p>
                      <p className="text-xs text-slate-600">Dec 18, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">₹2,400</p>
                      <Badge variant="success" className="text-xs">Paid</Badge>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    View All Bills
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
