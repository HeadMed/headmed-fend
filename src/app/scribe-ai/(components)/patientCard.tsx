import React from "react";
import { NotebookPen, UserRound } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface PatientCardProps {
  name: string;
  id: number;
}


export const PatientCard = ({name, id}:PatientCardProps) => {
  return (
    <Card className="w-96">
      <CardHeader>
        <div className="flex items-center justify-between">
          <UserRound strokeWidth="2" />
          <span>{name}</span>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="w-full flex items-center justify-between gap-4">
          <Link href={`/scribe-ai/transcribe/${id}`}>
            <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold">
              {" "}
              Nova transcrição <NotebookPen strokeWidth="2" />{" "}
            </Button>
          </Link>

          <Button variant="outline">
            Ver paciente <UserRound strokeWidth="2" />{" "}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
