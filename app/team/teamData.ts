export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export interface BoardYear {
  id: string;
  label: string;
  members: TeamMember[];
}

export const BOARD_YEARS: BoardYear[] = [
  {
    id: "26-27",
    label: "'26–'27",
    members: [
      {
        id: 1,
        name: "Simone Chrastek",
        role: "President",
        image: "/images/26-27_team/simone_chrastek_president.png",
        linkedin: "https://www.linkedin.com/in/simone-chrastek/",
      },
      {
        id: 2,
        name: "Shealyn Rodriguez",
        role: "Vice President",
        image: "/images/26-27_team/shealyn_rodriquez_vicepresident.png",
        linkedin: "https://www.linkedin.com/in/shealyn-rodriguez-a3965b294/",
      },
      {
        id: 3,
        name: "Adema Berdenova",
        role: "Secretary",
        image: "/images/26-27_team/adema_berdenova_secretary.png",
        linkedin: "https://www.linkedin.com/in/adema-berdenova/",
      },
      {
        id: 4,
        name: "Isabella Austin",
        role: "Treasurer",
        image: "/images/26-27_team/isabella_austin_treasurer.png",
        linkedin: "https://www.linkedin.com/in/isabellaaustin/",
      },
      {
        id: 5,
        name: "Reese Odvina",
        role: "Design Director",
        image: "/images/26-27_team/reese_odvina_designdirector.png",
        linkedin: "https://www.linkedin.com/in/reese-odvina/",
      },
      {
        id: 6,
        name: "Sophia Vignali",
        role: "Event Coordinator",
        image: "/images/26-27_team/sophia_vignali_eventsteam.png",
        linkedin: "https://www.linkedin.com/in/sophia-vignali-4081ab325/",
      },
      {
        id: 7,
        name: "Michelle John",
        role: "Event Coordinator",
        image: "/images/26-27_team/michelle_john_eventsteam.png",
        linkedin: "https://www.linkedin.com/in/michelle-john-2b2667392/",
      },
      {
        id: 8,
        name: "Mahyla Smith",
        role: "Event Coordinator",
        image: "/images/26-27_team/mahyla_smith_eventsteam.png",
        linkedin: "https://www.linkedin.com/in/mahyla-smith/",
      },
      {
        id: 9,
        name: "Nivedita Sujith",
        role: "Event Coordinator",
        image: "/images/26-27_team/nivedita_sujith_eventsteam.png",
        linkedin: "https://www.linkedin.com/in/nivedita-sujith/",
      },
      {
        id: 10,
        name: "Samantha Amaro",
        role: "Workshop Director",
        image: "/images/26-27_team/sam_amaro_workshopteam.png",
        linkedin: "https://www.linkedin.com/in/samanthaamaro/",
      },
      {
        id: 11,
        name: "Hasita Kode",
        role: "Workshop Director",
        image: "/images/26-27_team/hasita_kode_workshopteam.png",
        linkedin: "https://www.linkedin.com/in/hasita-kode/",
      },
      {
        id: 12,
        name: "Kayla Nguyen",
        role: "Workshop Director",
        image: "/images/26-27_team/kayla_nguyen_workshopteam.png",
        linkedin: "https://www.linkedin.com/in/kayla-nguyen-875068293/",
      },
      {
        id: 13,
        name: "Shanelle Han",
        role: "Outreach Director",
        image: "/images/26-27_team/shanelle_han_outreachteam.png",
        linkedin: "https://www.linkedin.com/in/shanelle-han/",
      },
      {
        id: 14,
        name: "Khushi Thakkar",
        role: "Outreach Director",
        image: "/images/26-27_team/khushi_thakkar_outreachteam.png",
        linkedin: "https://www.linkedin.com/in/khushi-j-thakkar/",
      },
      {
        id: 15,
        name: "Victoria Luis Ibarra",
        role: "Graphic Designer",
        image: "/images/26-27_team/victoria_luis_ibara_designteam.png",
        linkedin: "https://www.linkedin.com/in/victoria-luis-ibarra-424b50275/",
      },
      {
        id: 16,
        name: "Pari Asthana",
        role: "Graphic Designer",
        image: "/images/26-27_team/pari_asthana_designteam.png",
        linkedin: "https://www.linkedin.com/in/pari-asthana/",
      },
      {
        id: 17,
        name: "Estefany Torres",
        role: "Graphic Designer",
        image: "/images/26-27_team/estefany_torres_designteam.png",
        linkedin: "https://www.linkedin.com/in/estefany-torress/",
      },
      {
        id: 18,
        name: "Elizabeth Pretto",
        role: "Social Media",
        image: "/images/26-27_team/elizabeth_pretto_sotelo_socialmediateampng.png",
        linkedin: "https://www.linkedin.com/in/elizabeth-pretto-sotelo/",
      },
      {
        id: 19,
        name: "Nhi To",
        role: "Social Media",
        image: "/images/26-27_team/nhi_to_socialmediateam.png",
        linkedin: "https://www.linkedin.com/in/nhi-to-ab4966379/",
      },
    ],
  },
  {
    id: "25-26",
    label: "'25–'26",
    members: [
      {
        id: 1,
        name: "Shianne Wood",
        role: "President",
        image: "/images/25-26_team/shai_team.png",
        linkedin: "https://www.linkedin.com/in/shianne-wood/",
      },
      {
        id: 2,
        name: "Vianna Huynh",
        role: "Vice President",
        image: "/images/25-26_team/vianna_team.png",
        linkedin: "https://www.linkedin.com/in/viannahuynh/",
      },
      {
        id: 3,
        name: "Adema Berdenova",
        role: "Secretary",
        image: "/images/25-26_team/adema_team.png",
        linkedin: "https://www.linkedin.com/in/adema-berdenova/",
      },
      {
        id: 4,
        name: "Ayla Tristao",
        role: "Treasurer",
        image: "/images/25-26_team/ayla_team.png",
        linkedin: "https://www.linkedin.com/in/ayla-tristao/",
      },
      {
        id: 5,
        name: "Madeleine Haddad",
        role: "Sponsorship Chair",
        image: "/images/25-26_team/madeleine_team.png",
        linkedin: "https://www.linkedin.com/in/madeleine-ghaddad/",
      },
      {
        id: 6,
        name: "Shealyn Rodriguez",
        role: "Social Media",
        image: "/images/25-26_team/shea_team.webp",
        linkedin: "https://www.linkedin.com/in/shealyn-rodriguez-a3965b294/",
      },
      {
        id: 7,
        name: "Sophia Vignali",
        role: "Event Coordinator",
        image: "/images/25-26_team/sophia_team.webp",
        linkedin: "https://www.linkedin.com/in/sophia-vignali-4081ab325/",
      },
      {
        id: 8,
        name: "Michelle John",
        role: "Event Coordinator",
        image: "/images/25-26_team/michelle_team.webp",
        linkedin: "https://www.linkedin.com/in/michelle-john-2b2667392/",
      },
      {
        id: 9,
        name: "Britni Barcelo",
        role: "Workshop Director",
        image: "/images/25-26_team/britni_team.webp",
        linkedin: "https://www.linkedin.com/in/britnibarcelo/",
      },
      {
        id: 10,
        name: "Simone Chrastek",
        role: "Workshop Director",
        image: "/images/25-26_team/simone_team.webp",
        linkedin: "https://www.linkedin.com/in/simone-chrastek/",
      },
      {
        id: 11,
        name: "Adriana Lee-Fook",
        role: "Workshop Director",
        image: "/images/25-26_team/adriana_team.jpg",
        linkedin: "https://www.linkedin.com/in/adriana-lee-fook/",
      },
      {
        id: 12,
        name: "Reese Odvina",
        role: "Graphic Designer",
        image: "/images/25-26_team/reese_team.webp",
        linkedin: "https://www.linkedin.com/in/reese-odvina/",
      },
      {
        id: 13,
        name: "Tanishqa Sahay",
        role: "Graphic Designer",
        image: "/images/25-26_team/tanishqa_team.webp",
        linkedin: "https://www.linkedin.com/in/tanishqa-sahay/",
      },
      {
        id: 14,
        name: "Isabella Austin",
        role: "Graphic Designer",
        image: "/images/25-26_team/izzy_team.webp",
        linkedin: "https://www.linkedin.com/in/isabellaaustin/",
      },
    ],
  },
];

