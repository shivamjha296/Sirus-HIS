import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { 
  Users, 
  UserCog, 
  Stethoscope, 
  Bed, 
  Activity,
  TrendingUp,
  Calendar,
  BarChart3
} from 'lucide-react'

export default function HospitalAdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Apollo Hospital - Delhi</h1>
              <p className="text-slate-600 mt-1">Hospital Dashboard & Operations</p>
            </div>
            <Badge className="bg-green-500">Active</Badge>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#2563eb' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Patients</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">1,248</p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#22C55E' }}>
                      <TrendingUp className="h-3 w-3" /> +45 this week
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE', color: '#2563eb' }}>
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#2F7EA5' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Doctors</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">120</p>
                    <p className="text-xs text-slate-500 mt-1">85 on duty today</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE', color: '#2F7EA5' }}>
                    <Stethoscope className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#2F7EA5' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Bed Occupancy</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">73%</p>
                    <p className="text-xs text-slate-500 mt-1">328 of 450 beds</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE', color: '#2F7EA5' }}>
                    <Bed className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderLeftWidth: '4px', borderLeftColor: '#2F7EA5' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Staff</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">342</p>
                    <p className="text-xs text-slate-500 mt-1">Total employees</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE', color: '#2F7EA5' }}>
                    <UserCog className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Department Overview */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Department Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Cardiology', patients: 45, doctors: 12, occupancy: 85 },
                      { name: 'Neurology', patients: 32, doctors: 8, occupancy: 70 },
                      { name: 'Orthopedics', patients: 56, doctors: 15, occupancy: 92 },
                      { name: 'Pediatrics', patients: 38, doctors: 10, occupancy: 65 },
                      { name: 'Emergency', patients: 28, doctors: 18, occupancy: 55 },
                    ].map((dept, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div>
                          <p className="font-semibold text-slate-900">{dept.name}</p>
                          <p className="text-sm text-slate-600">{dept.doctors} doctors • {dept.patients} patients</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-slate-600">Occupancy</p>
                            <p className="text-lg font-bold text-slate-900">{dept.occupancy}%</p>
                          </div>
                          <Button size="sm" variant="outline">View</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Today's Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#DBEAFE' }}>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5" style={{ color: '#2563eb' }} />
                      <span className="text-sm font-medium text-slate-900">Appointments</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: '#2563eb' }}>248</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#DBEAFE' }}>
                    <div className="flex items-center gap-3">
                      <Activity className="h-5 w-5" style={{ color: '#2563eb' }} />
                      <span className="text-sm font-medium text-slate-900">OPD Visits</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: '#2563eb' }}>156</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#DBEAFE' }}>
                    <div className="flex items-center gap-3">
                      <Bed className="h-5 w-5" style={{ color: '#2563eb' }} />
                      <span className="text-sm font-medium text-slate-900">IPD Admissions</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: '#2563eb' }}>23</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#DBEAFE' }}>
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faIndianRupeeSign} className="h-5 w-5" style={{ color: '#2563eb' }} />
                      <span className="text-sm font-medium text-slate-900">Revenue</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: '#2563eb' }}>₹8.4L</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Add Patient
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Stethoscope className="h-4 w-4 mr-2" />
                    Manage Doctors
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Bed className="h-4 w-4 mr-2" />
                    Bed Allocation
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Reports
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
