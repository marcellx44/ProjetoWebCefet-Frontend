import {
  SidebarProvider,
} from '../../components/ui/sidebar'

import { AppSidebar } from '../../components/Sidebar/AppSidebar.tsx'
import ResumoCard  from '../../components/aluno/ResumoCard.tsx'

function Inicio() {
  return (
    <SidebarProvider>
        <div className="layout-aluno">
            <AppSidebar />

        <main>
    <div className = "conteudo-aluno">

        <header className="inicio-header">
        <p className="inicio-header__local"> // ALUNO · INÍCIO</p>
        <h1 className="inicio-header__titulo">Olá, Ana</h1>
        <p className="inicio-header__descricao">
            Seus cursos, avaliações e certificados em um só lugar.
        </p>
        </header>

        <section className="resumo-cards" aria-label="Resumo do aluno">
            {/* Aqui entram os cartões de matrículas, cursos concluídos e certificados */}
            <ResumoCard titulo="Matrículas" valor={5} icone={<span>🎓</span>} />
            <ResumoCard titulo="Cursos Concluídos" valor={3} icone={<span>✅</span>} />
            <ResumoCard titulo="Certificados" valor={2} icone={<span>📜</span>} />
        </section>

        <section aria-label="Cursos em andamento">
            <h2>Continuar estudando</h2>
            {/* Aqui entram os cursos e o progresso */}
        </section>

        <section aria-label="Avaliações">
            <h2>Avaliações dos seus cursos</h2>
            {/* Aqui entram as avaliações */}
        </section>
    </div>
        </main>
        </div>
    </SidebarProvider>
  )
}

export default Inicio
