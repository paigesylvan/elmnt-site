"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionFour() {
  const bundles = [
    {
      title: "JUST THE BASICS",
      description:
        "Your base camp begins here. Our Starter Bundle includes the basics you need for your first night out. No guesswork, no overwhelm, just thoughtful gear to help you feel at home in the wild.",
      button: "Starter Grounds Bundle",
      href: "/starter-bundle",
      image: "/images/hero3-1.png",
    },
    {
      title: "CURATED SETS",
      description:
        "These activity-based bundles bring the elements to life. Float with Water, swing with Air, gather round with Fire, and play grounded with Earth. Layer them onto your kit and let nature meet joy.",
      button: "Elemental Collections",
      href: "/elemental-collections",
      image: "/images/hero3-2.png",
    },
    {
      title: "ONE BY ONE",
      description:
        "Not every journey needs the full bundle. Whether you're adding a missing piece or just seeking that one perfect item, you'll find it here.",
      button: "Shop All",
      href: "/shop-all",
      image: "/images/hero3-3.png",
    },
  ];

  return (
    <section className="bg-[#f9f8f2] py-12 lg:py-56 ">
      <div className="flex flex-col  relative">
        {bundles.map(({ title, description, button, href, image }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className={` flex flex-row items-center lg:-my-36 ${
              i === 1 ? "flex-row-reverse" : ""
            }`}
            
          >
            {/* Side Image */}
            <div className="">
              <Image
                src={image}
                alt={title}
                width={600}
                height={600}
                className="w-full h-[200px] md:h-[500px] lg:h-[700px] object-contain"
                priority
              />
            </div>

            {/* Text Card */}
            <div className={`bg-transparent w-48 h-50 rounded-sm shadow-2xl border border-[#e2e1dc] 
            md:p-5 md:w-96 md:h-80 
            lg:pt-12 lg:w-[600px] lg:h-[450px] lg:p-7   ${i === 1 ? "text-right" : "text-left"} `}>

              <h1 className={` md:text-3xl lg:text-5xl lg:mb-8 font-bold mb-2 text-elmnt-forest ${i === 2 ? "md:mt-6" : "mt-0"}`} >{title}</h1>
              <h2 className=" text-[5px]  md:text-lg lg:text-2xl text-gray-800 lg:leading-relaxed">{description}</h2>
              <Link
                href={href}
                className="inline-block mt-6 lg:mt-12 text-[8px] md:text-xl lg:text-3xl tracking-wide text-white bg-black border border-black px-5 py-2 hover:bg-transparent hover:text-black hover:shadow-2xl transition"
              >
                {button}
              </Link>
            </div>


          </motion.div>
        ))}
      </div>
    </section>
  );
}
