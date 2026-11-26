import { useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DeleteCourseDialogProps {
  courseId: number | string
  courseTitle: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onDelete: () => void | Promise<void>
}

interface DeleteError extends Error {
  status?: number
  response?: { status?: number }
}

interface DeleteFailure {
  status?: number
  message: string
}

export function DeleteCourseDialog({ courseId, courseTitle, open, onOpenChange, onDelete }: DeleteCourseDialogProps) {
  const [error, setError] = useState<DeleteFailure | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setError(null)
    onOpenChange(nextOpen)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    setError(null)

    try {
      await onDelete()
      onOpenChange(false)
    } catch (caughtError) {
      const deleteError = caughtError as DeleteError
      const status = deleteError.status ?? deleteError.response?.status

      if (status === 409) {
        setError({ status, message: 'Não é possível excluir um curso com matrículas ativas' })
      } else {
        setError({
          status,
          message: deleteError.message || 'Não foi possível excluir o curso. Tente novamente.',
        })
      }
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-foreground/60" />
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 px-4 py-6">
          <Dialog.Popup className="w-full max-w-[384px] overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            <div className="space-y-2 px-5 pb-4 pt-5">
              <p className="font-mono text-mono-label text-destructive">
                DELETE /courses/{courseId}
              </p>
              <Dialog.Title className="text-h4 text-foreground">
                Excluir &quot;{courseTitle}&quot;?
              </Dialog.Title>
              <Dialog.Description className="text-body-sm text-muted-foreground">
                Os módulos e aulas do curso também serão removidos.
              </Dialog.Description>
            </div>

            <div className="flex items-center justify-between gap-4 bg-muted px-5 py-4">
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-mono-label text-muted-foreground">
                esc
              </kbd>
              <div className="flex gap-2">
                <Dialog.Close
                  render={<Button type="button" variant="outline" size="lg" disabled={isDeleting} />}
                >
                  Cancelar
                </Dialog.Close>
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  className="bg-destructive text-white hover:bg-destructive/90"
                  disabled={isDeleting}
                  onClick={handleDelete}
                >
                  {isDeleting ? 'Excluindo...' : 'Excluir curso'}
                </Button>
              </div>
            </div>
          </Dialog.Popup>

          {error && (
            <div
              role="alert"
              className="flex w-full max-w-[384px] items-start gap-2.5 rounded-lg border border-border-destructive bg-destructive-subtle px-3 py-2.5 text-destructive"
            >
              <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <div className="space-y-0.5">
                <p className="text-label-sm">
                  {error.status ? `${error.status} ${error.status === 409 ? 'Conflict' : 'Error'}` : 'Erro ao excluir'}
                </p>
                <p className="text-body-sm">{error.message}</p>
              </div>
            </div>
          )}
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
