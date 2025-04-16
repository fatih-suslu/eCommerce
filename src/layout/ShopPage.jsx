import { useState } from "react";
import MobileShopCards from "../components/MobileShopCards";
import ShopControls from "../components/ShopControls";
import ShopPageHeader from "../components/ShopPageHeader";
import Header from "./Header";
import CardList from "../components/CardList";

export default function ShopPage() {
  const [view, setView] = useState("grid");

  return (
    <>
      <Header />
      <ShopPageHeader />
      <MobileShopCards />
      <ShopControls setView={setView} />
      <CardList view={view} />
    </>
  );
}
