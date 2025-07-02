
import type { ReactNode } from "react";
import CollectionNav from "../../../components/collectionnav";
import CollectionsBanner from "../../../components/collectionbanner";


export default async function BundleLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="bg-black py-5">
        <CollectionNav />
      </div>
      <div className="">{children}</div>
      <CollectionsBanner />
    </main>
  );
}
