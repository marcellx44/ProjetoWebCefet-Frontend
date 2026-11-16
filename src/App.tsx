import './App.css'
import { AppSidebar } from './components/Sidebar/AppSidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

function App() {

  return (
    <>
      <SidebarProvider style={{ "--sidebar-width-icon": "4rem" } as React.CSSProperties}>
        <AppSidebar />
        <SidebarInset>
          <SidebarTrigger />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
