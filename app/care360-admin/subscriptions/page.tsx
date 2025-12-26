import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { TrendingUp, Building2, CheckCircle, DollarSign } from 'lucide-react'

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Subscription Management</h1>
            <p className="text-slate-600 mt-1">Manage hospital subscriptions and billing</p>
          </div>

          {/* Revenue Overview */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Monthly Revenue</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">₹2.4L</p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#22C55E' }}>
                      <TrendingUp className="h-3 w-3" /> +12% vs last month
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                    <DollarSign className="h-6 w-6" style={{ color: '#22C55E' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Active Subscriptions</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                    <p className="text-xs text-slate-500 mt-1">All hospitals</p>
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
                    <p className="text-sm text-slate-600">Renewal Rate</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">98%</p>
                    <p className="text-xs mt-1" style={{ color: '#22C55E' }}>Excellent retention</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6" style={{ color: '#033053' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subscription Plans */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="border-2" style={{ borderColor: '#033053' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <Badge style={{ backgroundColor: '#033053' }}>Popular</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-slate-900">₹50,000</p>
                  <p className="text-sm text-slate-600">per month</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Unlimited users
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> 500+ beds support
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> 24/7 Priority support
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Custom integrations
                  </p>
                </div>
                <p className="text-sm font-semibold" style={{ color: '#033053' }}>3 hospitals subscribed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-slate-900">₹30,000</p>
                  <p className="text-sm text-slate-600">per month</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Up to 500 users
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> 200-500 beds
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Business hours support
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Standard integrations
                  </p>
                </div>
                <p className="text-sm font-semibold" style={{ color: '#033053' }}>5 hospitals subscribed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Standard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-slate-900">₹15,000</p>
                  <p className="text-sm text-slate-600">per month</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Up to 200 users
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Up to 200 beds
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Email support
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" style={{ color: '#22C55E' }} /> Basic features
                  </p>
                </div>
                <p className="text-sm font-semibold" style={{ color: '#22C55E' }}>4 hospitals subscribed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
