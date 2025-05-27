"use client";

import { ProtectedRoute } from "@/components/protectedRoute";
import { AppSidebar } from "../(components)/appSidebar";
import { TranscribePage } from "../(pages)/transcribePage";

export default function Transcription() {
  return (
    <ProtectedRoute>
      <div className="h-dvh w-full flex bg-linear-to-l from-white from-30% to-brand-50">
        <AppSidebar />

        <TranscribePage />
      </div>
    </ProtectedRoute>
  );
}
