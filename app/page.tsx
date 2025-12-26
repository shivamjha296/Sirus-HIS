'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Building2, Stethoscope, Users, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="relative h-16 w-64">
          <Image
            src="/images/care360.png"
            alt="Care360"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Welcome to Care360 HIS</h1>
        <p className="text-lg text-slate-600">Select your role to continue</p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Care360 Admin */}
        <Link href="/care360-admin" className="group">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ '--hover-border': '#033053' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#033053'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300" style={{ backgroundColor: '#E8F4F8' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#033053'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E8F4F8'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = '#033053'; }}>
                <Building2 className="h-8 w-8 transition-colors duration-300" style={{ color: '#033053' }} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Care360 Admin</h2>
              <p className="text-slate-600">Platform administration and hospital onboarding</p>
            </div>
          </div>
        </Link>

        {/* Hospital Admin */}
        <Link href="/hospital-admin" className="group">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300" style={{ backgroundColor: '#DBEAFE' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2563eb'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#DBEAFE'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = '#2563eb'; }}>
                <Users className="h-8 w-8 transition-colors duration-300" style={{ color: '#2563eb' }} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Hospital Admin</h2>
              <p className="text-slate-600">Hospital operations and staff management</p>
            </div>
          </div>
        </Link>

        {/* Doctor Portal */}
        <Link href="/doctor" className="group">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#065429'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300" style={{ backgroundColor: '#dcfce7' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#065429'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#dcfce7'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = '#065429'; }}>
                <Stethoscope className="h-8 w-8 transition-colors duration-300" style={{ color: '#065429' }} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Doctor Portal</h2>
              <p className="text-slate-600">Clinical workflow and patient care</p>
            </div>
          </div>
        </Link>

        {/* Patient Portal */}
        <Link href="/patients" className="group">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300" style={{ backgroundColor: '#D1FAE5' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#10B981'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#D1FAE5'; const icon = e.currentTarget.querySelector('svg'); if (icon) (icon as HTMLElement).style.color = '#10B981'; }}>
                <Heart className="h-8 w-8 transition-colors duration-300" style={{ color: '#10B981' }} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Patient Portal</h2>
              <p className="text-slate-600">Personal health records and appointments</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-slate-500">
        <p>Care360 Hospital Information System © 2025</p>
      </div>
    </div>
  )
}
