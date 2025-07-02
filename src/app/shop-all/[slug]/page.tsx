import { SHOP_ITEMS } from "../../../../public/ItemList";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const item = SHOP_ITEMS.find((item) => item.slug === params.slug);
  if (!item) return notFound();

  return (
<section className="py-12 mx-auto space-y-6 lg:shadow-2xl overflow-hidden w-full lg:w-6xl lg:mt-36  lg:mb-[44vh]">
  <div className="flex flex-col lg:flex-row items-start gap-12 lg:mt-6">
    <div className="lg:w-1/2 justify-center lg:ml-12">
      <Image
        src={item.image}
        alt={item.name}
        width={500}
        height={400}
        className="mx-auto object-contain h-[200px] lg:h-[300px]"
      />
    </div>

    <div className="w-full lg:w-1/2 space-y-4 pl-5 mt-16">
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <p className="text-zinc-700 p">{item.description}</p>
      <p className="text-2xl font-semibold">{item.price}</p>
      <button className="bg-black text-white hover:bg-white hover:text-black hover:border-1 px-6 py-3 font-medium transition">
        Add to Bag
      </button>
    </div>
  </div>
</section>

  );
}
