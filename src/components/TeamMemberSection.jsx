import TeamMemberCard from "./TeamMemberCard";

const teamData = [
  {
    id: 1,
    name: "Emily Clark",
    profession: "UI Designer",
    image: "/assets/team1.png",
  },
  {
    id: 2,
    name: "Sana Lee",
    profession: "Backend Developer",
    image: "/assets/team2.png",
  },
  {
    id: 3,
    name: "Ethan Brown",
    profession: "Marketing Lead",
    image: "/assets/team3.png",
  },
  {
    id: 4,
    name: "Danielle Smith",
    profession: "Mobile Developer",
    image: "/assets/team4.png",
  },
  {
    id: 5,
    name: "Olivia Jones",
    profession: "Product Manager",
    image: "/assets/team5.png",
  },
  {
    id: 6,
    name: "Sophie Kim",
    profession: "QA Engineer",
    image: "/assets/team6.png",
  },
  {
    id: 7,
    name: "Lianna Johnson",
    profession: "DevOps Engineer",
    image: "/assets/team7.png",
  },
  {
    id: 8,
    name: "Isabella Davis",
    profession: "UX Researcher",
    image: "/assets/team8.png",
  },
  {
    id: 9,
    name: "Sam Wilson",
    profession: "Full Stack Developer",
    image: "/assets/team9.png",
  },
];

export default function TeamMemberSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-20 bg-white">
      <h2 className="text-center text-4xl font-bold mb-10">Meet Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamData.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            profession={member.profession}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}
