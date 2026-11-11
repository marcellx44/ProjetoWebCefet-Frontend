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
import { menuPorPerfil, nomeDoPerfil, type Perfil } from "./sidebarItems"

type AppSidebarProps = {
  perfil?: Perfil
}

export const AppSidebar = ({ perfil = "aluno" }: AppSidebarProps) => {
  const grupos = menuPorPerfil[perfil]

  return (
    <Sidebar collapsible="icon" className="px-4 py-6 bg-sidebar group-data-[collapsible=icon]:px-2">
      <SidebarHeader className="group-data-[collapsible=icon]:items-center">
        {/* fechada: mostra só o quadradinho ">_" da esquerda da logo */}
        <img
          src={logo}
          alt="CursosCefet"
          className="h-8 w-fit group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:object-cover group-data-[collapsible=icon]:object-left"
        />
      </SidebarHeader>
      <SidebarContent>
        {grupos.map((grupo) => (
          <SidebarGroup key={grupo.titulo}>
            <SidebarGroupLabel className="font-mono text-overline text-chart-3 opacity-70">
              {grupo.titulo}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {grupo.itens.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      tooltip={item.nome}
                      className="h-10 gap-3 px-3 text-body-md text-chart-3 [&_svg]:size-5 hover:[&_svg]:text-highlight data-active:[&_svg]:text-highlight group-data-[collapsible=icon]:p-1.5!"
                    >
                      <item.icone />
                      <span>{item.nome}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="flex-row items-center gap-2.5 border-t border-primary px-2 py-3">
        <Avatar size="lg" className="rounded-lg after:hidden group-data-[collapsible=icon]:size-8!">
          <AvatarFallback className="rounded-lg bg-chart-3 text-label-md text-accent-foreground group-data-[collapsible=icon]:text-label-sm">
            MK
          </AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-1 flex-col group-data-[collapsible=icon]:hidden">
          <span className="truncate text-label-md text-sidebar-foreground">Mock Aluno</span>
          <span className="truncate text-body-sm text-chart-3">{nomeDoPerfil[perfil]}</span>
        </div>
        <button
          type="button"
          aria-label="Sair"
          className="cursor-pointer text-chart-3 hover:text-highlight group-data-[collapsible=icon]:hidden"
        >
          <LogOut className="size-5" />
        </button>
      </SidebarFooter>
    </Sidebar>
  )
}