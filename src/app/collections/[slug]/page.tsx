// app/collections/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";


const COLLECTIONS = {
  fire: {
    title: "Fire Collection",
    image: "/images/fire.jpeg",
    images: [
      "/images/fire/roastingstx.png",
      "/images/fire/firegrate.png",
      "/images/fire/candle.png",
      "/images/fire/stringlights.png",
      "/images/fire/campgame.png",
      "/images/fire/colorflames.png",
    ],
    description:
      "Ground yourself with warmth, comfort, and gear made for steady moments in nature.",
    price: "$69",
    items: [
      "Compact Roasting Sticks (Set of 4)",
      "Campfire Grate",
      "Citronella Candle",
      "20ft Solar String Lights",
      "Campfire Game",
      "Color-Changing Fire Crystals",
    ],
    color: "bg-white",
  },
  earth: {
    title: "Earth Collection",
    image: "/images/earth.jpg",
    images: [
      "/images/earth/badminton.png",
      "/images/earth/bags.png",
      "/images/earth/bocce.png",
      "/images/earth/jenga.png",
      "/images/earth/rings.png",
      "/images/earth/washer.png",
    ],
    description:
      "Feel rooted. Bring comfort to any terrain with grounding tools designed for steadiness.",
    price: "$62",
    items: [
      "Wool Blanket",
      "Tarp",
      "Foldable Chairs",
      "Pocket Picnic Blanket",
      "Biodegradable Ground Mat",
    ],
    color: "bg-white",
  },
  water: {
    title: "Water Collection",
    image: "/images/water.jpg",
    images: [
      "/images/fire/item1.jpeg",
      "/images/fire/item2.jpeg",
      "/images/fire/item3.jpeg",
      "/images/fire/item4.jpeg",
      "/images/fire/item5.jpeg",
      "/images/fire/item6.jpeg",
    ],
    description:
      "Float with ease. Hydration, cleaning, and light—the essentials that flow with you.",
    price: "$58",
    items: ["Quick Dry Towel", "Water Bottle", "Lantern", "Meal Kit"],
    color: "bg-white",
  },
  air: {
    title: "Air Collection",
    image: "/images/air.jpeg",
    images: [
      "/images/fire/item1.jpeg",
      "/images/fire/item2.jpeg",
      "/images/fire/item3.jpeg",
      "/images/fire/item4.jpeg",
      "/images/fire/item5.jpeg",
      "/images/fire/item6.jpeg",
    ],
    description:
      "Move freely and breathe deep. Lightweight gear that lifts your spirits and your load.",
    price: "$64",
    items: ["Sleeping Mat", "Trail Backpack", "Compact Chair", "Compass"],
    color: "bg-white",
  },
};

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = COLLECTIONS[params.slug as keyof typeof COLLECTIONS];
  if (!collection) return notFound();

  return (
    <section className={`${collection.color}`}>
      {/* Hero image */}
      <div className="relative w-full h-[650px] mb-12 ">
      <Image
       src={collection.image}
        alt={`${collection.title} Hero`}
        fill
        className="object-cover object-center"
        priority
      />
      </div>


<div className='flex flex-row'>
      {/* Product image grid */}
      <div className="w-1/2 grid grid-cols-2 gap-4 max-w-6xl mx-auto mb-12 ">
        {collection.images.map((src, idx) => (
          <div key={idx} className=" overflow-hidden">
            <Image
              src={src}
              alt={`${collection.title} product ${idx + 1}`}
              width={200}
              height={200}
              className="object-contain "
            />
          </div>
        ))}
      </div>

      {/* Text content */}
      <div className="w-1/2 text-left space-y-6  text-zinc-800">
        <h1 className="text-4xl font-bold font-poppins text-elmnt-forest">
          {collection.title}
        </h1>
        <p className="text-base md:text-lg">{collection.description}</p>

        <div>
          <h2 className="text-lg font-semibold mb-2">What’s inside:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-left ">
            {collection.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-2xl font-bold">{collection.price}</div>

        <button className="bg-elmnt-forest hover:bg-black text-white px-6 py-3 rounded-md font-medium transition">
          Add to Cart
        </button>
      </div>

      </div>
    </section>
  );
}