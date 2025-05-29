"use client";

import React from "react";
import { usePatients } from "@/hooks/usePatients";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { RecordItem } from "../(components)/recordItem";
import Link from "next/link";
import { NotebookPen } from "lucide-react";

interface PatientRecordPageInterface {
  id: number;
}

export const PatientRecordPage = ({ id }: PatientRecordPageInterface) => {
  const { getPatient, patient } = usePatients();

  const p = getPatient(id);
  const records = patient?.prontuarios;
  return (
    <div className="h-full flex-1 flex flex-col items-center py-10 gap-16 ">
      <h1 className="text-3xl font-semibold">Paciente: {patient?.nome}</h1>
      <div
        className={
          records && records.length > 0
            ? `w-3/4 grid grid-cols-3 grid-rows-2 md:grid-cols-2 gap-4 p-4`
            : `w-3/4 flex items-center justify-center gap-4 p-4`
        }
      >
        {records && records.length > 0 ? (
          records?.map((p) => (
            <Card key={p.id}>
              <CardHeader>
                <h1 className="text-lg font-semibold">transcrição: {p.id} </h1>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <span>Queixa: {p.queixa_principal}</span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer">
                      Ver transcrição
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>{p.queixa_principal}</DialogTitle>

                    <Card>
                      <CardContent className="w-full h-[500px] overflow-y-scroll">
                        <div className="space-y-3 overflow-y-scroll">
                          <RecordItem
                            title="História da doença"
                            field={p.historia_doenca_atual}
                          />
                          <RecordItem
                            title="Antecedentes"
                            field={p.antecedentes}
                          />
                          <RecordItem
                            title="Exame físico"
                            field={p.exame_fisico}
                          />
                          <RecordItem
                            title="Hipótese diagnóstica"
                            field={p.hipotese_diagnostica}
                          />
                          <RecordItem title="Conduta" field={p.conduta} />
                          <RecordItem title="Prescrição" field={p.prescricao} />
                          <RecordItem
                            title="Encaminhamentos"
                            field={p.encaminhamentos}
                          />
                          <RecordItem
                            title="Transcrição original"
                            field={p.original_transcription}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className=" flex justify-center items-center ">
            <CardContent className="flex justify-between items-center gap-4">
              <h1 className="text-lg font-medium">
                O paciente ainda não possui transcrições
              </h1>
              <Link href={`/scribe-ai/transcribe/${id}`}>
                <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold">
                  Nova transcrição <NotebookPen strokeWidth="2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
