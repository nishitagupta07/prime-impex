type PageHeroProps = { eyebrow: string; title: string; subtitle: string; image: string };

export function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-primary pt-20 text-hero-foreground">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-55" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/45 to-overlay/10" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-24 lg:px-8 lg:pb-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-medium leading-[.95] sm:text-6xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-hero-foreground/75 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}