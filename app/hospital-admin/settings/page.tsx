import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings, Building2, Bell, Lock } from 'lucide-react'

export default function HospitalSettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Hospital Settings</h1>
            <p className="text-slate-600 mt-1">Configure hospital information and preferences</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Hospital Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Hospital Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Hospital Name</label>
                    <Input defaultValue="Apollo Hospital - Delhi" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Registration Number</label>
                    <Input defaultValue="APL-DL-2024-001" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Contact Number</label>
                    <Input defaultValue="+91 11 2345 6789" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input defaultValue="admin@apollo-delhi.com" className="mt-1" />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-slate-700">Address</label>
                    <Input defaultValue="Sarita Vihar, New Delhi, Delhi 110076" className="mt-1" />
                  </div>
                </div>
                <Button style={{ backgroundColor: '#2563eb' }} className="hover:opacity-90">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Patient admission notifications</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Emergency alerts</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Daily reports</span>
                </label>
                <Button style={{ backgroundColor: '#2563eb' }} className="hover:opacity-90">Update</Button>
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
                <Button style={{ backgroundColor: '#2563eb' }} className="hover:opacity-90">Change Password</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
