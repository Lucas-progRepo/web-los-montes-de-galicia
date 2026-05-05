'use client';

import { useEffect } from 'react';

const PHONE = '+34675811548';
const PHONE_HREF = 'tel:+34675811548';
const MAPS_HREF = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Los Montes de Galicia, Madrid');

const nav = [
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
  { label: 'Carta', href: '#carta' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Contacto', href: '#contacto' }
];

const cartaItems = [
  { nombre: 'Mariscos del día', desc: 'Llegada diaria desde lonjas gallegas. Pulpo, percebes, navajas y lo que el mar permita.' },
  { nombre: 'Carnes a la brasa', desc: 'Vaca rubia gallega madurada, cocinada al carbón con la calma que pide.' },
  { nombre: 'Recetas de casa', desc: 'Caldo gallego, empanada, lacón con grelos. Lo de siempre, hecho como debe ser.' },
  { nombre: 'Bodega del norte', desc: 'Albariños, godellos, mencías y referencias pequeñas que merecen descubrirse.' }
];

export default function Page() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const target = e.target as HTMLElement;
          const delay = Number(target.dataset.delay || 0);
          window.setTimeout(() => target.classList.add('is-visible'), delay);
          io.unobserve(target);
        }
      });
    }, { rootMargin: '-80px', threshold: 0.05 });
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            Los Montes <span className="italic text-accent">de Galicia</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 small-size">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-inkSoft hover:text-ink transition-colors duration-200">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative bg-bg pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden">
        {/* Etiqueta circular decorativa */}
        <div
          aria-hidden
          className="hidden lg:flex absolute top-32 right-10 xl:right-20 w-24 h-24 rounded-full border border-accent bg-accentSoft items-center justify-center small-size uppercase tracking-[0.15em] text-accent"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <span className="text-center leading-tight font-display">Galicia<br/>· Madrid</span>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="small-size uppercase tracking-[0.18em] text-accent font-display italic mb-8 reveal">
                Restaurante gallego · Madrid
              </p>
              <h1 className="reveal h1 font-display font-normal leading-[1.02] tracking-tight text-ink" data-delay="60">
                Cocina de Galicia,<br />
                <span className="italic text-accent">mesa de Madrid.</span>
              </h1>
              <p className="reveal mt-8 max-w-xl body-size leading-relaxed text-inkSoft" data-delay="120">
                Producto del norte tratado con respeto. Una casa donde el Atlántico llega cada día y la sobremesa nunca tiene prisa.
              </p>
              <div className="reveal mt-10 flex flex-wrap gap-4" data-delay="180">
                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-4 rounded-full small-size uppercase tracking-[0.15em] active:scale-[0.97] transition-transform duration-150 ease-out [@media(hover:hover)]:hover:bg-ink"
                >
                  Cómo llegar
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 border border-accent text-accent px-7 py-4 rounded-full small-size uppercase tracking-[0.15em] active:scale-[0.97] transition-[transform,background-color,color] duration-200 ease-out [@media(hover:hover)]:hover:bg-accent [@media(hover:hover)]:hover:text-bg"
                >
                  Llamar al restaurante
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="aspect-[3/4] rounded-2xl border border-line bg-gradient-to-br from-accentSoft via-bg to-[#c9b896] relative overflow-hidden">
                <div className="absolute inset-0 opacity-40" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(90,107,61,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(31,26,20,0.15), transparent 50%)'
                }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display italic text-ink/70 small-size">Una casa con raíces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="relative bg-surface border-y border-line py-24 lg:py-32 overflow-hidden">
        <span
          aria-hidden
          className="absolute top-4 left-6 lg:left-16 font-display text-[8rem] lg:text-[12rem] leading-none text-accent pointer-events-none select-none"
          style={{ opacity: 0.12, transformOrigin: 'top left' }}
        >
          “
        </span>

        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
          <div className="reveal group">
            <p className="small-size uppercase tracking-[0.18em] text-accent font-display italic mb-6">
              01 — Sobre nosotros
            </p>
            <div className="h-px w-16 lg:w-24 bg-accent transition-[width] duration-300 ease-out group-hover:w-32 mb-8" />
            <h2 className="h2 font-display font-normal leading-[1.05] tracking-tight max-w-3xl">
              Una casa <span className="italic">con raíces.</span>
            </h2>
          </div>
          <p className="reveal mt-10 max-w-2xl body-size leading-[1.7] text-inkSoft" data-delay="80">
            Los Montes de Galicia es un pedazo de tierra gallega trasplantado a Madrid. Trabajamos con productores que conocemos por su nombre, recetas que aprendimos en casa y una idea sencilla: que cada plato sepa al lugar de donde viene.
          </p>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="bg-accentSoft py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="reveal group max-w-3xl">
            <p className="small-size uppercase tracking-[0.18em] text-accent font-display italic mb-6">
              02 — Carta
            </p>
            <div className="h-px w-16 lg:w-24 bg-accent transition-[width] duration-300 ease-out group-hover:w-32 mb-8" />
            <h2 className="h2 font-display font-normal leading-[1.05] tracking-tight">
              La cocina que servimos <span className="italic">cada día.</span>
            </h2>
            <p className="mt-6 body-size text-inkSoft leading-relaxed">
              Pequeña selección de lo que encontrarás en nuestra mesa.
            </p>
          </div>

          <div className="mt-14 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cartaItems.map((item, i) => (
              <article
                key={item.nombre}
                className="reveal group relative bg-surface border border-line rounded-2xl p-7 lg:p-8 transition-[transform,box-shadow,border-color] duration-[240ms] ease-out-soft [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-sm [@media(hover:hover)]:hover:border-accent/30"
                data-delay={i * 60}
              >
                <span className="font-display italic text-accent small-size">0{i + 1}</span>
                <h3 className="h3 font-display font-normal mt-4 leading-snug">{item.nombre}</h3>
                <p className="mt-4 small-size leading-[1.7] text-inkSoft">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section id="ambiente" className="relative py-32 lg:py-44 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #c9b896 0%, #8a7a52 40%, #3d4a28 100%)'
      }}>
        <div className="absolute inset-0 opacity-30" aria-hidden style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(244,237,224,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(31,26,20,0.4), transparent 60%)'
        }} />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
          <div className="reveal group max-w-3xl">
            <p className="small-size uppercase tracking-[0.18em] text-bg/80 font-display italic mb-6">
              03 — Ambiente
            </p>
            <div className="h-px w-16 lg:w-24 bg-bg/80 transition-[width] duration-300 ease-out group-hover:w-32 mb-8" />
            <h2 className="h2 font-display font-normal leading-[1.05] tracking-tight text-bg">
              Un rincón de Galicia <span className="italic">en Madrid.</span>
            </h2>
            <p className="reveal mt-8 max-w-xl body-size leading-[1.7] text-bg/85" data-delay="80">
              Madera, piedra y luz cálida. Un espacio pensado para comer sin reloj, brindar despacio y volver a casa con la sensación de haber estado en otro sitio.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-bg py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <div className="reveal group">
                <p className="small-size uppercase tracking-[0.18em] text-accent font-display italic mb-6">
                  04 — Visítanos
                </p>
                <div className="h-px w-16 lg:w-24 bg-accent transition-[width] duration-300 ease-out group-hover:w-32 mb-8" />
                <h2 className="h2 font-display font-normal leading-[1.05] tracking-tight">
                  Visítanos.
                </h2>
                <p className="reveal mt-6 max-w-md body-size text-inkSoft leading-relaxed" data-delay="60">
                  Estamos en Madrid. Llámanos para reservar o pasa a vernos.
                </p>
              </div>

              <dl className="reveal mt-12 space-y-8" data-delay="120">
                <div>
                  <dt className="small-size uppercase tracking-[0.15em] text-inkSoft">Teléfono</dt>
                  <dd className="mt-2">
                    <a
                      href={PHONE_HREF}
                      className="font-display text-2xl lg:text-3xl text-ink transition-colors duration-200 [@media(hover:hover)]:hover:text-accent"
                    >
                      +34 675 811 548
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="small-size uppercase tracking-[0.15em] text-inkSoft">Ubicación</dt>
                  <dd className="mt-2 font-display text-2xl lg:text-3xl text-ink">Madrid</dd>
                </div>
              </dl>

              <div className="reveal mt-10 flex flex-wrap gap-4" data-delay="180">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-4 rounded-full small-size uppercase tracking-[0.15em] active:scale-[0.97] transition-transform duration-150 ease-out [@media(hover:hover)]:hover:bg-ink"
                >
                  Llamar ahora
                </a>
                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-accent text-accent px-7 py-4 rounded-full small-size uppercase tracking-[0.15em] active:scale-[0.97] transition-[transform,background-color,color] duration-200 ease-out [@media(hover:hover)]:hover:bg-accent [@media(hover:hover)]:hover:text-bg"
                >
                  Ver en mapa
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="reveal aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl border border-line overflow-hidden bg-surface relative" data-delay="100">
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(160deg, #dfe2cc 0%, #c9b896 60%, #8a7a52 100%)'
                }} />
                <div className="absolute inset-0 opacity-40" aria-hidden style={{
                  backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(244,237,224,0.5), transparent 55%)'
                }} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="font-display italic small-size text-ink/70">El espacio</p>
                  <p className="font-display text-2xl lg:text-3xl mt-2 text-ink leading-tight">
                    Madera, piedra<br/>y luz cálida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-display small-size uppercase tracking-[0.2em] text-ink">
            Los Montes de Galicia
          </p>
          <p className="small-size text-inkSoft uppercase tracking-[0.15em]">
            Madrid · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
