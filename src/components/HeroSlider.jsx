import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function HeroSlider() {
  const images = ["/assets/heroCover1.png", "/assets/heroCover2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full h-[500px] md:h-screen flex items-center justify-center md:justify-start text-white overflow-hidden">
      <div className="z-10 text-center md:text-left mx-6 md:ml-60 max-w-md">
        <h5 className="text-sm  tracking-wide mb-8 font-bold">SUMMER 2020</h5>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          NEW <span className="text-white">COLLECTION</span>
        </h2>

        <p className="text-base md:text-xl mb-6 leading-snug">
          We know how large objects will act,
          <br />
          but things on a small scale.
        </p>

        <button
          onClick={() => history.push("/shop")}
          className="bg-green-500 text-white font-bold px-8 py-4 text-lg rounded hover:bg-green-600 transition"
        >
          SHOP NOW
        </button>
      </div>

      {/* Oklar */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Görselleri */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
    </section>
  );
}
