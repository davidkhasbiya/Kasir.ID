export function PriceSummary() {
  return (
    <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-2xl text-white shadow-xl">
      <h2 className="font-bold text-lg mb-4 opacity-90">Ringkasan Harga Pasar</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-red-700 pb-3">
          <span>Cabai Merah Keriting</span>
          <span className="font-bold">Rp 32.000/kg</span>
        </div>
        <div className="flex justify-between items-center border-b border-red-700 pb-3">
          <span>Cabai Rawit</span>
          <span className="font-bold">Rp 45.000/kg</span>
        </div>
        <button className="w-full mt-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 text-sm font-bold transition-all">
          Lihat Laporan Lengkap
        </button>
      </div>
    </div>
  );
}