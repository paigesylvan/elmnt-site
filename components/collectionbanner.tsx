import Link from "next/link";

export default function CollectionsBanner() {
  return (
    <div className="mt-5 lg:mt-20 border-y border-black text-center py-5 lg:py-10 px-4">
      <p className="text-lg px-10 md:text-xl font-medium mb-6">
        Interested in a single item? Find individual items:
      </p>
      <Link
        href="/shop-all"
        className="inline-block border border-black px-6 py-2 font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition"
      >
        Shop All
      </Link>
    </div>
  );
}
