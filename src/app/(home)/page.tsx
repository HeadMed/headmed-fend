import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import Image from "next/image";

import Logo from "../../assets/Logo.svg";
import { RecordTypeSelector } from "./recordTypeSeletor";
import { ExamsUploader } from "./examsUploader";
import { AudioRecorder } from "./audioRecorder";
import { Response } from "./response";

export default function Home() {
  return (
    <div className="h-dvh w-full">
      <div className="w-full h-16 bg-zinc-100 shadow-lg flex items-center justify-between p-2">
        <div className="flex items-center justify-center gap-2">
          <Menu size={30} />
          <Image
            className="mb-2"
            src={Logo}
            alt="HeadMed logo"
            width={108.5}
            height={30}
          />
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/oartuu.png" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
      </div>

{/*main div  */ }
      <div className="flex flex-col items-center justify-center p-6 gap-6 md:grid grid-cols-2 grid-rows-2">
        
      <RecordTypeSelector/>
      <ExamsUploader/>
      <AudioRecorder/>
      <Response/>
       

        

        
      </div>
    </div>
  );
}
