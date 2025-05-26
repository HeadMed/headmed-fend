import React from 'react'

export const HowItWorks = () => {
  return (
    <section className='flex flex-col justify-center items-center w-screen h-auto py-10 bg-transparent'>

      <div className="flex flex-col items-center justify-around gap-6 w-3/4 px-4">

        <h1 className='text-5xl w-2xl font-bold text-center'>Como funciona</h1>
          <p className='text-zinc-500 text-xl font-light text-center'>
            Três passos simples para revolucionar seu atendimento
          </p>
      
          <ul className='flex flex-row justify-between px-5'>
            <li>
              <strong>1</strong>
              <strong>Grave ou Envie o Áudio da Consulta</strong>
              <p>Faça upload de áudio da consulta ou grave em tempo real</p>
            </li>
            <li>
              <strong>2</strong>
              <strong>IA Process</strong>
              <p>Nosso fluco IA analisa e estrutura as informações em formato médico regulamentado e em conformidade</p>
            </li>
            <li>
              <strong>3</strong>
              <strong>Documento Estruturado Pronto</strong>
              <p>Receba prontuários, laudos e relatórios formatados e prontos para uso</p>
            </li>
          </ul>
          
      </div>
    </section>
  )
}
