import { Link } from "react-router-dom";

export default function CategoryGrid() {
  return (
    <div className="bg-gray-50 space-y-8">
      <section className="text-center pt-10 bg-gray-50">
        <h2 className="text-2xl font-bold tracking-wide py-4">EDITOR'S PICK</h2>
        <p className=" text-gray-600">
          Problems trying resolve <br /> the conflict between
        </p>
      </section>

      {/*Grid*/}
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-4 bg-gray-50 w-full max-w-7xl mx-auto p-6 md:p-0">
        {/* MEN */}
        <div className="relative w-full max-h-[500px] overflow-hidden group">
          <img
            src="/assets/bestSeller1.png"
            alt="Men's Fashion"
            className="w-full h-full object-cover object-top transform transition duration-300 ease-in-out group-hover:scale-125 group-hover:brightness-90"
          />
          <div className="absolute bottom-6 left-6">
            <Link to="/shop">
              <button className="bg-white py-2 px-8 font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                MEN
              </button>
            </Link>
          </div>
        </div>

        {/* WOMEN */}
        <div className="relative w-full max-h-[500px] overflow-hidden group">
          <img
            src="/assets/bestSeller2.png"
            alt="Women's Fashion"
            className="w-full h-full object-cover object-top transform transition duration-300 ease-in-out group-hover:scale-125 group-hover:brightness-90"
          />
          <div className="absolute bottom-6 left-6">
            <Link to="/shop">
              <button className="bg-white py-2 px-6 font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                WOMEN
              </button>
            </Link>
          </div>
        </div>

        {/* KIDS & ACCESSORIES */}
        <div className="grid grid-rows-2 gap-4 max-h-[500px]">
          {/* KIDS */}
          <div className="relative w-full h-[242px] overflow-hidden group">
            <img
              src="/assets/bestSeller3.png"
              alt="Kids' Fashion"
              className="w-full h-full object-cover object-top transform transition duration-300 ease-in-out group-hover:scale-125 group-hover:brightness-90"
            />
            <div className="absolute bottom-6 left-6">
              <Link to="/shop">
                <button className="bg-white py-2 px-6 font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                  KIDS
                </button>
              </Link>
            </div>
          </div>

          {/* ACCESSORIES */}
          <div className="relative w-full h-[242px] overflow-hidden group">
            <img
              src="/assets/bestSeller4.png"
              alt="Accessories"
              className="w-full h-full object-cover object-top transform transition duration-300 ease-in-out group-hover:scale-125 group-hover:brightness-90"
            />
            <div className="absolute bottom-6 left-6">
              <Link to="/shop">
                <button className="bg-white py-2 px-4 font-semibold text-sm hover:bg-blue-500 hover:text-white transition-colors">
                  ACCESSORIES
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
