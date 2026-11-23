import type { ReactNode } from "react";

export interface IPageHeader {
    rota: string;
    titulo: string;
    descricao: string;
    acao?: ReactNode;
}
