import { Outlet, useLocation } from 'react-router'
import { AppSidebar } from '@/components/Sidebar/AppSidebar'
import { Header } from '@/components/Header/Header'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export const AppLayout = () => {
  const location = useLocation()

  return (
    <SidebarProvider style={{ "--sidebar-width-icon": "4rem" } as React.CSSProperties}>
      <AppSidebar />
      <SidebarInset>
        <Header rota={location.pathname} nome="Maria Silva" cargo="Admin" />
        <SidebarTrigger/>
        <div className="flex flex-col gap-6 px-8 pt-7">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}