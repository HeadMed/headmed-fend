"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Logo from "../../../assets/Logo-scribe.svg";
import Link from "next/link";
import { HomeIcon, NotebookPen, UserRoundPlus, UsersRound } from "lucide-react";
import { useCurrentUser } from "@/hooks/useCurrentUser";



export const HeaderScribe = () => {

   const { user, loading } = useCurrentUser();
  
    const fallbacAvatar = !loading ? user.username.charAt(0) : "";
  return (
    <div className="z-100 w-full min-h-16 bg-zinc-100 shadow-lg flex items-center justify-between px-6">
      <div className="flex items-center justify-center gap-2">
        <Image
          className=""
          src={Logo}
          alt="Scribe.ai logo"
          width={108.5}
          height={30}
        />
      </div>

      <div className="flex flex-1 items-center justify-evenly">
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
