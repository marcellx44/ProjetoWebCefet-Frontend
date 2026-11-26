import { Award, CircleCheck, GraduationCap, Play } from 'lucide-react'
import { AppSidebar } from '../../components/Sidebar/AppSidebar'
import ResumoCard from '../../components/aluno/ResumoCard'
import { Avatar, AvatarFallback } from '../../components/ui/avatar'
import { Button } from '../../components/ui/button'
import { Separator } from '../../components/ui/separator'
import { SidebarProvider } from '../../components/ui/sidebar'
import { cursos } from '../../data/cursos'
import { Link } from 'react-router'
import './Inicio.css'

//Log do daniel: Isso aqui é apenas placeholder até a gente puxar do backend
const matriculasAtivas = [
  { cursoId: 1, progresso: 24 },
  { cursoId: 2, progresso: 69 },
  { cursoId: 3, progresso: 67 },
]

function Inicio() {
  return (
    <SidebarProvider>
      <div className="layout-aluno">
        <AppSidebar />

        <main className="conteudo-aluno">
          <div className="inicio-topbar">
            <span className="inicio-topbar__caminho">~/aluno/inicio</span>
            <div className="inicio-topbar__perfil">
              <Avatar className="inicio-topbar__avatar">
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <strong>Ana Souza</strong>
                <span>Aluna</span>
              </div>
            </div>
          </div>

          <div className="inicio-conteudo">
            <header className="inicio-header">
              <p className="inicio-header__local">// ALUNO · INÍCIO</p>
              <h1 className="inicio-header__titulo">Olá, Ana</h1>
              <p className="inicio-header__descricao">
                Seus cursos, avaliações e certificados em um só lugar.
              </p>
            </header>

            <Separator className="inicio-separador" />

            <section className="resumo-cards" aria-label="Resumo do aluno">
              <ResumoCard titulo="Matrículas ativas" valor={2} icone={<GraduationCap />} />
              <ResumoCard titulo="Cursos concluídos" valor={1} icone={<CircleCheck />} />
              <ResumoCard titulo="Certificados" valor={1} icone={<Award />} />
            </section>

            <div className="inicio-colunas">
              <section className="cursos-secao" aria-labelledby="cursos-titulo">
                <div className="cursos-secao__cabecalho">
                  <h2 id="cursos-titulo">Continuar estudando</h2>
                  <span>GET /enrollments?status=ACTIVE</span>
                </div>

                <div className="cursos-lista">
                  {matriculasAtivas.map((matricula) => {
                    const curso = cursos.find((item) => item.id === matricula.cursoId)
                    if (!curso) return null

                    return (
                      <article className="curso-card" key={curso.id}>
                        <div className="curso-card__icone" aria-hidden="true">{curso.arte}</div>
                        <div className="curso-card__detalhes">
                          <div className="curso-card__titulo-linha">
                            <h3>{curso.nome}</h3>
                            <span className="curso-card__status">● ATIVA</span>
                          </div>
                          <div className="curso-card__progresso-linha">
                            <div
                              className="curso-card__progresso"
                              role="progressbar"
                              aria-label={`Progresso em ${curso.nome}`}
                              aria-valuenow={matricula.progresso}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span style={{ width: `${matricula.progresso}%` }} />
                            </div>
                            <span className="curso-card__porcentagem">{matricula.progresso}%</span>
                          </div>
                        </div>
                        <Button
                          render={<Link to={`/aluno/cursos/${curso.id}`} />}
                          size="sm"
                          className="curso-card__botao"
                        >
                          <Play aria-hidden="true" />
                          Continuar
                        </Button>
                      </article>
                    )
                  })}
                </div>
              </section>

              <section className="avaliacoes-secao" aria-labelledby="avaliacoes-titulo">
                <h2 id="avaliacoes-titulo">// Avaliações dos seus cursos</h2>
                <p>Suas avaliações aparecerão aqui.</p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Inicio
