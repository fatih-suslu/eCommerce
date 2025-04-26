export default function AboutHero() {
  return (
    <section className="w-full px-6 md:px-2 bg-white">
      {/* Sol metin*/}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-6">
        <div className="space-y-6 text-center md:text-left md:w-1/3">
          <p className="text-base font-bold">ABOUT COMPANY</p>
          <h2 className="text-6xl font-bold">ABOUT US</h2>
          <p className="text-gray-500 text-xl max-w-xs mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-400 text-white px-5 py-3 rounded-md hover:bg-blue-600 transition">
              Get Quote Now
            </button>
          </div>
        </div>

        {/* Sağ görsel*/}
        <div className="w-full md:w-2/3 flex justify-end mt-6 md:mt-0 md:pr-0">
          <div className="w-full flex justify-end">
            <img
              src="/assets/aboutHero.png"
              alt="AboutHero.png"
              className="w-full md:w-11/12 lg:w-10/12 h-auto object-cover ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
