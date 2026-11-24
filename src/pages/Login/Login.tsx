import { AuthShell } from '@/components/Auth/AuthShell'
import { LoginForm } from '@/components/Auth/LoginForm'

export function Login() {
  return (
    <AuthShell>
      <LoginForm />
    </AuthShell>
  )
}
