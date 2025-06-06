const Card = ({
  title,
  description,
  price,
  discountPrice,
  colors,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col flex-wrap mx-2 my-2 justify-center items-center transform transition-transform duration-300 hover:scale-105 shadow-md">
      <img src={imageUrl} alt={title} className="pt-4" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4 font-bold ">{description}</p>
        <div className="flex justify-center items-center mb-4">
          <span className="text-gray-400 font-bold mr-2">${discountPrice}</span>
          <span className="text-green-600 font-bold ">${price}</span>
        </div>
        <div className="flex justify-center space-x-2">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
