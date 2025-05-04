import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../cart/CartContext"; // Adjust path as necessary

const productsByCategory = {
  "Table Lamps": [
    { id: 1, name: "Classic Table Lamp", price: "₹2,499", image: "/products/ClassicLamp.jpg" },
    { id: 2, name: "Modern Table Lamp", price: "₹3,099", image: "/products/ModernLamp.jpg" }
  ],
  "Floor Lamps": [
    { id: 3, name: "Wooden Floor Lamp", price: "₹4,199", image: "/products/ModernLamp.jpg" },
    { id: 4, name: "Metal Floor Lamp", price: "₹5,299", image: "/products/StreetLamp.webp" }
  ],
  "Study Lamps": [
    { id: 5, name: "LED Study Lamp", price: "₹999", image: "/products/StreetLamp.webp" }
  ],
  "Crystal Lamps": [
    { id: 6, name: "Crystal Shine Lamp", price: "₹6,599", image: "/products/ClassicLamp.jpg" }
  ],
  "Wall Lamps": [
    { id: 7, name: "Elegant Wall Lamp", price: "₹1,899", image: "/products/ModernLamp.jpg" },
    { id: 8, name: "Vintage Wall Lamp", price: "₹2,499", image: "/products/StreetLamp.webp" }
  ],
};

// Flattened list of all products for search
export const allProducts = Object.values(productsByCategory).flat();

const ProductList = ({ category }) => {
  const products = productsByCategory[category] || [];
  const { addToCart } = useContext(CartContext); // Accessing context

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">{category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group border rounded-lg overflow-hidden shadow-md bg-white"
          >
            {/* Image with hover overlay */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <button
              onClick={() => {
                addToCart(product); 
                toast.success(`${product.name} added to cart`);
              }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-700 mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
