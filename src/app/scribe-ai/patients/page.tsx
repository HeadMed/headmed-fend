"use client";

import { ProtectedRoute } from "@/components/protectedRoute";
import { AppSidebar } from "../(components)/appSidebar";

import { PatientsPage } from "../(pages)/patientsPage";
import { HeaderScribe } from "../(components)/headerScribe";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="h-dvh w-full flex flex-col bg-linear-to-l from-white from-30% to-brand-50 overflow-y-hidden">
        <HeaderScribe/>

        <PatientsPage />
      </div>
    </ProtectedRoute>
  );
}
