import { AppSidebar } from '@/app/scribe-ai/(components)/appSidebar';
import { PatientRecordPage } from '@/app/scribe-ai/(pages)/patientRecordPage';
import { ProtectedRoute } from '@/components/protectedRoute';
import React, { use } from 'react'

interface PatientTranscriptionProps {
  params: Promise<{
    id: number;
  }>;
}


export default function ({params}: PatientTranscriptionProps){
    const {id} = use(params)
    return (
      <ProtectedRoute>
            <div className="h-dvh w-full flex bg-linear-to-l from-white from-30% to-brand-50">
              <AppSidebar />
      
              <PatientRecordPage id={id}/>
            </div>
          </ProtectedRoute>
    );
}


