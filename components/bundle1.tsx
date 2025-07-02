"use client";
import Image from "next/image";


export default function StarterBundleHero() {
  return (
    <section className="py-10 lg:py-20 px-10 text-center">

        <h1 className="text-3xl md:text-5xl text-red ">
          STARTER GROUNDS 
        </h1>
        <p className="text-xl pb-4 lg:text-4xl  max-w-xl mx-auto leading-relaxed">
            Bundle
        </p>

      <div className="lg:mt-12 mx-auto max-w-[1600px] ">
        <Image
          src="/images/bundle1.png" 
          alt="Starter Grounds Bundle"
          width={900}
          height={800}
          className="object-contain w-full"
          priority
        />
      </div>
    </section>
  );
}
