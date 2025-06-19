"use client";

import React from "react";
import { usePatients } from "@/hooks/usePatients";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { RecordItem } from "../(components)/recordItem";
import Link from "next/link";
import {
  Calendar,
  Clock,
  FileText,
  NotebookPen,
  Plus,
  Search,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface PatientRecordPageInterface {
  id: number;
}

export const PatientRecordPage = ({ id }: PatientRecordPageInterface) => {
  const { getPatient, patient } = usePatients();

  React.useEffect(() => {
    if (id) {
      getPatient(id);
    }
  }, [id]);

  const records = patient?.prontuarios;

  return (
    <div className="min-h-screen w-full bg-brand-50">
      <header className="bg-brand-dark text-white shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/10 p-2 rounded-lg flex-shrink-0">
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl font-bold truncate">
                  Paciente: {patient?.nome}
                </h1>
                <p className="text-amber-100 text-xs sm:text-sm">
                  ID: #xx • Última consulta: xx/xx/xxxx
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Transcrições
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  Gerencie as transcrições do paciente
                </p>
              </div>
              {records && records.length > 0 && (
                <Link
                  href={`/scribe-ai/transcribe/${id}`}
                  className="flex-shrink-0"
                >
                  <Button className="bg-brand-200 hover:bg-brand-dark text-white shadow-lg w-full sm:w-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Nova transcrição</span>
                    <span className="sm:hidden">Nova</span>
                  </Button>
                </Link>
              )}
            </div>

            {records && records.length > 0 && (
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar transcrições..."
                  className="pl-10 bg-white border-gray-200 focus:border-brand-200 focus:ring-brand-dark"
                />
              </div>
            )}

            {records && records.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                {records.map((record) => (
                  <Card
                    key={record.id}
                    className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                          Transcrição #{record.id}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-emerald-100 text-emerald-700 flex-shrink-0"
                        >
                          Completa
                        </Badge>
                      </div>
                      <Separator className="mt-2" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Queixa Principal:
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {record.queixa_principal}
                        </p>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-brand-200 hover:bg-brand-dark text-white shadow-sm text-xs sm:text-sm">
                            <FileText className="h-4 w-4 mr-2" />
                            <span className="hidden sm:inline">
                              Ver transcrição completa
                            </span>
                            <span className="sm:hidden">Ver completa</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] mx-4">
                          <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                            {record.queixa_principal}
                          </DialogTitle>
                          <Card className="border-0">
                            <CardContent className="p-0">
                              <div className="h-[400px] sm:h-[500px] overflow-y-auto space-y-4 pr-2 sm:pr-4">
                                <RecordItem
                                  title="História da doença"
                                  field={record.historia_doenca_atual}
                                />
                                <RecordItem
                                  title="Antecedentes"
                                  field={record.antecedentes}
                                />
                                <RecordItem
                                  title="Exame físico"
                                  field={record.exame_fisico}
                                />
                                <RecordItem
                                  title="Hipótese diagnóstica"
                                  field={record.hipotese_diagnostica}
                                />
                                <RecordItem
                                  title="Conduta"
                                  field={record.conduta}
                                />
                                <RecordItem
                                  title="Prescrição"
                                  field={record.prescricao}
                                />
                                <RecordItem
                                  title="Encaminhamentos"
                                  field={record.encaminhamentos}
                                />
                                <RecordItem
                                  title="Transcrição original"
                                  field={record.original_transcription}
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-8">
                  <div className="bg-emerald-50 p-3 sm:p-4 rounded-full mb-4 sm:mb-6">
                    <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center">
                    Nenhuma transcrição encontrada
                  </h3>
                  <p className="text-gray-600 text-center mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
                    O paciente ainda não possui transcrições. Clique no botão
                    abaixo para criar a primeira transcrição.
                  </p>
                  <Link href={`/scribe-ai/transcribe/${id}`}>
                    <Button className="bg-brand-200 hover:bg-brand-dark text-white shadow-lg w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">
                        Criar primeira transcrição
                      </span>
                      <span className="sm:hidden">Criar transcrição</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg text-gray-900">
                  Informações do Paciente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <div className="mt-1 px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm text-gray-900 truncate">
                    {patient?.nome || "Goblin"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Data de Nascimento
                  </label>
                  <div className="mt-1 px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm text-gray-900">
                    01/01/1990
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Última Consulta
                  </label>
                  <div className="mt-1 px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm text-gray-900">
                    15/06/2024
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg text-gray-900">
                  Estatísticas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Total de Transcrições
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    {records?.length || 0}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Última Atividade
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-brand-200"
                  >
                    Hoje
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg text-gray-900">
                  Ações Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-200 hover:bg-gray-50 text-sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Ver Histórico
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-200 hover:bg-gray-50 text-sm"
                >
                  <User className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
