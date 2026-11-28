import { useId } from 'react'
import { CircleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function CoursePublicationNotice() {
  const titleId = useId()

  return (
    <Alert variant="warning" role="note" aria-labelledby={titleId}>
      <CircleAlert aria-hidden="true" />
      <AlertTitle id={titleId}>Para publicar (RN-03)</AlertTitle>
      <AlertDescription>
        O curso precisa de ao menos um módulo ativo com uma aula, categoria ativa e instrutor ativo.
      </AlertDescription>
    </Alert>
  )
}
