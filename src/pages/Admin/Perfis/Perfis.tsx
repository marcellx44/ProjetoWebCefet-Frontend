import { PageHeader } from "@/components/PageHeader/PageHeader"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { PaginatedProfiles, ProfileRole } from "@/types/profile"
import { GraduationCap, KeyRound, Plus, Shield, User, type LucideIcon } from "lucide-react"
import { useLocation } from "react-router"

//mock
const resposta: PaginatedProfiles = {
    data: [
        {
            id: 1,
            name: 'Administrator',
            role: 'ADMIN',
            description: 'Acesso completo à plataforma',
            status: 'ACTIVE',
            createdAt: '2026-10-17T12:00:00.000Z',
            updatedAt: '2026-10-17T12:00:00.000Z',
            deletedAt: null,
        },
        {
            id: 2,
            name: 'Instructor',
            role: 'INSTRUCTOR',
            description: 'Gerencia cursos próprios',
            status: 'ACTIVE',
            createdAt: '2026-10-17T12:00:00.000Z',
            updatedAt: '2026-10-17T12:00:00.000Z',
            deletedAt: null,
        },
        {
            id: 3,
            name: 'Student',
            role: 'STUDENT',
            description: 'Estuda e acompanha o progresso dos cursos',
            status: 'ACTIVE',
            createdAt: '2026-10-17T12:00:00.000Z',
            updatedAt: '2026-10-17T12:00:00.000Z',
            deletedAt: null,
        },
    ],
    meta: { total: 3, page: 1, limit: 10, totalPages: 1 },
}

const visualPorRole: Record<ProfileRole,
    { icone: LucideIcon; variante: 'default' | 'secondary' | 'outline' }> =
{
    ADMIN: { icone: Shield, variante: 'default' },
    INSTRUCTOR: { icone: GraduationCap, variante: 'secondary' },
    STUDENT: {
        icone: User, variante: 'outline'
    },
}

export const Perfis = () => {
    const { pathname } = useLocation()
    const rota = '// ' + pathname.split('/').filter(Boolean).join(' · ')

    return (
        <>
            <PageHeader
                rota={rota}
                titulo="Perfis de acesso"
                descricao="Cada usuário tem um perfil. As permissões do perfil definem o acesso às rotas."
                acao={
                    <Button>
                        <Plus className="size-[18px]" />
                        Novo perfil
                    </Button>
                }
            />

            <p className="font-mono text-mono-sm text-muted-foreground">GET /profiles</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {resposta.data.map((perfil) => {
                    const { icone: Icone, variante } = visualPorRole[perfil.role]
                    const ativo = perfil.status === 'ACTIVE'

                    return (
                        <Card
                            key={perfil.id}
                            className="gap-3.5 rounded-xl border border-border p-6 ring-0"
                        >
                            <div className="flex items-center justify-between">
                                <div className="rounded-md bg-secondary p-2.5 text-secondary-foreground">
                                    <Icone className="size-5" />
                                </div>
                                <div className="flex gap-1.5">
                                    <Badge variant={variante}>
                                        {perfil.role === 'ADMIN' && (
                                            <span className="size-1.5 rounded-full bg-highlight" />
                                        )}
                                        {perfil.role}
                                    </Badge>
                                    <Badge variant={ativo ? 'success' : 'outline'}>
                                        {ativo && <span className="size-1.5 rounded-full bg-current" />}
                                        {perfil.status}
                                    </Badge>
                                </div>
                            </div>

                            <h2 className="text-h3 text-foreground">{perfil.name}</h2>
                            <p className="text-body-sm text-muted-foreground">{perfil.description}</p>

                            <Button variant="outline" className="h-9 w-full min-w-0 border-input bg-card px-4 text-label-sm">
                                <KeyRound className="size-4" />
                                Editar permissões
                            </Button>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}
