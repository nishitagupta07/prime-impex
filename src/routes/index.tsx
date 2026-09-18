import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import hero from "@/assets/stone-hero.jpg";
import architecture from "@/assets/stone-architecture.jpg";
import darkStone from "@/assets/stone-dark.jpg";
import greenStone from "@/assets/stone-green.jpg";
import lightStone from "@/assets/stone-light.jpg";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Prime Impex Stones | Indian Natural Stone Exporter" },
    { name: "description", content: "Premium Indian marble, granite and quartzite supplied to international projects by Prime Impex Stones, Jaipur." },
    { property: "og:title", content: "Prime Impex Stones | Indian Natural Stone" },
    { property: "og:description", content: "Three decades of Indian marble, granite and quartzite for global projects." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});

const offers = [
  { name: "Marble", image: lightStone, text: "Premium Indian marble for elegant residential, commercial and architectural applications." },
  { name: "Granite", image: darkStone, text: "Durable and versatile natural stone with distinctive colours and patterns." },
  { name: "Quartzite", image: greenStone, text: "High-performance stone balancing enduring strength with sophisticated aesthetics." },
];

function HomePage() {
  return <>
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-primary pt-20 text-hero-foreground">
      <img src={hero} alt="Luxury interior featuring a monumental natural stone wall" width={1920} height={1280} fetchPriority="high" className="hero-image-motion absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-overlay/90 via-overlay/55 to-overlay/10" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8"><div className="max-w-3xl rise-in">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Indian stone · Global standards</p>
        <h1 className="text-6xl font-medium leading-[.9] sm:text-7xl lg:text-8xl">Natural Stone.<br/>Global Standards.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/75 sm:text-lg">Premium Indian Marble, Granite &amp; Quartzite for a World of Possibilities.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" variant="bronze"><Link to="/products">Explore Our Stones</Link></Button><Button asChild size="lg" variant="hero"><Link to="/contact">Get In Touch</Link></Button></div>
      </div></div>
      <div className="scroll-motion absolute bottom-7 left-1/2 -translate-x-1/2"><ArrowDown className="size-5" aria-hidden="true" /></div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-32">
      <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Our foundation</p><h2 className="mt-5 text-5xl leading-[.98] sm:text-6xl">Three Decades of Stone. A World of Possibilities.</h2></div>
      <div className="max-w-2xl lg:pt-9"><p className="text-base leading-8 text-muted-foreground">Since 1991, Prime Impex Stones has brought the finest Indian marble, granite and quartzite to global markets. With exports exceeding USD 4 million and a presence across 15+ countries, our work is grounded in quality, reliability and respect for the unique character of every stone.</p><Button asChild variant="link" className="mt-6 px-0"><Link to="/about">Discover Our Story <ArrowRight /></Link></Button></div>
    </section>

    <section className="bg-primary py-24 text-primary-foreground lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">What we offer</p><h2 className="mt-4 text-5xl">Stone, selected with purpose.</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{offers.map((offer) => <article key={offer.name} className="group"><div className="aspect-[3/4] overflow-hidden"><img src={offer.image} alt={`${offer.name} natural stone slab`} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div><h3 className="mt-6 text-3xl">{offer.name}</h3><p className="mt-3 min-h-20 text-sm leading-7 text-primary-foreground/60">{offer.text}</p><Link to="/products" search={{ category: offer.name }} className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-bronze">Explore <ArrowRight className="size-4" /></Link></article>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid items-end gap-6 md:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Discover our marbles</p><h2 className="mt-4 text-5xl sm:text-6xl">Every slab tells a story shaped by nature.</h2></div><p className="text-base leading-8 text-muted-foreground">Marble is earth&apos;s quiet transformation—stone reborn under pressure, where softness becomes elegance in flowing veins and gentle light.</p></div><div className="mt-12 grid gap-5 md:grid-cols-12">{products.slice(0,3).map((product, i) => <Link key={product.id} to="/products" className={i === 0 ? "group md:col-span-7" : "group md:col-span-5"}><div className={i === 0 ? "aspect-[4/3] overflow-hidden" : "aspect-[4/3] overflow-hidden"}><img src={product.image} alt={`${product.category} selection`} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div><p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">{product.name}</p></Link>)}</div><Button asChild variant="outline" size="lg" className="mt-10"><Link to="/products">View All Products <ArrowRight /></Link></Button></section>

    <section className="border-y border-border bg-secondary"><div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">{[["Since 1991","Experience in Natural Stone"],["15+","Countries Reached"],["USD 4M+","Exports"],["30+ Years","Industry Experience"]].map(([value,label]) => <div key={label} className="border-border px-4 py-12 even:border-l lg:border-l lg:first:border-l-0 lg:py-16"><p className="font-display text-4xl sm:text-5xl">{value}</p><p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</p></div>)}</div></section>

    <section className="relative min-h-[580px] overflow-hidden bg-primary text-hero-foreground"><img src={architecture} alt="Contemporary residence clad in warm natural stone" loading="lazy" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-overlay/55"/><div className="relative mx-auto flex min-h-[580px] max-w-7xl items-center px-5 py-24 lg:px-8"><div className="max-w-3xl"><h2 className="text-5xl leading-none sm:text-7xl">Bring the Beauty of Natural Stone to Your Next Project.</h2><p className="mt-6 text-hero-foreground/75">Explore our collection of premium Indian natural stones.</p><Button asChild variant="bronze" size="lg" className="mt-8"><Link to="/contact">Contact Us</Link></Button></div></div></section>
  </>;
}