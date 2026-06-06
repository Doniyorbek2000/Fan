'use client';
import { useEffect, useState } from 'react';

interface Stats {
  totalUsers: number;
  totalCelebrities: number;
  totalBookings: number;
  totalRevenue: number;
  activeBookings: number;
  pendingVerifications: number;
}

interface RecentBooking {
  id: string;
  fan: string;
  celebrity: string;
  type: string;
  status: string;
  amount: number;
  date: string;
}

const mockStats: Stats = {
  totalUsers: 12_483,
  totalCelebrities: 342,
  totalBookings: 8_917,
  totalRevenue: 458_620_000,
  activeBookings: 124,
  pendingVerifications: 18,
};

const mockBookings: RecentBooking[] = [
  { id: 'B-1001', fan: 'Dilnoza M.', celebrity: 'Ulmas Abdullayev', type: 'Video Call', status: 'COMPLETED', amount: 250000, date: '2026-06-06' },
  { id: 'B-1002', fan: 'Jasur K.', celebrity: 'Shahlo Toshmatova', type: 'Chat', status: 'PENDING', amount: 50000, date: '2026-06-06' },
  { id: 'B-1003', fan: 'Malika R.', celebrity: 'Oybek Nazarov', type: 'Meet & Greet', status: 'CONFIRMED', amount: 500000, date: '2026-06-05' },
  { id: 'B-1004', fan: 'Sardor T.', celebrity: 'Zulfiya Ismoilova', type: 'Video Call', status: 'CANCELLED', amount: 200000, date: '2026-06-05' },
  { id: 'B-1005', fan: 'Nargiza A.', celebrity: 'Bobur Yusupov', type: 'Chat', status: 'COMPLETED', amount: 75000, date: '2026-06-04' },
];

const statusColors: Record<string, string> = {
  COMPLETED: 'bg-emerald-500/20 text-emerald-400',
  PENDING: 'bg-yellow-500/20 text-yellow-400',
  CONFIRMED: 'bg-blue-500/20 text-blue-400',
  CANCELLED: 'bg-red-500/20 text-red-400',
};

function StatCard({ icon, label, value, sub, color }: { icon: string; label: string; value: string; sub?: string; color: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
        <span className="material-symbols-outlined text-white text-xl">{icon}</span>
      </div>
      <div>
        <p className="text-[#958ea0] text-xs uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-[#dae2fd] font-[Montserrat] mt-1">{value}</p>
        {sub && <p className="text-xs text-[#958ea0] mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [stats] = useState<Stats>(mockStats);

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">Dashboard</h1>
        <p className="text-[#958ea0] text-sm mt-1">Platforma umumiy holati</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        <StatCard icon="group" label="Jami foydalanuvchilar" value={stats.totalUsers.toLocaleString()} sub="+284 bu hafta" color="bg-[#a078ff]" />
        <StatCard icon="stars" label="Mashhurlar" value={stats.totalCelebrities.toLocaleString()} sub={`${stats.pendingVerifications} tasdiqlash kutmoqda`} color="bg-[#ffb0cd]/80" />
        <StatCard icon="event_available" label="Jami buyurtmalar" value={stats.totalBookings.toLocaleString()} sub={`${stats.activeBookings} faol`} color="bg-[#4cd7f6]/80" />
        <StatCard icon="payments" label="Jami daromad" value={`${(stats.totalRevenue / 1_000_000).toFixed(1)}M so'm`} sub="Platforma ulushi 15%" color="bg-emerald-500/80" />
        <StatCard icon="trending_up" label="Faol buyurtmalar" value={stats.activeBookings.toString()} sub="Hozir jarayonda" color="bg-orange-500/80" />
        <StatCard icon="verified_user" label="Tasdiqlash kutmoqda" value={stats.pendingVerifications.toString()} sub="Tezkor ko'rib chiqish" color="bg-yellow-500/80" />
      </div>

      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#dae2fd]">So'nggi buyurtmalar</h2>
          <a href="/bookings" className="text-[#a078ff] text-sm hover:underline">Barchasini ko'rish →</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#958ea0] text-xs uppercase tracking-wider border-b border-white/10">
                <th className="text-left py-3 pr-4">ID</th>
                <th className="text-left py-3 pr-4">Fan</th>
                <th className="text-left py-3 pr-4">Mashhur</th>
                <th className="text-left py-3 pr-4">Tur</th>
                <th className="text-left py-3 pr-4">Holat</th>
                <th className="text-right py-3">Summa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockBookings.map((b) => (
                <tr key={b.id} className="hover:bg-white/3 transition-colors">
                  <td className="py-3 pr-4 text-[#958ea0] font-mono">{b.id}</td>
                  <td className="py-3 pr-4 text-[#dae2fd]">{b.fan}</td>
                  <td className="py-3 pr-4 text-[#dae2fd]">{b.celebrity}</td>
                  <td className="py-3 pr-4 text-[#cbc3d7]">{b.type}</td>
                  <td className="py-3 pr-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[b.status]}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="py-3 text-right text-[#dae2fd] font-medium">
                    {b.amount.toLocaleString()} so'm
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#dae2fd] mb-5">Buyurtma turlari</h2>
          <div className="space-y-4">
            {[
              { label: 'Video Call', pct: 48, color: 'from-[#a078ff] to-[#a078ff]' },
              { label: 'Chat', pct: 30, color: 'from-[#ffb0cd] to-[#ffb0cd]' },
              { label: 'Meet & Greet', pct: 15, color: 'from-[#4cd7f6] to-[#4cd7f6]' },
              { label: 'Live Stream', pct: 7, color: 'from-emerald-400 to-emerald-400' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#cbc3d7]">{item.label}</span>
                  <span className="text-[#958ea0]">{item.pct}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#dae2fd] mb-5">Tezkor harakatlar</h2>
          <div className="space-y-3">
            {[
              { icon: 'verified', label: 'Mashhurlarni tasdiqlash', href: '/celebrities', badge: '18' },
              { icon: 'flag', label: 'Shikoyatlarni ko\'rish', href: '/content', badge: '4' },
              { icon: 'support_agent', label: 'Yordam so\'rovlari', href: '/settings', badge: '7' },
              { icon: 'download', label: 'Hisobot yuklab olish', href: '/analytics', badge: null },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <span className="material-symbols-outlined text-[#a078ff] text-xl">{item.icon}</span>
                <span className="text-[#cbc3d7] text-sm flex-1 group-hover:text-[#dae2fd] transition-colors">{item.label}</span>
                {item.badge && (
                  <span className="bg-[#a078ff]/20 text-[#d0bcff] text-xs px-2 py-0.5 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
                <span className="material-symbols-outlined text-[#958ea0] text-sm">chevron_right</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
