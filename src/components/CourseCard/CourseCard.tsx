import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export interface CourseCardData {
  id: number | string
  title: string
  category: string
  description: string
  status: 'DRAFT' | 'PUBLISHED'
}

interface CourseCardProps {
  course: CourseCardData
  onEdit?: (course: CourseCardData) => void
}

function CourseArtwork({ category }: { category: string }) {
  const isDevOps = category.toLowerCase().includes('devops')

  return (
    <div
      aria-hidden="true"
      className="bg-auth-grid flex h-27 flex-col justify-between bg-sidebar px-3 py-2 text-secondary"
    >
      <span className="font-mono text-mono-label">~/{isDevOps ? 'devops' : category.toLowerCase()}</span>
      <span className="font-mono text-mono-data font-semibold text-white">
        {isDevOps ? '$ ops' : '{api}'}<span className="text-highlight">_</span>
      </span>
    </div>
  )
}

export function CourseCard({ course, onEdit }: CourseCardProps) {
  return (
    <Card className="gap-0 rounded-lg py-0">
      <CourseArtwork category={course.category} />

      <CardContent className="flex flex-1 flex-col gap-2.5 py-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="secondary">{course.category}</Badge>
          {course.status === 'PUBLISHED' ? (
            <Badge variant="success">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
              Publicado
            </Badge>
          ) : (
            <Badge variant="secondary">Rascunho</Badge>
          )}
        </div>

        <div className="min-w-0 space-y-1">
          <h2 className="truncate text-label-md text-foreground">{course.title}</h2>
          <p className="line-clamp-2 min-h-9 text-body-sm text-muted-foreground">
            {course.description}
          </p>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="min-w-22"
            disabled={!onEdit}
            onClick={() => onEdit?.(course)}
          >
            Editar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
