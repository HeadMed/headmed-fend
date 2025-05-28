// src/hooks/usePatients.ts
"use client";

import { useState, useEffect, useCallback } from "react";
import { apiService } from "@/lib/api";

export interface Patient {
  id: number;
  nome: string;
  cpf: string;
  data_nascimento: string;
  created_at: string;
  prontuarios?: MedicalRecord[];
}

export interface MedicalRecord {
  id: number;
  patient_id: number;
  queixa_principal?: string;
  historia_doenca_atual?: string;
  antecedentes?: string;
  exame_fisico?: string;
  hipotese_diagnostica?: string;
  conduta?: string;
  prescricao?: string;
  encaminhamentos?: string;
  original_transcription?: string;
  created_at: string;
}

export function usePatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPatients = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // sem argumento
      const data = await apiService.getPatients();
      // como o backend retorna um array puro:
      setPatients(data);
    } catch (err: any) {
      setError(err.message || "Erro ao buscar pacientes");
    } finally {
      setLoading(false);
    }
  }, []);

  const createPatient = async (patientData: {
    nome: string;
    cpf: string;
    data_nascimento: string;
  }) => {
    try {
      const newPatient = await apiService.createPatient(patientData);
      setPatients((prev) => [...prev, newPatient]);
      return newPatient;
    } catch (err) {
      throw new Error("Erro ao criar paciente");
    }
  };

  const updatePatient = async (
    id: number,
    data: Partial<{ nome: string; cpf: string; data_nascimento: string }>
  ) => {
    try {
      const updatedPatient = await apiService.updatePatient(id, data);
      setPatients((prev) =>
        prev.map((p) => (p.id === id ? updatedPatient : p))
      );
      return updatedPatient;
    } catch (err) {
      throw new Error("Erro ao atualizar paciente");
    }
  };

  const deletePatient = async (id: number) => {
    try {
      await apiService.deletePatient(id);
      setPatients((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      throw new Error("Erro ao deletar paciente");
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  return {
    patients,
    loading,
    error,
    refetch: fetchPatients,
    createPatient,
    updatePatient,
    deletePatient,
  };
}
