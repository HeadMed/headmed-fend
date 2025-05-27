// src/app/records/page.tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useState, useEffect } from 'react';
import { apiService } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, FileText, User } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

export default function RecordsPage() {
  return (
    <ProtectedRoute>
      <RecordsContent />
    </ProtectedRoute>
  );
}

function RecordsContent() {
  const [records, setRecords] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const patientsData = await apiService.getPatients();
      setPatients(patientsData);
      
      // Collect all records from all patients
      const allRecords = patientsData.flatMap((patient: any) => 
        (patient.prontuarios || []).map((record: any) => ({
          ...record,
          patient_name: patient.nome,
          patient_cpf: patient.cpf
        }))
      );
      
      setRecords(allRecords.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredRecords = records.filter(record =>
    record.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.patient_cpf.includes(searchTerm) ||
    (record.queixa_principal && record.queixa_principal.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Prontuários Médicos</h1>
        <p className="text-muted-foreground">Todos os prontuários do sistema</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por paciente, CPF ou queixa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <Card>
          <CardContent className="p-8 text-center">
            <div>Carregando prontuários...</div>
          </CardContent>
        </Card>
      ) : filteredRecords.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
            <div className="text-muted-foreground">
              {searchTerm ? 'Nenhum prontuário encontrado' : 'Nenhum prontuário registrado'}
            </div>
            {!searchTerm && (
              <Link href="/transcribe">
                <Button className="mt-4 bg-brand-200 hover:bg-brand-200/80">
                  Criar Primeiro Prontuário
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredRecords.map((record) => (
            <Card key={record.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">Consulta #{record.id}</h3>
                      <Badge variant="secondary">
                        {format(new Date(record.created_at), 'dd/MM/yyyy HH:mm')}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <User className="h-4 w-4" />
                      <span>{record.patient_name} - {record.patient_cpf}</span>
                    </div>

                    {record.queixa_principal && (
                      <div className="mb-2">
                        <span className="text-sm font-medium">Queixa Principal:</span>
                        <p className="text-sm text-muted-foreground">{record.queixa_principal}</p>
                      </div>
                    )}

                    {record.hipotese_diagnostica && (
                      <div>
                        <span className="text-sm font-medium">Diagnóstico:</span>
                        <p className="text-sm text-muted-foreground">{record.hipotese_diagnostica}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link href={`/records/${record.id}`}>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </Link>
                    <Link href={`/patients/${record.patient_id}`}>
                      <Button variant="outline" size="sm">
                        Ver Paciente
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}