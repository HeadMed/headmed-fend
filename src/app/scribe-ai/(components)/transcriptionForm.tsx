import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useTranscription } from "@/hooks/useTranscription";
import { FileAudio, Mic, NotebookPen, StopCircle, Upload, X } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface TranscriptionFormProps {
  id: number;
}

export const TranscriptionForm = ({ id }: TranscriptionFormProps) => {
  const { transcribe, transcribeForPatient, loading } = useTranscription();
  // const { patients } = usePatients();
  const [file, setFile] = useState<File | null>(null);
  const [transcriptionResult, setTranscriptionResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setAudioBlob(null); // limpa o áudio gravado
      setAudioSrc(null);
    }
  };

  const handleTranscribe = async () => {
    // Só permite um ativo
    const audioToSend =
      file ||
      (audioBlob
        ? new File([audioBlob], "gravacao.webm", { type: "audio/webm" })
        : null);
    if (!audioToSend) return;

    try {
      let result;
      setIsTranscribing(true);
      if (id) {
        result = await transcribeForPatient(id, audioToSend);
      } else {
        result = await transcribe(audioToSend);
      }
      setTranscriptionResult(result);
    } catch (error) {
      console.error("Erro na transcrição:", error);
    }
  };

  const resetForm = () => {
    setFile(null);
    setTranscriptionResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(blob);
        setAudioSrc(audioUrl);
        setAudioBlob(blob);
        console.log("Áudio gravado:", audioUrl);
      };

      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Erro ao acessar o microfone:", error);
    }
  };
  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state !== "inactive") {
      mediaRecorder.current.stop();
      setIsRecording(false);
      setFile(null);
    }
  };

  const AudioForm = () => {
    return (
      <div className="flex flex-col w-full space-y-4">
        <div>
          {isTranscribing ? (
            <p>Resultado da Transcrição</p>
          ) : (
            <p className="text-sm text-center sm:text-left sm:text-md">Clique no botão para gravar ou selecione um áudio para enviar</p>
          )}
        </div>
        <div className=" flex flex-col sm:flex-row items-center justify-between p-2 ">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-44 flex items-center space-x-2 bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer   ${
                isRecording ? "bg-red-500 hover:bg-red-500/80" : ""
              }`}
            >
              {isRecording ? (
                <StopCircle className="w-5 h-5" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
              <span>{isRecording ? "Parar Gravação" : "Iniciar Gravação"}</span>
            </Button>

            {/* Indicação de áudio gravado */}
            {audioBlob && !file && (
              <div className="relative flex flex-col items-center space-y-2 bg-zinc-50 rounded-lg p-4">
                {/* Botão X para remover */}
                <button
                  type="button"
                  onClick={() => {
                    setAudioBlob(null);
                    setAudioSrc(null);
                  }}
                  className="absolute top-2 right-2 text-zinc-400 hover:text-red-500"
                  aria-label="Remover áudio gravado"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-green-700 font-semibold">
                  Áudio gravado!
                </span>
                {audioSrc && <audio controls src={audioSrc} className="w-48" />}
              </div>
            )}

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
                        className="w-44 bg-brand-dark hover:bg-brand-dark/80 hover:cursor-pointer text-md font-semibold"
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
          <Button
            onClick={handleTranscribe}
            className="w-44 bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold"
            disabled={(!file && !audioBlob) || (!!file && !!audioBlob)}
          >
            Transcrever
            <NotebookPen strokeWidth="3" />
          </Button>
        </div>
      </div>
    );
  };

  const TranscriptionResult = () => {
    return (
      <div className="min-w-full">
        <Card className="w-full max-h-[50vh] overflow-y-scroll ">
          <CardHeader>
            <CardTitle>Resultado da Transcrição</CardTitle>
          </CardHeader>
          <CardContent className="">
            {!transcriptionResult ? (
              <div className="text-center py-8 text-muted-foreground flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-200"></div>
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
        <div className=" w-full flex justify-end mt-4">
          {transcriptionResult ? (
            <Link href={`/scribe-ai/patients/records/${id}`}>
              <Button className=" bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer">
                Salvar
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {isTranscribing ? <TranscriptionResult /> : <AudioForm />}
    </div>
  );
};
