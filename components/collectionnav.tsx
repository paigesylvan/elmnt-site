
"use client";

import { useRouter } from "next/navigation";

const collections = ["earth", "water", "fire", "air"];

export default function CollectionNav() {
  const router = useRouter();

  return (
    <nav className="flex h-12 flex-wrap justify-center gap-4 ">
      {collections.map((type) => (
        <button
          key={type}
          onClick={() => router.push(`/collections/${type}`)}
          className="bg-elmnt-forest hover:bg-white text-black px-5 py-2 rounded-md text-xl  font-medium transition"
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} Collection
        </button>
      ))}
    </nav>
  );
}
