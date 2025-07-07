import { Link } from "react-router-dom";

interface CartSummaryProps {
  totalPrice: string;
  onGoToCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  totalPrice,
  onGoToCart,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-white">Итого:</span>
        <span className="font-bold text-lg text-primary">
          {parseFloat(totalPrice).toLocaleString()} ₽
        </span>
      </div>

      <Link
        to="/cart"
        onClick={onGoToCart}
        className="block mt-4 bg-primary text-center text-[#181818] py-1 px-4 rounded text-sm font-normal hover:bg-opacity-90 transition">
        Перейти в корзину 🛒
      </Link>
    </>
  );
};

export default CartSummary;
