import { UserRound, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";


export const HomePage = () => {
  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <div className="w-1/2 flex flex-col items-center gap-10">
        <h1 className="text-left text-6xl font-bold p-4">
          Bem vindo ao <span className="text-brand-200 font-extrabold">Scribe.AI</span>, selecione um paciente para
          começara transcrever a consulta
        </h1>
        <div className="w-full flex items-center justify-between gap-4 p-4">
          <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer text-lg font-semibold px-7 py-4 ">
            Ver pacientes <UserRound strokeWidth="3.5" size={30} />
          </Button>
          <Button
            variant="outline"
            className="hover:cursor-pointer text-lg font-semibold px-7 py-4"
          >
            Adicionar paciente <UserRoundPlus strokeWidth="3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
