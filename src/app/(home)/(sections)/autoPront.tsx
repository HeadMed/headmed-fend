import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

export const AutoPront = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-auto py-10  bg-transparent">
      <div className="flex flex-col items-center justify-around gap-6 w-full sm:w-3/4 px-6">
        <h1 className="text-3xl sm:text-5xl w-72 sm:w-2xl font-bold text-center">
          Automatize seus
          <span className="text-brand-200"> prontuários médicos</span> com IA
        </h1>

        <p className="text-zinc-500 text-xl font-light w-72 sm:w-[690px] text-center ">
          Criação de prontuários, laudos e outras burocracias médicas com nossa
          IA avançada. Mais tempo para seus pacientes, menos tempo com papelada.
        </p>

        <div className="w-3/4 sm:w-1/3 flex justify-between px-5 ">
          <Link href="/auth/login">
            <Button className="text-neutral-50 bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer font-bold text-lg ">
              Testar
              <ArrowRight />
            </Button>
          </Link>
          <Button className="hover:cursor-pointer" variant="outline">
            Assinar
          </Button>
        </div>

        <ul className="grid grid-cols-2 grid-rows-2 sm:flex sm:flex-row justify-between items-center w-3/4 text-center px-4">
          <li>
            <span className="text-center font-bold text-4xl text-brand-200">
              98%
            </span>
            <p className="text-zinc-700">Precisão IA</p>
          </li>

          <li>
            <span className="text-center font-bold text-4xl text-brand-200">
              75%
            </span>
            <p className="text-zinc-700">Redução do tempo</p>
          </li>

          <li className="col-span-2">
            <span className="text-center font-bold text-4xl text-brand-200">
              10k+
            </span>
            <p className="text-zinc-700">Médicos Ativos</p>
          </li>
        </ul>
      </div>
    </section>
  );
}