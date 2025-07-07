import React from "react";
import { Button } from "@/components/common";

interface PriceActionsProps {
  price: number;
  isVisible: boolean;
  delay?: number;
  onBuy: (e: React.MouseEvent<HTMLButtonElement>) => void; // Изменено
}

const PriceActions: React.FC<PriceActionsProps> = ({
  price,
  isVisible,
  delay = 0,
  onBuy,
}) => {
  // Классы с анимацией появления
  const priceClass = isVisible
    ? `text-2xl sm:text-3xl font-medium text-text-primary transition-all duration-700 ease-out opacity-100 translate-y-0 delay-[${delay}ms]`
    : "text-2xl sm:text-3xl font-medium text-text-primary transition-all duration-700 ease-out opacity-0 translate-y-10";

  const buttonClass = isVisible
    ? `transition-all duration-700 ease-out opacity-100 translate-y-0 delay-[${
        delay + 100
      }ms]`
    : "transition-all duration-700 ease-out opacity-0 translate-y-10";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6">
      <span className={priceClass} style={{ transitionDelay: `${delay}ms` }}>
        {price.toLocaleString()} ₽
      </span>

      <div className="ml-0 sm:ml-auto flex gap-3">
        <div
          className={buttonClass}
          style={{ transitionDelay: `${delay + 100}ms` }}>
          <Button
            onClick={onBuy}
            initialText="Добавить в корзину 🛒"
            hoverText="Купить! ✨"
            variant="light"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceActions;
