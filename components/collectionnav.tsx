
"use client";

import { useRouter } from "next/navigation";

const collections = ["fire", "earth", "water", "air"];

export default function CollectionNav() {
  const router = useRouter();

  return (
    <nav className="flex h-8 lg:h-12 flex-wrap justify-center gap-4 lg:gap-10  ">
    {collections.map((type) => (
    <button
      key={type}
      onClick={() => router.push(`/collections/${type}`)}
      className="text-sm md:text-md lg:text-xl w-30 lg:w-56 rounded-full border border-black bg-white text-black shadow-xl hover:bg-black hover:text-white hover:border-white uppercase transition"
    >
     {type}
    </button>
    ))}

    </nav>
  );
}
