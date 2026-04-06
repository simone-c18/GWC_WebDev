"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";


const Links = () => {
  return (
    <main className="pt-20">
      <section className="text-center py-10">
        <h1 className="font-arial font-bold text-3xl text-blue-950 text-center">links & resources</h1>
        <p className="font-bold text-blue-950 text-2xl text-center">support us and join our community!</p>
      </section>

      <section className="flex flex-col gap-8 px-10">
        <div className="text-left pl-10">
          <p className="font-bold text-blue-950 text-xl text-center">applications</p>
          <ul className="space-y-2 ">
            <li className="flex justify-center">
                <a
                className="
                no-underline
                inline-block w-auto mx-auto text-center
                bg-blue-300 
                border-4 border-blue-950 
                text-blue-950 font-bold no-underline
                py-1 px-3 text-sm
                rounded-md 
               hover:bg-neutral-50 hover:text-blue-950 transition
               md:block md:w-70 md:py-2 xl:text-xl"

                href="https://forms.gle/ioDjew4mj7nUFb8R6"
                target="_blank"
                rel="noopener noreferrer"
              >
                  tutoring
               </a>
            </li>
            <li className="flex justify-center">
              <a 
                className="
                no-underline
                inline-block w-auto mx-auto text-center
                bg-blue-300 
                border-4 border-blue-950 
                text-blue-950 font-bold no-underline
                py-1 px-3 text-sm
                rounded-md 
               hover:bg-neutral-50 hover:text-blue-950 transition
               md:block md:w-70 md:py-2 xl:text-xl"
                href="https://forms.gle/f2AD3o6ZqqD8aFkY6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              web dev team 
            </a>
          </li>
            <li className="flex justify-center">
              <a
              className="
                no-underline
                inline-block w-auto mx-auto text-center
                bg-blue-300 
                border-4 border-blue-950 
                text-blue-950 font-bold no-underline
                py-1 px-3 text-sm
                rounded-md 
               hover:bg-neutral-50 hover:text-blue-950 transition
               md:block md:w-70 md:py-2 xl:text-xl"
               href="https://forms.gle/mE4hwTTs9mWoRv2t9"
               target="_blank" 
               rel="noopener noreferrer"
              >
                projects
              </a>
            </li>
          </ul>
        </div>

        <div className="text-left pl-10">
          <p className="font-bold text-blue-950 text-xl text-center">merch</p>
          <ul className="space-y-2 ">
            <li className="flex justify-center">
              <a 
                className="
                no-underline
                inline-block w-auto mx-auto text-center
                bg-blue-300 
                border-4 border-blue-950 
                text-blue-950 font-bold no-underline
                py-1 px-3 text-sm
                rounded-md 
               hover:bg-neutral-50 hover:text-blue-950 transition
               md:block md:w-70 md:py-2 xl:text-xl"
               href="https://forms.gle/XJP9urmdV6GZCKem8"
               target="_blank"
               rel="noopener noreferrer">
                merch voting
              </a>
            </li>
            <li className="flex justify-center">
              <a 
                className="
                no-underline
                inline-block w-auto mx-auto text-center
                bg-blue-300 
                border-4 border-blue-950 
                text-blue-950 font-bold no-underline
                py-1 px-3 text-sm
                rounded-md 
               hover:bg-neutral-50 hover:text-blue-950 transition
               md:block md:w-70 md:py-2 xl:text-xl"
               href="https://forms.gle/cXAv8TMN5AncVpDH7" 
               target="_blank" 
               rel="noopener noreferrer">
                purchase merch
              </a>
            </li>
          </ul>
        </div>

        <div className="text-left pl-10">
          <p className="font-bold text-blue-950 text-xl text-center">social medias</p>
          <ul className="flex justify-center gap-10">
            <li className="flex flex-col items-center">
              <a
                href="https://www.linkedin.com/company/girls-who-code-ucf/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <FontAwesomeIcon icon={faLinkedin} size="4x" className="text-blue-950" />
                <span className="mt-2 font-bold text-blue-950">LinkedIn</span>
              </a>
            </li>

            <li className="flex flex-col items-center">
              <a
                href="https://www.instagram.com/girlswhocodeucf/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <FontAwesomeIcon icon={faSquareInstagram} size="4x" className="text-blue-950" />
                <span className="mt-2 font-bold text-blue-950">Instagram</span>
              </a>
            </li>

            <li className="flex flex-col items-center">
              <a
                href="https://discord.gg/ebKK2pqSBh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
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