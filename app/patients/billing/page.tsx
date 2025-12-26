import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { CreditCard, Download } from 'lucide-react'

export default function PatientBillingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Billing & Payments</h1>
            <p className="text-slate-600 mt-1">View invoices and payment history</p>
          </div>

          {/* Payment Summary */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Total Paid</p>
                <p className="text-3xl font-bold mt-2" style={{ color: '#1FA34A' }}>₹1,45,000</p>
                <p className="text-xs text-slate-500 mt-1">This year</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Pending</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">₹0</p>
                <p className="text-xs text-slate-500 mt-1">All cleared</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Insurance Covered</p>
                <p className="text-3xl font-bold mt-2" style={{ color: '#1FA34A' }}>₹85,000</p>
                <p className="text-xs text-slate-500 mt-1">58% of total</p>
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
                  { id: 'INV-2401', date: 'Dec 20, 2025', service: 'Consultation - Cardiology', amount: 2500, status: 'Paid' },
                  { id: 'INV-2385', date: 'Dec 18, 2025', service: 'Lab Tests - CBC, Lipid Profile', amount: 1200, status: 'Paid' },
                  { id: 'INV-2356', date: 'Nov 20, 2025', service: 'Consultation - General Medicine', amount: 1500, status: 'Paid' },
                  { id: 'INV-2298', date: 'Nov 10, 2025', service: 'Consultation - Neurology', amount: 3000, status: 'Paid' },
                  { id: 'INV-2245', date: 'Oct 15, 2025', service: 'Lab Tests - LFT, KFT', amount: 1800, status: 'Paid' },
                ].map((invoice, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                        <CreditCard className="h-6 w-6" style={{ color: '#1FA34A' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{invoice.id}</p>
                        <p className="text-sm text-slate-600">{invoice.service}</p>
                        <p className="text-xs text-slate-500 mt-1">{invoice.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-900">₹{invoice.amount.toLocaleString()}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                        {invoice.status}
                      </span>
                      <Button size="sm" variant="outline" style={{ borderColor: '#1FA34A', color: '#1FA34A' }} className="hover:bg-green-50">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
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
