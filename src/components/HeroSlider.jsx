import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const images = [
    "https://via.placeholder.com/800x400?text=Placeholder+1",
    "https://via.placeholder.com/800x400?text=Placeholder+2",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Otomatik kaydırma
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full h-[753px] md:h-[600px] bg-cyan-400 flex items-center justify-center text-white overflow-hidden">
      {/* İçerik */}
      <div className="text-center px-6 max-w-md z-10 tracking-widest">
        <h5 className="text-sm tracking-wide mb-8 font-bold">SUMMER 2020</h5>
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          NEW <br /> <span className="text-white">COLLECTION</span>
        </h2>
        <h4 className="text-xl my-6">
          We know how large objects <br /> will act, but things on a <br />{" "}
          small scale.
        </h4>
        <button className="bg-green-500 text-white font-bold px-8 py-4 text-lg rounded hover:bg-green-600 transition">
          SHOP NOW
        </button>
      </div>

      {/* Oklar */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Görselleri */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </section>
  );
}
