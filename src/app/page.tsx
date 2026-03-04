import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/ai-badge";
import { Phone, ShoppingBag, Leaf, Star } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  // 1. Definisi Data Produk (Letakkan di luar return)
  const featuredChilies = [
    { id: 1, name: "Cabai Rawit Merah (Ori)", type: "Merah", price: "Rp 45.000/kg", stock: "1.2 Ton", origin: "Kediri", icon: "🌶️", color: "red", grade: "A+" },
    { id: 2, name: "Cabai Rawit Hijau Labu", type: "Hijau", price: "Rp 32.000/kg", stock: "800 kg", origin: "Magelang", icon: "🌱", color: "green", grade: "A" },
    { id: 3, name: "Cabai Merah Keriting", type: "Merah", price: "Rp 28.000/kg", stock: "2.5 Ton", origin: "Cianjur", icon: "🌶️", color: "red", grade: "A" },
    { id: 4, name: "Cabai Hijau Besar", type: "Hijau", price: "Rp 22.000/kg", stock: "1.5 Ton", origin: "Medan", icon: "🌿", color: "green", grade: "B+" },
    { id: 5, name: "Cabai Merah Besar (TW)", type: "Merah", price: "Rp 35.000/kg", stock: "500 kg", origin: "Banyuwangi", icon: "🌶️", color: "red", grade: "A+" },
    { id: 6, name: "Cabai Kering Grade Ekspor", type: "Kering", price: "Rp 85.000/kg", stock: "300 kg", origin: "Gresik", icon: "🍂", color: "orange", grade: "Premium" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />

      {/* Tambahkan id="home" di sini agar scroll kembali ke paling atas dengan rapi */}
      <div id="home" className="scroll-mt-20">

        {/* 2. Hero Section */}
        <main className="max-w-7xl mx-auto px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-green-600 text-green-700 flex gap-1 items-center bg-green-50">
                <Leaf size={14} /> Jaminan Segar 24 Jam
              </Badge>
            </div>
            <h1 className="text-6xl font-serif font-bold text-stone-950 leading-tight">
              The Journey of <br />
              <span className="text-red-600">Export-Quality</span> <br />
              <span className="text-green-700">Indonesian</span> Chili
            </h1>
            <p className="text-stone-700 text-lg leading-relaxed max-w-lg">
              Perjalanan cabai kualitas premium kami dimulai jauh sebelum sampai di gudang Anda.
              Berasal dari lahan tani terbaik di seluruh nusantara.
            </p>
            <div className="flex items-center gap-5 pt-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white p-7 rounded-full flex gap-3 text-base">
                <ShoppingBag size={20} /> Borong Stok Sekarang
              </Button>
              <div className="flex items-center gap-3 text-stone-700 font-semibold text-lg">
                <Phone size={24} className="text-green-700" /> (62) 812-1111-2222
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[450px] bg-red-100 rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white flex flex-col items-center justify-center text-9xl">
              <span>🌶️</span>
              <span className="text-xs text-red-800 p-2 bg-white/60 rounded-full mt-4 italic">Cerah & Pedas Mantap</span>
            </div>
            <div className="absolute -bottom-10 -left-12 w-64 h-80 bg-white p-5 rounded-3xl shadow-2xl z-20 hidden md:flex flex-col items-center justify-center text-8xl border-4 border-stone-100">
              <span>🌱</span>
              <span className="text-xs text-green-900 p-1 bg-white/70 rounded-full mt-2 italic">Hijau Segar Alami</span>
            </div>
          </div>
        </main>

        {/* 3. Katalog Produk Section */}
        <section id="katalog" className="bg-stone-100/70 py-24 px-12 border-t border-stone-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h2 className="text-4xl font-serif font-bold text-stone-950">
                  Katalog Cabai <span className="text-green-700">Pilihan</span> Pengulak
                </h2>
                <p className="text-stone-600 mt-2">Update stok real-time dari berbagai daerah di Indonesia.</p>
              </div>
              <Button variant="outline" className="text-stone-700 border-stone-300">Filter Lokasi</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredChilies.map((chili) => (
                <Card key={chili.id} className="p-6 border border-stone-200 hover:border-red-300 transition-all group rounded-3xl bg-white shadow-sm hover:shadow-2xl">
                  <div className={`aspect-[4/3] ${chili.color === 'red' ? 'bg-red-50' : chili.color === 'green' ? 'bg-green-50' : 'bg-orange-50'} rounded-2xl mb-6 flex items-center justify-center text-7xl relative`}>
                    <span>{chili.icon}</span>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/80 text-stone-900 border-none">Grade {chili.grade}</Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xl text-stone-950 group-hover:text-red-600 uppercase tracking-tight">{chili.name}</h3>
                      <Badge className={chili.color === 'red' ? 'bg-red-600' : chili.color === 'green' ? 'bg-green-700' : 'bg-orange-600'}>{chili.type}</Badge>
                    </div>
                    <p className="text-3xl font-bold text-red-600">{chili.price}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-stone-600 pt-2 border-t border-stone-100">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-stone-400 uppercase">Asal</span>
                        <span className="font-semibold">{chili.origin}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-stone-400 uppercase">Stok</span>
                        <span className="font-semibold text-green-700">{chili.stock}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-stone-950 hover:bg-red-600 text-white rounded-xl h-12">Borong Sekarang</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Section About Us */}
        <section id="about" className="bg-white py-24 px-12 border-t border-stone-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-stone-100 rounded-3xl flex items-center justify-center text-6xl">👨‍🌾</div>
                <div className="h-40 bg-red-50 rounded-3xl flex items-center justify-center text-5xl">🌶️</div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="h-40 bg-green-50 rounded-3xl flex items-center justify-center text-5xl">🚚</div>
                <div className="h-64 bg-stone-100 rounded-3xl flex items-center justify-center text-6xl">🤝</div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-stone-950 leading-tight">
                Menghubungkan <span className="text-red-600">Petani Lokal</span> dengan <span className="text-green-700">Pasar Nasional</span>
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed">
                <strong>Grosir Cabai</strong> memotong rantai pasok panjang untuk menghadirkan cabai segar langsung dari ladang ke pengulak.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold">1</div>
                  <div><h4 className="font-bold">Kualitas Ekspor</h4><p className="text-sm">Grade A & B saja.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 font-bold">2</div>
                  <div><h4 className="font-bold">Harga Adil</h4><p className="text-sm">Update harga pasar.</p></div>
                </div>
              </div>
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 rounded-2xl">Pelajari Selengkapnya</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}