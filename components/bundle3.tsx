
import Image from "next/image";


export default function StarterBundleBanner () {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
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
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-6">
        Elevate Your Adventure with Elemental Add-On Bundles
        </h2>
        <p className="lg:max-w-6xl lg:text-2xl text-xl">
        Looking to enhance your camping experience? Our Elemental Collections are designed to bring extra excitement and functionality to your outdoor adventures. Each bundle is curated to provide added convenience and enjoyment, making your camping trip more memorable. Dont miss out on these enhancements—add an Elemental Bundle to your camping package today!
        </p>
      </div>


    
    </section>
  );
}
