"use client";
import React from 'react'
import { PatientCard } from '../(components)/patientCard';
import { usePatients } from '@/hooks/usePatients'; 
import { calculateAge } from '@/utils/utilsData';
export const PatientsPage = () => {
const { patients, loading, error } = usePatients();

  return (
    <div className="h-full flex-1 flex items-start justify-center">
      <div  className="flex-col w-full px-5 py-10 space-y-3">
        {patients.map((p) => (
          <PatientCard key={p.id} name={p.nome} id={p.id} cpf={p.cpf_display} idade={calculateAge(p.data_nascimento)} phone='(99) 9999-9999' qnt={p.prontuarios?.length || 0}  />
        ))}
      </div>
    </div>
  );
}


