import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export const AddPatientPage = () => {
  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <Card className="w-96">
        <CardHeader className="text-center">
          <span className="font-bold text-2xl">Adicionar Paciente</span>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="py-3">
            <Label htmlFor="name" className="text-md text-brand-dark mb-3">
              Nome
            </Label>
            <Input name="name" placeholder="Insira o nome do paciente" />
          </div>
          <div>
            <Label htmlFor="cpf" className="text-md text-brand-dark mb-3">
              CPF
            </Label>
            <Input
              name="CPF"
              placeholder="Insira o cpf do paciente"
              type="text"
            />
          </div>
          <div>
            <Label
              htmlFor="dateOfBirth"
              className="text-md text-brand-dark mb-3"
            >
              Data de Nascimento
            </Label>
            <Input
              name="dateOfBirth"
              placeholder="data de nascimento do paciente"
              type="date"
            />
          </div>
          <Separator  />
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer">
            Adicionar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}


