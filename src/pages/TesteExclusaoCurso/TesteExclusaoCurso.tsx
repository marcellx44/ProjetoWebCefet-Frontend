import { useState } from 'react'
import { AlertCircle, BookOpen, Check } from 'lucide-react'
import { DeleteCourseDialog } from '@/components/DeleteCourseDialog/DeleteCourseDialog'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const curso = { id: 12, titulo: 'NestJS do Zero' }

export function TesteExclusaoCurso() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const simularExclusao = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    throw Object.assign(new Error('Conflict'), { status: 409 })
  }

  return (
    <>
      <PageHeader
        rota="// INSTRUCTOR · CURSOS · 12"
        titulo={curso.titulo}
        descricao="Backend · INTERMEDIATE · publicado."
        acao={
          <Button type="button">
            <Check className="size-4" />
            Salvar
          </Button>
        }
      />

      <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
        <span>Meus cursos</span>
        <span aria-hidden="true">›</span>
        <span>{curso.titulo}</span>
        <span aria-hidden="true">›</span>
        <span className="text-foreground">Editar</span>
      </div>

      <Card className="rounded-xl border border-border p-4 ring-0">
        <CardContent className="flex min-h-24 items-center gap-4 px-2">
          <span className="flex size-11 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <BookOpen aria-hidden="true" className="size-5" />
          </span>
          <div className="space-y-1">
            <h2 className="text-h4">Conteúdo do curso</h2>
            <p className="text-body-sm text-muted-foreground">
              Página para simular um curso com matrículas ativas.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="button" variant="destructive" onClick={() => setDialogOpen(true)}>
          Excluir curso de teste
        </Button>
        <p className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
          <AlertCircle aria-hidden="true" className="size-4" />
          A confirmação simula uma resposta 409.
        </p>
      </div>

      <DeleteCourseDialog
        courseId={curso.id}
        courseTitle={curso.titulo}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onDelete={simularExclusao}
      />
    </>
  )
}
