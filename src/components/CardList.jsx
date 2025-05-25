import Card from "./Card";
import cardData from "../data/data.json";

const cards = cardData.cardData;

const CardList = ({ view }) => {
  return (
    <div
      className={`p-6 grid ${
        view === "grid"
          ? "grid-cols-1 md:grid-cols-4 gap-6"
          : "flex flex-col gap-4"
      }`}
    >
      {cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          discountPrice={item.discountPrice}
          colors={item.colors}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
