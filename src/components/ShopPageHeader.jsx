import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ShopPageHeader() {
  return (
    <section className="bg-[#FAFAFA] flex flex-col justify-center items-center py-10 gap-10">
      <h2 className="font-bold text-2xl ">Shop</h2>
      <div className="flex gap-2 ">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <ChevronRight className="text-gray-400" />
        <h6 className="font-bold text-gray-400">Shop</h6>
      </div>
    </section>
  );
}
