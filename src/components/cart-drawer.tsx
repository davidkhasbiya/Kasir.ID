"use client";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const router = useRouter();
    const [items, setItems] = useState([
        { id: 1, nama: "Rawit Merah Presto", daerah: "Kediri", harga: 42000, qty: 1000, unit: "Kg" },
        { id: 2, nama: "Cabai Hijau Besar", daerah: "Brebes", harga: 22000, qty: 500, unit: "Kg" },
    ]);

    // 1. FUNGSI HAPUS ITEM
    const removeItem = (id: number) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQty = (id: number, delta: number) => {
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    if (!isOpen) return null;

    const subtotal = items.reduce((acc, item) => acc + (item.harga * item.qty), 0);
    const biayaKirim = items.length > 0 ? 400000 : 0; // Biaya kirim jadi 0 jika keranjang kosong
    const totalEstimasi = subtotal + biayaKirim;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]" onClick={onClose} />
            <div className="relative z-[110] w-full max-w-md bg-white h-full p-8 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-serif font-bold">Keranjang Belanja</h2>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors"><X size={20} /></button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <div key={item.id} className="p-5 rounded-[2rem] border border-stone-100 bg-stone-50/30 space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
                                        {/* Opsional: Pakai gambar cabai jika ingin lebih visual */}
                                        <ShoppingBag className="text-red-600" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm">{item.nama}</p>
                                        <p className="text-[10px] text-stone-400 font-bold uppercase">{item.daerah}</p>
                                    </div>
                                    
                                    {/* 2. PASANG FUNGSI HAPUS DI SINI */}
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="text-stone-300 hover:text-red-600 transition-colors p-1"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1 bg-white border border-stone-100 rounded-xl p-1 shadow-sm">
                                        <button onClick={() => updateQty(item.id, -50)} className="w-8 h-8 flex items-center justify-center hover:bg-stone-50 rounded-lg text-stone-400"><Minus size={14} /></button>
                                        <span className="text-xs font-bold px-2 min-w-[70px] text-center">{item.qty} {item.unit}</span>
                                        <button onClick={() => updateQty(item.id, 50)} className="w-8 h-8 flex items-center justify-center hover:bg-stone-50 rounded-lg text-stone-400"><Plus size={14} /></button>
                                    </div>
                                    <p className="font-bold text-sm text-red-600">Rp {(item.harga * item.qty).toLocaleString()}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-stone-400 space-y-2">
                            <ShoppingBag size={48} className="opacity-20" />
                            <p className="font-medium">Keranjangmu masih kosong</p>
                        </div>
                    )}
                </div>

                {/* Footer Transaksi */}
                <div className="pt-6 border-t border-stone-100 mt-auto space-y-4">
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-stone-500">
                            <span>Subtotal</span>
                            <span>Rp {subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-stone-500">
                            <span>Estimasi Ongkir</span>
                            <span>Rp {biayaKirim.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div className="flex justify-between font-bold text-xl border-t border-stone-50 pt-4">
                        <span>Total</span>
                        <span className="text-red-600">Rp {totalEstimasi.toLocaleString()}</span>
                    </div>

                    <button
                        type="button"
                        disabled={items.length === 0}
                        className="w-full h-14 bg-stone-950 text-white rounded-2xl font-bold hover:bg-red-600 disabled:bg-stone-200 disabled:cursor-not-allowed transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                            router.push('/dashboard/checkout');
                        }}
                    >
                        Lanjut ke Pembayaran
                    </button>
                </div>
            </div>
        </div >
    );
}