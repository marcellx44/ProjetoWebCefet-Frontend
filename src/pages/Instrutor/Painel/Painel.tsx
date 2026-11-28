import { useState } from 'react'
import { useNavigate } from 'react-router'
import { BookOpen, CircleCheck, Eye, Plus } from 'lucide-react'
import { CoursePublicationNotice } from '@/components/CoursePublicationNotice/CoursePublicationNotice'
import { InstructorCoursesTable, type InstructorCourse } from '@/components/InstructorCoursesTable/InstructorCoursesTable'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { StateCard } from '@/components/StateCard/StateCard'
import { Button } from '@/components/ui/button'

// Esses dados aqui são **SINTÉTICOS**, precisamos alterar ANTES de entregar ass: Emanuel
const cursos: readonly InstructorCourse[] = [
  { id: 1, title: 'NestJS do Zero', category: 'Backend', level: 'INTERMEDIATE', status: 'PUBLISHED' },
  { id: 2, title: 'Docker para Devs', category: 'DevOps', level: 'BEGINNER', status: 'PUBLISHED' },
  { id: 3, title: 'Microsserviços com Nest', category: 'Backend', level: 'ADVANCED', status: 'DRAFT' },
]

export function Painel() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const estatisticas = [
    { title: 'Meus cursos', value: cursos.length, icon: BookOpen },
    { title: 'Publicados', value: cursos.filter((curso) => curso.status === 'PUBLISHED').length, icon: CircleCheck },
    { title: 'Rascunhos', value: cursos.filter((curso) => curso.status === 'DRAFT').length, icon: Eye },
  ]

  return (
    <>
      <PageHeader
        rota="// INSTRUTOR · PAINEL"
        titulo="Painel do instrutor"
        descricao="Seus cursos e o status de publicação de cada um."
        acao={
          <Button
            type="button"
            className="min-w-0 px-3 text-label-sm sm:px-5 sm:text-label-md"
            onClick={() => setMessage('A criação de cursos estará disponível em breve.')}
          >
            <Plus aria-hidden="true" />
            Novo curso
          </Button>
        }
      />

      <p role="status" className="text-body-sm text-muted-foreground empty:hidden">{message}</p>

      <section aria-label="Resumo dos cursos" className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {estatisticas.map((estatistica) => (
          <StateCard key={estatistica.title} {...estatistica} />
        ))}
      </section>

      <div className="grid min-w-0 grid-cols-1 items-start gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <InstructorCoursesTable
            courses={cursos}
            onView={(curso) => navigate(`/instrutor/cursos/${encodeURIComponent(curso.id)}`)}
            onEdit={(curso) => navigate(`/instrutor/cursos/${encodeURIComponent(curso.id)}/editar`)}
            onDelete={(curso) => navigate(`/instrutor/cursos/${encodeURIComponent(curso.id)}/excluir`)}
          />
        </div>
        <CoursePublicationNotice />
      </div>
    </>
  )
}
