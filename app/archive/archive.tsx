"use client";

import Image from "next/image";
import { BOARD_YEARS, TeamMember } from "@/app/team/teamData";

const teamMembers: TeamMember[] =
  BOARD_YEARS.find((b) => b.id === "25-26")?.members ?? [];

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
            &apos;25–26 board
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
