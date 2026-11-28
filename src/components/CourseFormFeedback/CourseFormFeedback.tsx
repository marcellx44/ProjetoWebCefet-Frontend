import { CircleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export type CourseFormError = 'duplicate-title' | 'inactive-category' | 'submission-failed'

interface CourseFormFeedbackProps {
  error?: CourseFormError | null
}

const messages: Record<CourseFormError, { title: string; description: string }> = {
  'duplicate-title': {
    title: '409 · título duplicado',
    description: 'Já existe um curso com esse título nessa categoria.',
  },
  'inactive-category': {
    title: '400 · categoria inativa',
    description: 'Não é possível criar um curso em uma categoria inativa.',
  },
  'submission-failed': {
    title: 'Não foi possível criar o curso',
    description: 'Tente novamente em instantes.',
  },
}

export function CourseFormFeedback({ error }: CourseFormFeedbackProps) {
  if (!error) return null

  const message = messages[error]

  return (
    <Alert variant="destructive">
      <CircleAlert aria-hidden="true" />
      <AlertTitle>{message.title}</AlertTitle>
      <AlertDescription>{message.description}</AlertDescription>
    </Alert>
  )
}
