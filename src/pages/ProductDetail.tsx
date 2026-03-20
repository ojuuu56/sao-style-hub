import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 md:pt-24 max-w-7xl mx-auto px-4 md:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <ScrollReveal>
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-surface">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-col justify-center py-4">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
              <p className="text-2xl gold-text font-semibold mb-6">रू {product.price.toLocaleString()}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <p className="text-sm font-medium mb-3 tracking-wider uppercase">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-12 h-12 text-sm font-medium rounded-sm transition-all duration-300 active:scale-[0.95] ${
                        selectedSize === s
                          ? "gold-gradient text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-muted"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="flex items-center justify-center gap-3 gold-gradient px-8 py-4 text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 active:scale-[0.97] transition-all w-full md:w-auto"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>
          </ScrollReveal>
        </div>

        {related.length > 0 && (
          <section className="py-20">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight mb-8">You Might Also Like</h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 100}>
                  <ProductCard product={p} index={i} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
