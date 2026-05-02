export default function Page() {
  const propuesta = [
    {
      nombre: 'Mariscos del día',
      desc: 'Llegada diaria desde lonjas gallegas. Pulpo, percebes, navajas y lo que el mar permita.'
    },
    {
      nombre: 'Carnes a la brasa',
      desc: 'Vaca rubia gallega madurada, cocinada al carbón con la calma que pide.'
    },
    {
      nombre: 'Recetas de casa',
      desc: 'Caldo gallego, empanada, lacón con grelos. Lo de siempre, hecho como debe ser.'
    },
    {
      nombre: 'Bodega del norte',
      desc: 'Albariños, godellos, mencías y referencias pequeñas que merecen descubrirse.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-base tracking-[0.18em] uppercase text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
          >
            Los Montes <span className="italic font-normal text-accent">de Galicia</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
            <a href="#filosofia" className="hover:text-ink transition-colors duration-200">Filosofía</a>
            <a href="#cocina" className="hover:text-ink transition-colors duration-200">Cocina</a>
            <a href="#casa" className="hover:text-ink transition-colors duration-200">Casa</a>
            <a href="#visita" className="hover:text-ink transition-colors duration-200">Visita</a>
          </nav>
        </div>
      </header>

      {/* HERO — split asymmetric */}
      <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-display italic text-sm text-accent tracking-widest uppercase mb-6">
                Restaurante gallego · Madrid
              </p>
              <h1 className="font-display font-normal text-ink leading-[1.02] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
                Cocina de Galicia,
                <br />
                <span className="italic font-normal text-accent">mesa de Madrid.</span>
              </h1>
              <p className="mt-8 lg:mt-10 max-w-xl text-ink-soft leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                Producto del norte tratado con respeto. Una casa donde el Atlántico llega cada día y la sobremesa nunca tiene prisa.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#visita"
                  className="inline-flex items-center gap-2 bg-ink text-bg px-7 py-4 rounded-full text-sm tracking-wide active:scale-[0.97] transition-transform duration-150 ease-out hover:bg-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                >
                  Cómo llegar
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#visita"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm tracking-wide border border-line text-ink active:scale-[0.97] transition-transform duration-150 ease-out hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                >
                  Llamar al restaurante
                </a>
              </div>
            </div>

            {/* Right column — decorative composition */}
            <div className="col-span-12 lg:col-span-4 relative h-[280px] lg:h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-soft via-surface to-bg rounded-[2rem]" />
              <div className="absolute inset-0 rounded-[2rem] border border-line" />
              {/* texture lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 400" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 320 Q 50 280 100 310 T 200 290" stroke="#5a6b3d" strokeWidth="0.6" fill="none" />
                <path d="M0 340 Q 60 300 120 330 T 200 310" stroke="#5a6b3d" strokeWidth="0.4" fill="none" />
                <path d="M0 360 Q 70 320 140 350 T 200 330" stroke="#5a6b3d" strokeWidth="0.3" fill="none" />
              </svg>
              {/* circular badge */}
              <div
                className="absolute -top-6 -right-2 lg:top-4 lg:-right-6 w-24 h-24 rounded-full bg-accent-soft border border-accent flex items-center justify-center text-center text-[10px] font-medium uppercase tracking-[0.18em] text-accent leading-tight px-2"
                style={{ transform: 'rotate(-8deg)' }}
              >
                Galicia<br />·<br />Madrid
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA — surface elevada */}
      <section id="filosofia" className="relative bg-surface border-y border-line">
        {/* decorative quote */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-8 left-4 lg:left-12 font-display text-accent leading-none select-none"
          style={{ fontSize: '8rem', opacity: 0.12, transformOrigin: 'top left' }}
        >
          “
        </span>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-36 relative">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-4 group">
              <p className="font-display italic text-[0.8125rem] text-accent tracking-[0.2em] uppercase">
                01 — Filosofía
              </p>
              <div className="mt-4 h-px bg-accent w-16 group-hover:w-24 transition-[width] duration-300 ease-out" />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display font-normal text-ink leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Una casa con raíces.
              </h2>
              <p className="mt-8 max-w-2xl text-ink-soft leading-[1.75]" style={{ fontSize: '1.0625rem' }}>
                Los Montes de Galicia es un pedazo de tierra gallega trasplantado a Madrid. Trabajamos con productores que conocemos por su nombre, recetas que aprendimos en casa y una idea sencilla: que cada plato sepa al lugar de donde viene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA — accent soft */}
      <section id="cocina" className="bg-[#dfe2cc]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-20">
            <div className="col-span-12 lg:col-span-4 group">
              <p className="font-display italic text-[0.8125rem] text-accent tracking-[0.2em] uppercase">
                02 — Cocina
              </p>
              <div className="mt-4 h-px bg-accent w-16 group-hover:w-24 transition-[width] duration-300 ease-out" />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display font-normal text-ink leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Lo que servimos.
              </h2>
              <p className="mt-6 max-w-xl text-ink-soft leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                Pequeña selección de lo que encontrarás en nuestra carta.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            {propuesta.map((item, i) => (
              <li
                key={item.nombre}
                className="reveal-item group bg-bg p-8 lg:p-10 hover:-translate-y-0.5 hover:shadow-sm transition-transform duration-[240ms] ease-out-expo"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display italic text-accent text-sm">0{i + 1}</span>
                  <div className="h-px flex-1 bg-line group-hover:bg-accent transition-colors duration-300" />
                </div>
                <h3 className="font-display text-ink leading-tight" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)' }}>
                  {item.nombre}
                </h3>
                <p className="mt-3 text-ink-soft leading-[1.7]" style={{ fontSize: '1.0625rem' }}>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AMBIENTE — fullbleed dark gradient */}
      <section id="casa" className="relative overflow-hidden">
        <div className="relative bg-gradient-to-br from-[#1f1a14] via-[#2a2419] to-[#3a3424] text-bg">
          {/* texture */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(223,226,204,0.5) 0, transparent 50%), radial-gradient(circle at 80% 70%, rgba(90,107,61,0.6) 0, transparent 45%)'
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-44">
            <div className="grid grid-cols-12 gap-6 lg:gap-12">
              <div className="col-span-12 lg:col-span-4 group">
                <p className="font-display italic text-[0.8125rem] text-accent-soft tracking-[0.2em] uppercase">
                  03 — Casa
                </p>
                <div className="mt-4 h-px bg-accent-soft w-16 group-hover:w-24 transition-[width] duration-300 ease-out" />
              </div>
              <div className="col-span-12 lg:col-span-8">
                <h2 className="font-display font-normal leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                  Un rincón de Galicia <span className="italic">en Madrid.</span>
                </h2>
                <p className="mt-8 max-w-2xl text-bg/75 leading-[1.75]" style={{ fontSize: '1.0625rem' }}>
                  Madera, piedra y luz cálida. Un espacio pensado para comer sin reloj, brindar despacio y volver a casa con la sensación de haber estado en otro sitio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="visita" className="bg-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-4 group">
              <p className="font-display italic text-[0.8125rem] text-accent tracking-[0.2em] uppercase">
                04 — Visita
              </p>
              <div className="mt-4 h-px bg-accent w-16 group-hover:w-24 transition-[width] duration-300 ease-out" />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display font-normal text-ink leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Visítanos.
              </h2>
              <p className="mt-6 max-w-xl text-ink-soft leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                Estamos en Madrid. Llámanos para reservar o pasa a vernos.
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 grid grid-cols-12 gap-6 lg:gap-10">
            {/* contact info */}
            <div className="col-span-12 lg:col-span-5 space-y-10">
              <div>
                <p className="text-[0.8125rem] uppercase tracking-[0.2em] text-ink-soft mb-2">Dirección</p>
                <p className="font-display text-ink" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)' }}>
                  Madrid
                </p>
              </div>
              <div>
                <p className="text-[0.8125rem] uppercase tracking-[0.2em] text-ink-soft mb-2">Teléfono</p>
                <p className="font-display text-ink" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)' }}>
                  [TEL_PENDIENTE]
                </p>
              </div>
              <div>
                <p className="text-[0.8125rem] uppercase tracking-[0.2em] text-ink-soft mb-2">Email</p>
                <p className="font-display text-ink" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)' }}>
                  [EMAIL_PENDIENTE]
                </p>
              </div>
              <div>
                <p className="text-[0.8125rem] uppercase tracking-[0.2em] text-ink-soft mb-2">Horario</p>
                <p className="font-display text-ink" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)' }}>
                  [HORARIO_PENDIENTE]
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-ink text-bg px-7 py-4 rounded-full text-sm tracking-wide active:scale-[0.97] transition-transform duration-150 ease-out hover:bg-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                >
                  Cómo llegar →
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm tracking-wide border border-line text-ink active:scale-[0.97] transition-transform duration-150 ease-out hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                >
                  Llamar al restaurante
                </a>
              </div>
            </div>

            {/* map placeholder */}
            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-line bg-surface">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(31,26,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,26,20,0.06) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-soft/40 via-transparent to-bg/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-3 ring-8 ring-accent/15" />
                    <p className="font-display italic text-ink-soft text-sm tracking-wider">Madrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-accent/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-ink">
            Los Montes <span className="italic font-normal text-accent">de Galicia</span>
          </p>
          <p className="text-xs text-ink-soft tracking-wide">
            © {new Date().getFullYear()} · Cocina gallega en Madrid
          </p>
        </div>
      </footer>
    </main>
  );
}
