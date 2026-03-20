import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import esewaQr from "@/assets/esewaqr.jpeg";
import bankQr from "@/assets/bankqr.jpeg";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "esewa" | "bank">("cod");
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: "",
    address: "",
    city: "Biratnagar",
  });

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error("Please fill all fields");
      return;
    }
    clearCart();
    toast.success("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-4xl mx-auto px-4 md:px-8 pb-20">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Checkout</h1>
        </ScrollReveal>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-lg font-semibold mb-4">Delivery Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">Address</label>
                  <textarea
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    rows={3}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">City</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { key: "cod" as const, label: "Cash on Delivery" },
                  { key: "esewa" as const, label: "eSewa QR Payment" },
                  { key: "bank" as const, label: "Bank QR Payment (Rastriya Banijya Bank)" },
                ].map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setPaymentMethod(m.key)}
                    className={`w-full text-left px-4 py-3 rounded-sm border text-sm transition-all duration-300 active:scale-[0.98] ${
                      paymentMethod === m.key
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-secondary text-secondary-foreground hover:bg-muted"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {(paymentMethod === "esewa" || paymentMethod === "bank") && (
                <div className="mt-6 bg-card border border-border rounded-sm p-6">
                  <p className="text-sm font-medium mb-4">
                    Scan the QR code below to make payment:
                  </p>
                  <div className="flex justify-center mb-4">
                    <img
                      src={paymentMethod === "esewa" ? esewaQr : bankQr}
                      alt={paymentMethod === "esewa" ? "eSewa QR" : "Bank QR"}
                      className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-sm"
                    />
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-sm p-4 text-sm space-y-2">
                    <p className="font-semibold text-primary">Payment Instructions:</p>
                    <p className="text-foreground/80">
                      Write <span className="font-bold text-primary">2063</span> on remarks to confirm your payment.
                    </p>
                    <p className="text-foreground/80">
                      You will receive a payment receipt through WhatsApp from <span className="font-semibold">9829317970</span>.
                    </p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={200}>
              <div className="bg-card border border-border rounded-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} ({item.selectedSize}) × {item.quantity}
                      </span>
                      <span>रू {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Subtotal</span>
                    <span>रू {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Delivery</span>
                    <span>{form.city.toLowerCase().includes("biratnagar") ? "Free" : "रू 150"}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-4">
                    <span>Total</span>
                    <span className="gold-text">
                      रू {(totalPrice + (form.city.toLowerCase().includes("biratnagar") ? 0 : 150)).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full gold-gradient px-8 py-4 text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 active:scale-[0.97] transition-all"
                >
                  Place Order
                </button>
              </div>
            </ScrollReveal>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
