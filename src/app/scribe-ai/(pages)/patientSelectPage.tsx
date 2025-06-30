import { UserRound, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const PatientSelectPage = () => {
  
  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <div className="px-4 w-sm sm:w-1/2 flex flex-col items-center gap-10">
        <h1 className="text-left text-3xl sm:text-6xl font-bold p-4">
          Selecione um <span className="text-brand-200">paciente</span> para
          começar a transcrever a consulta
        </h1>
        <div className="w-3/4 sm:w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
          <Link href="/scribe-ai/patients">
            <Button className="w-56 bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-lg font-semibold px-7 py-4 ">
              Ver pacientes <UserRound strokeWidth="3.5" size={30} />
            </Button>
          </Link>
          <Link href="/scribe-ai/patients/add">
            <Button
              variant="outline"
              className="w-56 hover:cursor-pointer text-lg font-semibold px-7 py-4"
            >
              Adicionar paciente <UserRoundPlus strokeWidth="3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
