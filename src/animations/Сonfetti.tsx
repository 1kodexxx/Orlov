import { useEffect } from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
  trigger: boolean;
  x: number;
  y: number;
  onComplete?: () => void;
}

const Confetti: React.FC<ConfettiProps> = ({ trigger, x, y, onComplete }) => {
  useEffect(() => {
    if (trigger) {
      confetti({
        particleCount: 120,
        spread: 80,
        startVelocity: 40,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      });

      const timeout = setTimeout(() => {
        onComplete?.();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [trigger, x, y, onComplete]);

  return null;
};

export default Confetti;
