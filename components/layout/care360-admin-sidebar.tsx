'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import {
  LayoutDashboard,
  Building2,
  Users,
  BarChart3,
  Settings,
  Shield,
  Bell,
  Headphones,
  Menu
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from './sidebar-context'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/care360-admin' },
  { icon: Building2, label: 'Hospitals', href: '/care360-admin/hospitals' },
  { icon: null as any, label: 'Subscriptions', href: '/care360-admin/subscriptions', fontAwesome: faIndianRupeeSign },
  { icon: BarChart3, label: 'Analytics', href: '/care360-admin/analytics' },
  { icon: Headphones, label: 'Support', href: '/care360-admin/support' },
  { icon: Settings, label: 'Settings', href: '/care360-admin/settings' },
]

export function Care360AdminSidebar() {
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
          <div className="px-4 py-4" style={{ backgroundColor: '#E0F2FE' }}>
            <p className="text-lg font-bold uppercase text-center tracking-wide" style={{ color: '#033053' }}>Platform Admin</p>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (pathname?.startsWith(item.href + '/') && item.href !== '/care360-admin')

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
                style={isActive ? { backgroundColor: '#033053' } : {}}
                title={isCollapsed ? item.label : undefined}
              >
                {item.fontAwesome ? (
                  <FontAwesomeIcon icon={item.fontAwesome} className="h-5 w-5" />
                ) : (
                  <item.icon className="h-5 w-5" />
                )}
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
