import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { StoneProduct } from "@/data/products";

export function ProductCard({ product }: { product: StoneProduct }) {
  return (
    <article className="group bg-card">
      <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={product.image} alt={`${product.name}, ${product.category} from ${product.origin}`} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div>
      <div className="border-x border-b border-border p-6 transition-shadow duration-300 group-hover:shadow-lg">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze">{product.category} · {product.origin}</p>
        <h2 className="mt-2 text-3xl">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>
        <Dialog>
          <DialogTrigger asChild><Button variant="link" className="mt-4 h-auto p-0 normal-case tracking-normal">View Details <ArrowUpRight /></Button></DialogTrigger>
          <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto p-0 sm:rounded-sm">
            <div className="grid md:grid-cols-2">
              <img src={product.image} alt={`${product.name} natural stone slab`} width={1600} height={1200} className="h-full min-h-72 w-full object-cover" />
              <div className="p-7 sm:p-10">
                <DialogHeader><p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{product.category} · {product.origin}</p><DialogTitle className="font-display text-4xl font-medium">{product.name}</DialogTitle><DialogDescription className="pt-3 leading-7">{product.description}</DialogDescription></DialogHeader>
                <div className="mt-8 border-t border-border pt-6"><p className="text-xs font-semibold uppercase tracking-[0.16em]">Specifications</p><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{product.specifications.map((item) => <li key={item} className="border-b border-border pb-3">{item}</li>)}</ul></div>
                <Button asChild variant="bronze" size="lg" className="mt-8"><a href={`/contact?stone=${encodeURIComponent(product.name)}`}>Enquire About This Stone</a></Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}