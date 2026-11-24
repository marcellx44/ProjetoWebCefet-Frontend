import type { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface StateCardProps {
  title: string
  value: number | string
  icon: LucideIcon
}

export function StateCard({ title, value, icon: Icon }: StateCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
          </span>

          <dl className="min-w-0 flex-1 space-y-1">
            <dt className="font-mono text-mono-label break-words text-muted-foreground uppercase">
              {title}
            </dt>
            <dd className="font-mono text-mono-data break-words text-foreground tabular-nums">
              {value}
            </dd>
          </dl>
        </div>
      </CardContent>
    </Card>
  )
}
