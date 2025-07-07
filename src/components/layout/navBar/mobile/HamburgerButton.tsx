import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenuButton: React.FC<Props> = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="lg:hidden text-primary text-2xl focus:outline-none relative w-6 h-8 flex items-center justify-center">
    <motion.span
      initial={false}
      animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="absolute w-6 h-1 bg-primary rounded"
    />
    <motion.span
      initial={false}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute w-6 h-1 bg-primary rounded"
    />
    <motion.span
      initial={false}
      animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
      transition={{ duration: 0.3 }}
      className="absolute w-6 h-1 bg-primary rounded"
    />
  </button>
);

export default MobileMenuButton;
