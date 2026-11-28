import { useId, useState, type SubmitEvent } from 'react'
import { ArrowRight, Check, LoaderCircle } from 'lucide-react'
import {
  CourseFormFeedback,
  type CourseFormError,
} from '@/components/CourseFormFeedback/CourseFormFeedback'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'

export interface CourseFormCategory {
  id: number | string
  name: string
  isActive: boolean
}

export interface CourseFormValues {
  title: string
  description: string
  categoryId: number | string
  level: CourseLevel
}

interface CourseFormProps {
  categories: readonly CourseFormCategory[]
  defaultValues?: Partial<CourseFormValues>
  onSubmit: (values: CourseFormValues) => void | CourseFormError | Promise<void | CourseFormError>
  onCancel: () => void
}

type FieldErrors = Partial<Record<keyof CourseFormValues, string>>

const levels: readonly CourseLevel[] = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED']

export function CourseForm({ categories, defaultValues, onSubmit, onCancel }: CourseFormProps) {
  const id = useId()
  const [title, setTitle] = useState(defaultValues?.title ?? '')
  const [description, setDescription] = useState(defaultValues?.description ?? '')
  const [categoryId, setCategoryId] = useState<number | string | null>(defaultValues?.categoryId ?? null)
  const [level, setLevel] = useState<CourseLevel>(defaultValues?.level ?? 'BEGINNER')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [submitError, setSubmitError] = useState<CourseFormError | null>(null)
  const activeCategories = categories.filter((category) => category.isActive)

  function clearFieldError(field: keyof CourseFormValues) {
    setFieldErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitError(null)
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    const errors: FieldErrors = {}
    const selectedCategory = activeCategories.find((category) => category.id === categoryId)
    if (!title.trim()) errors.title = 'O título é obrigatório.'
    if (!description.trim()) errors.description = 'A descrição é obrigatória.'
    if (categoryId === null) errors.categoryId = 'Selecione uma categoria.'
    else if (!selectedCategory) {
      errors.categoryId = 'Selecione uma categoria ativa.'
    }
    if (!levels.includes(level)) errors.level = 'Selecione um nível válido.'

    setFieldErrors(errors)
    setSubmitError(null)

    const firstInvalidField = Object.keys(errors)[0]
    if (firstInvalidField || !selectedCategory) {
      if (firstInvalidField) document.getElementById(`${id}-${firstInvalidField}`)?.focus()
      return
    }

    setIsSubmitting(true)
    try {
      const result = await onSubmit({
        title: title.trim(),
        description: description.trim(),
        categoryId: selectedCategory.id,
        level,
      })
      setSubmitError(result ?? null)
    } catch {
      setSubmitError('submission-failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex w-full min-w-0 flex-col gap-5">
      <Card>
        <CardContent>
          <form aria-label="Criar curso" aria-busy={isSubmitting} noValidate onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor={`${id}-title`} className="block text-label-md">Título</label>
              <Input
                id={`${id}-title`}
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value)
                  clearFieldError('title')
                }}
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.title)}
                aria-describedby={`${id}-title-hint${fieldErrors.title ? ` ${id}-title-error` : ''}`}
              />
              <p id={`${id}-title-hint`} className="text-body-sm text-muted-foreground">Único dentro da categoria</p>
              {fieldErrors.title && (
                <p id={`${id}-title-error`} className="text-body-sm text-destructive-text">{fieldErrors.title}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor={`${id}-description`} className="block text-label-md">Descrição</label>
              <Textarea
                id={`${id}-description`}
                name="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value)
                  clearFieldError('description')
                }}
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.description)}
                aria-describedby={fieldErrors.description ? `${id}-description-error` : undefined}
              />
              {fieldErrors.description && (
                <p id={`${id}-description-error`} className="text-body-sm text-destructive-text">{fieldErrors.description}</p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor={`${id}-categoryId`} className="block text-label-md">Categoria</label>
                <Select
                  name="categoryId"
                  value={categoryId}
                  items={activeCategories.map((category) => ({ value: category.id, label: category.name }))}
                  onValueChange={(value) => {
                    setCategoryId(value)
                    clearFieldError('categoryId')
                  }}
                  required
                  disabled={isSubmitting || activeCategories.length === 0}
                >
                  <SelectTrigger
                    id={`${id}-categoryId`}
                    aria-invalid={Boolean(fieldErrors.categoryId)}
                    aria-describedby={`${id}-category-hint${fieldErrors.categoryId ? ` ${id}-category-error` : ''}`}
                  >
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {activeCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p id={`${id}-category-hint`} className="text-body-sm text-muted-foreground">
                  {activeCategories.length > 0 ? 'Somente categorias ativas' : 'Nenhuma categoria ativa disponível.'}
                </p>
                {fieldErrors.categoryId && (
                  <p id={`${id}-category-error`} className="text-body-sm text-destructive-text">{fieldErrors.categoryId}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor={`${id}-level`} className="block text-label-md">Nível</label>
                <Select<CourseLevel>
                  name="level"
                  value={level}
                  onValueChange={(value) => {
                    if (value !== null) setLevel(value)
                    clearFieldError('level')
                  }}
                  required
                  disabled={isSubmitting}
                >
                  <SelectTrigger
                    id={`${id}-level`}
                    aria-invalid={Boolean(fieldErrors.level)}
                    aria-describedby={`${id}-level-hint${fieldErrors.level ? ` ${id}-level-error` : ''}`}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p id={`${id}-level-hint`} className="text-body-sm text-muted-foreground">BEGINNER · INTERMEDIATE · ADVANCED</p>
                {fieldErrors.level && (
                  <p id={`${id}-level-error`} className="text-body-sm text-destructive-text">{fieldErrors.level}</p>
                )}
              </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex flex-wrap items-center gap-2 font-mono text-mono-label text-muted-foreground">
                <span>POST /courses</span>
                <ArrowRight aria-hidden="true" className="size-3" />
                <span>201 · isPublished: false</span>
              </p>
              <div className="flex flex-wrap justify-end gap-2">
                <Button type="button" variant="ghost" size="lg" disabled={isSubmitting} onClick={onCancel}>
                  Cancelar
                </Button>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting
                    ? <LoaderCircle aria-hidden="true" className="animate-spin motion-reduce:animate-none" />
                    : <Check aria-hidden="true" />}
                  {isSubmitting ? 'Criando...' : 'Criar curso'}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <CourseFormFeedback error={submitError} />
    </div>
  )
}
