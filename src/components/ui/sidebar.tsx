"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, Search, MessageSquareDiff,
  BarChart3, ClipboardList, User, LogOut, Flame,
  Menu, X, Settings, Moon, Sun
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar({ isMinimized, setIsMinimized }: {
  isMinimized: boolean,
  setIsMinimized: (val: boolean) => void
}) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Overview", href: "/dashboard/overview", icon: <LayoutDashboard size={20} /> },
    { name: "Pantau Stok", href: "/dashboard/riset", icon: <Search size={20} /> },
    { name: "Chatbot AI", href: "/dashboard/ai-assistant", icon: <MessageSquareDiff size={20} /> },
    { name: "Laporan Harga", href: "/dashboard/laporan", icon: <BarChart3 size={20} /> },
    { name: "Riwayat Pesanan", href: "/dashboard/transaksi", icon: <ClipboardList size={20} /> },
    { name: "Profil Mitra", href: "/dashboard/profile", icon: <User size={20} /> },
    { name: "Pengaturan", href: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className={cn(
      "bg-gradient-to-b from-red-950 via-red-900 to-stone-950 min-h-screen flex flex-col text-white fixed left-0 top-0 shadow-2xl border-r border-red-800/30 transition-all duration-300 z-50",
      isMinimized ? "w-20" : "w-64"
    )}>

      {/* Tombol Toggle di dalam Sidebar */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className={cn(
          "absolute top-18 bg-red-600 text-white p-1.5 rounded-lg border border-red-800 hover:bg-red-500 z-50 transition-all shadow-md",
          isMinimized ? "right-6" : "right-4" // Menyesuaikan posisi agar tetap di dalam
        )}
      >
        {isMinimized ? <Menu size={16} /> : <X size={16} />}
      </button>

      {/* Logo Area - Centering Fix */}
      <div className={cn("p-8 flex items-center gap-3", isMinimized && "p-0 h-24 justify-center")}>
        <div className="bg-red-600 p-2 rounded-xl text-white shrink-0 shadow-lg shadow-red-900/50">
          <Flame size={24} />
        </div>
        {!isMinimized && (
          <span className="font-bold text-xl tracking-tight uppercase whitespace-nowrap">
            Grosir<span className="text-red-500">Cabai</span>
          </span>
        )}
      </div>

      {/* Navigation - Profile Centering Fix */}
      <nav className="flex-1 px-4 space-y-2 mt-2">
        {!isMinimized && (
          <p className="px-4 text-[10px] uppercase tracking-[0.2em] text-red-400/60 font-bold mb-4">Menu</p>
        )}

        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center rounded-2xl transition-all duration-300 group h-12",
              isMinimized ? "justify-center px-0" : "px-4 gap-4",
              pathname === item.href
                ? "bg-white text-red-950 shadow-xl font-bold"
                : "hover:bg-red-800/40 text-red-100"
            )}
          >
            <span className={cn(
              "shrink-0",
              pathname === item.href ? "text-red-600" : "text-red-400 group-hover:text-red-200"
            )}>
              {item.icon}
            </span>
            {!isMinimized && <span className="text-sm tracking-wide">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer Area - Logout Fix */}
      <div className="p-4 border-t border-red-900/50 flex flex-col gap-2">
        <button
          onClick={() => { /* logika dark mode */ }}
          className="flex items-center gap-4 px-4 h-12 text-stone-400 hover:text-white"
        >
          <Moon size={20} />
          {!isMinimized && <span className="text-sm">Dark Mode</span>}
        </button>

        <button
          onClick={() => router.push("/")}
          className={cn(
            "flex items-center h-12 w-full text-stone-400 hover:text-white hover:bg-red-600/20 rounded-xl transition-all group",
            isMinimized ? "justify-center px-0" : "px-4 gap-4"
          )}
        >
          <LogOut size={20} className="shrink-0 group-hover:text-red-400" />
          {!isMinimized && <span className="font-medium text-sm">Keluar Akun</span>}
        </button>
      </div>
    </div>
  );
}