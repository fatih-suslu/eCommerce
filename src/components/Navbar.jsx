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

//A LARI NAVLİNK YAP!

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
      {/*  Bilgi Barı */}
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
        <div className="flex  items-center gap-4">
          <span>Follow Us : </span>
          <Instagram className="w-6 h-6" />
          <Youtube className="w-6 h-6" />
          <Facebook className="w-6 h-6" />
          <Twitter className="w-6 h-6" />
        </div>
      </div>

      {/* Ana Navbar */}
      <div className="flex items-center justify-between px-12 py-6 w-full">
        {/* Sol taraf: Bandage ve Menü */}
        <div className="flex items-center gap-48">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="flex gap-6 text-gray-600 text-2xl font-medium">
            <a href="#">Home</a>
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
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Pages</a>
          </nav>
        </div>

        {/* Sağ taragf: İkonlar */}
        <div className="flex items-center gap-14 text-gray-700 text-2xl">
          <div className="flex items-center gap-1 text-blue-600 font-semibold">
            <User className="w-6 h-6" />
            <a href="#">Login / Register</a>
          </div>
          <Search className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
          <Heart className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
