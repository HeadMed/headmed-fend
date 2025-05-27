'use client';





import { AppSidebar } from "./(components)/appSidebar";
import { AddPatientPage } from "./(pages)/addPatientPage";
import { HomePage } from "./(pages)/homePage";
import { PatientsPage } from "./(pages)/patientsPage";
import { TranscribePage } from "./(pages)/transcribePage";






export default function Home() {
  return (
    <div className="h-dvh w-full flex bg-linear-to-l from-white from-30% to-brand-50">
      <AppSidebar />
      <HomePage/>
      {/* <TranscribePage/> */}
      {/* <PatientsPage/> */}
      {/* <AddPatientPage/> */}
    </div>
  );
}
