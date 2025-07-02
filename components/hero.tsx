"use client";

export default function Hero() {
  return (
<section className="relative h-[70vh] lg:h-[90vh] w-full bg-[#f9f8f2] overflow-hidden">
  <video autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-[80%] flex mt-12 lg:mt-24 justify-center item-center"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 flex justify-center z-10  text-black ">
    <div className=" ">
      <h1 className=" text-md mt-[4vh] lg:mt-[10vh] lg:text-4xl lg:mr-[40vw] ">
        Gear for every element<br /> of your journey
      </h1>
      
    </div>
    <div>
    <p className=" text-md  mt-[58vh] lg:text-4xl lg:mt-[70vh] text-right">
        Spend less time planning, <br /> more time exploring
      </p>
    </div>
  
  </div>
</section>

  );
}
