import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
// import Member from "@/components/global/Member"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Girls Who Code UCF",
  description: "UCF's Girls Who Code Loop website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className=" bg-center bg-fixed bg-[url(/images/mobile-background.png)] lg:bg-[url(/images/background.webp)] bg-cover h-full lg:bg-opacity-0">
          {/*<Member />*/}
          <Navbar />
          {children}
          </div>
          <Footer />
          
      </body>
    </html>
  );
}
