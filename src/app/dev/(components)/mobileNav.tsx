import { House, UsersRound, UserRound, Calendar } from "lucide-react";
import React from "react";

export const MobileNav = () => {
  return (
    <div className="bg-white w-dvw">
      <ul className="w-full flex justify-between px-6 py-3">
        <li className="flex flex-col justify-center items-center text-brand-200 hover:cursor-pointer hover:text-brand-100">
          <House />
          <span>Home</span>
        </li>
        <li className="flex flex-col justify-center items-center text-brand-200 hover:cursor-pointer hover:text-brand-100">
          <UsersRound />
          <span>Home</span>
        </li>
        <li className="flex flex-col justify-center items-center text-brand-200 hover:cursor-pointer hover:text-brand-100">
          <Calendar />
          <span>Home</span>
        </li>
        <li className="flex flex-col justify-center items-center text-brand-200 hover:cursor-pointer hover:text-brand-100">
          <UserRound />
          <span>Home</span>
        </li>
      </ul>
    </div>
  );
};
