import { Outlet, useLocation, useMatches } from 'react-router'
import { AppSidebar } from '@/components/Sidebar/AppSidebar'
import { Header } from '@/components/Header/Header'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

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

  if (isAuthPage) return <Outlet />

  return (
    <SidebarProvider style={{ "--sidebar-width-icon": "4rem" } as React.CSSProperties}>
      <AppSidebar perfil={perfil} nome={isInstructorPage ? nome : undefined} />
      <SidebarInset>
        <Header rota={location.pathname} nome={nome} cargo={cargo} />
        <SidebarTrigger/>
        <div className="flex flex-col gap-6 px-8 pt-7">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
