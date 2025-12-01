import './App.css'

function App() {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="brand">
          <div className="logo-placeholder" aria-hidden="true">SENA</div>
          <div className="brand-text">
            <h1>Centro de Gestión de Mercados, Logística y Tecnología</h1>
            <p className="subtitle">Formación, innovación y apoyo al sector productivo</p>
          </div>
        </div>
        <nav className="main-nav" aria-label="Menú principal">
          <a href="#inicio">Inicio</a>
          <a href="#programas">Programas</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <h2>Bienvenido al Centro de Gestión de Mercados</h2>
            <p>
              Impulsamos el desarrollo de competencias en logística, gestión
              de mercados y tecnología para fortalecer el talento regional.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#programas">Ver programas</a>
              <a className="btn outline" href="#servicios">Conocer servicios</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true"></div>
        </section>

        <section id="programas" className="cards">
          <h3>Programas destacados</h3>
          <div className="card-grid">
            <article className="card-item">
              <h4>Logística y Distribución</h4>
              <p>Formación técnica y práctica para la gestión logística.</p>
            </article>
            <article className="card-item">
              <h4>Gestión de Mercados</h4>
              <p>Herramientas para investigación y desarrollo de mercados.</p>
            </article>
            <article className="card-item">
              <h4>Tecnología Aplicada</h4>
              <p>Capacitación en herramientas digitales y automatización.</p>
            </article>
          </div>
        </section>

        <section id="servicios" className="services">
          <h3>Servicios al sector</h3>
          <ul>
            <li>Asesorías técnicas</li>
            <li>Laboratorios de práctica</li>
            <li>Vinculación empresa-centro</li>
          </ul>
        </section>

        <section id="contacto" className="contact">
          <h3>Contacto</h3>
          <p>Dirección: Carrera X #Y - Ciudad</p>
          <p>Teléfono: (000) 000-0000 • Correo: centro@example.com</p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} SENA - Centro de Gestión de Mercados, Logística y Tecnología</p>
      </footer>
    </div>
  )
}

export default App
