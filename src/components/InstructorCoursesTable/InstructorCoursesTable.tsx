import { useId } from 'react'
import { Eye, Pencil, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export interface InstructorCourse {
  id: number | string
  title: string
  category: string
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
  status: 'DRAFT' | 'PUBLISHED'
}

interface InstructorCoursesTableProps {
  courses: readonly InstructorCourse[]
  onView?: (course: InstructorCourse) => void
  onEdit?: (course: InstructorCourse) => void
  onDelete?: (course: InstructorCourse) => void
}

export function InstructorCoursesTable({ courses, onView, onEdit, onDelete }: InstructorCoursesTableProps) {
  const titleId = useId()
  const actions = [
    { label: 'Visualizar', icon: Eye, onAction: onView, destructive: false },
    { label: 'Editar', icon: Pencil, onAction: onEdit, destructive: false },
    { label: 'Excluir', icon: Trash2, onAction: onDelete, destructive: true },
  ]

  return (
    <section aria-labelledby={titleId} className="min-w-0 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id={titleId} className="text-h4 text-foreground">Seus cursos</h2>
        <span className="font-mono text-mono-sm text-muted-foreground">GET /courses</span>
      </div>

      <TooltipProvider>
        <Table aria-labelledby={titleId}>
          <TableHeader>
            <TableRow>
              <TableHead>Curso</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Nível</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {courses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <p className="py-6 text-center text-body-md text-muted-foreground">
                    Você ainda não tem cursos.
                  </p>
                </TableCell>
              </TableRow>
            ) : courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>
                  <Badge variant="outline">{course.level}</Badge>
                </TableCell>
                <TableCell>
                  {course.status === 'PUBLISHED' ? (
                    <Badge variant="success">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
                      Publicado
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Rascunho</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {actions.map(({ label, icon: Icon, onAction, destructive }) => (
                      <Tooltip key={label}>
                        <TooltipTrigger
                          render={
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              aria-label={`${label} curso ${course.title}`}
                              disabled={!onAction}
                              onClick={() => onAction?.(course)}
                            />
                          }
                        >
                          <Icon
                            aria-hidden="true"
                            className={destructive ? 'size-4 text-destructive' : 'size-4 text-muted-foreground'}
                          />
                        </TooltipTrigger>
                        <TooltipContent>{label}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TooltipProvider>
    </section>
  )
}
