import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface HeaderProps {
    rota: string
    nome: string
    cargo: string
    avatarUrl?: string
}

function obterIniciais(nome: string): string {
    const nomeSplitado = nome.split(" ");
    const qtdPartes = nomeSplitado.length
    const iniciais = nomeSplitado.map((parte, index) => {
        if (index === 0 || index === qtdPartes - 1) {
            return parte[0].toUpperCase();
        }
        return "";
    });
    return iniciais.join("");
}

export const Header = ({ rota, nome, cargo, avatarUrl }: HeaderProps) => {
    const iniciais = obterIniciais(nome)

    return (
        <header className="flex h-16 items-center justify-between gap-4 border-b border-border bg-card px-4 md:px-6">
            <span className="truncate font-mono text-mono-md text-muted-foreground">
                {rota}
            </span>

            <div className="flex shrink-0 items-center gap-3">
                <Avatar size="lg" className="rounded-lg after:hidden">
                    {avatarUrl && <AvatarImage src={avatarUrl} alt={nome} className="rounded-lg" />}
                    <AvatarFallback className="rounded-lg bg-chart-3 text-label-md text-accent-foreground">
                        {iniciais}
                    </AvatarFallback>
                </Avatar>

                <div className="flex flex-col leading-tight">
                    <span className="text-label-md text-foreground">{nome}</span>
                    <span className="text-body-sm text-muted-foreground">{cargo}</span>
                </div>
            </div>
        </header>
    )
}
