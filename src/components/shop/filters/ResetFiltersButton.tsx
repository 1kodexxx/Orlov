// src/components/shop/filters/ResetFiltersButton.tsx
import React from "react";

interface ResetFiltersButtonProps {
  onReset: () => void;
}

const ResetFiltersButton: React.FC<ResetFiltersButtonProps> = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="w-full sm:w-auto h-8 sm:h-10 px-4 text-sm rounded-sm border border-secondary text-[#CCCCCC] bg-secondary/30 hover:bg-secondary hover:text-[#CCCCCC] transition">
      Сбросить всё
    </button>
  );
};

export default ResetFiltersButton;
