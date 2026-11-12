import { Navbar } from "@/components/Navbar/Navbar"
import { Button } from "@/components/ui/button"
import { House } from 'lucide-react';

export const NotFound = () => {
    return (
        <div className="flex min-h-dvh flex-col">
            <Navbar />
            <div className="bg-sidebar bg-[linear-gradient(to_right,rgb(153_207_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(153_207_255/0.06)_1px,transparent_1px)] bg-size-[40px_40px] flex-1 flex items-center justify-center">
                <div className="flex flex-col gap-7 items-center">
                    <div className="flex">
                        <p className="text-primary-foreground font-bold text-[160px] font-mono">404</p>
                        <p className="text-[160px] text-highlight">_</p>
                    </div>
                    <p className="text-primary-foreground text-3xl font-semibold">Página não encontrada</p>
                    <p className="text-chart-3 text-sm">a rota acessada não existe na aplicação</p>
                    <Button className="bg-highlight text-highlight-foreground hover:bg-highlight-hover gap-2">
                        <House />
                        <p>Voltar ao início</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}