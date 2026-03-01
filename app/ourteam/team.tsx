"use client";

import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shianne Wood",
    role: "President",
    image: "/images/shai_team.png",
  },
  {
    id: 2,
    name: "Vianna Hyunh",
    role: "Vice President",
    image: "/images/vianna_team.png",
  },
  {
    id: 3,
    name: "Adema Berdenova",
    role: "Secretary",
    image: "/images/placeholder.jpg",
  },
  {
    id: 4,
    name: "Ayla Tristao",
    role: "Treasurer",
    image: "/images/placeholder.jpg",
  },
  {
    id: 5,
    name: "Madeleine Haddad",
    role: "Sponsorship Chair",
    image: "/images/placeholder.jpg",
  },
  {
    id: 6,
    name: "Shealyn Rodriguez",
    role: "Social Media",
    image: "/images/shea_team.webp",
  },
  {
    id: 7,
    name: "Sophia Vignali",
    role: "Event Coordinator",
    image: "/images/sophia_team.webp",
  },
  {
    id: 8,
    name: "Michelle John",
    role: "Event Coordinator",
    image: "/images/michelle_team.webp",
  },
  {
    id: 9,
    name: "Britni Barcelo",
    role: "Workshop Director",
    image: "/images/britni_team.webp",
  },
  {
    id: 10,
    name: "Simone Chrastek",
    role: "Workshop Director",
    image: "/images/simone_team.webp",
  },
  {
    id: 11,
    name: "Adriana Lee-Fook",
    role: "Workshop Director",
    image: "/images/adriana_team.png",
  },
  {
    id: 12,
    name: "Reese Odvina",
    role: "Graphic Designer",
    image: "/images/reese_team.webp",
  },
  {
    id: 13,
    name: "Tanisha Sahay",
    role: "Graphic Designer",
    image: "/images/tanishqa_team.webp",
  },
  {
    id: 14,
    name: "Isabella Austin",
    role: "Graphic Designer",
    image: "/images/izzy_team.webp",
  },
];

export default function Team() {
  // Separate leadership from other members
  const leadership = teamMembers.filter(
    (m) => m.role === "President" || m.role === "Vice President"
  );

  const others = teamMembers.filter(
    (m) => m.role !== "President" && m.role !== "Vice President"
  );

  // Reusable card component
  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="flex flex-col items-center">
      <div className="group relative w-80 h-80 mb-4 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="320px"
        />
      </div>

      <h3 className="text-xl font-bold text-gwc-lightblue text-center mb-1">
        {member.name}
      </h3>

      <p className="text-xl font-bold text-black text-center">
        {member.role}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff_0%,#eef4fc_12.5%,#BCD1ED_25%,#eef4fc_37.5%,#ffffff_50%,#eef4fc_62.5%,#BCD1ED_75%,#eef4fc_87.5%,#ffffff_100%)] py-16 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gwc-darkblue mb-4">
            '25–26 board
          </h1>
        </div>

        {/* President and Vice President */}
        <div className="flex justify-center gap-12 flex-wrap mb-16">
          {leadership.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Other Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {others.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </div>
  );
}