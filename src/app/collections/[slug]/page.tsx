// app/collections/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";


const COLLECTIONS = {
  fire: {
    title: "FIRE COLLECTION",
    image: "/images/fire/fire.jpeg",
    images: [
      "/images/fire/roastingstx.png",
      "/images/fire/firegrate.png",
      "/images/fire/candle.png",
      "/images/fire/stringlights.png",
      "/images/fire/campgame.png",
      "/images/fire/colorflames.png",
    ],
    ogprice: "$130",
    description:
      "Gather around. This fire kit sparks connection, warmth, and the kind of night you’ll talk about long after it ends.",
    price: "$69",
    items: [
      "Compact Roasting Sticks (Set of 4)",
      "Campfire Grate",
      "Citronella Candle",
      "20ft Solar String Lights",
      "Campfire Game",
      "Color-Changing Fire Crystals",
    ],
    textcolor: "text-orange-700",
    color: "bg-white",
  },
  earth: {
    title: "EARTH COLLECTION",
    image: "/images/earth/earth.jpg",
    images: [
      "/images/earth/badminton.png",
      "/images/earth/bags.png",
      "/images/earth/bocce.png",
      "/images/earth/jenga.png",
      "/images/earth/rings.png",
      "/images/earth/washer.png",
    ],
    ogprice: "$227",
    description:
      "Bring people together with easy games, gentle competition, and wide-open skies. Perfect for group camping & day trips.",
    price: "$169",
    items: [
      "Badminton Set",
      "Cornhole Set",
      "Bocce Ball Set",
      "Giant Jenga",
      "Ring Swing Game",
      "Washer set",
    ],
    textcolor: "text-green-800",
    color: "bg-green",
  },
  water: {
    title: "WATER COLLECTION",
    image: "/images/water/water.jpg",
    images: [
      "/images/water/beachchair.png",
      "/images/water/cooler.png",
      "/images/water/umbrella.png",
      "/images/water/towel.png",
      "/images/water/tube.png",
      "/images/water/floaty.png",
    ],
    ogprice: "$269",
    description:
      "Drift into calm, everything you need for your sunniest days on the water. Includes tips for lakeside lounging and paddle safety",
    price: "$209",
    items: [
      "Foldable Beach Chair",
      "Soft Cooler", 
      "Umbrella Chair Attachment",
      "Set of 4 Towels",
      "Inflatable Tube",
      "Inflatable Drink Holder + Cooler",

    ],
    textcolor: "text-teal-600",
    color: "bg-white",
  },
  air: {
    title: "AIR COLLECTION",
    image: "/images/air/air.jpeg",
    images: [
      "/images/air/flyaway.png",
      "/images/air/hammock.png",
      "/images/air/lounge.png",
      "/images/air/airpump.png",
      "/images/air/fan.png",
      "/images/air/telescope.png",
    ],
    ogprice: "$249",
    description:
      "Float, rest, observe. The Air Collection is all about breathing room and skyward perspectives. Best for solo relaxing and stargazing.",
    price: "$189",
    items: [
      "Tent Canopy Additon", 
      "Hammock", 
      "Inflatable Lounge Chair", 
      "Battery Air Pump",
      "Solar Fan",
      "Portable Telescope"
    ],
    textcolor: "text-teal-900",
    color: "bg-blue",
  },
};
type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(COLLECTIONS).map((slug) => ({
    slug,
  }));
}

export default async function CollectionPage({ params }: PageProps) {
  const collection = COLLECTIONS[params.slug as keyof typeof COLLECTIONS];
  if (!collection) return notFound();

  return (
    <section className=  "bg-white mb-48">
      {/* Hero image */}
      <div className="relative mb-12 h-[170px] w-full lg:h-[650px] lg:mb-24 ">
      <Image
       src={collection.image}
        alt={`${collection.title} Hero`}
        fill
        className="object-cover object-center"
        priority
      />
      </div>


<div className='flex flex-col lg:flex-row items-center '>

      {/* Product image grid */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="grid grid-cols-2 gap-12 ">
        {collection.images.map((src, idx) => (
          <div key={idx} className="overflow-hidden p-3 lg:px-12">
            <Image
              src={src}
              alt={`${collection.title} product ${idx + 1}`}
              width={200}
              height={200}
              className=" object-contain object-center max-h-58"
            />
          </div>
        ))}
        
      </div>
</div>


      {/* Text content */}
      <div className="text-left mt-8 lg:mt-0 text-zinc-800 bg-transparent shadow-xl p-24 lg:ml-30">
        <h1 className="pb-14 tracking-wider text-5xl lg:text-6xl">
          {collection.title}
        </h1>
       
        <div className="flex flex-row gap-12 mb-8 ">
          <div className=" text-2xl lg:text-3xl font-bold">{collection.price}</div>

          <button className="bg-black text-white hover:border-1 hover:border-black hover:bg-white hover:text-black font-medium lg:py-2 px-6 transition">
          Add To Cart
          </button>
        </div>
        
        <p className="max-w-lg text-lg lg:text-2xl ">{collection.description}</p>
        <p className= {`text-gray-500 text-xl my-6 ${collection.textcolor} `}>{collection.ogprice} Original Value</p>
        <div>
          <h2 className="text-3xl font-semibold mt-12 mb-2">What’s inside:</h2>
          <ul className="list-disc list-inside space-y-1 text-md lg:text-xl text-left ">
            {collection.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}