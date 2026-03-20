import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import SplashBanner from "@/components/SplashBanner";
import { products } from "@/data/products";
import bannerModel from "@/assets/banner-model.jpg";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  const featured = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  if (showSplash) {
    return <SplashBanner onClose={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={bannerModel}
          alt="SAO Collection"
          className="absolute inset-0 w-full h-full object-cover object-top animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-28 w-full">
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-primary mb-3 opacity-0 animate-fade-up stagger-1">
            Spring / Summer 2026
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 opacity-0 animate-fade-up stagger-2">
            Define<br />
            <span className="gold-text">Your Style</span>
          </h1>
          <p className="text-foreground/60 max-w-md text-base md:text-lg mb-8 opacity-0 animate-fade-up stagger-3">
            Premium streetwear crafted in Biratnagar for those who refuse to blend in.
          </p>
          <Link
            to="/shop"
            className="inline-block gold-gradient px-8 py-3.5 text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 active:scale-[0.97] transition-all opacity-0 animate-fade-up stagger-4"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-2">Curated</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Pieces</h2>
            </div>
            <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase">
              View All
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 100}>
              <ProductCard product={p} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="gold-gradient rounded-sm p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-4">
              Free Delivery in Biratnagar
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Orders above रू 3,000 get free delivery across Biratnagar
            </p>
            <Link
              to="/shop"
              className="inline-block bg-background text-foreground px-8 py-3.5 font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-background/90 active:scale-[0.97] transition-all"
            >
              Start Shopping
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-2">Fresh</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">New Arrivals</h2>
            </div>
            <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase">
              View All
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 100}>
              <ProductCard product={p} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
