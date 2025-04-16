import { List, Grid2x2 } from "lucide-react";

const ShopControls = ({ setView }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 gap-4 ">
      {/* Sonuç Sayısı */}
      <span className="text-gray-500 font-bold text-sm ">
        Showing all 12 results
      </span>
      {/* Görünüm Seçenekleri */}
      <div className="flex items-center gap-4">
        <span className="text-gray-500 font-bold text-sm">Views:</span>
        <button
          onClick={() => setView("grid")}
          className="p-2 rounded-lg border-2 "
        >
          <Grid2x2 size={20} />
        </button>
        <button
          onClick={() => setView("list")}
          className="p-2 rounded-lg border-2"
        >
          <List size={20} />
        </button>
      </div>
      <div className="flex items-center gap-4">
        {/* Sıralama Dropdown */}
        <select className="py-3 border rounded-lg text-gray-500">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

        {/* Filtre Butonu */}
        <button className="px-7 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-500">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopControls;
