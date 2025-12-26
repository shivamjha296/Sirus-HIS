import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings, User, Bell, Shield, Database } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <MainContent>
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Platform Settings</h1>
            <p className="text-slate-600 mt-1">Manage platform configuration and preferences</p>
          </div>

          {/* Settings Sections */}
          <div className="grid grid-cols-1 gap-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input defaultValue="Care360 Administrator" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input defaultValue="admin@care360.com" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <Input defaultValue="+91 98765 43210" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Role</label>
                    <Input defaultValue="Platform Administrator" disabled className="mt-1" />
                  </div>
                </div>
                <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90 text-white">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
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
                  <span className="text-sm text-slate-700">Email notifications for new hospital onboarding</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Support ticket alerts</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                  <span className="text-sm text-slate-700">System health alerts</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Weekly analytics report</span>
                </label>
                <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90 text-white">Update Preferences</Button>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
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
                <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90 text-white">Change Password</Button>
              </CardContent>
            </Card>

            {/* System Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  System Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">Database Status</p>
                    <p className="text-sm text-slate-600">Last backup: 2 hours ago</p>
                  </div>
                  <Button size="sm" variant="outline">Run Backup</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">Cache Management</p>
                    <p className="text-sm text-slate-600">Clear system cache</p>
                  </div>
                  <Button size="sm" variant="outline">Clear Cache</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">System Logs</p>
                    <p className="text-sm text-slate-600">View platform logs</p>
                  </div>
                  <Button size="sm" variant="outline">View Logs</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainContent>
    </div>
  )
}
