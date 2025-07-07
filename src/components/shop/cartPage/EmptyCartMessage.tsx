import { motion } from "framer-motion";

export default function EmptyCartMessage() {
  return (
    <motion.div
      className="flex justify-center items-center h-[50vh]"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        },
      }}>
      <p className="text-xl text-text-secondary">Ваша корзина пуста</p>
    </motion.div>
  );
}
