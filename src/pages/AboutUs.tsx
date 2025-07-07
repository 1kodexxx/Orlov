import {
  PromoSection,
  Features,
  TopProducts,
  GallerySection,
} from "@/components/sections/aboutUsPage";
import { allProducts } from "@/data/products";
import PromoSectionImage1 from "@/assets/PromoSection1.png";
import PromoSectionImage2 from "@/assets/PromoSection2.png";

const AboutUs = () => {
  return (
    <>
      <PromoSection
        title={
          <>
            ORLOV <br /> MADE IN RUSSIA
          </>
        }
        description="Бренд товаров&nbsp;и&nbsp;аксессуаров под названием “ORLOV made&nbsp;in&nbsp;RUSSIA” направлен на слияние премиального качества&nbsp;и&nbsp;государственного стиля. Наша цель&nbsp;— возродить любовь&nbsp;к&nbsp;нашей стране, сделать модной российскую продукцию. Мы готовы доказать миру, что нам есть чем&nbsp;гордиться! Через наши товары мы транслируем философию, которая уходит&nbsp;в&nbsp;историю российского дворянства. Мы сохраняем традиции&nbsp;и&nbsp;государственность. ORLOV&nbsp;— больше, чем&nbsp;бренд."
        buttonInitialText="Начать сейчас 🛍️"
        buttonHoverText="В магазин! ✨"
        buttonLink="/catalog"
        imageUrl1={PromoSectionImage2}
        imageUrl2={PromoSectionImage1}
      />
      <Features />
      <TopProducts products={allProducts} />
      <GallerySection
        title="Галерея стиля и безупречного качества"
        description="Оцените гармонию формы, цвета и деталей. Здесь вы найдете вдохновение, которое отражает премиальность и индивидуальность каждого изделия."
        images={[
          "https://i.postimg.cc/hGS2rKyt/case2.webp",
          "https://i.postimg.cc/hGS2rKyt/case2.webp",
          "https://i.postimg.cc/tRfmjQTB/case1.webp",
          "https://i.postimg.cc/tRfmjQTB/case1.webp",
          "https://i.postimg.cc/hGS2rKyt/case2.webp",
          "https://i.postimg.cc/hGS2rKyt/case2.webp",
        ]}
      />
    </>
  );
};

export default AboutUs;
