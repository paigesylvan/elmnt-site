"use client";
import { SHOP_ITEMS } from "../data/ItemList";
import AddToCartButton from "../components/addtocartbutton";

export default function StarterBundleCard() {
  // Match the bundle item based on name (or slug if you prefer)
  const item = SHOP_ITEMS.find((i) => i.name === "STARTERGROUND BUNDLE");

  return (
    <section className="w-full bg-white lg:pb-12 lg:py-12">
      <div className="mx-auto max-w-6xl border border-zinc-200 p-8 shadow-lg">
        {/* Price + Button */}
        <div className="flex flex-row items-center justify-between gap-4 mb-8 lg:mb-12">
          <div className="text-4xl font-bold text-zinc-900 font-poppins">{item?.price}</div>

          {item ? (
            <AddToCartButton item={{ id: item.slug, ...item, quantity: 1 }} />
          ) : (
            <p className="text-red-500 text-sm">Bundle not found.</p>
          )}
        </div>

        {/* Description */}
        <p className="lg:text-2xl text-zinc-500 leading-relaxed pb-3">
          $870 Original Value
        </p>
        <p className="lg:text-2xl leading-relaxed mb-6">
          No stress, no overload. Just the tools to begin, packed with care and intention.
        </p>

        {/* Bundle Includes */}
        <h3 className="font-semibold lg:text-2xl text-zinc-900 font-poppins">
          Starter Grounds Bundle includes:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 lg:pb-8 lg:p-2 md:text-base text-zinc-700">
          <ul className="list-disc list-inside lg:space-y-1 lg:text-2xl">
            <li>Tent</li>
            <li>Tarp</li>
            <li>3-Season Sleeping Bag</li>
            <li>Inflatable Mattress Cot</li>
            <li>2 Wool Blankets</li>
            <li>Solar Powered Lantern and Power Bank</li>
            <li>Flashlight</li>
            <li>Portable Indoor/Outdoor Heater</li>
            <li>Compact Camp Stove + Fuel Canister</li>
          </ul>
          <ul className="list-disc list-inside lg:space-y-1 lg:text-2xl">
            <li>2 Foldable Chairs</li>
            <li>Foldable Table</li>
            <li>Pocket Picnic Blanket/Table Cover</li>
            <li>Long-Stem Lighter</li>
            <li>Kettle</li>
            <li>Meal Kit</li>
            <li>Multi-Use Pocket Knife</li>
            <li>Water Bottle</li>
            <li>First-Aid Kit</li>
            <li>Light-weight Trail Backpack + Compass</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
