import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { allProducts } from "@/data/products";
import { ProductsList } from "@/components/shop";
import { ProductFilterPanel } from "@/components/shop/filters";
import { categoryLabelToSlug, categorySlugToLabel } from "@/utils/categories";

const parsePrice = (price: number | string) => {
  if (typeof price === "number") return price;
  return parseInt(price.replace(/\s/g, "").replace("₽", ""));
};

const Catalog = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Читаем slug из URL → мапим в русскую метку
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const slug = params.get("category") || "";
    const label = categorySlugToLabel[slug] || "";
    const queryParam = params.get("query") || "";

    setSelectedCategory(label);
    setSearchQuery(queryParam);
  }, [location.search]);

  const [sortOption, setSortOption] = useState<string>("");
  const [resetSignal, setResetSignal] = useState<number>(0);
  const [selectedPopularity, setSelectedPopularity] = useState<string[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // При изменении фильтров пишем обратно в URL уже английский slug
  useEffect(() => {
    const params = new URLSearchParams();
    const slug = categoryLabelToSlug[selectedCategory] || "";
    if (slug) params.set("category", slug);
    if (searchQuery) params.set("query", searchQuery);
    navigate(`/catalog?${params.toString()}`, { replace: true });
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    searchQuery,
    sortOption,
    selectedPopularity,
    selectedMaterial,
    selectedCollection,
    priceRange,
  ]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setResetSignal((prev) => prev + 1);
    setSelectedPopularity([]);
    setSelectedMaterial([]);
    setSelectedCollection([]);
    setPriceRange([0, Infinity]);
  };

  const filteredProducts = allProducts
    .filter((product) => {
      const matchesCategory = selectedCategory
        ? product.categories.includes(selectedCategory)
        : true;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPopularity =
        selectedPopularity.length > 0
          ? selectedPopularity.includes(product.popularity)
          : true;
      const matchesMaterial =
        selectedMaterial.length > 0
          ? selectedMaterial.includes(product.material)
          : true;
      const matchesCollection =
        selectedCollection.length > 0
          ? selectedCollection.includes(product.collection)
          : true;
      const price = parsePrice(product.price);
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      return (
        matchesCategory &&
        matchesSearch &&
        matchesPopularity &&
        matchesMaterial &&
        matchesCollection &&
        matchesPrice
      );
    })
    .sort((a, b) => {
      if (sortOption === "Title, ASC") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "Title, DESC") {
        return b.name.localeCompare(a.name);
      } else if (sortOption === "Price, ASC") {
        return parsePrice(a.price) - parsePrice(b.price);
      } else if (sortOption === "Price, DESC") {
        return parsePrice(b.price) - parsePrice(a.price);
      }
      return 0;
    });

  return (
    <>
      <ProductFilterPanel
        onCategorySelect={handleCategorySelect}
        onSearch={setSearchQuery}
        onSortChange={setSortOption}
        onPopularitySelect={setSelectedPopularity}
        onMaterialSelect={setSelectedMaterial}
        onCollectionSelect={setSelectedCollection}
        onPriceChange={setPriceRange}
        resetSignal={resetSignal}
        initialCategory={selectedCategory}
        initialQuery={searchQuery}
      />
      <ProductsList
        products={filteredProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Catalog;
