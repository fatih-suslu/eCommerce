import { useState } from "react";
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
  Menu,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const shopData = [
  { title: "Kadın", items: ["Bags", "Belts", "Cosmetics", "Hats"] },
  { title: "Erkek", items: ["Bags", "Belts", "Cosmetics", "Hats"] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Mobil Navbar  */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center px-4 py-4">
          <NavLink to="/" className="text-xl font-bold text-gray-900">
            Bandage
          </NavLink>

          <div className="flex items-center gap-4 text-gray-800">
            <User className="w-5 h-5" />
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col items-center gap-6 py-8 text-xl text-gray-600 font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Product">Product</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        )}
      </div>

      {/*  Navbar*/}
      <div className="hidden lg:flex flex-col w-full">
        {/* Bilgi Barı */}
        <div className="bg-gray-900 text-white font-semibold px-12 flex justify-between items-center w-full h-12">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>fatihsuslu98@gmail.com</span>
            </div>
          </div>
          <div className="text-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us :</span>
            <a href="https://www.instagram.com" target="_blank">
              <Instagram className="w-5 h-5 hover:scale-125" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <Youtube className="w-5 h-5 hover:scale-125" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:scale-125" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <Twitter className="w-5 h-5 hover:scale-125" />
            </a>
          </div>
        </div>

        {/* Ana Navbar */}
        <div className="flex items-center justify-between px-12 py-4 w-full">
          <div className="flex items-center gap-48">
            <NavLink to="/" className="text-2xl font-bold">
              Bandage
            </NavLink>

            <nav className="flex gap-6 text-gray-600 font-semibold text-lg">
              <NavLink to="/" className="hover:text-blue-600">
                Home
              </NavLink>
              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                  Shop <ChevronDown className="w-4 h-4" />
                </div>
                <div className="absolute left-0 top-8 bg-white shadow-lg border rounded-md p-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out flex gap-16 z-50">
                  {shopData.map((section) => (
                    <div key={section.title}>
                      <h4 className="font-semibold text-black mb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-1 text-lg">
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
          <div className="flex items-center gap-10 text-gray-700 text-lg">
            <div className="flex items-center gap-1 text-blue-600 font-semibold">
              <User className="w-5 h-5 hover:text-blue-600" />
              <NavLink to="/login" className="hover:text-blue-600">
                Login / Register
              </NavLink>
            </div>
            <Search className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
