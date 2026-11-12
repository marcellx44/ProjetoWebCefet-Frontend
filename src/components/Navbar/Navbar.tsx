import logo from '@/assets/Logo.png'
import { Button } from '@base-ui/react/button'
import { Link } from 'react-router'

export const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            {/* <Link to="verificar-certificado">Verificar Certificado</Link> */}
            <div>
                <Button>Entrar</Button>
                <Button>Criar Conta</Button>
            </div>
        </nav>
    )
}