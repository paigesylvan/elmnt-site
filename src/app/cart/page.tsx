"use client";
import { useCart } from "../cartnumber/cartcontext";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalAmount = cart.reduce((acc, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g,"")); // Clean $ symbols, if needed
    return acc + priceNumber * item.quantity;
  }, 0);

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Your Bag</h1>

      {cart.length === 0 ? (
        <p className="text-zinc-500 pb-8">Your bag is empty.</p>
      ) : (
        <ul className="space-y-8 mt-18">
          {cart.map((item) => (
            <li key={item.id} className="border-b pb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={180}
                  className="rounded-md"
                />
                <div className="flex-1">
              <div className="flex flex-row">
                  <p className="text-lg text-zinc-800 mr-3">{item.price}</p>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>
                  

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 text-xl border rounded hover:bg-zinc-100"
                    >
                      −
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 text-xl border rounded hover:bg-zinc-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm mt-4 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
          <aside className=" p-6 shadow-md h-fit">
    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
    <p className="text-lg">Total: <span className="font-semibold">${totalAmount.toFixed(2)}</span></p>
  </aside>
    </section>
  );
}
