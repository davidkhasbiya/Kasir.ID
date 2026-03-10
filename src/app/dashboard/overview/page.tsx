"use client";

import { Card } from "@/components/ui/card";
import { LayoutDashboard, TrendingUp, ShoppingBag, DollarSign, Package } from "lucide-react";
import { cn } from "@/lib/utils"; // Pastikan utilitas cn ada

export default function OverviewPage() {
  const stats = [
    { label: "Total Penjualan", value: "Rp 12.500.000", icon: <DollarSign size={24} className="text-emerald-600" /> },
    { label: "Pesanan Aktif", value: "14", icon: <ShoppingBag size={24} className="text-blue-600" /> },
    { label: "Stok Tersedia", value: "852 Kg", icon: <Package size={24} className="text-amber-600" /> },
    { label: "Tren Harga", value: "+5.2%", icon: <TrendingUp size={24} className="text-red-600" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Baris Statistik (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="p-6 border-none shadow-sm hover:shadow-md transition-all rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-stone-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-xl font-bold text-stone-900 mt-2">{stat.value}</h3>
              </div>
              <div className="p-3 bg-stone-100 rounded-xl">{stat.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* 2. Area Utama: Grafik & Ringkasan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Tabel Riwayat Pesanan */}
        <Card className="lg:col-span-2 p-6 border-none shadow-sm rounded-2xl">
          <h2 className="font-bold text-stone-900 mb-6">Riwayat Pesanan Terbaru</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-red-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-600 font-bold border border-red-100">#0{i+1}</div>
                  <div>
                    <p className="text-sm font-bold text-stone-900">Pesanan Cabai Merah</p>
                    <p className="text-[11px] text-stone-400">10 Maret 2026</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-stone-900">Rp 450.000</p>
                  <p className="text-[10px] uppercase font-bold text-green-600">Selesai</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Kolom Kanan: Ringkasan Harga (Market Insight) */}
        <div className="flex flex-col gap-6">
            <Card className="p-6 border-none shadow-sm rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white">
                <h2 className="font-bold mb-4 opacity-90">Ringkasan Harga Pasar</h2>
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-red-700 pb-2"><span>Cabai Merah</span> <span className="font-bold">Rp 32k</span></div>
                    <div className="flex justify-between border-b border-red-700 pb-2"><span>Cabai Rawit</span> <span className="font-bold">Rp 45k</span></div>
                    <div className="flex justify-between"><span>Tomat</span> <span className="font-bold">Rp 12k</span></div>
                </div>
            </Card>

            {/* Placeholder Grafik */}
            <Card className="flex-1 p-6 border-none shadow-sm rounded-2xl flex flex-col items-center justify-center text-stone-400 border-2 border-dashed border-stone-200">
                <LayoutDashboard size={32} className="mb-2 opacity-50" />
                <p className="text-xs font-medium">Analitik Tren Harga</p>
            </Card>
        </div>
      </div>
    </div>
  );
}