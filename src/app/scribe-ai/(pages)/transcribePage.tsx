import React from 'react'
import { Button } from "@/components/ui/button";
import { Mic, NotebookPen, PencilLine, PenLine, Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { usePatients } from "@/hooks/usePatients";
import { TranscriptionForm } from '../(components)/transcriptionForm';
interface TranscribePageProps {
  // Define any props if needed
  id: number;
} 


export const TranscribePage = ({id}: TranscribePageProps) => {
  const { patients, loading, error} = usePatients();
  const patient = patients.find((p) => p.id === Number(id));
  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <Card className="w-3/4 px-6     ">
        <CardHeader className="flex-row">
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl font-bold">
              PACIENTE: <span className="font-normal">{patient?.nome}</span>
            </span>
            <Button className="bg-brand-dark hover:bg-brand-dark/80 hover:cursor-pointer">
              Alterar <PencilLine />{" "}
            </Button>
          </div>
          <Separator />
        </CardHeader>
        <CardDescription className="text-md font-semibold ml-5">
          <p>Clique no botão para gravar ou selecione um áudio para enviar</p>
        </CardDescription>
        <CardContent className="flex justify-between items-center">
            <TranscriptionForm/>
        </CardContent>
      </Card>
    </div>
  );
}


