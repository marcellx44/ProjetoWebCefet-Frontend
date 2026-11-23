import type { IPageHeader } from "./IPageHeader"

export const PageHeader = ({rota, titulo, descricao} : IPageHeader) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-muted-foreground font-mono uppercase text-mono-label">{rota}</p>
            <h1 className="text-foreground text-h1">{titulo}</h1>
            <p className="text-muted-foreground text-medium">{descricao}</p>
        </div>
    )
}