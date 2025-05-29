import React from 'react'

export const HowItWorks = () => {
  return (
    <section className='flex flex-col justify-center items-center w-full h-auto py-16 bg-transparent'>
      <div className="flex flex-col items-center justify-around gap-6 w-3/4 px-4 max-w-6xl">
        <h1 className='text-5xl font-bold text-center'>Como funciona</h1>
        <p className='text-zinc-500 text-xl font-light text-center max-w-2xl'>
          Três passos simples para revolucionar seu atendimento
        </p>
        
        <div className='w-full py-12 max-w-5xl'>
          
          <div className='relative'>
           
            <div className='absolute top-6 left-1/6 right-1/6 h-0.5 bg-black hidden md:block'></div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
    
              <div className='flex flex-col items-center text-center space-y-6'>
                <div className='relative z-10 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm'>
                  1
                </div>
                <div className='space-y-4'>
                  <strong className='text-lg font-semibold block'>Grave ou Envie o Áudio da Consulta</strong>
                  <p className='text-zinc-500 font-light leading-relaxed'>
                    Faça upload de áudio da consulta ou grave em tempo real
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center text-center space-y-6'>
                <div className='relative z-10 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm'>
                  2
                </div>
                <div className='space-y-4'>
                  <strong className='text-lg font-semibold block'>IA Processa</strong>
                  <p className='text-zinc-500 font-light leading-relaxed'>
                    Nosso fluxo IA analisa e estrutura as informações em formato médico regulamentado e em conformidade
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center text-center space-y-6'>
                <div className='relative z-10 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm'>
                  3
                </div>
                <div className='space-y-4'>
                  <strong className='text-lg font-semibold block'>Documento Estruturado Pronto</strong>
                  <p className='text-zinc-500 font-light leading-relaxed'>
                    Receba prontuários, laudos e relatórios formatados e prontos para uso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}