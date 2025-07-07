import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "@/context/useCart";
import type { CartItem as CartItemType } from "@/data/cart";

interface CartItemProps {
  item: CartItemType;
}

const colorOptions = [
  { name: "Жёлтый", hex: "#facc15" },
  { name: "Чёрный", hex: "#404040" },
  { name: "Зелёный", hex: "#86efac" },
  { name: "Синий", hex: "#3b82f6" },
  { name: "Красный", hex: "#f87171" },
  { name: "Фиолетовый", hex: "#a855f7" },
];

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const colorObj = colorOptions.find((c) => c.hex === item.selectedColor);
  const colorName = colorObj?.name ?? item.selectedColor;

  return (
    <motion.li
      className="flex items-center justify-between gap-4 py-4"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        },
      }}>
      <Link
        to={`/catalog/${item.slug}`}
        className="flex items-center gap-4 flex-1">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 rounded-lg object-contain"
        />
        <div className="text-left">
          <p className="text-lg text-primary font-medium">{item.name}</p>
          <p className="text-sm text-text-secondary">
            Модель: <span className="text-primary">{item.selectedModel}</span>
          </p>
          <p className="text-sm text-text-secondary">
            Цвет: <span style={{ color: item.selectedColor }}>{colorName}</span>
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <button
          onClick={() =>
            decreaseQuantity(item.slug, item.selectedColor, item.selectedModel)
          }
          className="px-2 py-1 bg-[#EFE393] text-[#181818] rounded disabled:opacity-50"
          disabled={item.quantity <= 1}>
          –
        </button>
        <span className="w-6 text-base text-primary text-center">
          {item.quantity}
        </span>
        <button
          onClick={() =>
            increaseQuantity(item.slug, item.selectedColor, item.selectedModel)
          }
          className="px-2 py-1 bg-[#EFE393] text-[#181818] rounded">
          +
        </button>
        <button
          onClick={() =>
            removeFromCart(item.slug, item.selectedColor, item.selectedModel)
          }
          className="text-red-600 text-xl">
          &times;
        </button>
      </div>
    </motion.li>
  );
}
