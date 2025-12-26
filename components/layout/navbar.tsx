'use client'

import { usePathname } from 'next/navigation'
import { Search, Bell, MoreVertical } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Navbar() {
  const pathname = usePathname()

  const getUserProfile = () => {
    if (pathname?.startsWith('/care360-admin')) {
      return { initials: 'CA', color: '#033053', label: 'Platform Admin' }
    }
    if (pathname?.startsWith('/hospital-admin')) {
      return { initials: 'AD', color: '#2563eb', label: 'Apollo Delhi' }
    }
    if (pathname?.startsWith('/doctor')) {
      return { initials: 'DM', color: '#065429', label: 'Dr. Mehta' }
    }
    if (pathname?.startsWith('/patients')) {
      return { initials: 'RK', color: '#1FA34A', label: 'Rajesh Kumar' }
    }
    return { initials: 'AD', color: '#2563eb', label: 'Admin' }
  }

  const user = getUserProfile()
  return (
    <>
      <header className="fixed left-64 right-0 top-0 z-30 h-16 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6">
          {/* Search */}
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search Dashboard"
                className="pl-9 bg-slate-50 border-slate-200"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 hover:bg-slate-100 transition-colors">
              <MoreVertical className="h-5 w-5 text-slate-600" />
            </button>

            <button className="relative rounded-full p-2 hover:bg-slate-100 transition-colors">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/images/admin.jpg" alt={user.label} />
                <AvatarFallback className="text-white text-sm" style={{ backgroundColor: user.color }}>{user.initials}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Strip */}
      <div className="fixed left-0 right-0 top-16 z-50 h-8 bg-gradient-to-r from-emerald-800 via-teal-800 to-blue-800 overflow-hidden">
        <div className="flex h-full items-center">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
          </div>
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
            <span className="text-white font-semibold text-sm mx-8">Care 360</span>
          </div>
        </div>
      </div>
    </>
  )
}
