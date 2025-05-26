import React from 'react'
import { NavBar } from './(template)/navBar'
import { Footer } from './(template)/footer'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <NavBar/>

      <main className='flex flex-col flex-1 w-full items-center justify-center p-6 gap-6'>
        HOME PAGE CONTENT
      </main>


      <Footer/>
    </div>
  )
}

export default page
