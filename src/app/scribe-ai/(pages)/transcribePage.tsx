import React from 'react'
import { Button } from "@/components/ui/button";
import { Mic, NotebookPen, PencilLine, PenLine, Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";



export const TranscribePage = () => {
  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <Card className="w-3/4">
        <CardHeader className="flex-row">
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl font-bold">
              PACIENTE: <span className="font-normal">Ivisson Pereira</span>
            </span>
            <Button className="bg-brand-dark hover:bg-brand-dark/80 hover:cursor-pointer">
              Alterar <PencilLine />{" "}
            </Button>
          </div>
          <Separator />
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-4 ">
            <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold">
              {" "}
              Iniciar gravação <Mic strokeWidth="3" />{" "}
            </Button>
            <Button
              variant="outline"
              className="hover:cursor-pointer text-md font-semibold border-2 border-dashed border-zinc-500"
            >
              {" "}
              Clique ou arraste para enviar <Upload strokeWidth="3" />{" "}
            </Button>
          </div>

          <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold">
            Transcrever
            <NotebookPen strokeWidth="3" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}


