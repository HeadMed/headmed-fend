"use client";
import React from 'react'
import { PatientCard } from '../(components)/patientCard';
import { usePatients } from '@/hooks/usePatients'; 
export const PatientsPage = () => {
const { patients, loading, error } = usePatients();

  return (
    <div className="h-full flex-1 flex items-center justify-center ">
      <div  className="w-3/4 grid grid-cols-3 grid-rows-2 md:grid-cols-2 gap-4">
        {patients.map((p) => (
          <PatientCard key={p.id} name={p.nome} id={p.id} />
        ))}
      </div>
    </div>
  );
}


