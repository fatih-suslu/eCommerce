import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Trial() {
  return (
    <section className="w-full py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Start your <br className="md:hidden" /> 14 days free trial
      </h2>
      <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>

      <button className="mt-6 bg-blue-400 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600 transition">
        Try it free now
      </button>

      <div className="flex justify-center items-center gap-6 mt-8 text-xl ">
        <a href="#">
          <Twitter className="w-6 h-6 fill-blue-500 text-blue-500 hover:text-black hover:fill-black" />
        </a>
        <a href="#">
          <Facebook className="w-6 h-6 text-white bg-blue-800 fill-blue-800 hover:text-black " />
        </a>
        <a href="#">
          <Instagram className="w-6 h-6 text-blue-500 hover:text-black" />
        </a>
        <a href="#">
          <Linkedin className="w-6 h-6 bg-blue-600 text-white hover:text-black " />
        </a>
      </div>
    </section>
  );
}
