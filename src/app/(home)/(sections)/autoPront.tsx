import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

export const AutoPront = () => {
  return (
    <section className='flex flex-col justify-center items-center w-screen py-10 bg-linear-to-r from-emerald-50 to-emerald-100'>

          <h1 className='text-5xl w-2xl text-center mb-10'>Automatize seus <strong className='text-emerald-400'>prontuários médicos</strong> com IA</h1>

          <p className='text-neutral-400 text-2xl w-[690px] text-center mb-15'>Criação de prontuários, laudos e outras burocracias médicas com nossa IA avançada. Mais tempo para seus pacientes, menos tempo com papelada.</p>

          <div className='flex flex-row mb-15'>
            <Button className='text-neutral-50 bg-emerald-500 font-bold text-lg mr-30'>
              Começar Gratuitamente
              <ArrowRight />
            </Button>

            <Button variant='outline'>Assinar</Button>
          </div>

          <ul className='flex flex-row justify-between items-center w-xl text-center'>

            <li>
              <strong className='text-center text-4xl text-emerald-600'>98%</strong>
              <p className='text-neutral-700'>Precisão IA</p>
            </li>

            <li>
              <strong className='text-center text-4xl text-emerald-600'>75%</strong>
              <p className='text-neutral-700'>Redução do tempo</p>
            </li>

            <li>
              <strong className='text-center text-4xl text-emerald-600'>10k+</strong>
              <p className='text-neutral-700'>Médicos Ativos</p>
            </li>

          </ul>

        </section>
  )
}