import { useState } from "react";
import { User, Search, ShoppingCart, Menu } from "lucide-react";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="lg:hidden">
      {/* Üst Bar */}
      <div className="flex justify-between items-center px-4 py-4">
        {/* Bandage */}
        <h1 className="text-xl font-bold text-gray-900">Bandage</h1>

        {/* İkonlar */}
        <div className="flex items-center gap-4 text-gray-800">
          <User className="w-5 h-5" />
          <Search className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Hamburgerr Menü */}
      {menuOpen && (
        <nav className="flex flex-col items-center gap-6 py-8 text-xl text-gray-600 font-medium">
          <a href="#" className="font-medium">
            Home
          </a>
          <a href="/Product" className="font-bold">
            Product
          </a>
          <a href="#" className="font-bold">
            Pricing
          </a>
          <a href="#" className="font-medium">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
