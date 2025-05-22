import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import Image from "next/image";

import Logo from "../../assets/Logo.svg";
import { RecordTypeSelector } from "./(components)/recordTypeSeletor";
import { ExamsUploader } from "./(components)/examsUploader";
import { AudioRecorder } from "./(components)/audioRecorder";
import { Response } from "./(components)/response";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-dvh w-full">
      <div className="w-full h-16 bg-zinc-100 shadow-lg flex items-center justify-between p-2">
        <div className="flex items-center justify-center gap-2">
          <Sheet>
            <SheetTrigger className="hover:cursor-pointer" asChild>
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl text-black">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col justify-between px-3 py-4 h-[100%]">
                <div className="flex flex-col gap-7 space-y-2 py-2 px-3">
                  <div className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Teste</span>
                    <Separator />
                  </div>
                  <div className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Teste</span>
                    <Separator />
                  </div>
                  <div className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Teste</span>
                    <Separator />
                  </div>
                  <div className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Teste</span>
                    <Separator />
                  </div>
                </div>

                <Button variant={"destructive"} className="w-full">
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
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

      {/*main div  */}
      <div className="flex flex-col items-center justify-center p-6 gap-6 md:grid grid-cols-2 grid-rows-2">
        <RecordTypeSelector />
        <ExamsUploader />
        <AudioRecorder />
        <Response />
      </div>
    </div>
  );
}
