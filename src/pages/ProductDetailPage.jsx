import ProductDetailCard from "../components/ProductDetailCard";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ShopPageHeader from "../components/ShopPageHeader";
import Clients from "../components/Clients";
import ProductDescription from "../components/ProductDescription";

export default function ProductDetailPage() {
  return (
    <section>
      <Header />
      <ShopPageHeader />
      <ProductDetailCard />
      <ProductDescription />
      <Clients />
      <Footer bgColor={true} />
    </section>
  );
}
