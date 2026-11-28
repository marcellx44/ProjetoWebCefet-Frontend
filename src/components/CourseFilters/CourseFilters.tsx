import { useId, useState } from 'react'
import { Funnel } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface CourseFilterOption {
  value: string
  label: string
}

export interface CourseFilterValues {
  category: string
  level: string
}

interface CourseFiltersProps {
  categories?: readonly CourseFilterOption[]
  levels?: readonly CourseFilterOption[]
  onFilter?: (filters: CourseFilterValues) => void
}

const defaultCategories: readonly CourseFilterOption[] = [
  { value: 'all', label: 'todas' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
]

const defaultLevels: readonly CourseFilterOption[] = [
  { value: 'all', label: 'todos' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]

export function CourseFilters({
  categories = defaultCategories,
  levels = defaultLevels,
  onFilter,
}: CourseFiltersProps) {
  const categoryId = useId()
  const levelId = useId()
  const [category, setCategory] = useState('all')
  const [level, setLevel] = useState('all')

  return (
    <section aria-label="Filtros de cursos" className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="grid gap-2 p-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
        <div>
          <label className="sr-only" htmlFor={categoryId}>Categoria</label>
          <Select value={category} onValueChange={(value) => setCategory(String(value ?? 'all'))}>
            <SelectTrigger id={categoryId} aria-label="Categoria">
              <SelectValue>
                {(value) => `Categoria: ${categories.find((option) => option.value === value)?.label ?? 'todas'}`}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {categories.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="sr-only" htmlFor={levelId}>Nível</label>
          <Select value={level} onValueChange={(value) => setLevel(String(value ?? 'all'))}>
            <SelectTrigger id={levelId} aria-label="Nível">
              <SelectValue>
                {(value) => `Nível: ${levels.find((option) => option.value === value)?.label ?? 'todos'}`}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {levels.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-9 min-w-22"
          onClick={() => onFilter?.({ category, level })}
        >
          <Funnel aria-hidden="true" />
          Filtrar
        </Button>
      </div>

      <div className="flex min-h-7 items-center gap-2 border-t border-border bg-muted px-3 py-1 font-mono text-mono-label text-muted-foreground">
        <Badge>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight" />
          GET
        </Badge>
        <span> /courses?page=1&amp;limit=20</span>
      </div>
    </section>
  )
}
