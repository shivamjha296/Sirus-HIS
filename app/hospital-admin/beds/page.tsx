import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bed, AlertCircle } from 'lucide-react'

export default function BedsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Bed Management</h1>
            <p className="text-slate-600 mt-1">Monitor and manage bed allocation</p>
          </div>

          {/* Bed Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Total Beds</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">450</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Occupied</p>
                <p className="text-3xl font-bold mt-2" style={{ color: '#22C55E' }}>328</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Available</p>
                <p className="text-3xl font-bold mt-2" style={{ color: '#2563eb' }}>122</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-slate-600">Occupancy Rate</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">73%</p>
              </CardContent>
            </Card>
          </div>

          {/* Wards */}
          <Card>
            <CardHeader>
              <CardTitle>Ward-wise Bed Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { ward: 'General Ward', total: 100, occupied: 85, available: 15, rate: 85 },
                  { ward: 'ICU', total: 50, occupied: 48, available: 2, rate: 96 },
                  { ward: 'Private Rooms', total: 80, occupied: 52, available: 28, rate: 65 },
                  { ward: 'Emergency', total: 40, occupied: 28, available: 12, rate: 70 },
                  { ward: 'Pediatric Ward', total: 60, occupied: 45, available: 15, rate: 75 },
                  { ward: 'Maternity Ward', total: 70, occupied: 48, available: 22, rate: 69 },
                  { ward: 'Post-Op Recovery', total: 50, occupied: 22, available: 28, rate: 44 },
                ].map((ward, idx) => (
                  <div key={idx} className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Bed className="h-5 w-5" style={{ color: '#2563eb' }} />
                        <div>
                          <p className="font-semibold text-slate-900">{ward.ward}</p>
                          <p className="text-sm text-slate-600">{ward.occupied}/{ward.total} beds occupied</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {ward.rate >= 90 && (
                          <Badge variant="warning" className="flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> High Occupancy
                          </Badge>
                        )}
                        <span className="text-lg font-bold text-slate-900">{ward.rate}%</span>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full`}
                        style={{ backgroundColor: ward.rate >= 90 ? '#dc2626' : ward.rate >= 75 ? '#f97316' : '#22C55E' }}
                        style={{ width: `${ward.rate}%` }}
                      ></div>
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
