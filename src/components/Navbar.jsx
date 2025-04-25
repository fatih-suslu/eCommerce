import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  User,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Youtube,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const shopData = [
  {
    title: "Kadın",
    items: ["Bags", "Belts", "Cosmetics", "Hats"],
  },
  {
    title: "Erkek",
    items: ["Bags", "Belts", "Cosmetics", "Hats"],
  },
];

export default function Navbar() {
  return (
    <div className="hidden lg:flex flex-col w-full">
      {/* Bilgi Barı */}
      <div className="bg-gray-900 text-white text-2xl px-12 py-4 flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className="text-center">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Follow Us : </span>
          <Instagram className="w-6 h-6" />
          <Youtube className="w-6 h-6" />
          <Facebook className="w-6 h-6" />
          <Twitter className="w-6 h-6" />
        </div>
      </div>

      {/* Ana Navbar */}
      <div className="flex items-center justify-between px-12 py-6 w-full">
        {/* Sol Taraf: Bandage ve Menü */}
        <div className="flex items-center gap-48">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="flex gap-6 text-gray-600 text-2xl font-medium">
            <NavLink to="/" className="hover:text-blue-600">
              Home
            </NavLink>
            <div className="relative group">
              <button className="flex items-center gap-1">
                Shop <ChevronDown className="w-4 h-4" />
              </button>
              {/* Dropdown Menü */}
              <div className="absolute left-0 top-8 bg-white shadow-lg border rounded-md p-6 hidden group-hover:flex gap-16 z-50">
                {shopData.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-semibold mb-2">{section.title}</h4>
                    <ul className="space-y-1 text-2xl">
                      {section.items.map((item) => (
                        <li key={item}>
                          <NavLink
                            to={`/shop/${item}`}
                            className="hover:text-blue-600"
                          >
                            {item}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <NavLink to="/about" className="hover:text-blue-600">
              About
            </NavLink>
            <NavLink to="/blog" className="hover:text-blue-600">
              Blog
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-600">
              Contact
            </NavLink>
            <NavLink to="/pages" className="hover:text-blue-600">
              Pages
            </NavLink>
          </nav>
        </div>

        {/* Sağ Taraf: İkonlar */}
        <div className="flex items-center gap-14 text-gray-700 text-2xl">
          <div className="flex items-center gap-1 text-blue-600 font-semibold">
            <User className="w-6 h-6" />
            <NavLink to="/login" className="hover:text-blue-600">
              Login / Register
            </NavLink>
          </div>
          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
