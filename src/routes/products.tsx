import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import hero from "@/assets/stone-dark.jpg";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { productCategories, products, type StoneCategory } from "@/data/products";

type Search = { category?: string };
export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): Search => ({ category: typeof search.category === "string" ? search.category : undefined }),
  head: () => ({ meta: [
    { title: "Indian Marble, Granite & Quartzite | Prime Impex" },
    { name: "description", content: "Explore premium Indian marble, granite and quartzite selections for architecture, interiors and global projects." },
    { property: "og:title", content: "Our Natural Stones | Prime Impex Stones" },
    { property: "og:description", content: "Explore the unique character of premium Indian natural stone." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/products" }] }),
  component: ProductsPage,
});

function ProductsPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/products" });
  const validCategory = productCategories.includes(search.category as (typeof productCategories)[number]) ? search.category : "All";
  const filtered = useMemo(() => validCategory === "All" ? products : products.filter((p) => p.category === validCategory as StoneCategory), [validCategory]);
  return <>
    <PageHero eyebrow="The collection" title="Our Natural Stones" subtitle="Explore the unique character of Indian natural stone." image={hero} />
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-wrap gap-2 border-b border-border pb-7" role="group" aria-label="Filter products by category">{productCategories.map((category) => <Button key={category} variant={validCategory === category ? "default" : "ghost"} onClick={() => navigate({ search: category === "All" ? {} : { category } })}>{category}</Button>)}</div>
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      <p className="mt-14 border-l-2 border-bronze pl-5 text-sm leading-7 text-muted-foreground">This catalogue currently uses temporary product entries. Final names, photography and specifications can be replaced directly in the product data without changing the layout.</p>
    </section>
  </>;
}