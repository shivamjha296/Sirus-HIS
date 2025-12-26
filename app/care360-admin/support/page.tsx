import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Headphones, AlertCircle, Clock, CheckCircle } from 'lucide-react'

export default function SupportPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Support Center</h1>
            <p className="text-slate-600 mt-1">Manage hospital support requests and tickets</p>
          </div>

          {/* Support Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-3xl font-bold text-slate-900">23</p>
                  <p className="text-sm text-slate-600 mt-1">Open Tickets</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6" style={{ color: '#033053' }} />
                  </div>
                  <p className="text-3xl font-bold text-slate-900">12</p>
                  <p className="text-sm text-slate-600 mt-1">In Progress</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#DCFCE7' }}>
                    <CheckCircle className="h-6 w-6" style={{ color: '#22C55E' }} />
                  </div>
                  <p className="text-3xl font-bold text-slate-900">156</p>
                  <p className="text-sm text-slate-600 mt-1">Resolved</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#E0F2FE' }}>
                    <Headphones className="h-6 w-6" style={{ color: '#033053' }} />
                  </div>
                  <p className="text-3xl font-bold text-slate-900">2.5h</p>
                  <p className="text-sm text-slate-600 mt-1">Avg Response</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Tickets */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    id: 'TKT-2401', 
                    hospital: 'Apollo Hospitals', 
                    issue: 'Login issues for nursing staff',
                    priority: 'High',
                    status: 'Open',
                    time: '2 hours ago'
                  },
                  { 
                    id: 'TKT-2402', 
                    hospital: 'Max Healthcare', 
                    issue: 'Billing module not syncing',
                    priority: 'Critical',
                    status: 'In Progress',
                    time: '4 hours ago'
                  },
                  { 
                    id: 'TKT-2403', 
                    hospital: 'Fortis Hospital', 
                    issue: 'Report generation slow',
                    priority: 'Medium',
                    status: 'Open',
                    time: '6 hours ago'
                  },
                  { 
                    id: 'TKT-2404', 
                    hospital: 'Manipal Hospital', 
                    issue: 'Patient records access',
                    priority: 'High',
                    status: 'In Progress',
                    time: '8 hours ago'
                  },
                  { 
                    id: 'TKT-2405', 
                    hospital: 'AIIMS', 
                    issue: 'Initial setup assistance',
                    priority: 'Low',
                    status: 'Open',
                    time: '1 day ago'
                  },
                ].map((ticket, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm font-semibold text-slate-900">{ticket.id}</span>
                        <Badge variant={
                          ticket.priority === 'Critical' ? 'destructive' :
                          ticket.priority === 'High' ? 'warning' :
                          ticket.priority === 'Medium' ? 'secondary' : 'outline'
                        }>
                          {ticket.priority}
                        </Badge>
                        <Badge variant={ticket.status === 'In Progress' ? 'default' : 'secondary'}>
                          {ticket.status}
                        </Badge>
                      </div>
                      <p className="font-medium text-slate-900">{ticket.issue}</p>
                      <p className="text-sm text-slate-600 mt-1">{ticket.hospital} • {ticket.time}</p>
                    </div>
                    <Button size="sm" style={{ backgroundColor: '#033053' }} className="text-white hover:opacity-90">View Details</Button>
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
