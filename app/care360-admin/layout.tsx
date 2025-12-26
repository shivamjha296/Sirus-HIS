'use client'

import { Care360AdminSidebar } from '@/components/layout/care360-admin-sidebar'
import { Navbar } from '@/components/layout/navbar'
import { SidebarProvider } from '@/components/layout/sidebar-context'
import { ReactNode } from 'react'

export default function Care360AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Care360AdminSidebar />
      <Navbar />
      {children}
    </SidebarProvider>
  )
}
