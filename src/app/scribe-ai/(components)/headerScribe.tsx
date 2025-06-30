"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Logo from "../../../assets/Logo-scribe.svg";
import Link from "next/link";
import { HomeIcon, Menu, NotebookPen, UserRoundPlus, UsersRound } from "lucide-react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { AppSidebar } from "./appSidebar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SubTrigger } from "@radix-ui/react-context-menu";



export const HeaderScribe = () => {

   const { user, loading } = useCurrentUser();
  
    const fallbacAvatar = !loading ? user.username.charAt(0) : "";
  return (
    <div className="z-50 w-full min-h-16 bg-zinc-100 shadow-lg flex items-center justify-between px-6">
      <div className="flex items-center justify-center gap-2">
        <Image
          className="hidden sm:block"
          src={Logo}
          alt="Scribe.ai logo"
          width={108.5}
          height={30}
        />

        <Sheet>
          <SheetTrigger asChild>
            <Menu className="sm:hidden" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="pt-10">
              <Image
                className=""
                src={Logo}
                alt="Scribe.ai logo"
                width={108.5}
                height={30}
              />
              <SheetTitle className="hidden">menu</SheetTitle>
            </SheetHeader>
            <div className="p-4 justify-center h-full">
              <ul className=" h-2/3  flex flex-col justify-evenly ">
                <li>
                  <div className=" gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
                    <Link
                      href="/scribe-ai"
                      className="text-lg  font-bold flex items-center justify-between"
                    >
                      Início
                      <HomeIcon />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gap-2 hover:cursor-pointer hover:text-brand-200 pr-2  ">
                    <Link
                      href="/scribe-ai/patients"
                      className="text-lg font-bold flex items-center justify-between"
                    >
                      Pacientes
                      <UsersRound />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
                    <Link
                      href="/scribe-ai/patients/add"
                      className="text-lg font-bold flex items-center justify-between"
                    >
                      Adicionar Paciente
                      <UserRoundPlus />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gap-2 hover:cursor-pointer hover:text-brand-200 pr-2 ">
                    <Link
                      href="/scribe-ai/transcribe"
                      className="text-lg font-bold flex items-center justify-between"
                    >
                      Nova Transcrição
                      <NotebookPen />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden sm:flex flex-1 items-center justify-evenly">
        <Link
          href="/scribe-ai"
          className="text-lg font-bold flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200"
        >
          <HomeIcon /> Início
        </Link>
        <Link
          href="/scribe-ai/patients"
          className="text-lg font-bold flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200 "
        >
          <UsersRound /> Pacientes
        </Link>
        <Link
          href="/scribe-ai/patients/add"
          className="text-lg font-bold flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200"
        >
          <UserRoundPlus /> Adicionar Paciente
        </Link>
        <Link
          href="/scribe-ai/transcribe"
          className="text-lg font-bold flex items-center justify-between gap-2 hover:cursor-pointer hover:text-brand-200"
        >
          <NotebookPen /> Nova Transcrição
        </Link>
      </div>

      <div className="flex items-center justify-center gap-2">
        <h3 className="font-semibold">{user.username}</h3>
        <Avatar className="h-12 w-12">
          <AvatarImage src="" />
          <AvatarFallback className="bg-zinc-300 uppercase font-bold">
            {fallbacAvatar}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
