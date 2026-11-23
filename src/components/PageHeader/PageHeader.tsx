import type { IPageHeader } from "./IPageHeader"

export const PageHeader = ({rota, titulo, descricao, acao} : IPageHeader) => {
    return (
        <div className="flex items-end gap-6 border-b border-border pb-6">
            <div className="flex flex-1 flex-col gap-2">
                <p className="text-muted-foreground font-mono uppercase text-mono-label">{rota}</p>
                <h1 className="text-foreground text-h1">{titulo}</h1>
                <p className="text-muted-foreground text-body-md">{descricao}</p>
            </div>
            {acao}
        </div>
    )
}
