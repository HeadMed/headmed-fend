import Image from "next/image";
import React from "react";
import Logo from "../../assets/Logo.svg";
import { FirstSection } from "./(sections)/firstSection";
import { TeamSection } from "./(sections)/teamSection";
const page = () => {
  return (
    <div className="h-dvh w-dvw flex flex-col ">
      <nav className="w-full h-16 bg-zinc-100 shadow-lg  flex items-center justify-between p-2 mr-1">
        <Image
          className="pl-3 mb-2"
          src={Logo}
          alt="HeadMed logo"
          width={118.5}
          height={35}
        />
        <ul
          className="flex items-center justify-center gap-4 pr-4
          [&>li]:text-lg [&>li]:font-bold [&>li]:text-zinc-800 [&>li]:hover:text-brand-200 [&>li]:hover:underline [&>li]:cursor-pointer"
        >
          <li>sobre</li>
          <li>pricing</li>
          <li>FAQ</li>
        </ul>
      </nav>

      <main className="h-[calc(100vh-6rem)] overflow-x-hidden">
        <FirstSection />
        <TeamSection />
      </main>
    </div>
  );
};

export default page;
