import { useState } from "react";

export default function ShoppingCart({ isOpen, setIsOpen }) {
  if (!isOpen) return null; // Do not render if the cart is closed

  return (
    <div className="fixed top-20 right-10 w-80 bg-white shadow-lg shadow-black p-5 rounded-lg z-50">
      <h2 className="text-[black] text-xl font-bold mb-3">Cart</h2>
      <p className="text-gray-600">Aquí irán los productos del carrito.</p>
      
      <button
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        onClick={() => setIsOpen(false)} // Close the cart
      >
        Cerrar
      </button>
    </div>
  );
}




