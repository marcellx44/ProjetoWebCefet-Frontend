import { useId } from 'react'
import { Logo } from '@/components/Logo/Logo'
import { cn } from '@/lib/utils'

interface AuthBrandPanelProps {
  className?: string
}

export function AuthBrandPanel({ className }: AuthBrandPanelProps) {
  const titleId = useId()

  return (
    <aside
      aria-labelledby={titleId}
      className={cn(
        'bg-auth-grid flex min-w-0 flex-col items-start justify-between gap-12 bg-sidebar px-6 py-8 text-sidebar-foreground sm:px-12 sm:py-12 lg:min-h-svh lg:px-16 lg:pt-16',
        className,
      )}
    >
      <Logo theme="dark" />

      <div className="w-full max-w-lg py-8 lg:py-16">
        <h2 id={titleId} className="font-heading text-h1 sm:text-display">
          Aprenda construindo.<br />
          Código, módulos e certificados.
        </h2>

        <p className="mt-6 max-w-sm text-body-lg text-chart-3">
          Plataforma de cursos do CEFET-RJ para quem constrói software de verdade.
        </p>

        <pre className="mt-6 overflow-x-auto rounded-xl border border-chart-3/20 bg-white/5 px-5 py-4 font-mono text-mono-sm">
          <code className="flex flex-col gap-3">
            <span className="text-chart-3">$ cursoscefet login</span>
            <span className="text-chart-2">&gt; autenticando via JWT...</span>
            <span className="text-highlight">&gt; 200 OK · token emitido</span>
          </code>
        </pre>
      </div>

      <p className="font-mono text-mono-label text-chart-2">v1.0 · CEFET-RJ · 2026</p>
    </aside>
  )
}
