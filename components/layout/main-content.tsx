'use client'

import { useSidebar } from './sidebar-context'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function MainContent({ children }: { children: ReactNode }) {
  const { isCollapsed } = useSidebar()
  
  return (
    <main className={cn(
      "pt-24 transition-all duration-300",
      isCollapsed ? "ml-16" : "ml-60"
    )}>
      {children}
    </main>
  )
}
