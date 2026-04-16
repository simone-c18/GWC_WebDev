"use client";

import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shianne Wood",
    role: "President",
    image: "/images/shai_team.png",
    linkedin: "https://www.linkedin.com/in/shianne-wood/",
  },
  {
    id: 2,
    name: "Vianna Huynh",
    role: "Vice President",
    image: "/images/vianna_team.png",
    linkedin: "https://www.linkedin.com/in/viannahuynh/",
  },
  {
    id: 3,
    name: "Adema Berdenova",
    role: "Secretary",
    image: "/images/adema_team.png",
    linkedin: "https://www.linkedin.com/in/adema-berdenova/",
  },
  {
    id: 4,
    name: "Ayla Tristao",
    role: "Treasurer",
    image: "/images/ayla_team.png",
    linkedin: "https://www.linkedin.com/in/ayla-tristao/",
  },
  {
    id: 5,
    name: "Madeleine Haddad",
    role: "Sponsorship Chair",
    image: "/images/madeleine_team.png",
    linkedin: "https://www.linkedin.com/in/madeleine-ghaddad/",
  },
  {
    id: 6,
    name: "Shealyn Rodriguez",
    role: "Social Media",
    image: "/images/shea_team.webp",
    linkedin: "https://www.linkedin.com/in/shealyn-rodriguez-a3965b294/",
  },
  {
    id: 7,
    name: "Sophia Vignali",
    role: "Event Coordinator",
    image: "/images/sophia_team.webp",
    linkedin: "https://www.linkedin.com/in/sophia-vignali-4081ab325/",
  },
  {
    id: 8,
    name: "Michelle John",
    role: "Event Coordinator",
    image: "/images/michelle_team.webp",
    linkedin: "https://www.linkedin.com/in/michelle-john-2b2667392/",
  },
  {
    id: 9,
    name: "Britni Barcelo",
    role: "Workshop Director",
    image: "/images/britni_team.webp",
    linkedin: "https://www.linkedin.com/in/britnibarcelo/",
  },
  {
    id: 10,
    name: "Simone Chrastek",
    role: "Workshop Director",
    image: "/images/simone_team.webp",
    linkedin: "https://www.linkedin.com/in/simone-chrastek/",
  },
  {
    id: 11,
    name: "Adriana Lee-Fook",
    role: "Workshop Director",
    image: "/images/adriana_team.jpg",
    linkedin: "https://www.linkedin.com/in/adriana-lee-fook/",
  },
  {
    id: 12,
    name: "Reese Odvina",
    role: "Graphic Designer",
    image: "/images/reese_team.webp",
    linkedin: "https://www.linkedin.com/in/reese-odvina/",
  },
  {
    id: 13,
    name: "Tanishqa Sahay",
    role: "Graphic Designer",
    image: "/images/tanishqa_team.webp",
    linkedin: "https://www.linkedin.com/in/tanishqa-sahay/",
  },
  {
    id: 14,
    name: "Isabella Austin",
    role: "Graphic Designer",
    image: "/images/izzy_team.webp",
    linkedin: "https://www.linkedin.com/in/isabellaaustin/",
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

  const getLinkedInUrl = (member: TeamMember) =>
    member.linkedin ??
    `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(
      member.name
    )}`;

  
  const TeamCard = ({ member }: { member: TeamMember }) => (
    <a
      href={getLinkedInUrl(member)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name} LinkedIn profile`}
      className="flex flex-col items-center"
    >
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
    </a>
  );

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gwc-darkblue mb-4 mt-10">
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