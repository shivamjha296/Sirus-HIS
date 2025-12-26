'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Stethoscope, 
  UserCog, 
  CreditCard, 
  FileText, 
  Settings 
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: LayoutDashboard, label: 'Hospital Admin', href: '/admin' },
  { icon: Stethoscope, label: 'Doctor Dashboard', href: '/doctor' },
  { icon: Users, label: 'Patient Dashboard', href: '/patient' },
  { icon: Calendar, label: 'Appointments', href: '/appointments' },
  { icon: Users, label: 'Patients', href: '/patients' },
  { icon: UserCog, label: 'Staff', href: '/staff' },
  { icon: CreditCard, label: 'Billing', href: '/billing' },
  { icon: FileText, label: 'Reports', href: '/reports' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-slate-200 px-6">
          <div className="relative h-10 w-40">
            <Image
              src="/images/care360.png"
              alt="Care360"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
