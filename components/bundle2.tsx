// components/StarterBundleCard.tsx
export default function StarterBundleCard() {
    return (
      <section className="w-full bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl  border border-zinc-200 p-8 shadow-lg">
          {/* Price + Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div className="text-4xl font-bold text-zinc-900 font-poppins">$629</div>
            <button className="bg-black text-white hover:border-1 hover:border-black hover:bg-white hover:text-black font-medium py-2 px-6 transition">
              Add To Cart
            </button>
          </div>
  
          {/* Description */}
          <p className="text-xl text-zinc-500 leading-relaxed  ">
            $870 Original Value
          </p>
          <p className="text-2xl leading-relaxed mb-6 ">
            No stress, no overload. Just the tools to begin, packed with care and intention.
          </p>
  
          {/* Bundle Includes */}
          
            <h3 className="font-semibold text-lg text-zinc-900 mb-2 font-poppins">
              Starter Grounds Bundle includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 text-lg md:text-base text-zinc-700">
            <ul className="list-disc list-inside lg:space-y-1">
                 <li>Tent</li>
                <li>3-Season Sleeping Bag</li>
                <li>Inflatable Sleeping Mat</li>
                <li>2 Wool Blankets</li>
                <li>Tarp</li>
                <li>Solar Powered Lantern and Power Bank</li>
                <li>2 Foldable Chairs</li>
                <li>Foldable Table</li>
                <li>Pocket Picnic Blanket</li>
                <li>Light-weight Trail Backpack + Compass</li>
            </ul>
            <ul className="list-disc list-inside lg:space-y-1">
                <li>Flashlight</li>
                <li>Compact Camp Stove + Fuel Canister</li>
                <li>Quick Dry Towel</li>
                <li>Kettle</li>
                <li>Meal Kit</li>
                <li>Water Bottle</li>
                <li>Long-stem Lighter</li>
                <li>Multi-Use Pocket Knife</li>
                <li>First-Aid Kit</li>
            </ul>
        </div> 
    </div>
    </section>
    );
  }
  