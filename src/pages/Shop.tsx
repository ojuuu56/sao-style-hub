import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function Shop() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-2">Collection</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Shop All</h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-sm tracking-wider uppercase rounded-sm transition-all duration-300 active:scale-[0.97] ${
                  active === c
                    ? "gold-gradient text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <ProductCard product={p} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No products in this category yet.</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
