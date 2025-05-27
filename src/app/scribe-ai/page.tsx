"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Menu,
  Brain,
  Mic,
  MicOff,
  Upload,
  FileText,
  Download,
  Copy,
  RefreshCw,
  Settings,
  LogOut,
  Home,
  History,
  User,
  Bell,
  Search,
  Filter,
  Play,
  Pause,
  Square,
  Volume2,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const ScribeAIPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedRecordType, setSelectedRecordType] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [generatedText, setGeneratedText] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const intervalRef = useRef(null);

  const recordTypes = [
    { value: 'consulta', label: 'Consulta Médica' },
    { value: 'anamnese', label: 'Anamnese' },
    { value: 'evolucao', label: 'Evolução' },
    { value: 'procedimento', label: 'Descrição de Procedimento' },
    { value: 'laudo_exame', label: 'Laudo de Exame' },
    { value: 'receita', label: 'Prescrição/Receita' },
    { value: 'atestado', label: 'Atestado Médico' },
    { value: 'relatorio', label: 'Relatório Médico' }
  ];

  // Timer para gravação
  useEffect(() => {
    if (isRecording && !isPaused) {
      intervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRecording, isPaused]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    setRecordingTime(0);
  };

  const pauseRecording = () => {
    setIsPaused(!isPaused);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    // Aqui você iniciaria o processamento
    processAudio();
  };

  const processAudio = () => {
    setIsProcessing(true);
    setProcessingProgress(0);
    
    // Simular processamento com progresso
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setGeneratedText(`
**CONSULTA MÉDICA**

**Data:** ${new Date().toLocaleDateString('pt-BR')}
**Paciente:** [Nome do Paciente]
**Médico:** Dr. [Nome do Médico]

**HISTÓRIA CLÍNICA:**
Paciente comparece à consulta referindo quadro de dor abdominal há 3 dias, localizada em região epigástrica, de caráter queimante, com piora após alimentação. Nega febre, náuseas ou vômitos. Relata episódios similares nos últimos 6 meses.

**EXAME FÍSICO:**
- Estado geral: Bom
- Sinais vitais: PA 120/80 mmHg, FC 72 bpm, Tax 36.5°C
- Abdome: Dor à palpação superficial em epigástrio, sem sinais de irritação peritoneal

**HIPÓTESES DIAGNÓSTICAS:**
1. Gastrite
2. Úlcera péptica
3. Refluxo gastroesofágico

**CONDUTA:**
- Solicitada endoscopia digestiva alta
- Prescrição de omeprazol 40mg/dia
- Orientações dietéticas
- Retorno em 15 dias

**OBSERVAÇÕES:**
Paciente orientado sobre sinais de alarme e quando procurar atendimento médico.
          `);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('audio/')) {
        setAudioFile(file);
      }
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-brand-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72">
                  <SheetHeader>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-200 to-brand-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <SheetTitle className="text-xl font-bold text-brand-dark">HeadMed</SheetTitle>
                    </div>
                  </SheetHeader>

                  <nav className="mt-8 space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-brand-200 bg-brand-50">
                      <Brain className="w-5 h-5 mr-3" />
                      Scribe AI
                    </Button>
                    <Button variant="ghost" className="w-full justify-start hover:bg-slate-100">
                      <Home className="w-5 h-5 mr-3" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start hover:bg-slate-100">
                      <History className="w-5 h-5 mr-3" />
                      Histórico
                    </Button>
                    <Button variant="ghost" className="w-full justify-start hover:bg-slate-100">
                      <User className="w-5 h-5 mr-3" />
                      Perfil
                    </Button>
                    <Button variant="ghost" className="w-full justify-start hover:bg-slate-100">
                      <Settings className="w-5 h-5 mr-3" />
                      Configurações
                    </Button>
                  </nav>

                  <div className="absolute bottom-6 left-6 right-6">
                    <Button variant="destructive" className="w-full">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sair
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-200 to-brand-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">HeadMed Scribe</h1>
                  <p className="text-sm text-slate-500">IA para Documentação Médica</p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                <Bell className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/oartuu.png" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Bar */}
        {(isRecording || isProcessing) && (
          <div className="mb-6 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            {isRecording && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-slate-900">Gravando</span>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    {formatTime(recordingTime)}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={pauseRecording}
                    variant="outline"
                    size="sm"
                    className="border-slate-300"
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    {isPaused ? 'Retomar' : 'Pausar'}
                  </Button>
                  <Button
                    onClick={stopRecording}
                    variant="destructive"
                    size="sm"
                  >
                    <Square className="w-4 h-4 mr-2" />
                    Parar
                  </Button>
                </div>
              </div>
            )}

            {isProcessing && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="w-5 h-5 text-brand-200 animate-spin" />
                    <span className="font-medium text-slate-900">Processando áudio...</span>
                  </div>
                  <span className="text-sm text-slate-500">{processingProgress}%</span>
                </div>
                <Progress value={processingProgress} className="h-2" />
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-6">
            {/* Record Type Selector */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-brand-200" />
                  Tipo de Documento
                </CardTitle>
                <CardDescription>
                  Selecione o tipo de documento médico que deseja gerar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedRecordType}>
                  <SelectTrigger className="h-12 border-slate-300 focus:border-brand-200">
                    <SelectValue placeholder="Selecione o tipo de documento" />
                  </SelectTrigger>
                  <SelectContent>
                    {recordTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Audio Recording */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mic className="w-5 h-5 mr-2 text-brand-200" />
                  Gravação de Áudio
                </CardTitle>
                <CardDescription>
                  Grave sua consulta ou ditado médico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Recording Controls */}
                  <div className="flex justify-center">
                    {!isRecording ? (
                      <Button
                        onClick={startRecording}
                        disabled={!selectedRecordType}
                        className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-200 to-brand-dark hover:from-brand-200/90 hover:to-brand-dark/90 shadow-lg hover:shadow-xl transition-all"
                      >
                        <Mic className="w-8 h-8 text-white" />
                      </Button>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <Button
                          onClick={pauseRecording}
                          variant="outline"
                          className="h-12 w-12 rounded-full border-slate-300"
                        >
                          {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
                        </Button>
                        <Button
                          onClick={stopRecording}
                          variant="destructive"
                          className="h-12 w-12 rounded-full"
                        >
                          <Square className="w-6 h-6" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {!selectedRecordType && (
                    <p className="text-center text-sm text-slate-500">
                      Selecione um tipo de documento para começar a gravar
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-brand-200" />
                  Upload de Arquivo
                </CardTitle>
                <CardDescription>
                  Ou faça upload de um arquivo de áudio existente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    dragActive
                      ? 'border-brand-200 bg-brand-50'
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-2">
                    Arraste um arquivo de áudio aqui ou clique para selecionar
                  </p>
                  <p className="text-sm text-slate-500 mb-4">
                    Suporta MP3, WAV, M4A (máx. 100MB)
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="border-slate-300"
                  >
                    Selecionar Arquivo
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {audioFile && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Volume2 className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium text-green-800">{audioFile.name}</p>
                          <p className="text-sm text-green-600">
                            {(audioFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={processAudio}
                        disabled={!selectedRecordType}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Processar
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Output */}
          <div className="space-y-6">
            {/* Generated Document */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand-200" />
                      Documento Gerado
                    </CardTitle>
                    <CardDescription>
                      Resultado da transcrição e estruturação automática
                    </CardDescription>
                  </div>
                  {generatedText && (
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        size="sm"
                        className="border-slate-300"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {generatedText ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Documento gerado com sucesso</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Precisão: 94%
                      </Badge>
                    </div>
                    <Textarea
                      value={generatedText}
                      onChange={(e) => setGeneratedText(e.target.value)}
                      className="min-h-[400px] border-slate-300 focus:border-brand-200 font-mono text-sm"
                      placeholder="O documento gerado aparecerá aqui..."
                    />
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Brain className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 mb-2">
                      Aguardando entrada de áudio
                    </p>
                    <p className="text-sm text-slate-400">
                      Grave sua consulta ou faça upload de um arquivo para começar
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Documents */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="w-5 h-5 mr-2 text-brand-200" />
                  Documentos Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: 'Consulta - João Silva', time: '2h atrás', type: 'Consulta Médica' },
                    { title: 'Anamnese - Maria Santos', time: '4h atrás', type: 'Anamnese' },
                    { title: 'Laudo ECG - Pedro Costa', time: '1d atrás', type: 'Laudo de Exame' }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-slate-400" />
                        <div>
                          <p className="font-medium text-slate-900">{doc.title}</p>
                          <p className="text-sm text-slate-500">{doc.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">{doc.time}</p>
                        <Clock className="w-4 h-4 text-slate-400 ml-auto" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScribeAIPage;