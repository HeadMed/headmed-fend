import React from 'react'
import { NavBar } from './(template)/navBar'
import { Footer } from './(template)/footer'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { AutoPront } from './(sections)/autoPront'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <NavBar/>

      <main className='flex flex-col flex-1 items-center justify-center p-6 gap-6'>

        <AutoPront />

      </main>


      <Footer/>
    </div>
  )
}

export default page
