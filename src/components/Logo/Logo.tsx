import logoLight from '@/assets/LogoDark.png'
import logoDark from '@/assets/Logo.png'
import { cn } from '@/lib/utils'

interface LogoProps {
  theme?: 'light' | 'dark'
  className?: string
}

export function Logo({ theme = 'light', className }: LogoProps) {
  return (
    <img
      src={theme === 'dark' ? logoDark : logoLight}
      alt="CursosCefet"
      className={cn('h-8 w-auto shrink-0', className)}
    />
  )
}
