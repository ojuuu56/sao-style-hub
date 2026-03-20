import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

import type { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Shadow Abstract Tee",
    price: 2499,
    image: product1,
    category: "T-Shirts",
    description: "Premium oversized cotton tee featuring exclusive abstract brushstroke artwork. Relaxed fit with dropped shoulders for that effortless streetwear silhouette. Made from 100% combed cotton, 280 GSM heavyweight fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "Cloud Cream Hoodie",
    price: 4299,
    image: product2,
    category: "Hoodies",
    description: "Luxuriously soft oversized hoodie in a warm cream tone. Features kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect layering piece for Biratnagar winters. 350 GSM French terry fabric.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Tactical Cargo Joggers",
    price: 3799,
    image: product3,
    category: "Bottoms",
    description: "Military-inspired cargo joggers in dark olive green. Six-pocket utility design with elasticated waistband and ankle cuffs. Water-resistant ripstop fabric built for the streets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "Rebel Leather Jacket",
    price: 8999,
    image: product4,
    category: "Jackets",
    description: "Statement black faux leather biker jacket with asymmetric zip closure and silver hardware. Lined interior for comfort. The ultimate outerwear piece that defines the SAO attitude.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Navy Heritage Bomber",
    price: 5499,
    image: product5,
    category: "Jackets",
    description: "Classic bomber jacket in deep navy with gold satin lining. Ribbed collar, cuffs and hem. Two front pockets with snap closure. A timeless piece reimagined for modern Nepali streetwear.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Ivory Trench Coat",
    price: 7999,
    image: product6,
    category: "Outerwear",
    description: "Elegant double-breasted trench coat in warm beige. Self-tie belt, storm flap, and deep pockets. Lightweight yet structured — perfect for transitional weather in the Terai region.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Washed Denim Jacket",
    price: 4999,
    image: product7,
    category: "Jackets",
    description: "Vintage-washed denim jacket with subtle distressing. Button-front closure with chest flap pockets. A wardrobe essential that pairs with everything from joggers to chinos.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 8,
    name: "Noir Wide-Leg Set",
    price: 3999,
    image: product8,
    category: "Co-ords",
    description: "Minimalist black co-ord set featuring a fitted crop top and high-waisted wide-leg pants with paper bag waist. Fluid crepe fabric drapes beautifully for a sophisticated look.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];
