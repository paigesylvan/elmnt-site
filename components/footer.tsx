// components/Footer.tsx
export default function Footer() {
    return (
      <footer className=" border-t border-gray-300 py-8 ">
        <div className="max-w-5xl mx-auto px-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} ELMNT. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Returns</a>
          </div>
        </div>
      </footer>
    );
  }
  