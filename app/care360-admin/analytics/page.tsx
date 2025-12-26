import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, TrendingUp, Activity } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Platform Analytics</h1>
            <p className="text-slate-600 mt-1">Comprehensive insights across all hospitals</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Total Revenue</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">₹28.8L</p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#22C55E' }}>
                      <TrendingUp className="h-3 w-3" /> +15.2%
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                    <TrendingUp className="h-6 w-6" style={{ color: '#22C55E' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Active Hospitals</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                    <p className="text-xs text-slate-500 mt-1">100% online</p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                    <Building2 className="h-6 w-6" style={{ color: '#033053' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Total Users</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">9,704</p>
                    <p className="text-xs mt-1" style={{ color: '#22C55E' }}>+234 this week</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-6 w-6" style={{ color: '#033053' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">System Uptime</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">99.8%</p>
                    <p className="text-xs mt-1" style={{ color: '#22C55E' }}>Excellent</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Activity className="h-6 w-6" style={{ color: '#033053' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Hospital Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Apollo Hospitals', metric: '95%', value: 95, color: '#033053' },
                    { name: 'Max Healthcare', metric: '92%', value: 92, color: '#033053' },
                    { name: 'Fortis Hospital', metric: '89%', value: 89, color: '#22C55E' },
                    { name: 'Manipal Hospital', metric: '87%', value: 87, color: '#033053' },
                  ].map((hospital, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{hospital.name}</span>
                        <span className="text-sm font-bold text-slate-900">{hospital.metric}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={hospital.color.startsWith('#') ? '' : hospital.color} style={hospital.color.startsWith('#') ? { backgroundColor: hospital.color, width: `${hospital.value}%` } : { width: `${hospital.value}%` }} className="h-2 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Growth Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: 'August', users: 8234, growth: '+8%' },
                    { month: 'September', users: 8756, growth: '+6%' },
                    { month: 'October', users: 9124, growth: '+4%' },
                    { month: 'November', users: 9456, growth: '+4%' },
                    { month: 'December', users: 9704, growth: '+3%' },
                  ].map((data, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">{data.month}</p>
                        <p className="text-sm text-slate-600">{data.users.toLocaleString()} users</p>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: '#22C55E' }}>{data.growth}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
