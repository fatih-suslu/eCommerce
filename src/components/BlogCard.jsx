import { ChevronRight } from "lucide-react";

export default function BlogCard({
  title,
  description,
  date,
  comments,
  imageUrl,
}) {
  return (
    <div className="w-[330px] h-[600px] shadow-lg">
      <div className="">
        <img src={imageUrl} alt={title} className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex gap-2 m-2">
          <h5>Google</h5>
          <h5>Trending</h5>
          <h5>New</h5>
        </div>
        <h2 className="text-xl m-2">{title}</h2>
        <h3 className="text-gray-600 text-lg m-2">{description}</h3>
        <div className="flex gap-4  mx-1 my-2 text-gray-600">
          <h5>
            <span>⏱️</span>
            {date}
          </h5>
          <h5>
            <span>📊</span>
            {comments}
          </h5>
        </div>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="m-2 text-blue-500 font-bold flex items-center hover:text-blue-700"
        >
          Learn More <ChevronRight />
        </a>
      </div>
    </div>
  );
}
