"use client";
import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar"; // Sesuaikan path
import { Header } from "@/components/Header";    // Sesuaikan path
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="flex bg-stone-50 min-h-screen">
      <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      
      <main className={cn(
        "flex-1 transition-all duration-300 p-8",
        isMinimized ? "ml-20" : "ml-64"
      )}>
        {/* Header sekarang otomatis tahu halaman apa yang sedang dibuka */}
        <Header title={""} /> 
        {children}
      </main>
    </div>
  );
}