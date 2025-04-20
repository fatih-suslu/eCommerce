import shopData from "../data/data.json";

const images = shopData.shopData.map((item) => item.imageURL);

export default function MobileShopCards() {
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center py-6 bg-[#FAFAFA] ">
      {images.map((image, index) => (
        <div key={index} className="relative w-full max-w-xs mx-auto">
          {/* Resim */}
          <img
            src={image}
            alt={`Shop Image ${index + 1}`}
            className="w-full h-auto"
          />

          {/* Metinler */}
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-black bg-opacity-20 text-white">
            <h6 className="text-xl font-bold">CLOTHS</h6>
            <h6 className="font-bold">5 Items</h6>
          </div>
        </div>
      ))}
    </section>
  );
}
