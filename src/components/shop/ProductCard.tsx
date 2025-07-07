import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  slug: string;
  name: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  name,
  image,
  price,
}) => {
  const navigate = useNavigate();
  const handleCardClick = () => navigate(`/catalog/${slug}`);

  return (
    <div
      className="product-card flex flex-col items-center max-w-[260px] w-full cursor-pointer"
      onClick={handleCardClick}>
      <div className="overflow-hidden bg-background-paper rounded-lg">
        <img src={image} alt={name} className="object-cover w-full" />
      </div>
      <div className="mt-2 p-2 text-center">
        <h3
          className="text-sm text-text-secondary hover:underline overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            wordBreak: "break-word",
            textOverflow: "ellipsis",
          }}>
          {name}
        </h3>
        <p className="mt-1 text-base font-semibold text-text-primary">
          {price.toLocaleString()} ₽
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
