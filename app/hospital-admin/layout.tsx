'use client'

import { HospitalAdminSidebar } from '@/components/layout/hospital-admin-sidebar'
import { Navbar } from '@/components/layout/navbar'
import { SidebarProvider } from '@/components/layout/sidebar-context'
import { ReactNode } from 'react'

export default function HospitalAdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <HospitalAdminSidebar />
      <Navbar />
      {children}
    </SidebarProvider>
  )
}
