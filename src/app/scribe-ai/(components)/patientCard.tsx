import React from "react";
import { Badge, NotebookPen, Phone, UserRound, FileText, Clock, MoreVertical, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface PatientCardProps {
  name: string;
  id: number;
  cpf: string;
  idade: number;
  phone: string;
  qnt: number;
}

export const PatientCard = ({name, id, cpf, idade, phone, qnt}:PatientCardProps) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center space-x-4">
            
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-700 font-medium text-lg">
                {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
            
            <div className="flex flex-col space-y-1">
              <h3 className="text-lg font-medium">{name}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>CPF: {cpf}</span>
                <span>Idade: {idade} anos</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Phone size={14} />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText size={14} />
                  <span>{qnt} prontuário(s)</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Clock size={14} />
                <span>Última consulta: xx/xx/xxxx</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Link href={`/scribe-ai/patients/records/${id}`}>
              <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                <FileText size={16} className="mr-2" />
                Prontuários
              </Button>
            </Link>
            
            <Link href={`/scribe-ai/transcribe/${id}`}>
              <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-md font-semibold">
                <NotebookPen className="mr-2" /> Nova transcrição
              </Button>
          </Link>

            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};