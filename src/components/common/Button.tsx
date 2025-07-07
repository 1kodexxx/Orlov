import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ButtonProps {
  initialText: string;
  hoverText: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "light" | "dark";
}

const Button: React.FC<ButtonProps> = ({
  initialText,
  hoverText,
  to,
  onClick,
  variant = "light",
}) => {
  const isDark = variant === "dark";
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  const buttonElement = (
    <button
      type="button"
      onClick={handleClick}
      className={`cursor-pointer px-6 py-3 rounded-xl font-normal group transition-all duration-300 ${
        isDark ? "bg-[#181818] text-[#EFE393]" : "bg-[#EFE393] text-[#181818]"
      }`}>
      <div className="relative overflow-hidden">
        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {initialText}
        </p>
        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {hoverText}
        </p>
      </div>
    </button>
  );

  // Если передан `to`, оборачиваем в Link
  if (to) {
    return <Link to={to}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;
