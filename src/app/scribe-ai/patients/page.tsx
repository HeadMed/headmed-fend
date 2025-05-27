"use client";

import { ProtectedRoute } from "@/components/protectedRoute";
import { AppSidebar } from "../(components)/appSidebar";

import { PatientsPage } from "../(pages)/patientsPage";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="h-dvh w-full flex bg-linear-to-l from-white from-30% to-brand-50">
        <AppSidebar />

        <PatientsPage />
      </div>
    </ProtectedRoute>
  );
}
