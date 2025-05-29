"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { HomeIcon, NotebookPen, UsersRound, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import Logo from "../../../assets/Logo-scribe.svg";
import Link from "next/link";
import { useCurrentUser, User } from "@/hooks/useCurrentUser";

export const AppSidebar = () => {
  const { open } = useSidebar();
  const { user, loading } = useCurrentUser();

  const fallbacAvatar = !loading ? user.username.charAt(0) : "";

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
            <div className=" gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
              <Link
                href="/scribe-ai"
                className="text-lg  font-bold flex items-center justify-between"
              >
                {open ? "Início" : null}
                <HomeIcon />
              </Link>
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
          <li>
            <div className="gap-2 hover:cursor-pointer hover:text-brand-200 pr-2  ">
              <Link
                href="/scribe-ai/patients"
                className="text-lg font-bold flex items-center justify-between"
              >
                {" "}
                {open ? "Pacientes" : null}
                <UsersRound />
              </Link>
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
          <li>
            <div className="gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
              <Link
                href="/scribe-ai/patients/add"
                className="text-lg font-bold flex items-center justify-between"
              >
                {open ? "Adicionar Paciente" : null}
                <UserRoundPlus />
              </Link>
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
          <li>
            <div className="gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
              <Link
                href="/scribe-ai/transcribe"
                className="text-lg font-bold flex items-center justify-between"
              >
                {open ? "Nova Transcrição" : null}
                 <NotebookPen />
              </Link>

             
            </div>
            {open ? <Separator className="my-2 bg-zinc-700" /> : null}
          </li>
        </ul>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2" />
        <div className="flex items-center justify-start gap-2 pb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback>{fallbacAvatar}</AvatarFallback>
          </Avatar>
          {open ? <h3 className="font-semibold ">{user.username}</h3> : null}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
