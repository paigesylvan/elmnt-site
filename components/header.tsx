"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "../src/app/cartnumber/cartcontext";

const navItems = [
  { label: "Starter Bundle", href: "/starter-bundle" },
  { label: "Collections", href: "/collections/fire" },
  { label: "Shop All", href: "/shop-all" },
];

export default function Header() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="py-6 px-6 flex justify-between items-center">
        {/* Logo: always left */}
        <Link href="/" className="text-4xl font-bold text-black">
          ELMNT
        </Link>

        {/* Desktop Nav: shown on md+ */}
        <nav className="hidden md:flex gap-10 items-center text-xl tracking-wide">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition ${
                pathname === href
                  ? "text-black font-semibold"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {label.toUpperCase()}
            </Link>
          ))}
          <Link href="/cart" className="relative">
            <Image src="/images/cart.png" alt="Cart" width={40} height={38} priority />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Icons: shown on <md */}
        <div className="flex md:hidden items-center gap-4">
          {/* Cart icon on left */}
          <Link href="/cart" className="relative">
            <Image src="/images/cart.png" alt="Cart" width={32} height={30} priority />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger on right */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden pt-6 px-6 pb-6 flex flex-col gap-4 text-xl bg-white border-t border-gray-200">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                pathname === href
                  ? "text-black font-semibold"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
