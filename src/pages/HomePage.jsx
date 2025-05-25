import Header from "../layout/Header";
import Footer from "../layout/Footer";
import HeroSlider from "../components/HeroSlider";
import ShopSlider from "../components/ShopSlider";
import CategoryGrid from "../components/CategoryGrid";
import ProductContainer from "../components/ProductContainer";
import BlogSection from "../components/BlogSection";
import ProductCards from "../components/ProductCards";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <CategoryGrid />
      <ProductCards />
      <ShopSlider />
      <ProductContainer />
      <BlogSection />
      <Footer />
    </div>
  );
}
