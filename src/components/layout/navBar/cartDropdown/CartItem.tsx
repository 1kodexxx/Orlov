import { FaTrash } from "react-icons/fa";
import { useCart } from "@/context/useCart";
import type { CartItem as CartItemType } from "@/context/CartContext"; // Импорт типа

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useCart();

  const colorOptions = [
    { name: "Жёлтый", hex: "#facc15" },
    { name: "Чёрный", hex: "#404040" },
    { name: "Зелёный", hex: "#86efac" },
    { name: "Синий", hex: "#3b82f6" },
    { name: "Красный", hex: "#f87171" },
    { name: "Фиолетовый", hex: "#a855f7" },
  ];

  const colorObj = colorOptions.find((c) => c.hex === item.selectedColor);
  const colorName = colorObj?.name ?? item.selectedColor;

  return (
    <div className="flex justify-between items-start py-3">
      <div className="flex gap-3 items-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 object-contain rounded"
        />
        <div>
          <h4 className="font-normal text-primary mb-1 text-sm">{item.name}</h4>
          <p className="text-sm text-gray-300">
            Цвет: <span style={{ color: item.selectedColor }}>{colorName}</span>
          </p>
          <p className="text-sm" style={{ color: "#CCCCCC" }}>
            Модель: {item.selectedModel}
          </p>
          <p className="text-sm text-gray-500">x{item.quantity}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-primary">
          {(item.price * item.quantity).toLocaleString()} ₽
        </p>
        <button
          onClick={() =>
            removeFromCart(item.slug, item.selectedColor, item.selectedModel)
          }
          className="text-red-500 hover:text-red-700 mt-1"
          aria-label="Удалить">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
