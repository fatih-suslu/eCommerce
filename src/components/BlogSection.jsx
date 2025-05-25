import BlogCard from "./BlogCard";

export default function BlogSection() {
  const blogDate = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2025",
      comments: 10,
      imageUrl: "/assets/blogimg1.png",
    },
    {
      id: 2,
      title: "Loudest à la Madison #2 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "23 April 2025",
      comments: 15,
      imageUrl: "/assets/blogimg2.png",
    },
    {
      id: 3,
      title: "Loudest à la Madison #3 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "24 April 2025",
      comments: 8,
      imageUrl: "/assets/blogimg3.png",
    },
  ];

  return (
    <section className="m-6">
      <div className="flex flex-col items-center my-10">
        <h5 className="tracking-wide mb-6v font-bold text-blue-400">
          Practice Advice
        </h5>
        <h1 className="text-5xl md:text-5xl font-bold mb-2 text-center ">
          Featured Products
        </h1>
        <h4 className="text-xl my-2 text-gray-500 font-semibold ">
          Problems trying to resolve the <br /> conflict between the two major
        </h4>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {blogDate.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            comments={blog.comments}
            imageUrl={blog.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
