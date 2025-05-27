// src/app/transcribe/page.tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useTranscription } from '@/hooks/useTranscription';
import { usePatients } from '@/hooks/usePatients';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState, useRef } from 'react';
import { Upload, Mic, FileAudio, User } from 'lucide-react';

export default function TranscribePage() {
  return (
    <ProtectedRoute>
      <TranscribeContent />
    </ProtectedRoute>
  );
}

function TranscribeContent() {
  const { transcribe, transcribeForPatient, loading } = useTranscription();
  const { patients } = usePatients();
  const [file, setFile] = useState<File | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<string>('');
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
      console.error('Erro na transcrição:', error);
    }
  };

  const resetForm = () => {
    setFile(null);
    setSelectedPatient('');
    setTranscriptionResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Transcrição de Áudio</h1>
        <p className="text-muted-foreground">Transcreva consultas médicas com IA</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Patient Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Paciente (Opcional)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um paciente para vincular a transcrição" />
                </SelectTrigger>
                <SelectContent>
                  {patients.map((patient) => (
                    <SelectItem key={patient.id} value={patient.id.toString()}>
                      {patient.nome} - {patient.cpf}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileAudio className="h-5 w-5" />
                Upload de Áudio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {file ? (
                  <div className="space-y-4">
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
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div>
                      <p className="text-lg font-medium">Selecione um arquivo de áudio</p>
                      <p className="text-sm text-muted-foreground">
                        Suporta MP3, WAV, M4A e outros formatos
                      </p>
                    </div>
                    <Button onClick={() => fileInputRef.current?.click()}>
                      Selecionar Arquivo
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              onClick={handleTranscribe}
              disabled={!file || loading}
              className="flex-1 bg-brand-200 hover:bg-brand-200/80"
            >
              {loading ? 'Transcrevendo...' : 'Iniciar Transcrição'}
            </Button>
            <Button variant="outline" onClick={resetForm}>
              Limpar
            </Button>
          </div>
        </div>

        {/* Results */}
        <div>
          <Card>
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
                      {Object.entries(transcriptionResult.structured).map(([key, value]) => (
                        <div key={key}>
                          <label className="text-sm font-medium capitalize">
                            {key.replace('_', ' ')}:
                          </label>
                          <Textarea
                            value={value as string}
                            readOnly
                            className="mt-1"
                            rows={3}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {transcriptionResult.medical_record_id && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        ✅ Prontuário criado com sucesso! ID: {transcriptionResult.medical_record_id}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}