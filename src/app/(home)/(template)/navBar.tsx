import Image from 'next/image'
import React from 'react'
import logo from '../../../assets/Logo.svg'
import { Button } from '@/components/ui/button'
export const NavBar = () => {
  return (
    <div className="z-50 w-full min-h-16 bg-white flex items-center shadow-xl justify-between px-4">
      <Image src={logo} alt="logo" width={120} />
      <div className='flex-1'>
        <ul className="flex items-center justify-center gap-16 [&>li]:hover:cursor-pointer [&>li]:hover:text-brand-200 [&>li]:text-lg [&>li]:font-semibold">
          <li>Recursos</li>
          <li>Como Funciona</li>
          <li>Preços</li>
          <li>Equipe</li>
        </ul>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <Button variant={"ghost"} className="px-4 hover:cursor-pointer">
          Login
        </Button>
        <Button className="bg-brand-200 hover:bg-brand-200/80 hover:cursor-pointer px-4">
          Registrar
        </Button>
      </div>
    </div>
  );
}


