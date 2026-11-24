import { useId, useState, type SubmitEvent } from 'react'
import { ArrowRight, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

interface LoginCredentials {
  email: string
  password: string
}

interface LoginFormProps {
  onSubmit?: (credentials: LoginCredentials) => void | Promise<void>
  onForgotPassword?: () => void
  onCreateAccount?: () => void
}

export function LoginForm({ onSubmit, onForgotPassword, onCreateAccount }: LoginFormProps) {
  const id = useId()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    setMessage('')
    setError('')

    if (!onSubmit) {
      setMessage('O login ainda não está conectado ao serviço de autenticação. Nenhum dado foi enviado.')
      return
    }

    const data = new FormData(event.currentTarget)
    const credentials = {
      email: String(data.get('email')).trim(),
      password: String(data.get('password')),
    }

    setIsSubmitting(true)
    try {
      await onSubmit(credentials)
    } catch {
      setError('Não foi possível entrar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <header>
        <p className="font-mono text-mono-label text-chart-2">// AUTH · LOGIN</p>
        <h1 id={`${id}-title`} className="mt-2 font-heading text-h1">Entrar na plataforma</h1>
        <p className="mt-2 text-body-md text-muted-foreground">Acesse com o e-mail e a senha da sua conta.</p>
      </header>

      <form className="mt-6 space-y-5" aria-labelledby={`${id}-title`} aria-busy={isSubmitting} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-email`} className="text-label-md">E-mail</label>
          <Input
            id={`${id}-email`}
            name="email"
            type="email"
            className="h-11 border-border bg-card px-4 py-2 text-body-lg placeholder:text-placeholder focus-visible:ring-1 focus-visible:ring-ring md:text-body-md"
            autoComplete="email"
            placeholder="seu@email.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-password`} className="text-label-md">Senha</label>
          <Input
            id={`${id}-password`}
            name="password"
            type="password"
            className="h-11 border-border bg-card px-4 py-2 text-body-lg placeholder:text-placeholder focus-visible:ring-1 focus-visible:ring-ring md:text-body-md"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="button"
            variant="link"
            className="h-auto min-w-0 rounded-sm p-0 text-label-md"
            disabled={isSubmitting}
            onClick={() => {
              if (onForgotPassword) onForgotPassword()
              else setMessage('A recuperação de senha ainda não está disponível.')
            }}
          >
            Esqueci minha senha
          </Button>
        </div>

        <Button type="submit" className="w-full text-label-md" disabled={isSubmitting}>
          {isSubmitting
            ? <LoaderCircle aria-hidden="true" className="animate-spin motion-reduce:animate-none" />
            : <ArrowRight aria-hidden="true" />}
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>

        {error && <p role="alert" className="text-body-sm text-destructive-text">{error}</p>}
        <p role="status" className="text-body-sm text-muted-foreground empty:hidden">{message}</p>
      </form>

      <p className="mt-5 flex flex-wrap items-center justify-center gap-1 text-body-sm text-muted-foreground">
        Não tem conta?
        <Button
          type="button"
          variant="link"
          className="h-auto min-w-0 rounded-sm p-0 text-label-md"
          disabled={isSubmitting}
          onClick={() => {
            if (onCreateAccount) onCreateAccount()
            else setMessage('O cadastro de conta ainda não está disponível.')
          }}
        >
          Criar conta
        </Button>
      </p>

      <div className="mt-5">
        <Separator />
        <p className="mt-3 flex flex-wrap items-center gap-2 font-mono text-mono-label text-muted-foreground">
          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-success" />
          POST /auth/login
          <ArrowRight aria-hidden="true" className="size-3" />
          accessToken · refreshToken
        </p>
      </div>
    </div>
  )
}
