// src/app/patients/new/page.tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { usePatients } from '@/hooks/usePatients';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function NewPatientPage() {
  return (
    <ProtectedRoute>
      <NewPatientContent />
    </ProtectedRoute>
  );
}

function NewPatientContent() {
  const { createPatient } = usePatients();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    data_nascimento: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const newPatient = await createPatient(formData);
      router.push(`/patients/${newPatient.id}`);
    } catch (err) {
      setError('Erro ao criar paciente. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/patients">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Novo Paciente</h1>
          <p className="text-muted-foreground">Cadastre um novo paciente no sistema</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Informações do Paciente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <Label htmlFor="nome" className="text-sm font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  placeholder="Digite o nome completo do paciente"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="cpf" className="text-sm font-medium">
                  CPF *
                </Label>
                <Input
                  id="cpf"
                  value={formData.cpf}
                  onChange={(e) => handleChange('cpf', e.target.value)}
                  placeholder="000.000.000-00"
                  maxLength={14}
                  required
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Digite apenas os números ou no formato XXX.XXX.XXX-XX
                </p>
              </div>

              <div>
                <Label htmlFor="data_nascimento" className="text-sm font-medium">
                  Data de Nascimento *
                </Label>
                <Input
                  id="data_nascimento"
                  type="date"
                  value={formData.data_nascimento}
                  onChange={(e) => handleChange('data_nascimento', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-brand-200 hover:bg-brand-200/80"
              >
                {loading ? 'Cadastrando...' : 'Cadastrar Paciente'}
              </Button>
              <Link href="/patients">
                <Button type="button" variant="outline" className="px-8">
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">Dica:</p>
              <p>
                Após cadastrar o paciente, você poderá criar transcrições médicas 
                diretamente vinculadas a ele, facilitando o histórico e acompanhamento.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}