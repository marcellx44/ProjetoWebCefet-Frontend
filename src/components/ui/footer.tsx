import './footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <a className="site-footer__logo" href="/" aria-label="Cursos Cefet, página inicial">
            <span className="site-footer__mark" aria-hidden="true">&gt;_</span>
            <span className="site-footer__name"><strong>Cursos</strong><span>Cefet</span></span>
          </a>
          <p>Plataforma de cursos online · Projeto Web CEFET-RJ</p>
        </div>

        <a className="site-footer__certificate" href="/certificados">
          Verificar certificado
        </a>
      </div>
    </footer>
  )
}

export default Footer
