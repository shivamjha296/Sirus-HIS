import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { TrendingUp, CreditCard, Receipt } from 'lucide-react'

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Billing & Finance</h1>
            <p className="text-slate-600 mt-1">Manage hospital billing and payments</p>
          </div>

          {/* Revenue Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Today's Revenue</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">₹8.4L</p>
                <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#22C55E' }}>
                  <TrendingUp className="h-3 w-3" /> +12%
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Pending Payments</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">₹2.1L</p>
                <p className="text-xs text-slate-500 mt-1">45 invoices</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Collected</p>
                <p className="text-3xl font-bold mt-2" style={{ color: '#22C55E' }}>₹6.3L</p>
                <p className="text-xs text-slate-500 mt-1">128 payments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Monthly Total</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">₹1.2Cr</p>
                <p className="text-xs mt-1" style={{ color: '#22C55E' }}>+8%</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Invoices */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: 'INV-2401', patient: 'Rajesh Kumar', amount: 45000, status: 'Paid', date: 'Today' },
                  { id: 'INV-2402', patient: 'Priya Sharma', amount: 12500, status: 'Pending', date: 'Today' },
                  { id: 'INV-2403', patient: 'Amit Patel', amount: 85000, status: 'Paid', date: 'Yesterday' },
                  { id: 'INV-2404', patient: 'Sneha Reddy', amount: 8500, status: 'Pending', date: 'Yesterday' },
                  { id: 'INV-2405', patient: 'Vikram Singh', amount: 125000, status: 'Paid', date: '2 days ago' },
                ].map((invoice, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Receipt className="h-6 w-6" style={{ color: '#22C55E' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{invoice.id}</p>
                        <p className="text-sm text-slate-600">{invoice.patient} • {invoice.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-900">₹{invoice.amount.toLocaleString()}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {invoice.status}
                      </span>
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
