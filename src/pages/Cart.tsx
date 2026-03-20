import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <ShoppingBag size={48} className="text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Discover something from our collection</p>
          <Link
            to="/shop"
            className="gold-gradient px-8 py-3.5 text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 active:scale-[0.97] transition-all"
          >
            Browse Collection
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-4xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Your Cart</h1>
        </ScrollReveal>

        <div className="space-y-4 mb-8">
          {items.map((item, i) => (
            <ScrollReveal key={`${item.id}-${item.selectedSize}`} delay={i * 80}>
              <div className="flex gap-4 bg-card rounded-sm p-4 border border-border">
                <Link to={`/product/${item.id}`} className="w-20 h-24 md:w-24 md:h-32 flex-shrink-0 rounded-sm overflow-hidden bg-surface">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.id}`} className="font-medium text-sm md:text-base hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">Size: {item.selectedSize}</p>
                  <p className="text-sm gold-text font-semibold mt-1">रू {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-secondary rounded-sm hover:bg-muted transition-colors active:scale-95"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-secondary rounded-sm hover:bg-muted transition-colors active:scale-95"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  <p className="text-sm font-semibold">रू {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-card rounded-sm p-6 border border-border mb-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Total</span>
              <span className="text-2xl font-bold gold-text">रू {totalPrice.toLocaleString()}</span>
            </div>
            <Link
              to="/checkout"
              className="block text-center gold-gradient px-8 py-4 text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 active:scale-[0.97] transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
        </ScrollReveal>
      </div>
      <Footer />
    </div>
  );
}
