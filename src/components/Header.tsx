"use client";
import { Bell, Search, LogOut } from "lucide-react";
import { auth } from "@/lib/firebase";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function Header({ title }: { title: string }) {
    const router = useRouter();
    const user = auth.currentUser;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Mencari:", e.target.value);
        // Nanti di sini kita panggil fungsi filter data produk/transaksi
    };

    const handleLogout = async () => {
        await auth.signOut();
        // Hapus cookie
        document.cookie = "firebase-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push("/auth/login");
    };

    const pathname = usePathname();

    // Mapping URL ke Nama Halaman
    const getPageTitle = (path: string) => {
        if (path.includes("/overview")) return "Overview Dashboard";
        if (path.includes("/riset")) return "Pantau Stok & Riset";
        if (path.includes("/ai-assistant")) return "Asisten AI";
        if (path.includes("/laporan")) return "Laporan Harga";
        if (path.includes("/transaksi")) return "Riwayat Pesanan";
        if (path.includes("/profile")) return "Profil Mitra";
        if (path.includes("/settings")) return "Pengaturan";
        if (path.includes("/checkout")) return "Pembayaran";
        return "Dashboard";
    };

    const Title = getPageTitle(pathname);

    const [query, setQuery] = useState("");
    const Router = useRouter();

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            // Mengarahkan ke halaman pencarian dengan query
            Router.push(`/dashboard/riset?q=${query}`);
        }
    };

    return (
        <header className="flex items-center justify-between pb-8">
            <h1 className="text-2xl font-bold text-stone-900">{Title}</h1>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-3 text-stone-400" size={18} />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Cari transaksi atau harga..."
                        className="pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none w-64"
                    />
                </div>

                <button className="p-2 bg-white rounded-full border border-stone-200 hover:text-red-600 transition-colors">
                    <Bell size={20} />
                </button>

                {/* Profil dengan Dropdown Logout */}
                <div className="relative group">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold border border-red-200 cursor-pointer">
                        {user?.displayName ? user.displayName.charAt(0) : "U"}
                    </div>
                    {/* Simple Logout Dropdown */}
                    <button
                        onClick={handleLogout}
                        className="absolute right-0 mt-2 w-32 bg-white shadow-xl rounded-xl border border-stone-100 p-2 text-sm text-stone-600 hidden group-hover:flex items-center gap-2 hover:text-red-600"
                    >
                        <LogOut size={16} /> Keluar
                    </button>
                </div>
            </div>
        </header>
    );
}