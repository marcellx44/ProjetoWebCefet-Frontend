import logo from '@/assets/LogoDark.png'
import { Link } from 'react-router'
import { Button } from '../ui/button'

export const Navbar = () => {
    return (
        <nav className='flex md:h-16 items-center justify-between border-b border-border bg-card px-4 md:px-20'>
            <div className='flex items-center gap-10'>
                <img src={logo} alt="CursosCefet" className='h-8 shrink-0' />
                <Link to="/verificar-certificado" className='text-body-md font-medium text-muted-foreground'>Verificar Certificado</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Button variant={'ghost'}>Entrar</Button>
                <Button>Criar Conta</Button>
            </div>
        </nav>
    )
}