export default function AboutWork() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* Mavi Alan */}
      <div className="bg-blue-600 text-white flex-1 flex flex-col justify-center items-center md:items-start lg:items-center px-6 py-16 lg:p-20">
        <div className="w-full max-w-xl">
          <h5 className="tracking-wide mb-2 text-lg md:text-xl text-center md:text-left lg:text-left">
            WORK WITH US
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left lg:text-left">
            Now Let's grow Yours
          </h2>
          <p className="mb-6 text-base md:text-lg leading-relaxed text-center md:text-left lg:text-left">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <div className="flex justify-center md:justify-start lg:justify-start">
            <button className="border border-white px-10 py-4 text-base md:text-lg font-semibold rounded hover:bg-white hover:text-blue-600 transition">
              Button
            </button>
          </div>
        </div>
      </div>

      {/* Görsel */}
      <div className="hidden md:block md:w-1/2 lg:w-1/2 xl:w-1/3">
        <img
          src="/assets/aboutBottom.png"
          alt="AboutBottom"
          className="w-full h-full object-cover min-h-[400px] xl:max-h-[600px] xl:object-fill"
        />
      </div>
    </section>
  );
}
