// src/app/patients/page.tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { usePatients } from '@/hooks/usePatients';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

export default function PatientsPage() {
  return (
    <ProtectedRoute>
      <PatientsContent />
    </ProtectedRoute>
  );
}

function PatientsContent() {
  const { patients, loading, createPatient, deletePatient } = usePatients();
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({
    nome: '',
    cpf: '',
    data_nascimento: ''
  });

  const filteredPatients = patients.filter(patient =>
    patient.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.cpf.includes(searchTerm)
  );

  const handleCreatePatient = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPatient(newPatient);
      setNewPatient({ nome: '', cpf: '', data_nascimento: '' });
      setIsCreateDialogOpen(false);
    } catch (error) {
      console.error('Erro ao criar paciente:', error);
    }
  };

  const handleDeletePatient = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar este paciente?')) {
      try {
        await deletePatient(id);
      } catch (error) {
        console.error('Erro ao deletar paciente:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Pacientes</h1>
          <p className="text-muted-foreground">Gerencie seus pacientes</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-brand-200 hover:bg-brand-200/80">
              <Plus className="h-4 w-4 mr-2" />
              Novo Paciente
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Paciente</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreatePatient} className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  value={newPatient.nome}
                  onChange={(e) => setNewPatient({ ...newPatient, nome: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  id="cpf"
                  value={newPatient.cpf}
                  onChange={(e) => setNewPatient({ ...newPatient, cpf: e.target.value })}
                  placeholder="000.000.000-00"
                  required
                />
              </div>
              <div>
                <Label htmlFor="data_nascimento">Data de Nascimento</Label>
                <Input
                  id="data_nascimento"
                  type="date"
                  value={newPatient.data_nascimento}
                  onChange={(e) => setNewPatient({ ...newPatient, data_nascimento: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-brand-200 hover:bg-brand-200/80">
                  Cadastrar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou CPF..."
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
            <div>Carregando pacientes...</div>
          </CardContent>
        </Card>
      ) : filteredPatients.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="text-muted-foreground">
              {searchTerm ? 'Nenhum paciente encontrado' : 'Nenhum paciente cadastrado'}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredPatients.map((patient) => (
            <Card key={patient.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{patient.nome}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                      <span>CPF: {patient.cpf}</span>
                      <span>Nascimento: {format(new Date(patient.data_nascimento), 'dd/MM/yyyy')}</span>
                    </div>
                    {patient.prontuarios && patient.prontuarios.length > 0 && (
                      <Badge variant="secondary" className="mt-2">
                        {patient.prontuarios.length} prontuário(s)
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/patients/${patient.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeletePatient(patient.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
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