'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { usePatients } from '@/hooks/usePatients';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu, Users, FileText, Mic, Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/Logo.svg';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { user, logout } = useAuth();
  const { patients, loading } = usePatients();

  return (
    <div className="h-dvh w-full">
      {/* Header */}
      <div className="w-full h-16 bg-zinc-100 shadow-lg flex items-center justify-between p-2">
        <div className="flex items-center justify-center gap-2">
          <Sheet>
            <SheetTrigger className="hover:cursor-pointer" asChild>
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl text-black">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-between px-3 py-4 h-[100%]">
                <div className="flex flex-col gap-7 space-y-2 py-2 px-3">
                  <Link href="/dashboard" className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Dashboard</span>
                    <Separator />
                  </Link>
                  <Link href="/patients" className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Pacientes</span>
                    <Separator />
                  </Link>
                  <Link href="/transcribe" className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Transcrições</span>
                    <Separator />
                  </Link>
                  <Link href="/records" className="space-y-2 hover:cursor-pointer">
                    <span className="font-bold text-xl">Prontuários</span>
                    <Separator />
                  </Link>
                </div>
                <Button variant="destructive" className="w-full" onClick={logout}>
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <Image className="mb-2" src={Logo} alt="HeadMed logo" width={108.5} height={30} />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Olá, {user?.username}</span>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>{user?.username?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo ao seu painel de controle médico</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Pacientes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : patients.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transcrições do Mês</CardTitle>
              <Mic className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prontuários</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/transcribe">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Mic className="h-8 w-8 text-brand-200 mb-2" />
                <h3 className="font-semibold">Nova Transcrição</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Transcreva uma consulta médica
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/patients/new">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Plus className="h-8 w-8 text-brand-200 mb-2" />
                <h3 className="font-semibold">Novo Paciente</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Cadastrar novo paciente
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/patients">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Users className="h-8 w-8 text-brand-200 mb-2" />
                <h3 className="font-semibold">Ver Pacientes</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Gerenciar pacientes
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/records">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <FileText className="h-8 w-8 text-brand-200 mb-2" />
                <h3 className="font-semibold">Prontuários</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Ver todos os prontuários
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Patients */}
        <Card>
          <CardHeader>
            <CardTitle>Pacientes Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div>Carregando...</div>
            ) : patients.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Nenhum paciente cadastrado ainda</p>
                <Link href="/patients/new">
                  <Button className="mt-4">Cadastrar Primeiro Paciente</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {patients.slice(0, 5).map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{patient.nome}</h4>
                      <p className="text-sm text-muted-foreground">CPF: {patient.cpf}</p>
                    </div>
                    <Link href={`/patients/${patient.id}`}>
                      <Button variant="outline" size="sm">Ver Detalhes</Button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}