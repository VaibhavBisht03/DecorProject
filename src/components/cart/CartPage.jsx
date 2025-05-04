import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-md p-4 flex items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
