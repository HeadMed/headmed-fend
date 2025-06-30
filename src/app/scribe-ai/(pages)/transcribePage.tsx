import React from "react";
import { Button } from "@/components/ui/button";
import { Mic, NotebookPen, PencilLine, PenLine, Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { usePatients } from "@/hooks/usePatients";
import { TranscriptionForm } from "../(components)/transcriptionForm";
interface TranscribePageProps {
  // Define any props if needed
  id: number;
}

export const TranscribePage = ({ id }: TranscribePageProps) => {
  const { patients, loading, error } = usePatients();
  const patient = patients.find((p) => p.id === Number(id));
  return (
    <div className="h-full flex-1 flex items-center justify-center px-2">
      <Card className="w-full sm:w-3/4 sm:px-6 max-h-[85vh]">
        <CardHeader className="flex-row">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 w-full">
            <span className="text-2xl font-bold">
              PACIENTE: <span className="font-normal">{patient?.nome}</span>
            </span>
            <Button className="bg-brand-dark hover:bg-brand-dark/80 hover:cursor-pointer">
              Alterar <PencilLine />{" "}
            </Button>
          </div>
          <Separator />
        </CardHeader>
        <CardContent className="flex justify-between items-center ">
          <TranscriptionForm id={id} />
        </CardContent>
      </Card>
    </div>
  );
};
