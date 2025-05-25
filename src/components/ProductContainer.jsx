export default function ProductContainer() {
  return (
    <div className="my-10 md:flex md:flex-row-reverse justify-evenly">
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h5 className="tracking-wide mb-4 font-bold text-gray-400">
          SUMMER 2020
        </h5>
        <h1 className="text-4xl md:text-5xl font-bold mb-2  ">
          Part of the Neural Universe
        </h1>
        <h4 className=" my-2 text-gray-400 font-semibold ">
          We know how large objects will act,<br></br> but things on a small
          scale.
        </h4>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button className="bg-green-500 text-white font-bold px-6 md:px-10 py-3 text-lg rounded hover:bg-green-600 transition duration-150">
            BUY NOW
          </button>
          <button className="border-green-500 border-2 text-green-500 font-bold px-6 py-3 text-lg rounded hover:bg-green-600 hover:text-white transition duration-150">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/assets/heroCover3.png"
          alt="resim"
          className="w-full md:max-w-[600px] "
        />
      </div>
    </div>
  );
}
