'use client'

import { ReactNode } from 'react'
import { SidebarProvider, useSidebar } from './sidebar-context'
import { cn } from '@/lib/utils'

function LayoutContent({ children }: { children: ReactNode }) {
  const { isCollapsed } = useSidebar()
  
  return (
    <div className={cn(
      "transition-all duration-300",
      isCollapsed ? "ml-16" : "ml-64"
    )}>
      {children}
    </div>
  )
}

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  )
}
