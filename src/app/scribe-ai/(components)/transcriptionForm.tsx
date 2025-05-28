import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useTranscription } from "@/hooks/useTranscription";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FileAudio, Mic, NotebookPen, Upload } from "lucide-react";
import React, { useRef, useState } from "react";

export const TranscriptionForm = () => {
  const { transcribe, transcribeForPatient, loading } = useTranscription();
  // const { patients } = usePatients();
  const [file, setFile] = useState<File | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [transcriptionResult, setTranscriptionResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTranscribe = async () => {
    if (!file) return;

    try {
      let result;
      if (selectedPatient) {
        result = await transcribeForPatient(parseInt(selectedPatient), file);
      } else {
        result = await transcribe(file);
      }
      setTranscriptionResult(result);
    } catch (error) {
      console.error("Erro na transcrição:", error);
    }
  };

  const resetForm = () => {
    setFile(null);
    setSelectedPatient("");
    setTranscriptionResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4 ">
        <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold">
          {" "}
          Iniciar gravação <Mic strokeWidth="3" />{" "}
        </Button>
        <Card className="bg-transparent shadow-none border-none ">
          <CardContent>
            <div className="">
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
              {file ? (
                <div className="space-y-4 flex flex-col items-center justify-between">
                  <FileAudio className="mx-auto h-12 w-12 text-brand-200" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Trocar Arquivo
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Button
                    className="bg-brand-dark hover:bg-brand-dark/80 hover:cursor-pointer text-md font-semibold"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Selecionar Arquivo
                    <Upload className="mx-auto" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={handleTranscribe}
            className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold"
          >
            Transcrever
            <NotebookPen strokeWidth="3" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>transcrição</DialogTitle>
          </DialogHeader>

          <Card className="w-full h-[500px] overflow-y-scroll">
            <CardHeader>
              <CardTitle>Resultado da Transcrição</CardTitle>
            </CardHeader>
            <CardContent>
              {!transcriptionResult ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Mic className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p>Os resultados aparecerão aqui após a transcrição</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Original Text */}
                  <div>
                    <h4 className="font-semibold mb-2">Texto Original:</h4>
                    <Textarea
                      value={transcriptionResult.original_text}
                      readOnly
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Structured Data */}
                  <div>
                    <h4 className="font-semibold mb-2">Dados Estruturados:</h4>
                    <div className="space-y-3">
                      {Object.entries(transcriptionResult.structured).map(
                        ([key, value]) => (
                          <div key={key}>
                            <label className="text-sm font-medium capitalize">
                              {key.replace("_", " ")}:
                            </label>
                            <Textarea
                              value={value as string}
                              readOnly
                              className="mt-1"
                              rows={3}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {transcriptionResult.medical_record_id && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        ✅ Prontuário criado com sucesso! ID:{" "}
                        {transcriptionResult.medical_record_id}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};
