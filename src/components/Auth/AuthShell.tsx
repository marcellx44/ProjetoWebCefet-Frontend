import type { ReactNode } from 'react'
import { AuthBrandPanel } from './AuthBrandPanel'

interface AuthShellProps {
  children: ReactNode
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="grid min-h-svh grid-cols-1 bg-background text-foreground lg:grid-cols-9">
      <AuthBrandPanel className="lg:col-span-4" />

      <div className="flex min-w-0 items-center justify-center px-6 py-16 sm:px-12 lg:col-span-5 lg:px-16">
        <div className="w-full max-w-100">{children}</div>
      </div>
    </main>
  )
}
