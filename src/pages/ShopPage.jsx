import { useState } from "react";
import MobileShopCards from "../components/MobileShopCards";
import ShopControls from "../components/ShopControls";
import ShopPageHeader from "../components/ShopPageHeader";
import Header from "../layout/Header";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import cardData from "../data/data.json";
import Clients from "../components/Clients";
import Footer from "../layout/Footer";

export default function ShopPage() {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 12;
  const totalPages = Math.ceil(cardData.cardData.length / cardsPerPage);

  const currentCards = cardData.cardData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <>
      <Header />
      <ShopPageHeader />
      <MobileShopCards />
      <ShopControls setView={setView} />
      <CardList view={view} cards={currentCards} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Clients />
      <Footer bgColor={true} />
    </>
  );
}
