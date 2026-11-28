import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { Plus } from 'lucide-react'
import { CourseCard, type CourseCardData } from '@/components/CourseCard/CourseCard'
import {
  CourseFilters,
  type CourseFilterValues,
} from '@/components/CourseFilters/CourseFilters'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { Button } from '@/components/ui/button'

interface InstructorCourse extends CourseCardData {
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
}

const courses: readonly InstructorCourse[] = [
  {
    id: 1,
    title: 'NestJS do Zero',
    category: 'Backend',
    description: 'APIs REST com NestJS, Knex e PostgreSQL.',
    level: 'INTERMEDIATE',
    status: 'PUBLISHED',
  },
  {
    id: 2,
    title: 'Docker para Devs',
    category: 'DevOps',
    description: 'Containers, imagens e docker compose.',
    level: 'BEGINNER',
    status: 'PUBLISHED',
  },
  {
    id: 3,
    title: 'Microsserviços com Nest',
    category: 'Backend',
    description: 'Comunicação entre serviços com NestJS.',
    level: 'ADVANCED',
    status: 'DRAFT',
  },
]

const categoryOptions = [
  { value: 'all', label: 'todas' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
]

const levelOptions = [
  { value: 'all', label: 'todos' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]

export function MeusCursos() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<CourseFilterValues>({
    category: 'all',
    level: 'all',
  })

  const visibleCourses = useMemo(
    () => courses.filter((course) => {
      const matchesCategory = filters.category === 'all'
        || course.category.toLowerCase() === filters.category
      const matchesLevel = filters.level === 'all'
        || course.level.toLowerCase() === filters.level

      return matchesCategory && matchesLevel
    }),
    [filters],
  )

  return (
    <div className="flex flex-col gap-5 pb-8">
      <PageHeader
        rota="// INSTRUTOR · CURSOS"
        titulo="Meus cursos"
        descricao="Cursos em que você é o instrutor. Rascunhos não aparecem para os alunos."
        acao={(
          <Button type="button" size="lg" onClick={() => navigate('/instrutor/cursos/novo')}>
            <Plus aria-hidden="true" />
            Novo curso
          </Button>
        )}
      />

      <CourseFilters
        categories={categoryOptions}
        levels={levelOptions}
        onFilter={setFilters}
      />

      {visibleCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={(selectedCourse) => navigate(`/instrutor/cursos/${selectedCourse.id}/editar`)}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-border bg-card px-4 py-8 text-center text-body-md text-muted-foreground">
          Nenhum curso encontrado com esses filtros.
        </p>
      )}
    </div>
  )
}
