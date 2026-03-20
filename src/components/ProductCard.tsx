import { Link } from "react-router-dom";
import type { Product } from "@/context/CartContext";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "forwards" }}
    >
      <div className="relative overflow-hidden rounded-sm bg-surface aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-xs tracking-wider uppercase text-primary">{product.category}</span>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          रू {product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
