import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";
import { Loader } from "@/components/common";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProductsListProps {
  products: Product[];
  itemsPerPage?: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const AnimatedProductCard: React.FC<{ product: Product; index: number }> = ({
  product,
  index,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      variants={variants}
      custom={index}
      className="origin-center">
      <ProductCard
        slug={product.slug}
        name={product.name}
        image={product.image}
        price={product.price}
      />
    </motion.li>
  );
};

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  itemsPerPage = 12,
  currentPage,
  setCurrentPage,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const showPagination = totalPages > 1;

  // Сброс страницы, если currentPage выходит за пределы
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages, setCurrentPage]);

  // Показ Loader при смене продуктов или страницы
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [products, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <section className="text-text-secondary bg-background body-font py-0">
      <div className="max-w-screen-xl mx-auto px-4 pb-32 min-h-[70vh] flex flex-col justify-center">
        <div className="min-h-[50vh] flex flex-col justify-center items-center">
          {isLoading ? (
            <Loader />
          ) : currentProducts.length > 0 ? (
            <ul className="mt-4 grid gap-y-10 gap-x-4 sm:gap-x-[68.5px] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
              {currentProducts.map((product, index) => (
                <AnimatedProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                />
              ))}
            </ul>
          ) : (
            <div className="text-center text-lg text-text-secondary">
              Ничего не найдено
            </div>
          )}
        </div>

        {!isLoading && showPagination && (
          <ol className="mt-8 flex justify-center gap-2 text-xs font-medium">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-secondary hover:bg-secondary hover:text-background transition disabled:opacity-50">
                ‹
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-sm border ${
                    page === currentPage
                      ? "bg-[#EFE393] text-black border-[#EFE393]"
                      : "border-secondary hover:bg-secondary hover:text-background transition"
                  }`}>
                  {page}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-secondary hover:bg-secondary hover:text-background transition disabled:opacity-50">
                ›
              </button>
            </li>
          </ol>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
