import { Facebook, Twitter, Instagram } from "lucide-react";

export default function TeamMemberCard({ image, name, profession }) {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <img src={image} alt={name} className="w-80 h-72 object-cover" />
      <div className="font-bold text-lg">{name}</div>
      <div className="font-bold text-sm text-gray-500">{profession}</div>
      <div className="flex gap-4 text-blue-500 mt-2">
        <a href="#">
          <Facebook className="w-6 h-6 border-blue-500 border-2 rounded-full hover:text-black hover:border-black" />
        </a>
        <a href="#">
          <Instagram className="w-6 h-6 hover:text-black" />
        </a>
        <a href="#">
          <Twitter className="w-6 h-6 fill-blue-500 hover:text-black hover:fill-black" />
        </a>
      </div>
    </div>
  );
}
