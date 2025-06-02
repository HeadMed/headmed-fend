"use client";

import { useState, useEffect, useCallback } from "react";
import { apiService } from "@/lib/api";

export interface Patient {
  id: number;
  nome: string;
  cpf_display: string;
  data_nascimento: string;
  created_at: string;
  prontuarios?: MedicalRecord[];
  idade: number;
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
  const [patient, setPatient] = useState<Patient>()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPatients = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getPatients();
      
      const patientsWithRecords = await Promise.all(
        data.map(async (patient: Patient) => { 
          try {
            const records = await apiService.getPatientRecords(patient.id);
            return { ...patient, prontuarios: records };
          } catch {
            return { ...patient, prontuarios: [] };
          }
        })
      );
      
      setPatients(patientsWithRecords);
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

  const getPatient = async (id: number) => {
    try {
      const data = await apiService.getPatient(id)
      setPatient(data);
    } catch {
      console.error("Erro ao buscar paciente");
    }
  }

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  return {
    patients,
    loading,
    error,
    patient,
    refetch: fetchPatients,
    createPatient,
    updatePatient,
    setPatient, 
    getPatient
  };
}