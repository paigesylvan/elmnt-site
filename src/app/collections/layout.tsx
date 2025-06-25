
import type { ReactNode } from "react";
import CollectionNav from "../../../components/collectionnav";


export default async function BundleLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f9f8f2] px-4 py-8">
      <CollectionNav />
      <div className="mt-8">{children}</div>
    </main>
  );
}
