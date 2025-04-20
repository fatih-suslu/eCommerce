import CardList from "./CardList";

export default function ProductCards() {
  return (
    <>
      <section className="text-center my-10">
        <p className="text-gray-500 text-xl font-semibold ">
          Featured Products
        </p>
        <h2 className="text-2xl font-bold tracking-wide my-4">
          BESTSELLER
          <br /> PRODUCTS
        </h2>
        <p className=" text-gray-500">
          Problems trying resolve <br /> the conflict between
        </p>
      </section>
      <CardList view={"grid"} />
    </>
  );
}
