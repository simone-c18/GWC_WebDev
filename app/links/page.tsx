"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Links = () => {
  const btnStyle = `
    flex items-center justify-center
    w-64 h-12 mx-auto text-center
    bg-blue-300 border-4 border-blue-950 
    text-blue-950 font-bold no-underline
    rounded-md transition
    hover:bg-neutral-50 hover:text-blue-950
    md:w-80 md:h-14 xl:text-xl
  `;

  return (
    <main className="pt-20 pb-20">
      <section className="text-center py-10">
        <h1 className="font-arial font-bold text-3xl text-blue-950 mt-8">links & resources</h1>
        <p className="font-bold text-blue-950 text-2xl">support us and join our community!</p>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col items-center">
          <p className="font-bold text-blue-950 text-xl mb-4">applications</p>
          <ul className="space-y-4 w-full">
            <li>
              <a className={btnStyle} href="https://forms.gle/ioDjew4mj7nUFb8R6" target="_blank" rel="noopener noreferrer">
                tutoring
              </a>
            </li>
            <li>
              <a className={btnStyle} href="https://forms.gle/f2AD3o6ZqqD8aFkY6" target="_blank" rel="noopener noreferrer">
                web dev team
              </a>
            </li>
            <li>
              <a className={btnStyle} href="https://forms.gle/mE4hwTTs9mWoRv2t9" target="_blank" rel="noopener noreferrer">
                projects
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-bold text-blue-950 text-xl mb-4">merch</p>
          <ul className="space-y-4 w-full">
            <li>
              <a className={btnStyle} href="https://forms.gle/XJP9urmdV6GZCKem8" target="_blank" rel="noopener noreferrer">
                merch voting
              </a>
            </li>
            <li>
              <a className={btnStyle} href="https://forms.gle/cXAv8TMN5AncVpDH7" target="_blank" rel="noopener noreferrer">
                purchase merch
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-bold text-blue-950 text-xl mb-6">social medias</p>
          <ul className="flex justify-center gap-8 md:gap-16">
            <li>
              <a href="https://www.linkedin.com/company/girls-who-code-ucf/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition">
                <FontAwesomeIcon icon={faLinkedin} size="4x" className="text-blue-950" />
                <span className="mt-2 font-bold text-blue-950">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/girlswhocodeucf/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition">
                <FontAwesomeIcon icon={faSquareInstagram} size="4x" className="text-blue-950" />
                <span className="mt-2 font-bold text-blue-950">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/ebKK2pqSBh" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition">
                <FontAwesomeIcon icon={faDiscord} size="4x" className="text-blue-950" />
                <span className="mt-2 font-bold text-blue-950">Discord</span>
              </a>
            </li>
          </ul>
        </div>

      </section>
    </main>
  );
};

export default Links;