import React from 'react'
import { NavBar } from './(template)/navBar'
import { Footer } from './(template)/footer'
import { AutoPront } from './(sections)/autoPront'
import { FeatureSection } from './(sections)/featureSection'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <NavBar />

      <main className='flex flex-col flex-1 gap-0 bg-linear-to-r from-white from-10%  to-brand-100 to-80%'>

        <AutoPront />
        <FeatureSection />

      </main>


      <Footer/>
    </div>
  )
}

export default page
