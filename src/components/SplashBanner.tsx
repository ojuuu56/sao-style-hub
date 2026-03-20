import { useState, useEffect } from "react";
import { X } from "lucide-react";
import bannerModel from "@/assets/banner-model.jpg";
import saoLogo from "@/assets/sao-logo.png";

export default function SplashBanner({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-600 ${
        closing ? "opacity-0 scale-105" : visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bannerModel}
          alt="SAO Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <img
          src={saoLogo}
          alt="SAO"
          className={`w-32 h-32 md:w-48 md:h-48 mb-6 transition-all duration-700 delay-300 ${
            visible && !closing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        />
        <p
          className={`text-sm md:text-base tracking-[0.4em] uppercase text-foreground/70 mb-4 transition-all duration-700 delay-500 ${
            visible && !closing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Biratnagar, Nepal
        </p>
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight gold-text mb-6 transition-all duration-700 delay-700 ${
            visible && !closing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          New Collection 2025
        </h1>
        <p
          className={`text-foreground/60 text-lg md:text-xl max-w-md mb-10 transition-all duration-700 delay-[900ms] ${
            visible && !closing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Redefining Nepali streetwear. Bold. Unapologetic.
        </p>
        <button
          onClick={handleClose}
          className={`gold-gradient px-10 py-4 text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 active:scale-[0.97] transition-all duration-700 delay-[1100ms] ${
            visible && !closing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Explore Collection
        </button>
      </div>

      <button
        onClick={handleClose}
        className={`absolute top-6 right-6 z-20 p-2 text-foreground/60 hover:text-foreground transition-all duration-500 delay-[1300ms] ${
          visible && !closing ? "opacity-100" : "opacity-0"
        }`}
      >
        <X size={28} />
      </button>
    </div>
  );
}
