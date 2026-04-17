"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // --- CREDENTIALS ---
    const SERVICE_ID = "service_yw2ehaq"; 
    const TEMPLATE_ID = "template_qxuqdjq"; 
    const PUBLIC_KEY = "Bzd6LbCigHb3i3eTs"; 
    // -------------------

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setSubmitStatus("success");
          form.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          setSubmitStatus("error");
          setIsSubmitting(false);
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
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
              disabled={isSubmitting}
              className="rounded-full bg-[#081F5C] px-10 py-3 text-[#FFFFFF] font-medium hover:opacity-90 transition shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  sending...
                </span>
              ) : (
                "submit"
              )}
            </button>
          </div>

          {submitStatus === "success" && (
            <p className="text-white text-center text-sm font-medium mt-2">
              message submitted! please allow 1-2 business days for a response ⋆˚꩜｡
            </p>
          )}

          {submitStatus === "error" && (
            <p className="text-red-200 text-center text-sm font-medium mt-2">
              failed to send message. please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}