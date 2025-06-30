import React from 'react'
import { NavBar } from './(template)/navBar'
import { Footer } from './(template)/footer'
import { AutoPront } from './(sections)/autoPront'
import { FeatureSection } from './(sections)/featureSection'
import { HowItWorks } from './(sections)/howItWorks'

const page = () => {
  return (
    <div className="max-w-dvw h-dvh flex flex-col overflow-x-hidden">
      <NavBar />

      <main className="max-w-full bg-linear-to-r from-white from-10%  to-brand-100 to-80% ">
        <AutoPront />
        <FeatureSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default page
