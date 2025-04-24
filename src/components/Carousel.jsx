import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const slides = [
    { id: 1, image: "/assets/carouselCover1.png" },
    { id: 2, image: "/assets/carouselCover2.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <div className="relative overflow-hidden w-full max-w-lg mx-auto">
        {/* Ana Slider */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={`image ${slide.id}`}
              className="w-full h-60 object-cover flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-3 hover:bg-black/50 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-3 hover:bg-black/50 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex mt-4 space-x-2">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={`thumbnail ${slide.id}`}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-16 object-cover cursor-pointer ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
