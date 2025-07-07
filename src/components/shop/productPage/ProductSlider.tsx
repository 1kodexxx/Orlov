import { useState, useEffect } from "react";

interface ProductSliderProps {
  image: string;
  name: string;
  slides: number;
}

export default function ProductSlider({
  image,
  name,
  slides,
}: ProductSliderProps) {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const prev = () => setIndex((index + slides - 1) % slides);
  const next = () => setIndex((index + 1) % slides);

  return (
    <div
      className={`relative overflow-hidden select-none flex items-center justify-center max-w-[395px] max-h-[600px] w-full transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onMouseDown={(e) => setStartX(e.clientX)}
      onMouseUp={(e) => {
        const diff = e.clientX - startX;
        if (diff > 50) prev();
        else if (diff < -50) next();
      }}
      onTouchStart={(e) => setStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const diff = e.changedTouches[0].clientX - startX;
        if (diff > 50) prev();
        else if (diff < -50) next();
      }}>
      <div
        className="flex transition-transform duration-300 w-full h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {Array.from({ length: slides }).map((_, i) => (
          <img
            key={i}
            src={image}
            alt={`${name} ${i + 1}`}
            className="w-full h-full object-contain object-center flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-background-paper bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full"
        aria-label="Previous slide">
        <svg
          className="w-5 h-5 text-text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-background-paper bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full"
        aria-label="Next slide">
        <svg
          className="w-5 h-5 text-text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
