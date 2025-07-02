"use client";
import { useState } from "react";
import { SHOP_ITEMS } from "../../../public/ItemList";
import Image from "next/image";
import Link from "next/link";

const categories = ["home-base", "cook + clean", "fun + games"];

export default function ShopPage() {
  const [filter, setFilter] = useState("home-base");

  const items = SHOP_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <div className="mb-11 flex justify-center gap-3 lg:gap-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="text-xs lg:text-lg rounded-full border border-black  uppercase font-bold py-1 px-2 lg:px-6 lg:py-3 shadow-md hover:shadow-2xl transition"
          >
            {cat.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-10">
        {items.map((item) => (
          <Link key={item.slug} href={`/shop-all/${item.slug}`}>
            <div className="text-left space-y-2 shadow hover:shadow-xl lg:px-6">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={400}
                className="object-contain object-center relative aspect-square overflow-hidden p-3"
              />
              <h3 className=" text-xs lg:text-lg font-semibold pt-3 pl-2 lg:pl-0">{item.name}</h3>
              <p className="text-md pb-4 pl-2 lg:pl-0">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
