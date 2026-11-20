import { Link, useParams } from 'react-router'
import { AlertCircle, ChevronDown, ChevronRight } from 'lucide-react'
import { AppSidebar } from '../../components/Sidebar/AppSidebar'
import { Avatar, AvatarFallback } from '../../components/ui/avatar'
import { Separator } from '../../components/ui/separator'
import { SidebarProvider } from '../../components/ui/sidebar'
import { cursos } from '../../data/cursos'
import './CursoDetalhe.css'

function CursoDetalhe() {
  const { id } = useParams()
  const curso = cursos.find((item) => item.id === Number(id))

  if (!curso) {
    return (
      <SidebarProvider>
        <div className="layout-aluno">
          <AppSidebar />
          <main className="conteudo-aluno detalhe-curso">
            <p>Curso não encontrado.</p>
            <Link to="/aluno/catalogo">Voltar ao catálogo</Link>
          </main>
        </div>
      </SidebarProvider>
    )
  }

  return (
    <SidebarProvider>
      <div className="layout-aluno">
        <AppSidebar />

        <main className="conteudo-aluno detalhe-curso">
          <div className="detalhe-curso__topbar">
            <span>~/aluno/cursos/{curso.id}</span>
            <div className="detalhe-curso__perfil">
              <Avatar className="detalhe-curso__avatar">
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <strong>Ana Souza</strong>
                <span>Aluna</span>
              </div>
            </div>
          </div>

          <div className="detalhe-curso__conteudo">
            <nav className="detalhe-curso__breadcrumb" aria-label="Navegação estrutural">
              <Link to="/aluno/catalogo">Catálogo</Link>
              <ChevronRight aria-hidden="true" />
              <span>{curso.categoria}</span>
              <ChevronRight aria-hidden="true" />
              <strong>{curso.nome}</strong>
            </nav>

            <header className="detalhe-curso__cabecalho">
              <p>// CURSO · {curso.id}</p>
              <h1>{curso.nome}</h1>
              <span>{curso.descricao}</span>
            </header>

            <Separator className="detalhe-curso__separador" />

            <div className="detalhe-curso__etiquetas">
              <span>{curso.categoria}</span>
              <span>{curso.nivel}</span>
              <span className="detalhe-curso__publicado">● PUBLICADO</span>
            </div>

            <div className="detalhe-curso__colunas">
              <section className="detalhe-curso__modulos" aria-labelledby="modulos-titulo">
                <div className="detalhe-curso__secao-cabecalho">
                  <h2 id="modulos-titulo">Conteúdo do curso</h2>
                  <code>GET /courses/{curso.id}/modules</code>
                </div>

                <div className="detalhe-curso__lista-modulos">
                  {curso.modulos.map((modulo, index) => (
                    <details className="detalhe-curso__modulo" key={modulo}>
                      <summary>
                        <span className="detalhe-curso__numero">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="detalhe-curso__modulo-texto">
                          <strong>{modulo}</strong>
                          <small>módulo ativo</small>
                        </span>
                        <ChevronDown aria-hidden="true" />
                      </summary>
                      <div className="detalhe-curso__aulas">
                        As aulas deste módulo aparecem após a matrícula no curso.
                      </div>
                    </details>
                  ))}
                </div>

                <p className="detalhe-curso__nota">
                  As aulas aparecem após a matrícula · GET /lessons?moduleId=... exige matrícula ACTIVE ou COMPLETED
                </p>
              </section>

              <aside className="detalhe-curso__matricula" aria-label="Informações da matrícula">
                <h2>// SUA MATRÍCULA</h2>
                <div className="detalhe-curso__aviso">
                  <AlertCircle aria-hidden="true" />
                  <div>
                    <strong>Você ainda não está matriculado</strong>
                    <p>A matrícula é feita por um instrutor ou administrador do curso.</p>
                  </div>
                </div>
                <dl>
                  <div><dt>categoria</dt><dd>{curso.categoria}</dd></div>
                  <div><dt>nível</dt><dd>{curso.nivel.toUpperCase()}</dd></div>
                  <div><dt>status</dt><dd>publicado</dd></div>
                </dl>
                <code>GET /courses/{curso.id}</code>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default CursoDetalhe
