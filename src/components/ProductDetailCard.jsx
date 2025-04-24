import Carousel from "./Carousel";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

export default function ProductDetailCard() {
  return (
    <section className="px-6 py-12 bg-gray-50 flex flex-col items-start space-y-4">
      <Carousel />
      <div className="mx-6 flex flex-col items-start space-y-4">
        <h4 className="text-2xl font-semibold text-gray-800">Floating Phone</h4>

        {/* İnceleme */}
        <div className="flex items-center space-x-2">
          <Star className="text-yellow-500 fill-yellow-500 " />
          <Star className="text-yellow-500 fill-yellow-500" />
          <Star className="text-yellow-500 fill-yellow-500" />
          <Star className="text-yellow-500 fill-yellow-500" />
          <Star className="text-yellow-500" />
          <p className="text-gray-400 font-bold text-sm ml-2">10 Reviews</p>
        </div>

        {/* Fiyat */}
        <h5 className="font-bold text-xl">$1.139.33</h5>

        {/* Stok Bilgisi */}
        <h6 className="font-bold text-gray-500 text-sm">
          Availability:{" "}
          <span className="text-blue-500 font-bold">In Stock</span>
        </h6>

        {/* Açıklama */}
        <p className="text-gray-500 font-medium leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        {/* Çizgi */}
        <div className="w-full border-t border-gray-300"></div>

        {/* Renk Topları */}
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
        </div>

        {/* Buton ve Simgeler */}
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Select Options
          </button>
          <Heart
            size={40}
            className="hover:text-red-500 cursor-pointer bg-white rounded-full p-2 border border-gray-200"
          />
          <ShoppingCart
            size={40}
            className="hover:text-blue-500 cursor-pointer bg-white rounded-full p-2 border border-gray-200"
          />
          <Eye
            size={40}
            className="hover:text-blue-500 cursor-pointer bg-white rounded-full p-2 border border-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
