'use client'

import { PatientSidebar } from '@/components/layout/patient-sidebar'
import { Navbar } from '@/components/layout/navbar'
import { SidebarProvider } from '@/components/layout/sidebar-context'
import { ReactNode } from 'react'

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <PatientSidebar />
      <Navbar />
      {children}
    </SidebarProvider>
  )
}
