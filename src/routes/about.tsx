import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/stone-quarry.jpg";
import architecture from "@/assets/stone-architecture.jpg";
import lightStone from "@/assets/stone-light.jpg";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Our Story | Prime Impex Stones" },
    { name: "description", content: "Discover Prime Impex Stones: connected with Indian natural stone since 1991 and serving partners across 15+ countries." },
    { property: "og:title", content: "Our Story | Prime Impex Stones" },
    { property: "og:description", content: "Three decades of stone. A world of possibilities." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/about" }] }),
  component: AboutPage,
});

function AboutPage() {
  const milestones = [["1991","Foundation"],["Growth","Building expertise in natural stone"],["Global Expansion","Reaching international markets"],["Today","Premium Indian stone for a global audience"]];
  return <>
    <PageHero eyebrow="About Prime Impex Stones" title="Our Story" subtitle="Three Decades of Stone. A World of Possibilities." image={hero} />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Since 1991</p><h2 className="mt-5 text-5xl leading-none sm:text-6xl">Built on knowledge. Shaped by nature.</h2></div><div className="space-y-6 text-base leading-8 text-muted-foreground"><p>Since 1991, Prime Impex Stones has brought the finest Indian marble, granite and quartzite to global markets.</p><p>With exports exceeding USD 4 million and a presence across 15+ countries, we work with a commitment to quality, reliability and the distinct natural character of every stone.</p></div></section>
    <section className="mx-auto grid max-w-7xl items-stretch px-5 pb-24 lg:grid-cols-2 lg:px-8 lg:pb-32"><img src={lightStone} alt="Ivory Indian marble slab displayed in a stone gallery" loading="lazy" width={1600} height={1200} className="h-full min-h-[420px] w-full object-cover"/><div className="bg-primary p-8 text-primary-foreground sm:p-14 lg:p-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Our philosophy</p><blockquote className="mt-8 font-display text-4xl leading-tight sm:text-5xl">“Every stone is unique. Our responsibility is to preserve its character while delivering quality you can trust.”</blockquote></div></section>
    <section className="bg-secondary py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-3 lg:px-8">{[["Our Heritage","Connected with the natural stone industry since 1991, we bring decades of experience to every selection and partnership."],["Our Global Reach","Serving clients and partners across 15+ countries, with exports exceeding USD 4 million."],["Our Commitment","Quality, reliability, consistency, natural beauty, long-term relationships and standards fit for global projects."]].map(([title,text]) => <article key={title} className="border-t border-bronze pt-6"><h2 className="text-4xl">{title}</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></section>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-32"><img src={architecture} alt="Contemporary architecture finished in natural stone" loading="lazy" width={1600} height={1104} className="aspect-[4/3] h-full w-full object-cover"/><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Our journey</p><div className="mt-8">{milestones.map(([time,text],i) => <div key={time} className="grid grid-cols-[8rem_1fr] gap-4 border-t border-border py-6"><p className="font-display text-2xl text-bronze">{time}</p><p className="pt-1 text-sm text-muted-foreground">{text}</p></div>)}</div><Button asChild variant="bronze" size="lg" className="mt-8"><Link to="/contact">Start a Conversation <ArrowRight /></Link></Button></div></section>
  </>;
}