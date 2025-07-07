import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BackTo() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-16 mt-4 lg:mt-1">
      <button
        onClick={() => navigate(-1)}
        className="text-primary hover:underline flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Назад
      </button>
    </motion.div>
  );
}
