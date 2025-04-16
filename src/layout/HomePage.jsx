import Header from "./Header";
import Footer from "./Footer";
import HeroSlider from "../components/HeroSlider";
import ShopSlider from "../components/ShopSlider";
import ShopCards from "../components/ShopCards";
import CardList from "../components/CardList";
import ProductContainer from "../components/ProductContainer";
import BlogCard from "../components/BlogCard";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <ShopCards />
      <CardList />
      <ShopSlider />
      <ProductContainer />
      <BlogCard />
      <Footer />
    </div>
  );
}
