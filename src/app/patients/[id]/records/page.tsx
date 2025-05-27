// src/app/patients/[id]/records/page.tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { apiService } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, FileText, User, Plus } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

export default function PatientRecordsPage() {
  return (
    <ProtectedRoute>
      <PatientRecordsContent />
    </ProtectedRoute>
  );
}

function PatientRecordsContent() {
  const params = useParams();
  const [patient, setPatient] = useState<any>(null);
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  const fetchData = async () => {
    try {
      const [patientData, recordsData] = await Promise.all([
        apiService.getPatient(Number(params.id)),
        apiService.getPatientRecords(Number(params.id))
      ]);
      setPatient(patientData);
      setRecords(recordsData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-6">Carregando...</div>;
  }

  if (!patient) {
    return <div className="container mx-auto p-6">Paciente não encontrado</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/patients/${params.id}`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Prontuários de {patient.nome}</h1>
          <p className="text-muted-foreground">Histórico médico completo</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">CPF: {patient.cpf}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">
            Nascimento: {format(new Date(patient.data_nascimento), 'dd/MM/yyyy')}
          </span>
        </div>
        <Link href={`/transcribe?patient=${patient.id}`}>
          <Button className="bg-brand-200 hover:bg-brand-200/80">
            <Plus className="h-4 w-4 mr-2" />
            Nova Consulta
          </Button>
        </Link>
      </div>

      {records.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
            <h3 className="font-semibold mb-2">Nenhum prontuário encontrado</h3>
            <p className="text-muted-foreground mb-4">
              Este paciente ainda não possui consultas registradas.
            </p>
            <Link href={`/transcribe?patient=${patient.id}`}>
              <Button className="bg-brand-200 hover:bg-brand-200/80">
                Criar Primeira Consulta
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {records.map((record) => (
            <Card key={record.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Consulta #{record.id}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {format(new Date(record.created_at), 'dd/MM/yyyy HH:mm')}
                    </Badge>
                  </div>
                  <Link href={`/records/${record.id}`}>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {record.queixa_principal && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">
                        Queixa Principal
                      </h4>
                      <p className="text-sm">{record.queixa_principal}</p>
                    </div>
                  )}

                  {record.hipotese_diagnostica && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">
                        Hipótese Diagnóstica
                      </h4>
                      <p className="text-sm">{record.hipotese_diagnostica}</p>
                    </div>
                  )}

                  {record.conduta && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">
                        Conduta
                      </h4>
                      <p className="text-sm">{record.conduta}</p>
                    </div>
                  )}

                  {record.prescricao && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">
                        Prescrição
                      </h4>
                      <p className="text-sm">{record.prescricao}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}