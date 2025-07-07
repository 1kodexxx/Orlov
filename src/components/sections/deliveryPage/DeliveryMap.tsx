import React from "react";
import { FiMapPin } from "react-icons/fi";

const DeliveryMap: React.FC = () => (
  <section className="py-12 px-6 max-w-[1305px] mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-primary text-center">
      Зоны доставки
    </h2>
    <div className="relative w-full h-64 bg-secondary rounded-xl overflow-hidden">
      {/* Здесь можно вставить SVG-карту или компонент react-simple-maps */}
      <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
        <FiMapPin className="text-6xl animate-bounce" />
      </div>
    </div>
  </section>
);

export default DeliveryMap;
