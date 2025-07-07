import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "@/components/common";
import { allProducts, type Product } from "@/data/products";
import {
  BackTo,
  ProductSlider,
  ProductDetails,
  ProductNotification,
} from "@/components/shop/productPage";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const [notification, setNotification] = useState<{
    variant: "success" | "error";
    title: string;
    description?: string;
  } | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const product: Product | undefined = allProducts.find((p) => p.slug === id);
  if (!product) {
    return (
      <section className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-text-secondary min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-normal">Товар не найден</h1>
      </section>
    );
  }

  const handlePrev = () => setSlideIndex((slideIndex + 2) % 3);
  const handleNext = () => setSlideIndex((slideIndex + 1) % 3);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTouchStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const diff = e.clientX - touchStartX;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
  };

  return (
    <>
      <BackTo />

      <section className="bg-background body-font overflow-hidden min-h-[calc(100vh-4rem)] flex items-center relative">
        {notification && (
          <ProductNotification
            variant={notification.variant}
            title={notification.title}
            description={notification.description}
            onClose={() => setNotification(null)}
            onGoToCart={() => {
              navigate("/cart");
              setNotification(null);
            }}
            onContinueShopping={() => {
              navigate("/catalog");
              setNotification(null);
            }}
            showActions={notification.variant === "success"}
          />
        )}

        <div className="max-w-screen-lg mx-auto px-4 py-4 sm:px-6 sm:py-8 lg:py-3 xl:mb-20 w-full">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div
              className="w-full lg:w-1/2 flex justify-center"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}>
              <ProductSlider
                image={product.image}
                name={product.name}
                slides={3}
              />
            </div>

            <div className="w-full lg:w-1/2 flex">
              <ProductDetails
                product={product}
                setNotification={setNotification}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
