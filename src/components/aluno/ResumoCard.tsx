import './ResumoCard.css'

type ResumoCardProps = {
  titulo: string
  valor: number
  icone: React.ReactNode
}

function ResumoCard({ titulo, valor, icone }: ResumoCardProps) {
  return (
    <article className="resumo-card">
      <div className="resumo-card__icone">{icone}</div>
      <div className="resumo-card__conteudo">
        <p className="resumo-card__titulo">{titulo}</p>
        <strong className="resumo-card__valor">{valor}</strong>
      </div>
    </article>
  )
}

export default ResumoCard
