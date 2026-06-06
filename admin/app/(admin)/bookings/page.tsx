'use client';
import { useState } from 'react';

interface Booking {
  id: string;
  fan: string;
  celebrity: string;
  type: 'VIDEO_CALL' | 'CHAT' | 'MEET_GREET' | 'LIVE_STREAM';
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED';
  amount: number;
  scheduledAt: string;
  createdAt: string;
}

const mockBookings: Booking[] = [
  { id: 'B-1001', fan: 'Dilnoza Mirzayeva', celebrity: 'Ulmas Abdullayev', type: 'VIDEO_CALL', status: 'COMPLETED', amount: 250000, scheduledAt: '2026-06-06 14:00', createdAt: '2026-06-05' },
  { id: 'B-1002', fan: 'Jasur Karimov', celebrity: 'Shahlo Toshmatova', type: 'CHAT', status: 'PENDING', amount: 50000, scheduledAt: '2026-06-07 10:00', createdAt: '2026-06-06' },
  { id: 'B-1003', fan: 'Malika Rahimova', celebrity: 'Oybek Nazarov', type: 'MEET_GREET', status: 'CONFIRMED', amount: 500000, scheduledAt: '2026-06-10 18:00', createdAt: '2026-06-04' },
  { id: 'B-1004', fan: 'Sardor Toshev', celebrity: 'Zulfiya Ismoilova', type: 'VIDEO_CALL', status: 'CANCELLED', amount: 200000, scheduledAt: '2026-06-05 16:00', createdAt: '2026-06-03' },
  { id: 'B-1005', fan: 'Nargiza Alimova', celebrity: 'Bobur Yusupov', type: 'CHAT', status: 'COMPLETED', amount: 75000, scheduledAt: '2026-06-04 11:00', createdAt: '2026-06-03' },
  { id: 'B-1006', fan: 'Kamol Tursunov', celebrity: 'Ulmas Abdullayev', type: 'LIVE_STREAM', status: 'CONFIRMED', amount: 150000, scheduledAt: '2026-06-08 20:00', createdAt: '2026-06-06' },
  { id: 'B-1007', fan: 'Feruza Qodirov', celebrity: 'Shahlo Toshmatova', type: 'VIDEO_CALL', status: 'REFUNDED', amount: 250000, scheduledAt: '2026-06-02 15:00', createdAt: '2026-06-01' },
  { id: 'B-1008', fan: 'Sherzod Yusuf', celebrity: 'Oybek Nazarov', type: 'CHAT', status: 'PENDING', amount: 50000, scheduledAt: '2026-06-09 09:00', createdAt: '2026-06-06' },
];

const typeLabels: Record<string, string> = {
  VIDEO_CALL: 'Video Call',
  CHAT: 'Chat',
  MEET_GREET: 'Meet & Greet',
  LIVE_STREAM: 'Live Stream',
};

const typeColors: Record<string, string> = {
  VIDEO_CALL: 'bg-[#a078ff]/20 text-[#d0bcff]',
  CHAT: 'bg-[#4cd7f6]/20 text-[#4cd7f6]',
  MEET_GREET: 'bg-[#ffb0cd]/20 text-[#ffb0cd]',
  LIVE_STREAM: 'bg-red-500/20 text-red-400',
};

const statusColors: Record<string, string> = {
  COMPLETED: 'bg-emerald-500/20 text-emerald-400',
  PENDING: 'bg-yellow-500/20 text-yellow-400',
  CONFIRMED: 'bg-blue-500/20 text-blue-400',
  CANCELLED: 'bg-red-500/20 text-red-400',
  REFUNDED: 'bg-orange-500/20 text-orange-400',
};

const statusLabels: Record<string, string> = {
  COMPLETED: 'Bajarildi',
  PENDING: 'Kutmoqda',
  CONFIRMED: 'Tasdiqlandi',
  CANCELLED: 'Bekor qilindi',
  REFUNDED: 'Qaytarildi',
};

export default function BookingsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');

  const filtered = mockBookings.filter((b) => {
    const matchSearch =
      b.fan.toLowerCase().includes(search.toLowerCase()) ||
      b.celebrity.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'ALL' || b.status === statusFilter;
    const matchType = typeFilter === 'ALL' || b.type === typeFilter;
    return matchSearch && matchStatus && matchType;
  });

  const totalAmount = filtered.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">Buyurtmalar</h1>
        <p className="text-[#958ea0] text-sm mt-1">{filtered.length} ta buyurtma · Jami: {totalAmount.toLocaleString()} so'm</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-[200px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#958ea0] text-lg">search</span>
          <input
            type="text"
            placeholder="ID, fan yoki mashhur..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-[#dae2fd] placeholder-[#958ea0] focus:outline-none focus:border-[#a078ff]/50 text-sm"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha holat</option>
          <option value="PENDING">Kutmoqda</option>
          <option value="CONFIRMED">Tasdiqlandi</option>
          <option value="COMPLETED">Bajarildi</option>
          <option value="CANCELLED">Bekor qilindi</option>
          <option value="REFUNDED">Qaytarildi</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha turlar</option>
          <option value="VIDEO_CALL">Video Call</option>
          <option value="CHAT">Chat</option>
          <option value="MEET_GREET">Meet & Greet</option>
          <option value="LIVE_STREAM">Live Stream</option>
        </select>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#958ea0] text-xs uppercase tracking-wider border-b border-white/10 bg-white/3">
                <th className="text-left px-6 py-4">ID</th>
                <th className="text-left px-4 py-4">Fan</th>
                <th className="text-left px-4 py-4">Mashhur</th>
                <th className="text-left px-4 py-4">Tur</th>
                <th className="text-left px-4 py-4">Holat</th>
                <th className="text-left px-4 py-4">Vaqt</th>
                <th className="text-right px-6 py-4">Summa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4 text-[#958ea0] font-mono text-xs">{b.id}</td>
                  <td className="px-4 py-4 text-[#dae2fd]">{b.fan}</td>
                  <td className="px-4 py-4 text-[#cbc3d7]">{b.celebrity}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[b.type]}`}>
                      {typeLabels[b.type]}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[b.status]}`}>
                      {statusLabels[b.status]}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#958ea0] text-xs">{b.scheduledAt}</td>
                  <td className="px-6 py-4 text-right text-[#dae2fd] font-medium">{b.amount.toLocaleString()} so'm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#958ea0]">
            <span className="material-symbols-outlined text-4xl mb-2 block">event_busy</span>
            Buyurtma topilmadi
          </div>
        )}
      </div>
    </div>
  );
}
