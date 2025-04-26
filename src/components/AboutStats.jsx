export default function AboutStatsSection() {
  return (
    <section className="w-full px-6 md:px-20 py-20">
      <p className="text-red-600 text-lg font-medium mb-2 max-w-6xl mx-auto text-center px-6 md:text-left">
        Problems trying
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-6 px-6 mb-16">
        <h3 className="text-xl md:text-3xl font-bold text-center md:text-left">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h3>
        <div className="md:w-1/2 text-gray-500 font-semibold text-lg text-center md:text-left">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </div>
      </div>

      {/* İstatistikler */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-8">
        <div className="flex-1 w-full">
          <h2 className="text-6xl md:text-7xl font-bold">15K</h2>
          <p className="text-sm md:text-base font-medium text-gray-500 mt-1">
            Happy Customers
          </p>
        </div>
        <div className="flex-1 w-full">
          <h2 className="text-6xl md:text-7xl font-bold">150K</h2>
          <p className="text-sm md:text-base font-medium text-gray-500 mt-1">
            Monthly Visitors
          </p>
        </div>
        <div className="flex-1 w-full">
          <h2 className="text-6xl md:text-7xl font-bold">15</h2>
          <p className="text-sm md:text-base font-medium text-gray-500 mt-1">
            Countries Worldwide
          </p>
        </div>
        <div className="flex-1 w-full">
          <h2 className="text-6xl md:text-7xl font-bold">100+</h2>
          <p className="text-sm md:text-base font-medium text-gray-500 mt-1">
            Top Partners
          </p>
        </div>
      </div>
    </section>
  );
}
