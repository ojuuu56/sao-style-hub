import { Link } from "react-router-dom";
import saoLogo from "@/assets/sao-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src={saoLogo} alt="SAO" className="h-12 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium streetwear brand from Biratnagar, Nepal.
              Redefining fashion with bold designs and quality craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Account</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Biratnagar, Nepal</p>
              <p>WhatsApp: 9829317970</p>
              <p>Instagram: @sao.nepal</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 SAO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
