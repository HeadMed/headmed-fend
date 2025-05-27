"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {  HomeIcon, NotebookPen, UsersRound, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import Logo from "../../../assets/Logo-scribe.svg";

export const AppSidebar = () => {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-col items-center py-6">
        <Image
          className=""
          src={Logo}
          alt="Scribe.ai logo"
          width={108.5}
          height={30}
        />
        <Separator className="my-2" />
      </SidebarHeader>
      <SidebarContent className="p-4 justify-center">
        <ul className=" h-2/3  flex flex-col justify-evenly ">
          <li>
            <div className="flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
              {open ? <span className="text-lg  font-bold">Início</span> : null}
              <HomeIcon />
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
          <li>
            <div className="flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200 pr-2  ">
              {open ? (
                <span className="text-lg font-bold">Pacientes</span>
              ) : null}
              <UsersRound />
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
          <li>
            <div className="flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
              {open ? (
                <span className="text-lg font-bold">Adicionar Paciente</span>
              ) : null}
              <UserRoundPlus />
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
          <li>
            <div className="flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
              {open ? (
                <span className="text-lg font-bold">Nova Transcrição</span>
              ) : null}
              <NotebookPen />
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
        </ul>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2" />
        <div className="flex items-center justify-start gap-2 pb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/oartuu.png" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          {open ? (
            <h3 className="font-semibold ">Arthur do Nascimento</h3>
          ) : null}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
