import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Bell, Lock, Heart } from 'lucide-react'

export default function PatientSettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-600 mt-1">Manage your personal information and preferences</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input defaultValue="John Doe" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                    <Input defaultValue="1980-05-15" type="date" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input defaultValue="john.doe@email.com" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <Input defaultValue="+91 98765 43210" className="mt-1" />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-slate-700">Address</label>
                    <Input defaultValue="123 Main Street, New Delhi, 110001" className="mt-1" />
                  </div>
                </div>
                <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Contact Name</label>
                    <Input defaultValue="Jane Doe" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Relationship</label>
                    <Input defaultValue="Spouse" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <Input defaultValue="+91 98765 43211" className="mt-1" />
                  </div>
                </div>
                <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90">Update Contact</Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Appointment reminders</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Lab result notifications</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Prescription refill reminders</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Health tips and newsletters</span>
                </label>
                <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90">Update Preferences</Button>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Current Password</label>
                  <Input type="password" placeholder="••••••••" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">New Password</label>
                  <Input type="password" placeholder="••••••••" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Confirm Password</label>
                  <Input type="password" placeholder="••••••••" className="mt-1" />
                </div>
                <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90">Change Password</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
