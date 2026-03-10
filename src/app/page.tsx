"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

const produkData = [
  { id: 1, nama: "Cabai Merah Keriting", harga: "Rp 45.000", deskripsi: "Varian premium dengan rasa pedas sedang yang khas. Kualitas super, petik segar langsung dari kebun petani lokal dengan tingkat kematangan 90-100%." },
  { id: 2, nama: "Cabai Rawit Merah", harga: "Rp 50.000", deskripsi: "Cabai dengan tingkat kepedasan tinggi. Diproses dengan standar kebersihan ketat, sangat cocok untuk industri kuliner dan sambal kemasan." },
  { id: 3, nama: "Cabai Hijau Besar", harga: "Rp 35.000", deskripsi: "Memiliki tekstur renyah dengan rasa yang tidak terlalu pedas. Sangat segar, disortir untuk memastikan ukuran seragam dan bebas dari cacat." },
];

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduk, setSelectedProduk] = useState<any>(null);
  const router = useRouter();

  const filteredProduk = produkData.filter((p) =>
    p.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold font-serif text-red-600">GROSIRCABAI</h1>
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <Link href="#about" className="hover:text-red-600">About</Link>
          <Link href="#contact" className="hover:text-red-600">Contact</Link>
        </div>
        <Link href="/auth/login"><Button className="rounded-full bg-stone-900">Masuk Mitra</Button></Link>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[70vh] flex flex-col items-center justify-center text-center px-8">
        <div className="absolute inset-0 bg-[url('/images/red-chili.png')] bg-fixed bg-center bg-cover opacity-10" />
        <h2 className="relative z-10 text-6xl font-serif font-bold mb-6">Harga Cabai Terbaik, <br /> Langsung dari Petani.</h2>
        <p className="relative z-10 text-stone-600 max-w-2xl mb-8">
          Kami menyediakan berbagai jenis cabai dengan <b>kualitas premium</b>, dipanen pada tingkat kematangan optimal, dan disortir secara teliti. Nikmati jaminan <b>kesegaran maksimal</b>, harga grosir yang transparan, dan pengiriman cepat langsung ke lokasi bisnis Anda.
        </p>
        <div className="relative z-10 w-full max-w-md">
          <Search className="absolute left-4 top-4 text-stone-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari jenis cabai..."
            className="w-full h-14 pl-12 pr-4 rounded-full border border-stone-300 shadow-sm outline-none focus:border-red-600"
          />
        </div>
      </header>

      {/* Katalog Produk (Dinamis) */}
      <section className="px-8 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8">Pilihan Produk</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProduk.map((item) => (
            <div key={item.id} className="border border-stone-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div onClick={() => setSelectedProduk(item)} className="cursor-pointer bg-stone-50 h-40 rounded-2xl mb-4 flex items-center justify-center">
                <img src="/images/red-chili.png" alt={item.nama} className="h-32 object-contain hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-bold text-lg">{item.nama}</h4>
              <p className="text-sm text-stone-500 line-clamp-2 mt-2">{item.deskripsi}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-red-600">{item.harga}</span>
                <Button onClick={() => router.push("/auth/login")} size="sm" className="rounded-full">Beli</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About & Contact Footer */}
      <footer className="bg-stone-900 text-white px-8 py-16">
        {/* Tambahkan id="contact" pada container atau elemen yang dituju agar scroll berfungsi */}
        <div className="max-w-4xl mx-auto grid grid-col-1 md:grid-row-2 gap-12 text-center md:text-left items-start">

          {/* Section About */}
          <div id="about">
            <h4 className="text-xl font-bold mb-4 text-red-500 text-center">Tentang Kami</h4>
            <p className="text-stone-400 text-sm leading-relaxed">
              GROSIRCABAI adalah marketplace B2B yang didedikasikan untuk digitalisasi rantai pasok komoditas cabai.
              Misi kami adalah menjembatani kesenjangan antara petani lokal dan pelaku bisnis dengan menyediakan platform yang adil, transparan, dan efisien.
            </p>
          </div>

          {/* Section Contact */}
          <div id="contact">
            <h4 className="text-xl font-bold mb-4 text-red-500 text-center">Kontak & Sosmed</h4>
            <ul className="text-stone-400 text-sm space-y-2 text-center">
              <li>Email: cs@cabai.id</li>
              <li>WhatsApp: 0812-xxxx-xxxx</li>
              <li>Alamat: Pusat Logistik Pertanian, Malang, Jawa Timur</li>
              <li className="pt-4 font-bold text-white">Ikuti kami di media sosial:</li>
              <li className="flex justify-center md:justify-center gap-4 text-red-400">
                <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* PopUp Detail */}
      {selectedProduk && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative">
            <button onClick={() => setSelectedProduk(null)} className="absolute top-4 right-4 text-xl">✕</button>
            <h3 className="text-2xl font-bold mb-4">{selectedProduk.nama}</h3>
            <p className="text-stone-600 mb-6">{selectedProduk.deskripsi}</p>
            <Button onClick={() => router.push("/auth/login")} className="w-full rounded-full">Beli Sekarang</Button>
          </div>
        </div>
      )}
    </div>
  );
}