import { useCart } from "@/context/useCart";
import { useRef, useEffect } from "react";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import CartSummary from "./CartSummary";
import { FaTimes } from "react-icons/fa";

interface CartDropdownProps {
  onClose: () => void;
  onGoToCart: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose, onGoToCart }) => {
  const { cartItems } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      onMouseDown={(e) => e.stopPropagation()}
      className="bg-[#181818] rounded-lg shadow-lg border border-gray-700 z-50 w-96 max-w-[95vw] sm:max-w-md select-none">
      <div className="p-4 relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-0 right-0 m-4 text-gray-400 hover:text-white transition"
          aria-label="Закрыть">
          <FaTimes />
        </button>

        <div className="flex justify-between items-center mb-4 pr-10">
          <h3 className="text-lg font-semibold text-primary">Ваша корзина</h3>
          <span className="text-sm text-gray-500">{totalCount} шт.</span>
        </div>

        {cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <div className="max-h-72 overflow-y-auto no-scrollbar pr-2">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        )}

        <CartSummary totalPrice={totalPrice} onGoToCart={onGoToCart} />
      </div>
    </div>
  );
};

export default CartDropdown;
