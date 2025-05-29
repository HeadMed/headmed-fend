import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Logo from "../../../assets/Logo-scribe.svg";


export const HeaderScribe = () => {
  return (
    <div className="z-50 w-full h-16 bg-zinc-100 shadow-lg flex items-center justify-between px-6">
      <div className="flex items-center justify-center gap-2">
        <Image
          className=""
          src={Logo}
          alt="Scribe.ai logo"
          width={108.5}
          height={30}
        />
      </div>

      <div className="flex items-center justify-center gap-2">
        <h3 className="font-semibold">Arthur do Nascimento</h3>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/oartuu.png" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
