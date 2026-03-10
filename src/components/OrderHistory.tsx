import { cn } from "@/lib/utils";

export function OrderHistory() {
  const orders = [
    { id: "ORD-7721", date: "10 Mar 2026", total: "Rp 1.250.000", status: "Selesai" },
    { id: "ORD-7722", date: "09 Mar 2026", total: "Rp 890.000", status: "Proses" },
    { id: "ORD-7723", date: "08 Mar 2026", total: "Rp 2.100.000", status: "Dikirim" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
      <h2 className="font-bold text-lg mb-6">Riwayat Pesanan Terakhir</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-stone-400 text-xs uppercase tracking-widest border-b border-stone-100">
              <th className="pb-4 font-bold">ID Pesanan</th>
              <th className="pb-4 font-bold">Tanggal</th>
              <th className="pb-4 font-bold">Total</th>
              <th className="pb-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                <td className="py-4 font-bold">{o.id}</td>
                <td className="py-4 text-stone-600">{o.date}</td>
                <td className="py-4 text-stone-900 font-semibold">{o.total}</td>
                <td className="py-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                    o.status === "Selesai" ? "bg-green-50 text-green-700" : 
                    o.status === "Proses" ? "bg-amber-50 text-amber-700" : "bg-blue-50 text-blue-700"
                  )}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}