"use client";

import { ProtectedRoute } from "@/components/protectedRoute";
import { AppSidebar } from "../../(components)/appSidebar";
import { TranscribePage } from "../../(pages)/transcribePage";
import {use} from "react";
interface TranscriptionProps {
  params: Promise<{
    id: number;
  }>;
}

export default function Transcription({ params }: TranscriptionProps) {

    const {id} = use(params);


  return (
    <ProtectedRoute>
      <div className="h-dvh w-full flex bg-linear-to-l from-white from-30% to-brand-50">
        <AppSidebar />

        <TranscribePage id={id} />
      </div>
    </ProtectedRoute>
  );
}
