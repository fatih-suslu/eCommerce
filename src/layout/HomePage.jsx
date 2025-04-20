import Header from "./Header";
import Footer from "./Footer";
import HeroSlider from "../components/HeroSlider";
import ShopSlider from "../components/ShopSlider";
import ShopCards from "../components/ShopCards";
import ProductContainer from "../components/ProductContainer";
import BlogCard from "../components/BlogCard";
import ProductCards from "../components/ProductCards";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <ShopCards />
      <ProductCards />
      <ShopSlider />
      <ProductContainer />
      <BlogCard />
      <Footer />
    </div>
  );
}
