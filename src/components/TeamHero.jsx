import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom"; // React Router'dan Link bileşeni

export default function TeamTopSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto text-center py-20 px-10">
        <h5 className="text-sm font-bold text-gray-500 uppercase">
          What we do
        </h5>
        <h2 className="text-6xl font-bold">Innovation tailored for you</h2>
        <div className="space-x-2">
          <Link to="/" className="font-bold hover:text-blue-500">
            Home
          </Link>
          <ChevronRightIcon className="w-4 h-4 inline" />
          <span className="text-gray-500 font-bold">Team</span>
        </div>
      </div>

      <div className="flex gap-2 flex-col md:flex-row">
        {/* Sol */}
        <div className="md:w-1/2 w-full">
          <img
            src="/assets/gallery1.png"
            alt="gallery1.png"
            className="w-full h-[708px] object-cover"
          />
        </div>

        {/* Sağ taraf */}
        <div className="md:w-1/2 w-full grid grid-cols-2 gap-2">
          <img
            src="/assets/gallery2.png"
            alt="gallery2.png"
            className="w-full h-[350px] object-cover"
          />
          <img
            src="/assets/gallery3.png"
            alt="gallery3.png"
            className="w-full h-[350px] object-cover"
          />
          <img
            src="/assets/gallery4.png"
            alt="gallery4.png"
            className="w-full h-[350px] object-cover"
          />
          <img
            src="/assets/gallery5.png"
            alt="gallery5.png"
            className="w-full h-[350px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
