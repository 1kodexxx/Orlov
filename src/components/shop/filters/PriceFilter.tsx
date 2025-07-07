// src/components/shop/filters/PriceFilter.tsx
import React, { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface PriceFilterProps {
  activeDropdown: string | null;
  onToggle: (title: string) => void;
  onPriceChange: (range: [number, number]) => void;
  resetSignal: number;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  activeDropdown,
  onToggle,
  onPriceChange,
  resetSignal,
}) => {
  const isOpen = activeDropdown === "Цена";
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mobileContentHeight, setMobileContentHeight] = useState(0);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 60000]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  // Сброс слайдера только по resetSignal
  useEffect(() => {
    setPriceRange([0, 60000]);
  }, [resetSignal]);

  // Передаём обновлённые значения в родителя
  useEffect(() => {
    onPriceChange(priceRange);
  }, [priceRange]);

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setPriceRange([values[0], values[1]]);
    }
  };

  const handleReset = () => {
    setPriceRange([0, 60000]);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMobileContentHeight(contentRef.current.scrollHeight);
    } else {
      setMobileContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      {/* Десктоп версия */}
      <div className="hidden sm:block">
        <button
          onClick={() => onToggle("Цена")}
          className="flex items-center gap-2 border-b border-secondary pb-1 text-text-primary transition hover:border-primary cursor-pointer">
          <span className="text-sm font-medium">Цена</span>
          <span className={`transition ${isOpen ? "rotate-180" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 z-50 w-96 rounded-sm border border-secondary bg-background-paper p-4">
            <header className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">
                {priceRange[0].toLocaleString()} ₽ –{" "}
                {priceRange[1].toLocaleString()} ₽
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-sm text-text-primary underline underline-offset-4">
                Сбросить
              </button>
            </header>
            <Slider
              range
              min={0}
              max={60000}
              step={100}
              value={priceRange}
              onChange={handleSliderChange}
              trackStyle={[{ backgroundColor: "#EFE393" }]}
              handleStyle={[
                { borderColor: "#EFE393", backgroundColor: "#EFE393" },
                { borderColor: "#EFE393", backgroundColor: "#EFE393" },
              ]}
              railStyle={{ backgroundColor: "#666" }}
            />
          </div>
        )}
      </div>

      {/* Мобильная версия */}
      <div className="sm:hidden">
        <button
          onClick={() => onToggle("Цена")}
          className="w-full flex justify-between items-center border-b pb-1">
          <span>Цена</span>
          <span
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? `${mobileContentHeight}px` : "0px" }}>
          <div ref={contentRef} className="pt-2 space-y-2 px-2">
            <div className="mb-2 text-sm text-text-secondary text-center">
              {priceRange[0].toLocaleString()} ₽ –{" "}
              {priceRange[1].toLocaleString()} ₽
            </div>
            <div className="w-full max-w-full">
              <Slider
                range
                min={0}
                max={60000}
                step={100}
                value={priceRange}
                onChange={handleSliderChange}
                trackStyle={[{ backgroundColor: "#EFE393" }]}
                handleStyle={[
                  { borderColor: "#EFE393", backgroundColor: "#EFE393" },
                  { borderColor: "#EFE393", backgroundColor: "#EFE393" },
                ]}
                railStyle={{ backgroundColor: "#666" }}
              />
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-2 text-sm text-text-primary underline underline-offset-4 w-full">
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
