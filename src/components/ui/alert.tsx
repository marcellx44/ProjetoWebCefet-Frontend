import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'group/alert relative grid w-full grid-cols-[0_1fr] items-start gap-x-3 gap-y-1 rounded-lg border p-4 text-body-md has-[>svg]:grid-cols-[auto_1fr] [&>svg]:row-span-2 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'border-border bg-card text-card-foreground',
        destructive: 'border-destructive bg-destructive-subtle text-destructive-text',
        warning: 'border-highlight bg-highlight-subtle text-highlight-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({ className, variant = 'default', ...props }: ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('col-start-2 text-label-md', className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn('col-start-2 text-body-sm text-muted-foreground group-data-[variant=warning]/alert:text-highlight-text group-data-[variant=destructive]/alert:text-destructive-text', className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
