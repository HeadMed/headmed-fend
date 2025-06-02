"use client";
import React, { useState } from 'react'
import { PatientCard } from '../(components)/patientCard';
import { usePatients } from '@/hooks/usePatients'; 
import { calculateAge } from '@/utils/utilsData';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
export const PatientsPage = () => {
const { patients, loading, error } = usePatients();
const [search, setSearch] = useState("")

const filteredPatients = patients.filter((p) =>
  p.nome.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div className="h-full flex-1 flex flex-col ">
      <div className="z-100 min-h-16 w-full bg-zinc-100 shadow-lg flex items-center justify-start px-4 ">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="search "
            placeholder="Pesquisar paciente"
            className="w-96 pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-col w-full px-5 py-10 space-y-3 overflow-y-scroll ">
        {filteredPatients.map((p) => (
          <PatientCard
            key={p.id}
            name={p.nome}
            id={p.id}
            cpf={p.cpf_display}
            idade={calculateAge(p.data_nascimento)}
            phone="(99) 9999-9999"
            qnt={p.prontuarios?.length || 0}
          />
        ))}
      </div>
    </div>
  );
}


