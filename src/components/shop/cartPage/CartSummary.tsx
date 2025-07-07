import React from "react";
import { motion } from "framer-motion";

interface CartSummaryProps {
  subtotal: number;
  vat: number;
  discount: number;
  total: number;
  refProp: React.Ref<HTMLDivElement>;
}

export default function CartSummary({
  subtotal,
  vat,
  discount,
  total,
  refProp,
}: CartSummaryProps) {
  return (
    <motion.div
      ref={refProp}
      className="mt-8 pt-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
      }}>
      <dl className="max-w-lg ml-auto space-y-4 text-sm text-text-secondary">
        <div className="flex justify-between">
          <dt>Промежуточный итог</dt>
          <dd>₽{subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>НДС (10%)</dt>
          <dd>₽{vat.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Скидка (5%)</dt>
          <dd>-₽{discount.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between font-medium text-base">
          <dt>Итого</dt>
          <dd>₽{total.toFixed(2)}</dd>
        </div>
      </dl>
      <div className="flex justify-end mt-4">
        <button className="bg-primary text-[#181818] px-6 py-3 rounded-sm transition">
          Оформить заказ
        </button>
      </div>
    </motion.div>
  );
}
