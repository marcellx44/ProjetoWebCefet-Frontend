import {
    Award,
    BookOpen,
    ChartColumn,
    ClipboardCheck,
    GraduationCap,
    House,
    KeyRound,
    LayoutGrid,
    Search,
    Shield,
    Tag,
    User,
    Users,
} from 'lucide-react'

export type Perfil = "aluno" | "instrutor" | "admin"

export const menuAluno = [
    {
        titulo: 'APRENDER',
        itens: [
            {
                id: 1,
                nome: "Início",
                icone: House,
                url: "/",
            },
            {
                id: 2,
                nome: "Catálogo",
                icone: Search,
                url: "/catalogo",
            },
            {
                id: 3,
                nome: "Meus cursos",
                icone: BookOpen,
                url: "/meus-cursos",
            },
            {
                id: 4,
                nome: "Avaliações",
                icone: ClipboardCheck,
                url: "/avaliacoes",
            },
            {
                id: 5,
                nome: "Certificados",
                icone: Award,
                url: "/certificados",
            }
        ]
    },
    {
        titulo: 'CONTA',
        itens: [
            {
                id: 6,
                nome: "Perfil",
                icone: User,
                url: "/perfil",
            }
        ]
    }
]

export const menuInstrutor = [
    {
        titulo: 'ENSINAR',
        itens: [
            {
                id: 1,
                nome: "Painel",
                icone: LayoutGrid,
                url: "/instrutor",
            },
            {
                id: 2,
                nome: "Meus cursos",
                icone: BookOpen,
                url: "/instrutor/cursos",
            },
            {
                id: 3,
                nome: "Alunos",
                icone: Users,
                url: "/instrutor/alunos",
            },
            {
                id: 4,
                nome: "Progresso",
                icone: ChartColumn,
                url: "/instrutor/progresso",
            },
            {
                id: 5,
                nome: "Avaliações",
                icone: ClipboardCheck,
                url: "/instrutor/avaliacoes",
            }
        ]
    },
    {
        titulo: 'CONTA',
        itens: [
            {
                id: 6,
                nome: "Perfil",
                icone: User,
                url: "/perfil",
            }
        ]
    }
]

export const menuAdmin = [
    {
        titulo: 'GESTÃO',
        itens: [
            {
                id: 1,
                nome: "Painel",
                icone: LayoutGrid,
                url: "/admin",
            },
            {
                id: 2,
                nome: "Usuários",
                icone: Users,
                url: "/admin/usuarios",
            },
            {
                id: 3,
                nome: "Perfis",
                icone: Shield,
                url: "/admin/perfis",
            },
            {
                id: 4,
                nome: "Permissões",
                icone: KeyRound,
                url: "/admin/permissoes",
            }
        ]
    },
    {
        titulo: 'CATÁLOGO',
        itens: [
            {
                id: 5,
                nome: "Categorias",
                icone: Tag,
                url: "/admin/categorias",
            },
            {
                id: 6,
                nome: "Cursos",
                icone: BookOpen,
                url: "/admin/cursos",
            },
            {
                id: 7,
                nome: "Matrículas",
                icone: GraduationCap,
                url: "/admin/matriculas",
            },
            {
                id: 8,
                nome: "Certificados",
                icone: Award,
                url: "/admin/certificados",
            }
        ]
    }
]

export const menuPorPerfil = {
    aluno: menuAluno,
    instrutor: menuInstrutor,
    admin: menuAdmin,
}


export const nomeDoPerfil = {
    aluno: "Aluno",
    instrutor: "Instrutor",
    admin: "Administrador",
}
