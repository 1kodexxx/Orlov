import React, { useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCart } from "@/context/useCart";
import {
  CartItemList,
  CartSummary,
  EmptyCartMessage,
} from "@/components/shop/cartPage";
import type { CartItem as CartItemType } from "@/data/cart";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const CartPage: React.FC = () => {
  const { cartItems } = useCart();

  const { subtotal, vat, discount, total } = useMemo(() => {
    const sub = cartItems.reduce(
      (sum: number, item: CartItemType) => sum + item.price * item.quantity,
      0
    );
    const vatAmount = parseFloat((sub * 0.1).toFixed(2));
    const discountAmount = parseFloat((sub * 0.05).toFixed(2));
    const tot = parseFloat((sub + vatAmount - discountAmount).toFixed(2));
    return {
      subtotal: sub,
      vat: vatAmount,
      discount: discountAmount,
      total: tot,
    };
  }, [cartItems]);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.section
      className="w-full min-h-[calc(100vh-4rem)] bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      <div className="max-w-screen-xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-4">
        <motion.header
          className="text-center mb-8"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            },
          }}>
          <h1 className="text-4xl font-bold text-primary">Ваша корзина</h1>
        </motion.header>

        {cartItems.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <>
            <CartItemList cartItems={cartItems} />
            <motion.div
              className="border-t border-[#CCCCCC] mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } },
              }}
            />
            <CartSummary
              refProp={ref}
              subtotal={subtotal}
              vat={vat}
              discount={discount}
              total={total}
            />
          </>
        )}
      </div>
    </motion.section>
  );
};

export default CartPage;
