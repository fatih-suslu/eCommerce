const Card = ({
  title,
  description,
  price,
  discountPrice,
  colors,
  imageUrl,
}) => {
  return (
    <div
      className={`bg-white ${
        imageUrl ? "shadow-md" : ""
      } overflow-hidden flex flex-col items-center w-full max-w-sm`}
    >
      <img
        src={imageUrl || "https://via.placeholder.com/150?text=Default+Image"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-center items-center mb-4">
          <span className="text-red-500 font-bold mr-2">${discountPrice}</span>
          <span className="text-gray-500 line-through">${price}</span>
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
