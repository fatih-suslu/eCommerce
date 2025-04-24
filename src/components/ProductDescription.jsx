import { ChevronRight } from "lucide-react";

export default function ProductDescription() {
  return (
    <section className="p-6">
      {/* Bölümler */}
      <div className="flex  text-gray-500 mb-8 justify-center lg:justify-start space-x-2 whitespace-nowrap ">
        <h6 className="hover:text-gray-800 hover:underline cursor-pointer">
          Description
        </h6>
        <h6 className="hover:text-gray-800 hover:underline cursor-pointer">
          Additional Information
        </h6>
        <h6 className="hover:text-gray-800 hover:underline cursor-pointer">
          Reviews (0)
        </h6>
      </div>

      {/* Görsel + Yazı*/}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Görsel */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="/assets/pdCover.png"
            alt="Product"
            className="w-full max-w-sm h-auto rounded-xl shadow-lg shadow-black/50"
          />
        </div>

        {/* Yazılar */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl text-left font-bold text-gray-800 my-6">
              the quick fox jumps over
            </h2>
            <div className="text-left text-gray-500 font-semibold space-y-4">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="space-y-4 my-6">
            <h2 className="text-2xl text-left font-bold text-gray-800">
              the quick fox jumps over
            </h2>
            <div className="text-left text-gray-500  space-y-4 font-bold">
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="space-y-4 my-6">
            <h2 className="text-2xl text-left font-bold text-gray-800">
              the quick fox jumps over
            </h2>
            <div className="text-left text-gray-500  space-y-4 font-bold">
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="flex gap-2">
                <ChevronRight size={24} />
                the quick fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
