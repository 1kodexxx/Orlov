import { Routes, Route } from "react-router-dom";
import { ScrollToTop, ScrollToTopButton, Loader } from "@/components/common/";
import { Footer, CatalogLayout } from "@/components/layout";
import { NavBar } from "@/components/layout/navBar";

import { Suspense, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Catalog = lazy(() => import("@/pages/Catalog"));
const CartPage = lazy(() => import("@/pages/CartPage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Contacts = lazy(() => import("@/pages/Contacts"));
const Delivery = lazy(() => import("@/pages/Delivery"));
const Reviews = lazy(() => import("@/pages/Reviews"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans flex flex-col">
      <NavBar />
      <main className="flex-1">
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="min-h-[calc(100vh-3rem)] flex items-center justify-center">
              <Loader />
            </div>
          }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Каталог */}
            <Route path="/catalog" element={<CatalogLayout />}>
              <Route index element={<Catalog />} />
              <Route path="/catalog/:id" element={<ProductPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
