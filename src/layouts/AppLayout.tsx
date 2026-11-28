import { Outlet, useLocation, useMatches } from 'react-router'
import { AppSidebar } from '@/components/Sidebar/AppSidebar'
import { Header } from '@/components/Header/Header'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { nomeDoPerfil, type Perfil } from '@/components/Sidebar/sidebarItems'

interface AppLayoutHandle {
  layout?: 'auth'
  perfil?: Perfil
  nome?: string
}

export const AppLayout = () => {
  const location = useLocation()
  const matches = useMatches()
  const isAuthPage = matches.some((match) =>
    (match.handle as { layout?: string } | undefined)?.layout === 'auth'
  )
  const isInstructorPage = matches.some((match) =>
    (match.handle as { perfil?: string } | undefined)?.perfil === 'instrutor'
  )
  const perfil = isInstructorPage ? 'instrutor' : 'admin'
  const nome = isInstructorPage ? 'Rafael Lima' : 'Maria Silva'
  const cargo = isInstructorPage ? 'Instrutor' : 'Admin'
  const handles = useMatches().map((match) => match.handle as AppLayoutHandle | undefined)
  const isAuthPage = handles.some((handle) => handle?.layout === 'auth')
  const { perfil = 'admin', nome = 'Maria Silva' } = handles.findLast((handle) => handle?.perfil) ?? {}

  if (isAuthPage) return <Outlet />

  return (
    <SidebarProvider style={{ "--sidebar-width-icon": "4rem" } as React.CSSProperties}>
      <AppSidebar perfil={perfil} nome={isInstructorPage ? nome : undefined} />
      <SidebarInset>
        <Header rota={location.pathname} nome={nome} cargo={cargo} />
        <SidebarTrigger/>
        <div className="flex flex-col gap-6 px-8 pt-7">
      <AppSidebar perfil={perfil} nome={nome} />
      <SidebarInset className="min-w-0">
        <Header rota={location.pathname} nome={nome} cargo={perfil === 'admin' ? 'Admin' : nomeDoPerfil[perfil]} />
        {perfil === 'instrutor' ? (
          <div className="px-4 pt-3 md:hidden"><SidebarTrigger aria-label="Abrir menu" /></div>
        ) : <SidebarTrigger />}
        <div className={perfil === 'instrutor'
          ? 'flex min-w-0 flex-col gap-6 px-4 py-7 sm:px-8'
          : 'flex flex-col gap-6 px-8 pt-7'}>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
