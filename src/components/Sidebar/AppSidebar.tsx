import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import logo from '@/assets/Logo.png'
import { sidebarItems } from "./sidebarItems"

export const AppSidebar = () => {
  return (
    <Sidebar className="px-4 py-6 bg-sidebar">
      <SidebarHeader>
        <img src={logo} alt="CursosCefet" className="h-8 w-fit" />
      </SidebarHeader>
      <SidebarContent>
        {/* grupo do aprender */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-overline text-chart-3 opacity-70">
            APRENDER
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton className="h-10 gap-3 px-3 text-body-md text-chart-3 [&_svg]:size-5 hover:[&_svg]:text-highlight data-active:[&_svg]:text-highlight">
                    <item.icone />
                    <span>{item.nome}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="flex-row items-center gap-2.5 border-t border-primary px-2 py-3">
        <Avatar size="lg" className="rounded-lg after:hidden">
          <AvatarFallback className="rounded-lg bg-chart-3 text-label-md text-accent-foreground">
            MK
          </AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-label-md text-sidebar-foreground">Mock Aluno</span>
          <span className="truncate text-body-sm text-chart-3">Aluna</span>
        </div>
        <button
          type="button"
          aria-label="Sair"
          className="cursor-pointer text-chart-3 hover:text-highlight"
        >
          <LogOut className="size-5" />
        </button>
      </SidebarFooter>
    </Sidebar>
  )
}