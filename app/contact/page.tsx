"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // --- CREDENTIALS ---
    const SERVICE_ID = "service_yw2ehaq"; 
    const TEMPLATE_ID = "template_qxuqdjq"; 
    const PUBLIC_KEY = "Bzd6LbCigHb3i3eTs"; 
    // -------------------

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset(); 
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <main className={`${alexandria.className} min-h-screen flex items-center justify-center px-6 pb-20 pt-28`}>
    <main className={`${alexandria.className} min-h-screen flex items-center justify-center px-6 pb-20 pt-28`}>
      <div className="w-full max-w-2xl">
        
        <h1 className="text-4xl font-semibold text-[#081F5C] text-center tracking-tight mb-4 pt-10">
          let's get in touch!
        </h1>

        <p className="text-[#000000] text-center mb-10">
          reach out to us through email or social media for inquiries
        </p>

        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="bg-[#7B9FD1] rounded-2xl px-10 py-12 text-left space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              name/company
            </label>
            <input
              required
              name="name"  // Matches {{name}} in your screenshot
              type="text"
              className="w-full rounded-lg text-black border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#081F5C]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              your email
            </label>
            <input
              required
              name="email" // Matches {{email}} in your screenshot
              type="email"
              className="w-full rounded-lg text-black border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#081F5C]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              message
            </label>
            <textarea
              required
              name="message" // Matches {{message}} in your screenshot
              rows={5}
              className="w-full rounded-lg text-black border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#081F5C]"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-[#081F5C] px-10 py-3 text-[#FFFFFF] font-medium hover:opacity-90 transition shadow-md"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}