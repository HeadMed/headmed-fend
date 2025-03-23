import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import Image from "next/image";

import Logo from "../../assets/Logo.svg";

export default function Home() {
  return (
    <div className="h-dvh w-full">
      <div className="w-full h-16 bg-zinc-100 shadow-lg flex items-center justify-between p-2">
        <div className="flex items-center justify-center gap-2">
          <Menu size={30}/>
          <Image className="mb-2" src={Logo} alt="HeadMed logo" width={108.5} height={30} />
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/oartuu.png" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
