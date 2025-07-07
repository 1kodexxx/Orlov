import { motion } from "framer-motion";
import { CartItem } from "./";
import type { CartItem as CartItemType } from "@/data/cart";

interface CartItemListProps {
  cartItems: CartItemType[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

export default function CartItemList({ cartItems }: CartItemListProps) {
  return (
    <motion.ul className="flex flex-col" variants={containerVariants}>
      {cartItems.map((item) => (
        <CartItem
          key={`${item.slug}-${item.selectedColor}-${item.selectedModel}`}
          item={item}
        />
      ))}
    </motion.ul>
  );
}
