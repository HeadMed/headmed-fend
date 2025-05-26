import React from 'react'

export const HowItWorks = () => {
  return (
    <section className='flex flex-col justify-center items-center w-screen'>
          <h1>Como funciona</h1>
          <p>Três passos simples para revolucionar seu atendimento</p>
          <ul>
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
        </section>
  )
}
