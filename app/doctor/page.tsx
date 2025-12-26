import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Calendar,
  Clock,
  Users,
  FileText,
  Activity,
  Plus,
  Video,
  AlertCircle,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          {/* Welcome Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome back, Dr. Mehta</h1>
              <p className="text-slate-600 mt-1">You have 12 appointments today • 3 pending cases</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Add Notes
              </Button>
              <Button style={{ backgroundColor: '#065429' }} className="hover:opacity-90 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Patient
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-l-4" style={{ borderLeftColor: '#033053' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Today's Appointments</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                    <p className="text-xs mt-1" style={{ color: '#8BC53F' }}>4 completed</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                    <Calendar className="h-6 w-6" style={{ color: '#065429' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: '#2563eb' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Patients</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">48</p>
                    <p className="text-xs text-slate-500 mt-1">OPD + IPD</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F7FEE7' }}>
                    <Users className="h-6 w-6" style={{ color: '#8BC53F' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: '#065429' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pending Cases</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">3</p>
                    <p className="text-xs text-orange-600 mt-1">Requires attention</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                    <Activity className="h-6 w-6" style={{ color: '#065429' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: '#1FA34A' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Consultations</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">156</p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#8BC53F' }}>
                      <TrendingUp className="h-3 w-3" /> This month
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F7FEE7' }}>
                    <FileText className="h-6 w-6" style={{ color: '#8BC53F' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Today's Appointments */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Today's Appointments</CardTitle>
                    <Badge>12 Total</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { time: '09:30 AM', patient: 'Rajesh Kumar', age: 45, type: 'Follow-up', status: 'completed', mrn: 'MRN-2401' },
                      { time: '10:00 AM', patient: 'Priya Sharma', age: 32, type: 'New Patient', status: 'completed', mrn: 'MRN-2402' },
                      { time: '10:30 AM', patient: 'Amit Patel', age: 58, type: 'Consultation', status: 'in-progress', mrn: 'MRN-2403' },
                      { time: '11:00 AM', patient: 'Sneha Gupta', age: 28, type: 'Follow-up', status: 'waiting', mrn: 'MRN-2404' },
                      { time: '11:30 AM', patient: 'Vikram Singh', age: 51, type: 'Emergency', status: 'waiting', mrn: 'MRN-2405' },
                      { time: '02:00 PM', patient: 'Anita Desai', age: 39, type: 'Tele-Consultation', status: 'scheduled', mrn: 'MRN-2406' },
                    ].map((apt, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-4 rounded-lg border-l-4`}
                        style={{
                          borderLeftColor: apt.status === 'completed' ? '#8BC53F' :
                            apt.status === 'in-progress' ? '#065429' :
                              apt.status === 'waiting' ? '#f97316' : '#cbd5e1',
                          backgroundColor: apt.status === 'completed' ? '#f0fdf4' :
                            apt.status === 'in-progress' ? '#ecfdf5' :
                              apt.status === 'waiting' ? '#ffedd5' : '#f8fafc'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-xs text-slate-600 font-medium">TIME</p>
                            <p className="text-sm font-bold text-slate-900">{apt.time}</p>
                          </div>
                          <div className="h-12 w-px bg-slate-300"></div>
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-slate-200 text-slate-700 text-sm">
                              {apt.patient.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-900">{apt.patient}</p>
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <span>{apt.age} years</span>
                              <span>•</span>
                              <span>{apt.mrn}</span>
                              {apt.type === 'Tele-Consultation' && (
                                <>
                                  <span>•</span>
                                  <Video className="h-3 w-3" />
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={
                            apt.status === 'completed' ? 'success' :
                              apt.status === 'in-progress' ? 'default' :
                                apt.status === 'waiting' ? 'warning' :
                                  'outline'
                          }>
                            {apt.status === 'in-progress' ? 'In Progress' :
                              apt.status === 'waiting' ? 'Waiting' :
                                apt.status === 'completed' ? 'Completed' : 'Scheduled'}
                          </Badge>
                          {apt.status !== 'completed' && (
                            <Button size="sm" style={{ backgroundColor: '#065429' }} className="hover:opacity-90">
                              {apt.status === 'in-progress' ? 'Continue' : 'Start'}
                            </Button>
                          )}
                          {apt.status === 'completed' && (
                            <Button size="sm" variant="outline">View EMR</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Cases */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Active Cases</CardTitle>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { patient: 'Ramesh Verma', diagnosis: 'Type 2 Diabetes', ward: 'Ward A-12', days: 3, status: 'Stable' },
                      { patient: 'Kavita Nair', diagnosis: 'Post-operative Care', ward: 'ICU-3', days: 2, status: 'Critical' },
                      { patient: 'Suresh Reddy', diagnosis: 'Hypertension', ward: 'Ward B-8', days: 5, status: 'Recovering' },
                    ].map((caseItem, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback style={{ backgroundColor: '#dcfce7', color: '#065429' }}>
                              {caseItem.patient.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-900">{caseItem.patient}</p>
                            <p className="text-sm text-slate-600">{caseItem.diagnosis}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-xs text-slate-600">Ward</p>
                            <p className="text-sm font-semibold text-slate-900">{caseItem.ward}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-slate-600">Days</p>
                            <p className="text-sm font-semibold text-slate-900">{caseItem.days}</p>
                          </div>
                          <Badge variant={
                            caseItem.status === 'Critical' ? 'destructive' :
                              caseItem.status === 'Stable' ? 'success' : 'default'
                          }>
                            {caseItem.status}
                          </Badge>
                          <Button size="sm" variant="outline">View</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start hover:opacity-90" style={{ backgroundColor: '#065429' }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Patient Notes
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    View EMR History
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Follow-up
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Video className="h-4 w-4 mr-2" />
                    Start Tele-Consult
                  </Button>
                </CardContent>
              </Card>

              {/* Pending Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pending Tasks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">Prescription Review</p>
                      <p className="text-xs text-slate-600 mt-1">3 pending prescriptions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#dcfce7', borderColor: '#8BC53F', borderWidth: '1px' }}>
                    <FileText className="h-5 w-5 mt-0.5" style={{ color: '#065429' }} />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">Discharge Summary</p>
                      <p className="text-xs text-slate-600 mt-1">2 patients ready for discharge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#dcfce7', borderColor: '#8BC53F', borderWidth: '1px' }}>
                    <CheckCircle className="h-5 w-5 mt-0.5" style={{ color: '#8BC53F' }} />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">Lab Reports</p>
                      <p className="text-xs text-slate-600 mt-1">5 new reports available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">This Week</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Total Appointments</p>
                      <p className="text-2xl font-bold mt-1" style={{ color: '#065429' }}>58</p>
                    </div>
                    <Calendar className="h-8 w-8 text-slate-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Avg. Wait Time</p>
                      <p className="text-2xl font-bold mt-1" style={{ color: '#8BC53F' }}>12m</p>
                    </div>
                    <Clock className="h-8 w-8 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
