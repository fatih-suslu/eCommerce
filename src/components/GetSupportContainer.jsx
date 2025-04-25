import { MapPin, Phone, Send, Redo } from "lucide-react";

export default function GetSupportContainer() {
  return (
    <div className="bg-gray-100">
      <section className="text-center space-y-4 mx-6 md:mx-12 py-16 font-bold">
        <h6 className="">VISIT OUR OFFICE</h6>
        <h2 className="text-5xl">
          We help small businesses <br className="hidden md:block" /> with big
          ideas
        </h2>
      </section>
      <section className="flex flex-col justify-center mb-16 md:flex-row md:gap-0 gap-8 px-6 md:px-12 w-full">
        {/* Telefon */}
        <div className="flex flex-col justify-center items-center p-8 md:p-16 space-y-2 bg-white font-semibold min-h-[360px] w-full md:basis-1/3">
          <Phone className="text-blue-400 mb-4" size={70} />
          <h6>georgia.young@example.com</h6>
          <h6>georgia.young@ple.com</h6>
          <h5>Get Support</h5>
          <button className="font-semibold border md:rounded-full border-blue-500 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>

        {/* Lokasyon */}
        <div className="flex flex-col justify-center items-center p-8 md:p-16 space-y-2 bg-gray-800 text-white font-semibold min-h-[360px] w-full md:basis-1/3">
          <MapPin className="text-gray-800 fill-blue-400 mb-4" size={70} />
          <h6>georgia.young@example.com</h6>
          <h6>georgia.young@ple.com</h6>
          <h5>Get Support</h5>
          <button className="font-semibold border md:rounded-full border-blue-500 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>

        {/* Mesaj */}
        <div className="flex flex-col justify-center items-center p-8 md:p-16 space-y-2 bg-white font-semibold min-h-[360px] w-full md:basis-1/3">
          <Send className="text-blue-400 mb-4" size={70} />
          <h6>georgia.young@example.com</h6>
          <h6>georgia.young@ple.com</h6>
          <h5>Get Support</h5>
          <button className="font-semibold border md:rounded-full border-blue-500 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center text-center px-6 py-20 font-bold bg-white">
        <div className="mb-4">
          <Redo size={80} className=" text-blue-500 rotate-90" />
        </div>
        <h6 className="text-xl text-gray-500 mb-4">
          WE CAN'T WAIT TO MEET YOU
        </h6>
        <h2 className="text-4xl md:text-6xl text-gray-800 mb-8">Let's Talk</h2>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ">
          Try it free now
        </button>
      </section>
    </div>
  );
}
