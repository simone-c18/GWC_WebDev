"use client";

import Image from "next/image";
import {
  HiArrowUpRight,
  HiMiniBriefcase,
  HiMiniCamera,
  HiMiniChatBubbleLeftRight,
  HiMiniClipboardDocumentCheck,
  HiMiniCube,
  HiMiniGlobeAlt,
  HiMiniRocketLaunch,
  HiMiniShoppingBag,
  HiMiniTicket,
  HiMiniUsers,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

type ResourceCard = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: IconType;
  tag?: string;
  logoSrc?: string;
};

type ResourceColumn = {
  title: string;
  icon: IconType;
  cards: ResourceCard[];
};

const columns: ResourceColumn[] = [
  {
    title: "applications",
    icon: HiMiniClipboardDocumentCheck,
    cards: [
      {
        title: "tutoring",
        description:
          "join our tutoring program to help others or get assistance with your CS courses.",
        cta: "Apply Now",
        href: "https://forms.gle/ioDjew4mj7nUFb8R6",
        icon: HiMiniCube,
      },
      {
        title: "web dev team",
        description:
          "help us maintain and improve our club website while learning modern web technologies.",
        cta: "Join Team",
        href: "https://forms.gle/f2AD3o6ZqqD8aFkY6",
        icon: HiMiniGlobeAlt,
      },
      {
        title: "projects",
        description:
          "pitch or join collaborative technical projects with fellow club members.",
        cta: "Submit Project",
        href: "https://forms.gle/mE4hwTTs9mWoRv2t9",
        icon: HiMiniRocketLaunch,
      },
    ],
  },
  {
    title: "merch",
    icon: HiMiniShoppingBag,
    cards: [
      {
        title: "merch voting",
        description:
          "vote for the next semester's merchandise designs and colors!",
        cta: "Vote Now",
        href: "https://forms.gle/XJP9urmdV6GZCKem8",
        icon: HiMiniTicket,
      },
      {
        title: "purchase merch",
        description:
          "get your official GWC @ UCF apparel and accessories.",
        cta: "Shop Now",
        href: "https://forms.gle/cXAv8TMN5AncVpDH7",
        icon: HiMiniBriefcase,
      },
    ],
  },
  {
    title: "social medias",
    icon: HiMiniChatBubbleLeftRight,
    cards: [
      {
        title: "linkedin",
        description: "",
        cta: "Follow",
        href: "https://www.linkedin.com/company/girls-who-code-ucf/",
        icon: HiMiniUsers,
        tag: "Networking",
        logoSrc: "/images/linkedin-logo.png",
      },
      {
        title: "instagram",
        description: "",
        cta: "Follow",
        href: "https://www.instagram.com/girlswhocodeucf/",
        icon: HiMiniCamera,
        tag: "Community",
        logoSrc: "/images/ig-logo.PNG",
      },
      {
        title: "discord",
        description: "",
        cta: "Join Server",
        href: "https://discord.gg/ebKK2pqSBh",
        icon: HiMiniChatBubbleLeftRight,
        tag: "Main Hub",
        logoSrc: "/images/discord-logo.jpg",
      },
    ],
  },
];

function ResourceCard({
  title,
  description,
  cta,
  href,
  icon: Icon,
  tag,
  logoSrc,
}: ResourceCard) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[188px] flex-col rounded-2xl border border-gwc-darkblue/8 bg-white p-5 shadow-[0_12px_30px_rgba(8,31,92,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(8,31,92,0.1)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f5ff] text-gwc-lightblue">
          {logoSrc ? (
            <div className="relative h-5 w-5 overflow-hidden rounded-sm">
              <Image
                src={logoSrc}
                alt={`${title} logo`}
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
          ) : (
            <Icon className="h-5 w-5" />
          )}
        </div>
        {tag ? (
          <span className="rounded-md bg-[#f6f6f8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gwc-darkblue/65">
            {tag}
          </span>
        ) : null}
      </div>

      <div className="mt-7 flex flex-1 flex-col">
        <h3 className="font-alexandria text-[1.7rem] font-semibold leading-tight text-gwc-darkblue sm:text-[1.9rem] lg:text-[1.75rem]">
          {title}
        </h3>

        {description ? (
          <p className="mt-3 max-w-[28ch] text-sm leading-7 text-gwc-darkblue/72 sm:text-[15px]">
            {description}
          </p>
        ) : (
          <div className="mt-3 h-7" />
        )}

        <div className="mt-auto flex items-center justify-between pt-7 text-sm font-medium text-gwc-lightblue">
          <span className="uppercase tracking-[0.18em]">{cta}</span>
          <HiArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}

export default function Links() {
  return (
    <main className="min-h-screen bg-transparent pb-20 pt-28 text-gwc-darkblue sm:pb-24 sm:pt-32">
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-alexandria text-4xl font-semibold tracking-[-0.03em] text-gwc-darkblue sm:text-5xl md:text-[3.7rem]">
            links &amp; resources
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gwc-darkblue/75 sm:text-lg">
            support us and join our community! access everything GWC @ UCF in
            one place.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-3 xl:gap-7">
          {columns.map(({ title, icon: ColumnIcon, cards }) => (
            <div key={title}>
              <div className="mb-5 flex items-center gap-3 px-1 text-gwc-darkblue">
                <ColumnIcon className="h-5 w-5 text-gwc-darkblue" />
                <h2 className="font-alexandria text-2xl font-semibold capitalize">
                  {title}
                </h2>
              </div>

              <div className="space-y-4">
                {cards.map((card) => (
                  <ResourceCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.8rem] shadow-[0_24px_60px_rgba(8,31,92,0.18)]">
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_3232.webp"
              alt="Girls Who Code UCF community members collaborating"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,92,0.82)_0%,rgba(8,31,92,0.48)_40%,rgba(8,31,92,0.18)_100%)]" />

        </div>
      </section>
    </main>
  );
}
