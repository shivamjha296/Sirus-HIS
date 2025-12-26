import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Bell, Lock } from 'lucide-react'

export default function DoctorSettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-600 mt-1">Manage your profile and preferences</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Profile */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input defaultValue="Dr. Rajesh Kumar" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Specialization</label>
                    <Input defaultValue="Cardiologist" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input defaultValue="rajesh.kumar@apollo.com" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <Input defaultValue="+91 98765 43210" className="mt-1" />
                  </div>
                </div>
                <Button style={{ backgroundColor: '#065429' }} className="hover:opacity-90">Save Changes</Button>
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
                  <input type="checkbox" className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Patient messages</span>
                </label>
                <Button style={{ backgroundColor: '#065429' }} className="hover:opacity-90">Update</Button>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Security
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
                <Button style={{ backgroundColor: '#065429' }} className="hover:opacity-90">Change Password</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
