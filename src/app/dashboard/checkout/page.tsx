"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin, ChevronLeft, Wallet, Landmark,
  ShieldCheck, CheckCircle2, ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("va");
  const [buktiBayar, setBuktiBayar] = useState<File | null>(null);

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState({
    name: "Gudang Utama - Budi Santoso",
    phone: "+62 812-3456-7890",
    detail: "Jl. Industri No. 45, Kawasan Pergudangan Jaya, Jakarta Pusat, 10110"
  });
  const [tempAddress, setTempAddress] = useState(address);

  const [selectedBank, setSelectedBank] = useState("BCA");
  const [selectedEwallet, setSelectedEwallet] = useState("QRIS");
  const subtotal = 50000000; // Contoh: 50jt
  const ongkir = 400000;    // Contoh: 400rb
  const total = subtotal + ongkir;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 animate-in fade-in duration-700">
      {/* Header & 3-Step Progress */}
      <div className="flex justify-between items-center">
        <Link href="/dashboard/riset" className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-all font-bold text-xs uppercase tracking-widest">
          <ChevronLeft size={16} /> Kembali Belanja
        </Link>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <span className="text-stone-400">Keranjang</span>
          <div className="w-8 h-[1px] bg-stone-200" />
          <span className="text-red-600 font-black">Pembayaran</span>
          <div className="w-8 h-[1px] bg-stone-200" />
          <span className="text-stone-400">Selesai</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-10">
          {/* Section 1: Alamat */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold flex items-center gap-4 text-stone-900">
              <span className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm italic shadow-lg">1</span>
              Alamat Pengiriman
            </h2>
            <Card className="p-8 border-none rounded-[2.5rem] bg-white shadow-xl shadow-stone-200/50 space-y-6 border border-stone-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-lg">{address.name}</p>
                  <p className="text-stone-500 leading-relaxed italic">{address.detail}</p>
                  <p className="text-sm font-bold mt-2 text-stone-900">{address.phone}</p>
                </div>
                <Button variant="outline" onClick={() => { setTempAddress(address); setIsEditingAddress(true); }} className="rounded-2xl text-xs font-bold">Ubah Alamat</Button>
              </div>
            </Card>
          </section>

          {/* Section 2: Pembayaran */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold flex items-center gap-4 text-stone-900">
              <span className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm italic shadow-lg">2</span>
              Metode Pembayaran
            </h2>
            <div className="space-y-4">
              <div className={cn("p-6 border-2 rounded-[2.5rem] cursor-pointer", paymentMethod === "va" ? "border-red-600 bg-red-50/30" : "border-stone-100")} onClick={() => setPaymentMethod("va")}>
                <div className="flex justify-between items-center"><p className="font-bold">Transfer Bank (VA)</p><ChevronDown className={cn("transition-transform", paymentMethod === "va" && "rotate-180")} /></div>
                {paymentMethod === "va" && (
                  <div className="mt-6 grid grid-cols-4 gap-3">
                    {["BCA", "Mandiri", "BNI", "BRI"].map((b) => <div key={b} onClick={(e) => { e.stopPropagation(); setSelectedBank(b); }} className={cn("py-3 rounded-xl border text-center font-bold", selectedBank === b ? "bg-red-600 text-white" : "bg-white")}>{b}</div>)}
                  </div>
                )}
              </div>

              <div className={cn("p-6 border-2 rounded-[2.5rem] cursor-pointer", paymentMethod === "ewallet" ? "border-red-600 bg-red-50/30" : "border-stone-100")} onClick={() => setPaymentMethod("ewallet")}>
                <div className="flex justify-between items-center"><p className="font-bold">E-Wallet / QRIS</p><ChevronDown className={cn("transition-transform", paymentMethod === "ewallet" && "rotate-180")} /></div>
                {paymentMethod === "ewallet" && (
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["QRIS", "GoPay", "OVO"].map((e) => <div key={e} onClick={(event) => { event.stopPropagation(); setSelectedEwallet(e); }} className={cn("py-3 rounded-xl border text-center font-bold", selectedEwallet === e ? "bg-red-600 text-white" : "bg-white")}>{e}</div>)}
                  </div>
                )}
              </div>

              {/* Upload Bukti */}
              <div className="p-6 bg-stone-50 rounded-[2rem] border-2 border-dashed border-stone-300">
                <p className="text-sm font-bold text-stone-600 mb-2">Upload Bukti Transfer</p>
                <input type="file" onChange={(e) => setBuktiBayar(e.target.files?.[0] || null)} />
              </div>
            </div>
          </section>
        </div>
        
        {/* Sidebar */}
        <aside className="sticky top-8">
          <Card className="p-10 border-none rounded-[3.5rem] bg-stone-950 text-white shadow-2xl">
            <h3 className="text-2xl font-serif font-bold mb-8 italic text-red-500">Ringkasan</h3>

            {/* Tabel Harga */}
            <div className="space-y-4 mb-8 text-stone-400 text-sm">
              <div className="flex justify-between">
                <span>Total Pesanan</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between">
                <span>Ongkos Kirim</span>
                <span>Rp {ongkir.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between font-bold text-white text-lg pt-4 border-t border-stone-800">
                <span>Total Bayar</span>
                <span>Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <Button onClick={() => setShowSuccess(true)} className="w-full h-20 bg-red-600 rounded-[2rem] font-black text-xl hover:bg-red-700 transition-colors">
              Bayar Sekarang
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-stone-500 font-bold uppercase tracking-widest">
              <ShieldCheck size={14} className="text-emerald-500" /> Transaksi Terenkripsi
            </div>
          </Card>
        </aside>
      </div>

      {/* Modals (Alamat & Success) */}
      {isEditingAddress && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-6">
          <Card className="bg-white p-10 rounded-[3.5rem] max-w-lg w-full">
            <h2 className="text-2xl font-serif font-bold mb-6">Ubah Alamat</h2>
            <input className="w-full p-4 mb-4 rounded-2xl border" value={tempAddress.name} onChange={(e) => setTempAddress({ ...tempAddress, name: e.target.value })} />
            <textarea className="w-full p-4 mb-4 rounded-2xl border" value={tempAddress.detail} onChange={(e) => setTempAddress({ ...tempAddress, detail: e.target.value })} />
            <Button className="w-full bg-red-600" onClick={() => { setAddress(tempAddress); setIsEditingAddress(false); }}>Simpan</Button>
          </Card>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-stone-900/60 p-6">
          <Card className="bg-white p-12 rounded-[3.5rem] text-center max-w-sm">
            <CheckCircle2 size={60} className="text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold mb-2">Berhasil!</h2>
            <Button className="w-full mt-8 bg-stone-950 rounded-2xl" onClick={() => setShowSuccess(false)}>Dashboard</Button>
          </Card>
        </div>
      )}
    </div>
  );
}