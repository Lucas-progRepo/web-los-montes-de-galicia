'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    if (reduced) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay || 0);
            setTimeout(() => el.classList.add('is-visible'), delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: '-80px', threshold: 0.05 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <a href="#top" className="font-display text-[1.0625rem] tracking-tight">
            Los Montes <span className="italic text-accent">de Galicia</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[0.8125rem] tracking-[0.12em] uppercase text-ink-soft">
            <a href="#filosofia" className="hover:text-ink transition-colors duration-200">Filosofía</a>
            <a href="#cocina" className="hover:text-ink transition-colors duration-200">Cocina</a>
            <a href="#casa" className="hover:text-ink transition-colors duration-200">Casa</a>
            <a href="#visita" className="hover:text-ink transition-colors duration-200">Visita</a>
          </nav>
        </div>
      </header>

      {/* HERO — split asymmetric */}
      <section id="top" className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p className="reveal eyebrow mb-6">Restaurante gallego · Madrid</p>
              <h1
                className="reveal font-display font-normal text-ink leading-[0.98] tracking-[-0.02em]"
                data-delay="60"
                style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
              >
                Cocina de Galicia,
                <br />
                <span className="italic text-accent">mesa de Madrid.</span>
              </h1>
              <p
                className="reveal mt-8 max-w-xl text-ink-soft leading-[1.7]"
                data-delay="120"
                style={{ fontSize: '1.0625rem' }}
              >
                Producto del norte tratado con respeto. Una casa donde el Atlántico llega cada
                día y la sobremesa nunca tiene prisa.
              </p>
              <div className="reveal mt-10 flex flex-wrap gap-4" data-delay="180">
                <a href="#visita" className="btn-primary">
                  Cómo llegar
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#" className="btn-secondary" /* pending real phone */>
                  Llamar al restaurante
                </a>
              </div>
            </div>

            <div className="hidden lg:flex col-span-4 justify-end relative h-full min-h-[280px]">
              {/* Etiqueta circular rotada */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full border border-accent bg-accent-soft flex items-center justify-center text-center"
                style={{ transform: 'rotate(-8deg)' }}
                aria-hidden="true"
              >
                <span
                  className="font-display italic text-accent text-[0.6875rem] leading-tight"
                  style={{ letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  Galicia<br />· Madrid ·
                </span>
              </div>
              {/* Bloque decorativo */}
              <div className="mt-32 w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-accent-soft via-bg to-[#c9b896] border border-line relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                <span
                  className="absolute bottom-5 left-5 font-display italic text-bg text-sm"
                  style={{ letterSpacing: '0.12em' }}
                >
                  desde el Atlántico
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA — surface elevada con comilla decorativa */}
      <section id="filosofia" className="relative py-24 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="relative bg-surface border border-line rounded-3xl px-7 py-16 md:px-16 md:py-24 overflow-hidden">
            {/* Comilla decorativa */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 left-4 md:left-10 font-display text-accent select-none"
              style={{
                fontSize: '8rem',
                opacity: 0.12,
                lineHeight: 1,
                transformOrigin: 'top left'
              }}
            >
              “
            </span>

            <div className="relative max-w-3xl">
              <div className="group flex items-center gap-4 mb-5">
                <span className="rule" aria-hidden="true" />
                <span className="eyebrow">01 — Filosofía</span>
              </div>
              <h2
                className="reveal font-display font-normal text-ink leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
              >
                Una casa con <span className="italic text-accent">raíces</span>
              </h2>
              <p
                className="reveal mt-8 text-ink-soft leading-[1.75] max-w-prose"
                data-delay="60"
                style={{ fontSize: '1.0625rem' }}
              >
                Los Montes de Galicia es un pedazo de tierra gallega trasplantado a Madrid.
                Trabajamos con productores que conocemos por su nombre, recetas que aprendimos
                en casa y una idea sencilla: que cada plato sepa al lugar de donde viene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA GASTRONÓMICA — accent-soft + grid 4 cards */}
      <section id="cocina" className="relative py-24 lg:py-36 bg-accent-soft/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14 lg:mb-20">
            <div className="group flex items-center gap-4 mb-5">
              <span className="rule" aria-hidden="true" />
              <span className="eyebrow">02 — Cocina</span>
            </div>
            <h2
              className="reveal font-display font-normal text-ink leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
            >
              Lo que <span className="italic text-accent">servimos</span>
            </h2>
            <p
              className="reveal mt-6 text-ink-soft leading-[1.7]"
              data-delay="60"
              style={{ fontSize: '1.0625rem' }}
            >
              Pequeña selección de lo que encontrarás en nuestra carta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {propuesta.map((item, i) => (
              <article
                key={item.nombre}
                className="reveal group/card bg-surface border border-line rounded-2xl p-8 lg:p-10 hover:-translate-y-0.5 hover:shadow-sm hover:border-accent/30"
                data-delay={i * 60}
                style={{
                  transition:
                    'transform 240ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 240ms cubic-bezier(0.23, 1, 0.32, 1), border-color 240ms cubic-bezier(0.23, 1, 0.32, 1), opacity 600ms ease-out'
                }}
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <span
                    className="font-display italic text-accent"
                    style={{ fontSize: '0.8125rem', letterSpacing: '0.18em' }}
                  >
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <h3
                  className="font-display text-ink mb-3"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', lineHeight: 1.2 }}
                >
                  {item.nombre}
                </h3>
                <p className="text-ink-soft leading-[1.65]" style={{ fontSize: '1.0625rem' }}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE — fullbleed gradient cálido */}
      <section id="casa" className="relative">
        <div
          className="relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, #8a6a3a 0%, #6b5a2f 35%, #4a5a31 75%, #3a4825 100%)'
          }}
        >
          {/* texturas suaves */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at 20% 30%, rgba(244,237,224,0.18), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(244,237,224,0.12), transparent 55%)'
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-44">
            <div className="max-w-2xl">
              <div className="group flex items-center gap-4 mb-5">
                <span
                  className="inline-block h-px w-16 bg-bg/80"
                  aria-hidden="true"
                />
                <span
                  className="font-display italic text-bg/80"
                  style={{
                    fontSize: '0.8125rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase'
                  }}
                >
                  03 — Casa
                </span>
              </div>
              <h2
                className="reveal font-display font-normal text-bg leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
              >
                Un rincón de Galicia <span className="italic">en Madrid</span>
              </h2>
              <p
                className="reveal mt-8 text-bg/80 leading-[1.75] max-w-xl"
                data-delay="80"
                style={{ fontSize: '1.0625rem' }}
              >
                Madera, piedra y luz cálida. Un espacio pensado para comer sin reloj, brindar
                despacio y volver a casa con la sensación de haber estado en otro sitio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO — bg crema + grid 2col asimétrico */}
      <section id="visita" className="py-24 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="group flex items-center gap-4 mb-5">
                <span className="rule" aria-hidden="true" />
                <span className="eyebrow">04 — Visita</span>
              </div>
              <h2
                className="reveal font-display font-normal text-ink leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
              >
                <span className="italic text-accent">Visítanos</span>
              </h2>
              <p
                className="reveal mt-6 text-ink-soft leading-[1.7] max-w-md"
                data-delay="60"
                style={{ fontSize: '1.0625rem' }}
              >
                Estamos en Madrid. Llámanos para reservar o pasa a vernos.
              </p>

              <dl className="reveal mt-12 space-y-8" data-delay="120">
                <div className="flex items-baseline gap-6 border-t border-line pt-6">
                  <dt
                    className="font-display italic text-accent w-28 shrink-0"
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Dirección
                  </dt>
                  <dd className="text-ink" style={{ fontSize: '1.0625rem' }}>
                    Madrid
                  </dd>
                </div>
                <div className="flex items-baseline gap-6 border-t border-line pt-6">
                  <dt
                    className="font-display italic text-accent w-28 shrink-0"
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Teléfono
                  </dt>
                  <dd className="text-ink" style={{ fontSize: '1.0625rem' }}>
                    <a href="#" className="hover:text-accent transition-colors duration-200">
                      {/* pending real phone */}
                      [TEL_PENDIENTE]
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline gap-6 border-t border-line pt-6">
                  <dt
                    className="font-display italic text-accent w-28 shrink-0"
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Email
                  </dt>
                  <dd className="text-ink" style={{ fontSize: '1.0625rem' }}>
                    <a href="#" className="hover:text-accent transition-colors duration-200">
                      {/* pending real email */}
                      [EMAIL_PENDIENTE]
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline gap-6 border-t border-line pt-6">
                  <dt
                    className="font-display italic text-accent w-28 shrink-0"
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Horario
                  </dt>
                  <dd className="text-ink" style={{ fontSize: '1.0625rem' }}>
                    [HORARIO_PENDIENTE]
                  </dd>
                </div>
              </dl>
            </div>

            {/* Mapa placeholder editorial */}
            <div className="lg:col-span-6">
              <div
                className="reveal relative w-full aspect-[4/5] lg:aspect-[5/6] rounded-3xl overflow-hidden border border-line"
                style={{
                  background:
                    'linear-gradient(160deg, #dfe2cc 0%, #f4ede0 50%, #c9b896 100%)'
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(31,26,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,26,20,0.06) 1px, transparent 1px)',
                    backgroundSize: '48px 48px'
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                  <span
                    className="font-display italic text-accent"
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Madrid
                  </span>
                  <p
                    className="font-display text-ink mt-2 leading-[1.1]"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    Reservas por <span className="italic text-accent">teléfono</span>
                  </p>
                </div>
                {/* punto de localización */}
                <div
                  aria-hidden="true"
                  className="absolute top-[42%] left-[55%] -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border-2 border-bg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="h-px w-full bg-line" aria-hidden="true" />
          <div className="py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p
              className="font-display text-ink"
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}
            >
              Los Montes <span className="italic text-accent">de Galicia</span>
            </p>
            <p className="text-ink-soft" style={{ fontSize: '0.8125rem' }}>
              © {new Date().getFullYear()} · Restaurante gallego en Madrid
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
