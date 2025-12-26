'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Activity,
  Pill,
  CreditCard,
  Settings,
  Menu
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from './sidebar-context'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/patients' },
  { icon: Calendar, label: 'My Appointments', href: '/patients/appointments' },
  { icon: FileText, label: 'Health Records', href: '/patients/records' },
  { icon: Activity, label: 'Lab Reports', href: '/patients/lab-reports' },
  { icon: Pill, label: 'Prescriptions', href: '/patients/prescriptions' },
  { icon: CreditCard, label: 'Billing', href: '/patients/billing' },
  { icon: Settings, label: 'Settings', href: '/patients/settings' },
]

export function PatientSidebar() {
  const pathname = usePathname()
  const { isCollapsed, setIsCollapsed } = useSidebar()

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen border-r border-slate-200 bg-white transition-all duration-300",
      isCollapsed ? "w-16" : "w-[16.5rem]"
    )}>
      <div className="flex h-full flex-col">
        {/* Logo and Toggle */}
        <div className="flex h-16 items-center border-b border-slate-200 px-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="rounded-lg p-2 hover:bg-slate-100 transition-colors"
          >
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
          {!isCollapsed && (
            <div className="flex-1 flex justify-center">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/care360.png"
                  alt="Care360"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Spacer for marquee strip */}
        {/* Marquee Strip */}
        <div className="h-8 bg-[#064e3b] flex items-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
            <span className="text-xs font-bold text-white tracking-widest mx-4">CARE 360</span>
          </div>
        </div>

        {/* Role Badge */}
        {!isCollapsed && (
          <div className="px-4 py-4" style={{ backgroundColor: '#D1FAE5' }}>
            <p className="text-lg font-bold uppercase text-center tracking-wide" style={{ color: '#1FA34A' }}>Patient Portal</p>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (pathname?.startsWith(item.href + '/') && item.href !== '/patients')

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "text-white"
                    : "text-slate-700 hover:bg-slate-100",
                  isCollapsed && "justify-center"
                )}
                style={isActive ? { backgroundColor: '#1FA34A' } : {}}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
