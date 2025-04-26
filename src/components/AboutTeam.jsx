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
];

export default function AboutTeam() {
  return (
    <section className="max-w-7xl mx-auto px-6 m-16">
      <div className="py-16 text-center space-y-10">
        <h2 className="text-5xl md:text-6xl font-bold">Meet Our Team</h2>
        <p className="mt-4 text-xl text-gray-500 ">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
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
