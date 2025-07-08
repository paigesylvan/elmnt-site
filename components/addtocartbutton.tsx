"use client";
import { useCart } from "@/app/cartnumber/cartcontext"; // or your actual path
import type { CartItem } from "../src/app/cartnumber/cartcontext"; // to match type

export default function AddToCartButton({ item }: { item: CartItem }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(item)}
      className="bg-black text-white hover:bg-white hover:text-black border border-black px-6 py-3 font-medium transition"
    >
      Add to Bag
    </button>
  );
}
