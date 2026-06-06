'use client';
import { useState } from 'react';

interface Payment {
  id: string;
  user: string;
  type: 'BOOKING' | 'TOPUP' | 'WITHDRAWAL' | 'REFUND';
  method: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  amount: number;
  date: string;
}

const mockPayments: Payment[] = [
  { id: 'P-2001', user: 'Dilnoza Mirzayeva', type: 'BOOKING', method: 'Click', status: 'SUCCESS', amount: 250000, date: '2026-06-06 14:23' },
  { id: 'P-2002', user: 'Ulmas Abdullayev', type: 'WITHDRAWAL', method: 'Payme', status: 'SUCCESS', amount: 8500000, date: '2026-06-06 12:00' },
  { id: 'P-2003', user: 'Jasur Karimov', type: 'TOPUP', method: 'Uzcard', status: 'SUCCESS', amount: 500000, date: '2026-06-06 10:45' },
  { id: 'P-2004', user: 'Sardor Toshev', type: 'REFUND', method: 'Click', status: 'SUCCESS', amount: 200000, date: '2026-06-05 18:30' },
  { id: 'P-2005', user: 'Malika Rahimova', type: 'BOOKING', method: 'Payme', status: 'PENDING', amount: 500000, date: '2026-06-05 16:00' },
  { id: 'P-2006', user: 'Oybek Nazarov', type: 'WITHDRAWAL', method: 'Bank transfer', status: 'PENDING', amount: 15000000, date: '2026-06-05 09:00' },
  { id: 'P-2007', user: 'Nargiza Alimova', type: 'TOPUP', method: 'Humo', status: 'FAILED', amount: 100000, date: '2026-06-04 20:15' },
  { id: 'P-2008', user: 'Kamol Tursunov', type: 'BOOKING', method: 'Click', status: 'SUCCESS', amount: 150000, date: '2026-06-04 15:30' },
];

const typeColors: Record<string, string> = {
  BOOKING: 'bg-[#a078ff]/20 text-[#d0bcff]',
  TOPUP: 'bg-emerald-500/20 text-emerald-400',
  WITHDRAWAL: 'bg-orange-500/20 text-orange-400',
  REFUND: 'bg-[#4cd7f6]/20 text-[#4cd7f6]',
};

const typeLabels: Record<string, string> = {
  BOOKING: 'Buyurtma',
  TOPUP: 'Hisobni to\'ldirish',
  WITHDRAWAL: 'Pul chiqarish',
  REFUND: 'Qaytarish',
};

const statusColors: Record<string, string> = {
  SUCCESS: 'bg-emerald-500/20 text-emerald-400',
  PENDING: 'bg-yellow-500/20 text-yellow-400',
  FAILED: 'bg-red-500/20 text-red-400',
};

const statusLabels: Record<string, string> = {
  SUCCESS: 'Muvaffaqiyatli',
  PENDING: 'Jarayonda',
  FAILED: 'Xato',
};

export default function PaymentsPage() {
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filtered = mockPayments.filter((p) => {
    const matchType = typeFilter === 'ALL' || p.type === typeFilter;
    const matchStatus = statusFilter === 'ALL' || p.status === statusFilter;
    return matchType && matchStatus;
  });

  const totalSuccess = mockPayments.filter((p) => p.status === 'SUCCESS').reduce((s, p) => s + p.amount, 0);
  const totalPending = mockPayments.filter((p) => p.status === 'PENDING').reduce((s, p) => s + p.amount, 0);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">To'lovlar</h1>
        <p className="text-[#958ea0] text-sm mt-1">Barcha moliyaviy operatsiyalar</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-400">check_circle</span>
          </div>
          <div>
            <p className="text-[#958ea0] text-xs">Muvaffaqiyatli</p>
            <p className="text-[#dae2fd] font-bold">{(totalSuccess / 1_000_000).toFixed(2)}M so'm</p>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-yellow-500/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-yellow-400">schedule</span>
          </div>
          <div>
            <p className="text-[#958ea0] text-xs">Jarayonda</p>
            <p className="text-[#dae2fd] font-bold">{(totalPending / 1_000_000).toFixed(2)}M so'm</p>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#a078ff]/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#d0bcff]">account_balance</span>
          </div>
          <div>
            <p className="text-[#958ea0] text-xs">Platforma komissiyasi (15%)</p>
            <p className="text-[#dae2fd] font-bold">{((totalSuccess * 0.15) / 1_000_000).toFixed(2)}M so'm</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha turlar</option>
          <option value="BOOKING">Buyurtma</option>
          <option value="TOPUP">Hisobni to'ldirish</option>
          <option value="WITHDRAWAL">Pul chiqarish</option>
          <option value="REFUND">Qaytarish</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha holat</option>
          <option value="SUCCESS">Muvaffaqiyatli</option>
          <option value="PENDING">Jarayonda</option>
          <option value="FAILED">Xato</option>
        </select>
        <button className="ml-auto bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-base">download</span>
          Eksport
        </button>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#958ea0] text-xs uppercase tracking-wider border-b border-white/10 bg-white/3">
                <th className="text-left px-6 py-4">ID</th>
                <th className="text-left px-4 py-4">Foydalanuvchi</th>
                <th className="text-left px-4 py-4">Tur</th>
                <th className="text-left px-4 py-4">Usul</th>
                <th className="text-left px-4 py-4">Holat</th>
                <th className="text-left px-4 py-4">Sana</th>
                <th className="text-right px-6 py-4">Summa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4 text-[#958ea0] font-mono text-xs">{p.id}</td>
                  <td className="px-4 py-4 text-[#dae2fd]">{p.user}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[p.type]}`}>
                      {typeLabels[p.type]}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#cbc3d7]">{p.method}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[p.status]}`}>
                      {statusLabels[p.status]}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#958ea0] text-xs">{p.date}</td>
                  <td className="px-6 py-4 text-right font-medium text-[#dae2fd]">{p.amount.toLocaleString()} so'm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#958ea0]">
            <span className="material-symbols-outlined text-4xl mb-2 block">payments</span>
            To'lov topilmadi
          </div>
        )}
      </div>
    </div>
  );
}
