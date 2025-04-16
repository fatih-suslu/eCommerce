import Card from "./Card";
import img1 from "../assets/productCover1.png";
import img2 from "../assets/productCover2.png";
import img3 from "../assets/productCover3.png";

const cardData = [
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "yellow"],
    imageUrl: img1,
  },
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "yellow"],
    imageUrl: img2,
  },
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "yellow"],
    imageUrl: img3,
  },
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "yellow"],
    imageUrl: img1,
  },
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "black"],
    imageUrl: img2,
  },
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "black"],
    imageUrl: img3,
  },
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "black"],
    imageUrl: img1,
  },
  {
    title: "Graphic Design",
    description: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    colors: ["blue", "green", "orange", "black"],
    imageUrl: img2,
  },
];

const CardList = () => {
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
      <div className="flex flex-wrap gap-6 p-6 md:p-12 justify-center md:justify-between">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            price={data.price}
            discountPrice={data.discountPrice}
            colors={data.colors}
            imageUrl={data.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
