import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePatients } from "@/hooks/usePatients";
export const AddPatientPage = () => {
  const { createPatient } = usePatients();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    data_nascimento: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const newPatient = await createPatient(formData);
      router.push("/scribe-ai/patients");
    } catch (err) {
      setError("Erro ao criar paciente. Verifique os dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <Card className="w-96">
        <CardHeader className="text-center">
          <span className="font-bold text-2xl">Adicionar Paciente</span>
          <Separator />
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="flex flex-col gap-4">
            <div className="py-3">
              <Label htmlFor="name" className="text-md text-brand-dark mb-3">
                Nome
              </Label>
              <Input
                name="name"
                value={formData.nome}
                placeholder="Insira o nome do paciente"
                onChange={(e) => handleChange("nome", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="cpf" className="text-md text-brand-dark mb-3">
                CPF
              </Label>
              <Input
                name="CPF"
                placeholder="Insira o cpf do paciente"
                type="text"
                value={formData.cpf}
                onChange={(e) => handleChange("cpf", e.target.value)}
                required
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
                value={formData.data_nascimento}
                onChange={(e) =>
                  handleChange("data_nascimento", e.target.value)
                }
                required
              />
            </div>
            <Separator />
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer">
              Adicionar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
