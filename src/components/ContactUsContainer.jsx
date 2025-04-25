import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactUsContainer() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 py-12 gap-8">
      {/* Yazılar */}
      <div className="flex-1 md:text-left text-center">
        <h5 className="font-bold">CONTACT US</h5>
        <h1 className="text-5xl font-bold my-6">Get in touch today!</h1>
        <p className="text-xl text-gray-500 my-8 font-medium">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <div className="space-y-3 mb-8">
          <p className="font-bold text-2xl">Phone: +451 215 215</p>
          <p className="font-bold text-2xl">Fax: +451 215 215</p>
        </div>
        <div className="flex gap-6 items-center justify-center md:justify-start">
          <Twitter
            size={30}
            className="cursor-pointer fill-black hover:fill-blue-500"
          />
          <Facebook
            size={30}
            className="cursor-pointer fill-white text-white p-1 bg-black hover:bg-blue-500"
          />
          <Instagram size={30} className="cursor-pointer hover:text-blue-500" />
          <Linkedin
            size={30}
            className="cursor-pointer fill-white text-white p-1 bg-black hover:bg-blue-500"
          />
        </div>
      </div>

      {/* Görsel */}
      <div className="flex-1 flex justify-end items-start">
        <img
          src="/assets/contactHero.png"
          alt="Contact Hero"
          className="w-full max-w-xl h-auto object-cover"
        />
      </div>
    </section>
  );
}
