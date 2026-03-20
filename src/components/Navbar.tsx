import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import saoLogo from "@/assets/sao-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={saoLogo} alt="SAO" className="h-10 md:h-12" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-foreground/70">{user.name}</span>
              <button
                onClick={logout}
                className="text-xs uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
            >
              <User size={20} />
            </button>
          )}

          <button
            onClick={() => navigate("/cart")}
            className="relative text-foreground/70 hover:text-primary transition-colors"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 gold-gradient rounded-full flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground/70"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-card border-t border-border animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            {user ? (
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                className="text-sm tracking-wider uppercase text-primary text-left"
              >
                Logout ({user.name})
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wider uppercase text-primary"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
