"use client";
import Image from "next/image";


export default function StarterBundleHero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl text-red ">
          STARTER GROUNDS 
        </h1>
        <p className="text-base md:text-4xl  max-w-xl mx-auto leading-relaxed">
            Bundle
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        <Image
          src="/images/bundle1.png" 
          alt="Starter Grounds Bundle"
          width={1900}
          height={800}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
