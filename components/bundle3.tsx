
import Image from "next/image";
import CollectionNav from "./collectionnav"


export default function StarterBundleBanner () {
  return (
    <section className="relative mb-10 h-[40vh] lg:h-[70vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/bundle3.png" 
        alt="Grounded Forest"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10" />

      {/* Text content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center lg:px-6 text-center">
        <h2 className="font-poppins text-2xl lg:text-5xl font-bold mb-6 max-w-sm md:max-w-7xl">
        Elevate Your Adventure with Elemental Add-On Bundles
        </h2>
        <p className="lg:max-w-6xl lg:text-2xl text-sm max-w-lg">
        Looking to enhance your camping experience? Our Elemental Collections are designed to bring extra excitement and functionality to your outdoor adventures. Each bundle is curated to provide added convenience and enjoyment, making your camping trip more memorable. <br />  Don't miss out on these enhancements, add an Elemental Bundle to your camping package today!
        </p>
        <div className="mt-8 lg:mt-18">
          <h1 className="lg:text-2xl font-bold mb-3 lg:mb-8">Choose from our specialized bundles:</h1>
          <div className="w-full">
            <CollectionNav />
          </div>
        </div>
        
      </div>

      
    
    </section>
  );
}
