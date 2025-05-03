import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Upload } from "lucide-react";



export const AudioRecorder = () => {
    return (
      <Card className="w-full">
        <CardTitle className="ml-5">Upload or record audio</CardTitle>
        <CardHeader>
          <h2>
            Tell us about your patient's case and let HeadMed fill out the chart
            for you!
          </h2>
        </CardHeader>
        <CardContent>
          <div className="w-full md:flex flex-col space-y-2 itens-center justify-between px-2 ">
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
    );
}