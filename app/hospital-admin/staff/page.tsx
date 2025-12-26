import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { UserCog, Plus } from 'lucide-react'

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Staff Management</h1>
              <p className="text-slate-600 mt-1">Manage hospital staff and roles</p>
            </div>
            <Button style={{ backgroundColor: '#2563eb' }} className="hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Add Staff Member
            </Button>
          </div>

          {/* Staff Categories */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-slate-900">120</p>
                <p className="text-sm text-slate-600 mt-1">Doctors</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-slate-900">156</p>
                <p className="text-sm text-slate-600 mt-1">Nurses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-slate-900">42</p>
                <p className="text-sm text-slate-600 mt-1">Technicians</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-slate-900">24</p>
                <p className="text-sm text-slate-600 mt-1">Admin Staff</p>
              </CardContent>
            </Card>
          </div>

          {/* Staff List */}
          <Card>
            <CardHeader>
              <CardTitle>Staff Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'Sister Mary Thomas', role: 'Head Nurse', department: 'ICU', shift: 'Day Shift', status: 'Active' },
                  { name: 'Ramesh Kumar', role: 'Lab Technician', department: 'Pathology', shift: 'Day Shift', status: 'Active' },
                  { name: 'Anjali Verma', role: 'Staff Nurse', department: 'Cardiology', shift: 'Night Shift', status: 'Active' },
                  { name: 'Suresh Babu', role: 'Radiologist Tech', department: 'Radiology', shift: 'Day Shift', status: 'Active' },
                  { name: 'Kavita Singh', role: 'Admin Assistant', department: 'Administration', shift: 'Day Shift', status: 'On Leave' },
                ].map((staff, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <UserCog className="h-6 w-6" style={{ color: '#2563eb' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{staff.name}</p>
                        <p className="text-sm text-slate-600">{staff.role} • {staff.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Shift</p>
                        <p className="font-medium text-slate-900">{staff.shift}</p>
                      </div>
                      <Badge variant={staff.status === 'Active' ? 'success' : 'secondary'}>
                        {staff.status}
                      </Badge>
                      <Button size="sm" variant="outline">Manage</Button>
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
