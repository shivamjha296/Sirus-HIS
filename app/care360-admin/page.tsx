import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, Users, DollarSign, Activity, Plus, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react'

export default function Care360AdminDashboard() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <MainContent>
        <div className="p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Care360 Platform Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage hospitals and platform operations</p>
            </div>
            <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Onboard New Hospital
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-l-4" style={{ borderLeftColor: '#033053' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Hospitals</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#22C55E' }}>
                      <TrendingUp className="h-3 w-3" /> +2 this month
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: '#2563eb' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Users</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">9,704</p>
                    <p className="text-xs text-slate-500 mt-1">Across all hospitals</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: '#065429' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Revenue (MRR)</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">₹2.4L</p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#22C55E' }}>
                      <TrendingUp className="h-3 w-3" /> +12% vs last month
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                    <DollarSign className="h-6 w-6" style={{ color: '#22C55E' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: '#1FA34A' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">System Health</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">99.8%</p>
                    <p className="text-xs" style={{ color: '#22C55E' }}>All systems operational</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hospitals List */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Onboarded Hospitals</CardTitle>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: 'Apollo Hospitals - Delhi',
                        location: 'New Delhi, India',
                        beds: 450,
                        users: 342,
                        status: 'Active',
                        plan: 'Enterprise',
                        onboarded: 'Jan 2024'
                      },
                      {
                        name: 'Max Healthcare - Mumbai',
                        location: 'Mumbai, India',
                        beds: 380,
                        users: 298,
                        status: 'Active',
                        plan: 'Professional',
                        onboarded: 'Feb 2024'
                      },
                      {
                        name: 'Fortis Hospital - Bangalore',
                        location: 'Bangalore, India',
                        beds: 320,
                        users: 256,
                        status: 'Active',
                        plan: 'Professional',
                        onboarded: 'Mar 2024'
                      },
                      {
                        name: 'Manipal Hospital - Chennai',
                        location: 'Chennai, India',
                        beds: 290,
                        users: 221,
                        status: 'Active',
                        plan: 'Standard',
                        onboarded: 'Apr 2024'
                      },
                      {
                        name: 'AIIMS - Hyderabad',
                        location: 'Hyderabad, India',
                        beds: 500,
                        users: 412,
                        status: 'Setup Pending',
                        plan: 'Enterprise',
                        onboarded: 'Dec 2024'
                      },
                    ].map((hospital, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#033053' }}>
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{hospital.name}</p>
                            <p className="text-sm text-slate-600">{hospital.location}</p>
                            <p className="text-xs text-slate-500 mt-0.5">Onboarded: {hospital.onboarded}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-sm text-slate-600">Beds</p>
                            <p className="font-semibold text-slate-900">{hospital.beds}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">Users</p>
                            <p className="font-semibold text-slate-900">{hospital.users}</p>
                          </div>
                          <div className="text-center">
                            <Badge variant={hospital.status === 'Active' ? 'success' : 'outline'}>
                              {hospital.status}
                            </Badge>
                            <p className="text-xs text-slate-600 mt-1">{hospital.plan}</p>
                          </div>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar Stats */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start hover:opacity-90" style={{ backgroundColor: '#033053', color: 'white' }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Onboard Hospital
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <DollarSign className="h-4 w-4 mr-2" />
                    View Subscriptions
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    Platform Analytics
                  </Button>
                </CardContent>
              </Card>

              {/* Subscription Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Subscription Plans</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#E0F2FE' }}>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Enterprise</p>
                      <p className="text-xs text-slate-600">3 hospitals</p>
                    </div>
                    <p className="text-lg font-bold" style={{ color: '#033053' }}>₹50k</p>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#DCFCE7' }}>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Professional</p>
                      <p className="text-xs text-slate-600">5 hospitals</p>
                    </div>
                    <p className="text-lg font-bold" style={{ color: '#22C55E' }}>₹30k</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Standard</p>
                      <p className="text-xs text-slate-600">4 hospitals</p>
                    </div>
                    <p className="text-lg font-bold" style={{ color: '#22C55E' }}>₹15k</p>
                  </div>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">System Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} />
                      <span className="text-sm text-slate-700">API Server</span>
                    </div>
                    <Badge variant="success">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} />
                      <span className="text-sm text-slate-700">Database</span>
                    </div>
                    <Badge variant="success">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} />
                      <span className="text-sm text-slate-700">Storage</span>
                    </div>
                    <Badge variant="success">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm text-slate-700">Backup</span>
                    </div>
                    <Badge variant="warning">In Progress</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Platform Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600">Total Beds</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">1,940</p>
                  <p className="text-xs text-slate-500 mt-1">Across all hospitals</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600">Total Doctors</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">523</p>
                  <p className="text-xs mt-1" style={{ color: '#22C55E' }}>+45 this month</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600">Total Patients</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">8,456</p>
                  <p className="text-xs mt-1" style={{ color: '#22C55E' }}>+234 this week</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600">Support Tickets</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">23</p>
                  <p className="text-xs text-orange-600 mt-1">12 pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainContent>
    </div>
  )
}
