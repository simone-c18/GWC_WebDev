"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { BOARD_YEARS, TeamMember } from "./teamData";

export default function Team() {
  const [selectedYearId, setSelectedYearId] = useState<string>("26-27");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentBoard =
    BOARD_YEARS.find((b) => b.id === selectedYearId) ?? BOARD_YEARS[0];

  // Separate leadership from other members
  const leadership = currentBoard.members.filter(
    (m) => m.role === "President" || m.role === "Vice President"
  );

  const others = currentBoard.members.filter(
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
      className="flex flex-col items-center group"
    >
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 mb-4 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out group-hover:scale-105 cursor-pointer bg-blue-50/50">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 288px, 320px"
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
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 mt-6">
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold text-gwc-darkblue">
              meet our team
            </h1>

            {/* Year Dropdown Component */}
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 hover:bg-blue-200/80 text-gwc-darkblue border border-gwc-lightblue/25 text-lg md:text-xl font-semibold shadow-xs transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-gwc-lightblue/50"
              >
                <span>{currentBoard.label}</span>
                <IoChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  role="listbox"
                  className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 top-full mt-2 w-36 overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-black/10 py-1.5 z-40 transition-all animate-in fade-in zoom-in-95 duration-150"
                >
                  {BOARD_YEARS.map((year) => {
                    const isSelected = year.id === selectedYearId;
                    return (
                      <button
                        key={year.id}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setSelectedYearId(year.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-base transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-gwc-lightblue/15 text-gwc-darkblue font-bold"
                            : "text-gray-700 hover:bg-black/5 font-medium"
                        }`}
                      >
                        <span>{year.label}</span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gwc-lightblue" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* President and Vice President */}
        <div className="flex justify-center gap-8 md:gap-12 flex-wrap mb-16">
          {leadership.map((member) => (
            <TeamCard
              key={`${selectedYearId}-leadership-${member.id}`}
              member={member}
            />
          ))}
        </div>

        {/* Other Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 justify-items-center">
          {others.map((member) => (
            <TeamCard
              key={`${selectedYearId}-others-${member.id}`}
              member={member}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
