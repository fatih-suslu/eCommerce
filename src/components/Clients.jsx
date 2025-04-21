import clientsData from "../data/data.json";

const clients = clientsData.clientsData;

export default function Clients() {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="flex flex-wrap justify-evenly items-center">
        {clients.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-center items-center p-8  "
          >
            <img
              src={item.imageURL}
              alt={`Client ${index + 1}`}
              className="w-full max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
