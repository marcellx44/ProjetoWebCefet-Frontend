import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  ChevronLeft,
  ChevronRight,
  Filter,
} from 'lucide-react'
import { AppSidebar } from '../../components/Sidebar/AppSidebar'
import { cursos } from '../../data/cursos'
import { Avatar, AvatarFallback } from '../../components/ui/avatar'
import { Button } from '../../components/ui/button'
import { Separator } from '../../components/ui/separator'
import { SidebarProvider } from '../../components/ui/sidebar'
import './Catalogo.css'

const categorias = ['Backend', 'Frontend', 'DevOps', 'Banco de Dados', 'Games']
const niveis = ['Iniciante', 'Intermediário', 'Avançado']

function Catalogo() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [nivelSelecionado, setNivelSelecionado] = useState('')
  const [categoriaAplicada, setCategoriaAplicada] = useState('')
  const [nivelAplicado, setNivelAplicado] = useState('')
  const [pagina, setPagina] = useState(1)

  const cursosFiltrados = useMemo(
    () => cursos.filter((curso) =>
      (!categoriaAplicada || curso.categoria === categoriaAplicada) &&
      (!nivelAplicado || curso.nivel === nivelAplicado),
    ),
    [categoriaAplicada, nivelAplicado],
  )

  const limitePorPagina = 20
  const totalPaginas = Math.max(1, Math.ceil(cursosFiltrados.length / limitePorPagina))
  const cursosDaPagina = cursosFiltrados.slice(
    (pagina - 1) * limitePorPagina,
    pagina * limitePorPagina,
  )

  function aplicarFiltros() {
    setCategoriaAplicada(categoriaSelecionada)
    setNivelAplicado(nivelSelecionado)
    setPagina(1)
  }

  return (
    <SidebarProvider>
      <div className="layout-aluno">
        <AppSidebar />

        <main className="conteudo-aluno catalogo-pagina">
          <div className="catalogo-topbar">
            <span>~/aluno/catalogo</span>
            <div className="catalogo-perfil">
              <Avatar className="catalogo-perfil__avatar">
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <strong>Ana Souza</strong>
                <span>Aluna</span>
              </div>
            </div>
          </div>

          <div className="catalogo-conteudo">
            <header className="catalogo-cabecalho">
              <p>// ALUNO · CATÁLOGO</p>
              <h1>Catálogo de cursos</h1>
              <span>Cursos publicados. Filtre por categoria e nível.</span>
            </header>

            <Separator className="catalogo-separador" />

            <section className="catalogo-filtros" aria-label="Filtros do catálogo">
              <label className="catalogo-filtros__campo">
                <span className="sr-only">Categoria</span>
                <select
                  value={categoriaSelecionada}
                  onChange={(event) => setCategoriaSelecionada(event.target.value)}
                >
                  <option value="">Categoria: Todas</option>
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>Categoria: {categoria}</option>
                  ))}
                </select>
              </label>

              <label className="catalogo-filtros__campo">
                <span className="sr-only">Nível</span>
                <select
                  value={nivelSelecionado}
                  onChange={(event) => setNivelSelecionado(event.target.value)}
                >
                  <option value="">Nível: Todos</option>
                  {niveis.map((nivel) => (
                    <option key={nivel} value={nivel}>Nível: {nivel}</option>
                  ))}
                </select>
              </label>

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="catalogo-filtros__botao"
                onClick={aplicarFiltros}
              >
                <Filter aria-hidden="true" />
                Filtrar
              </Button>

              <div className="catalogo-endpoint" aria-live="polite">
                <span className="catalogo-endpoint__metodo">● GET</span>
                <code>
                  /courses?category={categoriaAplicada || 'all'}&amp;level={nivelAplicado || 'all'}&amp;page={pagina}&amp;limit={limitePorPagina}
                </code>
              </div>
            </section>

            {cursosDaPagina.length > 0 ? (
              <section className="catalogo-grade" aria-label="Cursos disponíveis">
                {cursosDaPagina.map(({ id, nome, categoria, nivel, descricao, caminho, arte, Icone }) => (
                  <article className="catalogo-curso" key={id}>
                    <div className="catalogo-curso__arte">
                      <span className="catalogo-curso__caminho">{caminho}</span>
                      <Icone className="catalogo-curso__icone" aria-hidden="true" />
                      <strong>{arte}<i>_</i></strong>
                    </div>
                    <div className="catalogo-curso__corpo">
                      <div className="catalogo-curso__etiquetas">
                        <span>{categoria}</span>
                        <span>{nivel}</span>
                      </div>
                      <h2>{nome}</h2>
                      <p>{descricao}</p>
                      <Separator className="catalogo-curso__separador" />
                      <Link className="catalogo-curso__link" to={`/aluno/cursos/${id}`}>
                        Ver curso
                      </Link>
                    </div>
                  </article>
                ))}
              </section>
            ) : (
              <p className="catalogo-vazio">Nenhum curso encontrado para esses filtros.</p>
            )}

            <footer className="catalogo-paginacao">
              <span>page={pagina} · limit={limitePorPagina}</span>
              <div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={pagina <= 1}
                  onClick={() => setPagina((atual) => Math.max(1, atual - 1))}
                >
                  <ChevronLeft aria-hidden="true" />
                  Anterior
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={pagina >= totalPaginas}
                  onClick={() => setPagina((atual) => Math.min(totalPaginas, atual + 1))}
                >
                  Próxima
                  <ChevronRight aria-hidden="true" />
                </Button>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Catalogo
