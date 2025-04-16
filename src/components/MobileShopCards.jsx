import img1 from "../assets/ShopPageImg1.png";
import img2 from "../assets/ShopPageImg2.png";
import img3 from "../assets/ShopPageImg3.png";
import img4 from "../assets/ShopPageImg4.png";
import img5 from "../assets/ShopPageImg5.png";

const images = [img1, img2, img3, img4, img5];

export default function MobileShopCards({ view }) {
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
