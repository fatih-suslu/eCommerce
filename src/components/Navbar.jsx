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
      <div className="bg-gray-900 text-white font-semibold px-12  flex justify-between items-center w-full h-12">
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
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 transition-transform hover:scale-125" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5 transition-transform hover:scale-125" />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5 transition-transform hover:scale-125" />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 transition-transform hover:scale-125" />
          </a>
        </div>
      </div>

      {/* Ana Navbar */}
      <div className="flex items-center justify-between px-12 py-4 w-full">
        {/* Sol Taraf: Bandage ve Menü */}
        <div className="flex items-center gap-48">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="flex gap-6 text-gray-600 font-semibold text-lg">
            <NavLink to="/" className="hover:text-blue-600 ">
              Home
            </NavLink>
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                Shop <ChevronDown className="w-4 h-4" />
              </div>

              {/* Dropdown Menü */}
              <div
                className="absolute left-0 top-8 bg-white shadow-lg border rounded-md p-6 
                  opacity-0 invisible group-hover:visible group-hover:opacity-100 
                  transition-all duration-300 ease-in-out flex gap-16 z-50"
              >
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

        {/* Sağ Taraf: İkonlar */}
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
  );
}
