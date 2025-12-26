'use client'

import { DoctorSidebar } from '@/components/layout/doctor-sidebar'
import { Navbar } from '@/components/layout/navbar'
import { SidebarProvider } from '@/components/layout/sidebar-context'
import { ReactNode } from 'react'

export default function DoctorLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DoctorSidebar />
      <Navbar />
      {children}
    </SidebarProvider>
  )
}
