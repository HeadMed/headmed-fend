// src/app/records/[id]/page.tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { apiService } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, FileText, User, Edit, Save, X } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

export default function RecordDetailPage() {
  return (
    <ProtectedRoute>
      <RecordDetailContent />
    </ProtectedRoute>
  );
}

function RecordDetailContent() {
  const params = useParams();
  const [record, setRecord] = useState<any>(null);
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState<any>({});

  useEffect(() => {
    if (params.id) {
      fetchRecord();
    }
  }, [params.id]);

  const fetchRecord = async () => {
    try {
      const recordData = await apiService.getRecord(Number(params.id));
      setRecord(recordData);
      setEditData(recordData);
      
      // Get patient info
      const patientData = await apiService.getPatient(recordData.patient_id);
      setPatient(patientData);
    } catch (error) {
      console.error('Erro ao carregar prontuário:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const updatedRecord = await apiService.updateRecord(Number(params.id), {
        queixa_principal: editData.queixa_principal,
        historia_doenca_atual: editData.historia_doenca_atual,
        antecedentes: editData.antecedentes,
        exame_fisico: editData.exame_fisico,
        hipotese_diagnostica: editData.hipotese_diagnostica,
        conduta: editData.conduta,
        prescricao: editData.prescricao,
        encaminhamentos: editData.encaminhamentos,
      });
      setRecord(updatedRecord);
      setEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar prontuário:', error);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-6">Carregando...</div>;
  }

  if (!record) {
    return <div className="container mx-auto p-6">Prontuário não encontrado</div>;
  }

  const fields = [
    { key: 'queixa_principal', label: 'Queixa Principal' },
    { key: 'historia_doenca_atual', label: 'História da Doença Atual' },
    { key: 'antecedentes', label: 'Antecedentes' },
    { key: 'exame_fisico', label: 'Exame Físico' },
    { key: 'hipotese_diagnostica', label: 'Hipótese Diagnóstica' },
    { key: 'conduta', label: 'Conduta' },
    { key: 'prescricao', label: 'Prescrição' },
    { key: 'encaminhamentos', label: 'Encaminhamentos' },
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href={patient ? `/patients/${patient.id}/records` : '/records'}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Consulta #{record.id}</h1>
          <p className="text-muted-foreground">
            {format(new Date(record.created_at), 'dd/MM/yyyy HH:mm')}
          </p>
        </div>
      </div>

      {patient && (
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{patient.nome}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">CPF: {patient.cpf}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Nascimento: {format(new Date(patient.data_nascimento), 'dd/MM/yyyy')}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Detalhes da Consulta
          </CardTitle>
          {!editing ? (
            <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button size="sm" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Salvar
              </Button>
              <Button variant="outline" size="sm" onClick={() => setEditing(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {fields.map((field) => (
            <div key={field.key}>
              <h4 className="font-medium mb-2">{field.label}:</h4>
              {editing ? (
                <Textarea
                  value={editData[field.key] || ''}
                  onChange={(e) => setEditData({...editData, [field.key]: e.target.value})}
                  rows={3}
                  placeholder={`Digite ${field.label.toLowerCase()}...`}
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-md min-h-[80px]">
                  {record[field.key] || <span className="text-muted-foreground italic">Não informado</span>}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {record.original_transcription && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Transcrição Original</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-gray-50 rounded-md">
              {record.original_transcription}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}