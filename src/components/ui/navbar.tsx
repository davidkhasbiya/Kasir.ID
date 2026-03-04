"use client";
import { useState } from "react";
import { Button } from "./button";
import Link from "next/link";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur-md border-b border-stone-200">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <span className="text-red-600">grosir</span>
        <span className="text-green-700">cabai</span>
      </div>

      {/* Navigasi & Tombol */}
      <div className="flex items-center gap-8">
        {/* Menu Publik */}
        <div className="hidden md:flex gap-8 font-medium text-stone-700 uppercase text-xs tracking-wider">
          <Link href="#home">Home</Link>
          <Link href="#katalog">Produk</Link>
          <Link href="#about">About</Link>
          
          {/* Menu Private (Hanya tampil jika login) */}
          {isLoggedIn && (
            <>
              <Link href="/dashboard/overview" className="text-green-700 font-bold">Dashboard</Link>
              <Link href="/dashboard/transaksi">Pesanan Saya</Link>
            </>
          )}
        </div>

        {/* Tombol Login/Logout */}
        {isLoggedIn ? (
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            Log Out
          </Button>
        ) : (
          <Link href="/auth/login">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}