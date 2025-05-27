// src/app/patients/[id]/page.tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { apiService } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Edit, Save, X } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

export default function PatientDetailPage() {
  return (
    <ProtectedRoute>
      <PatientDetailContent />
    </ProtectedRoute>
  );
}

function PatientDetailContent() {
  const params = useParams();
  const router = useRouter();
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({ nome: '', cpf: '', data_nascimento: '' });

  useEffect(() => {
    if (params.id) {
      fetchPatient();
    }
  }, [params.id]);

  const fetchPatient = async () => {
    try {
      const data = await apiService.getPatient(Number(params.id));
      setPatient(data);
      setEditData({
        nome: data.nome,
        cpf: data.cpf,
        data_nascimento: data.data_nascimento
      });
    } catch (error) {
      console.error('Erro ao carregar paciente:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await apiService.updatePatient(Number(params.id), editData);
      setPatient({ ...patient, ...editData });
      setEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error);
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
        <Link href="/patients">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">{patient.nome}</h1>
          <p className="text-muted-foreground">Detalhes do paciente</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Patient Info */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Informações Pessoais</CardTitle>
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
            <CardContent className="space-y-4">
              {editing ? (
                <>
                  <div>
                    <Label>Nome Completo</Label>
                    <Input
                      value={editData.nome}
                      onChange={(e) => setEditData({ ...editData, nome: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>CPF</Label>
                    <Input
                      value={editData.cpf}
                      onChange={(e) => setEditData({ ...editData, cpf: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Data de Nascimento</Label>
                    <Input
                      type="date"
                      value={editData.data_nascimento}
                      onChange={(e) => setEditData({ ...editData, data_nascimento: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Label>Nome Completo</Label>
                    <p className="font-medium">{patient.nome}</p>
                  </div>
                  <div>
                    <Label>CPF</Label>
                    <p className="font-medium">{patient.cpf}</p>
                  </div>
                  <div>
                    <Label>Data de Nascimento</Label>
                    <p className="font-medium">{format(new Date(patient.data_nascimento), 'dd/MM/yyyy')}</p>
                  </div>
                  <div>
                    <Label>Cadastrado em</Label>
                    <p className="font-medium">{format(new Date(patient.created_at), 'dd/MM/yyyy HH:mm')}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Medical Records */}
          <Card>
            <CardHeader>
              <CardTitle>Prontuários Médicos</CardTitle>
            </CardHeader>
            <CardContent>
              {!patient.prontuarios || patient.prontuarios.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Nenhum prontuário registrado</p>
                  <Link href={`/transcribe?patient=${patient.id}`}>
                    <Button className="mt-4 bg-brand-200 hover:bg-brand-200/80">
                      Criar Primeiro Prontuário
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {patient.prontuarios.map((record: any) => (
                    <div key={record.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Consulta #{record.id}</h4>
                        <Badge variant="secondary">
                          {format(new Date(record.created_at), 'dd/MM/yyyy')}
                        </Badge>
                      </div>
                      {record.queixa_principal && (
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Queixa:</strong> {record.queixa_principal}
                        </p>
                      )}
                      <Link href={`/records/${record.id}`}>
                        <Button variant="outline" size="sm">Ver Detalhes</Button>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href={`/transcribe?patient=${patient.id}`}>
                <Button className="w-full bg-brand-200 hover:bg-brand-200/80">
                  Nova Transcrição
                </Button>
              </Link>
              <Link href={`/patients/${patient.id}/records`}>
                <Button variant="outline" className="w-full">
                  Ver Todos os Prontuários
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total de Consultas:</span>
                  <span className="font-semibold">{patient.prontuarios?.length || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Primeira Consulta:</span>
                  <span className="font-semibold">
                    {patient.prontuarios?.length > 0 
                      ? format(new Date(patient.prontuarios[patient.prontuarios.length - 1].created_at), 'dd/MM/yyyy')
                      : 'N/A'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Última Consulta:</span>
                  <span className="font-semibold">
                    {patient.prontuarios?.length > 0 
                      ? format(new Date(patient.prontuarios[0].created_at), 'dd/MM/yyyy')
                      : 'N/A'
                    }
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
