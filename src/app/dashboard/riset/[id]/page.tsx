"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/ai-badge";
import {
  Star, MapPin, ShieldCheck,
  ChevronLeft, ShoppingCart, Info,
  Flame, Leaf, Timer,
  User
} from "lucide-react";
import Link from "next/link";
import CartDrawer from "@/components/cart-drawer";

export default function DetailProdukPage() {
  const [selectedQty, setSelectedQty] = useState(100);
  // State ulasan
  const [ulasanList, setUlasanList] = useState([
    { id: 1, nama: "Budi Santoso", rating: 5, komentar: "Kualitas cabainya sangat segar, pengiriman cepat!" },
  ]);
  const [ratingBaru, setRatingBaru] = useState(0);
  const [namaBaru, setNamaBaru] = useState("");
  const [komentarBaru, setKomentarBaru] = useState("");

  const handleTambahUlasan = () => {
    if (!namaBaru || !komentarBaru || ratingBaru === 0) return;
    const ulasanBaru = { id: Date.now(), nama: namaBaru, rating: ratingBaru, komentar: komentarBaru };
    setUlasanList([ulasanBaru, ...ulasanList]);
    setNamaBaru(""); setKomentarBaru(""); setRatingBaru(0);
  };

  const [isCartOpen, setIsCartOpen] = useState(false); // State untuk drawer

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Back Button */}
      <Link href="/dashboard/riset" className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-all font-bold text-xs uppercase tracking-widest">
        <ChevronLeft size={16} /> Kembali ke Katalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Kolom Kiri: Galeri Foto */}
        <div className="space-y-4">
          <div className="aspect-square bg-stone-100 rounded-[3rem] shadow-2xl shadow-red-100 relative overflow-hidden group">
            {/* Penambahan Gambar Utama */}
            <img
              src="/images/red-chili.png"
              alt="Rawit Merah Presto"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            <Badge className="absolute top-6 left-6 bg-white/90 text-red-600 border-none px-4 py-2 rounded-xl font-bold shadow-sm">
              Kualitas Super (Grade A)
            </Badge>
          </div>

          {/* Thumbnail Gambar */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-stone-100 rounded-2xl border-2 border-transparent hover:border-red-500 cursor-pointer transition-all overflow-hidden">
                <img
                  src="/images/red-chili.png"
                  alt={`Thumbnail ${i}`}
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Informasi & Transaksi */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <Star size={16} fill="currentColor" />
              <span className="font-bold text-sm">4.9</span>
              <span className="text-stone-400 text-sm font-medium">(120+ Ulasan Pengulak)</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-stone-950 leading-tight">
              Rawit Merah Presto <br /> <span className="text-red-600">Kediri Premium</span>
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1 text-stone-500 font-bold text-xs uppercase tracking-tighter">
                <MapPin size={14} className="text-red-600" /> Kediri, Jawa Timur
              </div>
              <div className="w-1 h-1 bg-stone-300 rounded-full" />
              <div className="text-stone-500 font-bold text-xs uppercase tracking-tighter">
                Stok Tersedia: 850 Kg
              </div>
            </div>
          </div>

          <div className="p-8 bg-stone-50 rounded-[2.5rem] space-y-4 border border-stone-100">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Harga Partai Besar</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-stone-950">Rp 42.000</span>
              <span className="text-stone-400 font-medium">/ Kilogram</span>
            </div>
          </div>

          {/* Spesifikasi Kualitas */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-stone-100 rounded-2xl text-center space-y-1">
              <Flame size={20} className="mx-auto text-orange-500" />
              <p className="text-[10px] font-bold text-stone-400 uppercase">Level Pedas</p>
              <p className="text-xs font-bold">Sangat Tinggi</p>
            </div>
            <div className="p-4 bg-white border border-stone-100 rounded-2xl text-center space-y-1">
              <Leaf size={20} className="mx-auto text-green-600" />
              <p className="text-[10px] font-bold text-stone-400 uppercase">Kesegaran</p>
              <p className="text-xs font-bold">Baru Panen</p>
            </div>
            <div className="p-4 bg-white border border-stone-100 rounded-2xl text-center space-y-1">
              <Timer size={20} className="mx-auto text-blue-500" />
              <p className="text-[10px] font-bold text-stone-400 uppercase">Daya Simpan</p>
              <p className="text-xs font-bold">7-10 Hari</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-stone-100 rounded-3xl bg-white">
              <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center text-white font-bold">BS</div>
              <div className="flex-1">
                <p className="font-bold text-sm">Kelompok Tani Makmur</p>
                <p className="text-[10px] text-stone-400 uppercase font-bold flex items-center gap-1">
                  <ShieldCheck size={12} className="text-blue-500" /> Official Partner Grosir Cabai
                </p>
              </div>
              <Button variant="outline" className="rounded-xl font-bold text-xs">Chat Petani</Button>
            </div>
          </div>
          {/* TOMBOL YANG DIPERBAIKI */}
          <Button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="w-full h-14 bg-stone-950 text-white rounded-2xl font-bold text-lg 
                       flex items-center justify-center gap-3 
                       hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 
                       active:scale-[0.98] transition-all duration-300 ease-out"
          >
            <ShoppingCart size={20} />
            Tambah ke Keranjang
          </Button>

          {/* Komponen Drawer */}
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        </div>
      </div>

      <hr className="border-stone-100" />

      {/* Deskripsi Lengkap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-2xl font-serif font-bold">Tentang Produk Ini</h3>
          <p className="text-stone-600 leading-relaxed">
            Cabai Rawit Merah Presto dari Kediri dikenal dengan kulitnya yang mengkilap dan tingkat kepedasan yang konsisten. Dipanen pada waktu subuh untuk menjaga kadar air dan kesegaran maksimal saat sampai di gudang Anda. Cocok untuk industri sambal kemasan maupun distribusi pasar induk.
          </p>
        </div>
        <Card className="p-8 border-none bg-red-50 rounded-[2.5rem] space-y-4">
          <div className="flex items-center gap-2 text-red-600 font-bold">
            <Info size={18} /> Info Pengiriman
          </div>
          <p className="text-sm text-red-900/70 leading-relaxed font-medium">
            Pengiriman menggunakan armada berpendingin (Cold Storage) untuk menjaga kualitas cabai tetap segar hingga tujuan.
          </p>
        </Card>
      </div>

      {/* --- FITUR RATING & REVIEW (Style Marketplace) --- */}
      <div className="space-y-8">
        <h3 className="text-3xl font-serif font-bold">Ulasan & Penilaian ({ulasanList.length})</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Form Review */}
          <div className="lg:col-span-1">
            <div className="p-8 border border-stone-100 rounded-[2.5rem] bg-stone-50 space-y-5">
              <h4 className="font-bold text-lg">Tulis Ulasan Anda</h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((b) => (
                  <Star key={b} size={30} className={`cursor-pointer ${b <= ratingBaru ? "text-amber-400 fill-amber-400" : "text-stone-300"}`} onClick={() => setRatingBaru(b)} />
                ))}
              </div>
              <input value={namaBaru} onChange={(e) => setNamaBaru(e.target.value)} placeholder="Nama Anda" className="w-full p-4 rounded-xl border border-stone-200" />
              <textarea value={komentarBaru} onChange={(e) => setKomentarBaru(e.target.value)} placeholder="Bagaimana pengalaman Anda?" className="w-full p-4 rounded-xl border border-stone-200 h-24" />
              <Button onClick={handleTambahUlasan} className="w-full bg-red-600 hover:bg-red-700">Kirim Ulasan</Button>
            </div>
          </div>

          {/* List Review */}
          <div className="lg:col-span-2 space-y-6">
            {ulasanList.map((item) => (
              <div key={item.id} className="p-6 border-b border-stone-100 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center"><User size={20} className="text-stone-500" /></div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-bold text-sm">{item.nama}</p>
                  <p className="text-stone-600 text-sm mt-1">{item.komentar}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}