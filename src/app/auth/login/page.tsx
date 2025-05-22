import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <main className='h-dvh w-dvw bg-brand-200 flex justify-end'>
        <div className='h-full w-[550px] bg-brand-50 shadow-xl shadow-black flex flex-col justify-center '>
         <Card className='bg-transparent shadow-none border-none'>
            <CardHeader>
                <h1 className='text-4xl text-center font-bold text-brand-200'>Login</h1>
            </CardHeader>
            <CardContent>
                <div className='py-3'>
                    <Label htmlFor='user' className='text-md text-brand-dark mb-3'>Usuário</Label>
                    <Input name='user' placeholder='Insira o nome de usuário'/>
                </div>
                <div>
                    <Label htmlFor='password' className='text-md text-brand-dark mb-3'>Senha</Label>
                    <Input name='password' type='password' placeholder='Insira a Senha'/>
                </div>
            </CardContent>
            <CardFooter className='flex justify-center mt-6'>
               <Button  className='w-[80%] bg-brand-200 hover:bg-brand-200/80 text-zinc-200 font-bold'>Entrar</Button>

               
            </CardFooter>
        </Card>   
        </div>
    </main>
  )
}

export default page
