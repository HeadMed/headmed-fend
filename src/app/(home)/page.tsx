import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Mic, Upload } from "lucide-react";
import Image from "next/image";

import Logo from "../../assets/Logo.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

      <div className="flex flex-col items-center justify-center p-6 gap-6">
        <Card className="w-full">
          <CardTitle className="ml-5">Type of medical record</CardTitle>
          <CardContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the type of medical record" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="teste">teste</SelectItem>
                <SelectItem value="teste1">teste 1</SelectItem>
                <SelectItem value="teste2">teste 2</SelectItem>
                <SelectItem value="teste3">teste 3</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardTitle className="ml-5">Exams upload</CardTitle>
          <CardContent>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
              <label htmlFor=""></label>
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-1 text-sm text-gray-600">
                Drop files or click to select
              </p>
              <Input className="hidden" type="file" />
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardTitle className="ml-5">Upload or record audio</CardTitle>
          <CardHeader>
            <h2>
              Tell us about your patient's case and let HeadMed fill out the
              chart for you!
            </h2>
          </CardHeader>
          <CardContent>
            <div className="w-full flex itens-center justify-between px-2 ">
              <div className="group flex itens-center justify-center  rounded-lg  text-center hover:cursor-pointer bg-brand-200 ">
                <Mic className="text-brand-50 mt-2 pl-2" size={25} />
                <Button variant={"icon"} className="text-brand-50">
                  Record
                </Button>
              </div>
              <div className="group flex itens-center justify-center border-2 border-gray-300 rounded-lg  text-center hover:cursor-pointer hover:bg-zinc-400/40">
                <Upload className="text-black mt-1 pl-2" size={25} />
                <Button variant={"icon"} className="group-hover:cursor-pointer">
                  Click to upload audio file
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
