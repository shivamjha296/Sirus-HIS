import { MainContent } from '@/components/layout/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Building2, Plus, Search, MapPin, Users, Bed } from 'lucide-react'

export default function HospitalsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <MainContent>
        <div className="p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Hospital Management</h1>
              <p className="text-slate-600 mt-1">View and manage all onboarded hospitals</p>
            </div>
            <Button style={{ backgroundColor: '#033053' }} className="hover:opacity-90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Onboard New Hospital
            </Button>
          </div>

          {/* Search Bar */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input placeholder="Search hospitals by name, location..." className="pl-10" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>
            </CardContent>
          </Card>

          {/* Hospitals List */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                name: 'Apollo Hospitals', 
                location: 'New Delhi, India',
                beds: 450,
                staff: 342,
                patients: 1248,
                status: 'Active',
                plan: 'Enterprise',
                since: 'Jan 2024'
              },
              { 
                name: 'Max Healthcare', 
                location: 'Mumbai, India',
                beds: 380,
                staff: 298,
                patients: 1089,
                status: 'Active',
                plan: 'Professional',
                since: 'Feb 2024'
              },
              { 
                name: 'Fortis Hospital', 
                location: 'Bangalore, India',
                beds: 320,
                staff: 256,
                patients: 892,
                status: 'Active',
                plan: 'Professional',
                since: 'Mar 2024'
              },
              { 
                name: 'Manipal Hospital', 
                location: 'Chennai, India',
                beds: 290,
                staff: 221,
                patients: 756,
                status: 'Active',
                plan: 'Standard',
                since: 'Apr 2024'
              },
              { 
                name: 'AIIMS', 
                location: 'Hyderabad, India',
                beds: 500,
                staff: 412,
                patients: 1456,
                status: 'Setup Pending',
                plan: 'Enterprise',
                since: 'Dec 2024'
              },
            ].map((hospital, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#033053' }}>
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{hospital.name}</h3>
                        <p className="text-slate-600 flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          {hospital.location}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Onboarded: {hospital.since}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-sm text-slate-600">Beds</p>
                        <p className="text-2xl font-bold text-slate-900">{hospital.beds}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-slate-600">Staff</p>
                        <p className="text-2xl font-bold text-slate-900">{hospital.staff}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-slate-600">Patients</p>
                        <p className="text-2xl font-bold text-slate-900">{hospital.patients}</p>
                      </div>
                      <div className="text-center">
                        <Badge variant={hospital.status === 'Active' ? 'success' : 'outline'} className="mb-2">
                          {hospital.status}
                        </Badge>
                        <p className="text-xs text-slate-600">{hospital.plan}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" style={{ backgroundColor: '#033053' }} className="text-white hover:opacity-90">Manage</Button>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MainContent>
    </div>
  )
}
