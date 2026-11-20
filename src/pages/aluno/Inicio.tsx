import { Award, CircleCheck, GraduationCap, Play } from 'lucide-react'
import { AppSidebar } from '../../components/Sidebar/AppSidebar'
import ResumoCard from '../../components/aluno/ResumoCard'
import { Avatar, AvatarFallback } from '../../components/ui/avatar'
import { Button } from '../../components/ui/button'
import { Separator } from '../../components/ui/separator'
import { SidebarProvider } from '../../components/ui/sidebar'
import './Inicio.css'

//Log do daniel: Isso aqui é apenas placeholder até a gente puxar do backend
const cursosEmAndamento = [
  { id: 1, nome: 'NestJS do Zero', progresso: 24, icone: '{api}' },
  { id: 2, nome: 'React Moderno', progresso: 69, icone: '</>' },
  { id: 3, nome: 'Curso de como bangar certo no cs', progresso: 67, icone: '🎮' },
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
              <ResumoCard titulo="Cursos concluídos" valor={1} icone={< CircleCheck />} />
              <ResumoCard titulo="Certificados" valor={1} icone={<Award />} />
            </section>

            <div className="inicio-colunas">
              <section className="cursos-secao" aria-labelledby="cursos-titulo">
                <div className="cursos-secao__cabecalho">
                  <h2 id="cursos-titulo">Continuar estudando</h2>
                  <span>GET /enrollments?status=ACTIVE</span>
                </div>

                <div className="cursos-lista">
                  {cursosEmAndamento.map((curso) => (
                    <article className="curso-card" key={curso.id}>
                      <div className="curso-card__icone" aria-hidden="true">{curso.icone}</div>
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
                            aria-valuenow={curso.progresso}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span style={{ width: `${curso.progresso}%` }} />
                          </div>
                          <span className="curso-card__porcentagem">{curso.progresso}%</span>
                        </div>
                      </div>
                      <Button size="sm" className="curso-card__botao">
                        <Play aria-hidden="true" />
                        Continuar
                      </Button>
                    </article>
                  ))}
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
