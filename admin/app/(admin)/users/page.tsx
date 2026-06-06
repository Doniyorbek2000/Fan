'use client';
import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'FAN' | 'CELEBRITY' | 'ADMIN';
  status: 'ACTIVE' | 'SUSPENDED' | 'BANNED';
  createdAt: string;
  bookings: number;
}

const mockUsers: User[] = [
  { id: 'U-001', name: 'Dilnoza Mirzayeva', email: 'dilnoza@example.com', role: 'FAN', status: 'ACTIVE', createdAt: '2026-01-15', bookings: 12 },
  { id: 'U-002', name: 'Jasur Karimov', email: 'jasur@example.com', role: 'FAN', status: 'ACTIVE', createdAt: '2026-02-03', bookings: 5 },
  { id: 'U-003', name: 'Ulmas Abdullayev', email: 'ulmas@example.com', role: 'CELEBRITY', status: 'ACTIVE', createdAt: '2025-11-20', bookings: 284 },
  { id: 'U-004', name: 'Shahlo Toshmatova', email: 'shahlo@example.com', role: 'CELEBRITY', status: 'ACTIVE', createdAt: '2025-12-01', bookings: 196 },
  { id: 'U-005', name: 'Malika Rahimova', email: 'malika@example.com', role: 'FAN', status: 'SUSPENDED', createdAt: '2026-03-10', bookings: 3 },
  { id: 'U-006', name: 'Sardor Toshev', email: 'sardor@example.com', role: 'FAN', status: 'ACTIVE', createdAt: '2026-04-22', bookings: 8 },
  { id: 'U-007', name: 'Oybek Nazarov', email: 'oybek@example.com', role: 'CELEBRITY', status: 'ACTIVE', createdAt: '2026-01-05', bookings: 421 },
  { id: 'U-008', name: 'Nargiza Alimova', email: 'nargiza@example.com', role: 'FAN', status: 'BANNED', createdAt: '2025-10-18', bookings: 0 },
  { id: 'U-009', name: 'Bobur Yusupov', email: 'bobur@example.com', role: 'CELEBRITY', status: 'ACTIVE', createdAt: '2026-02-14', bookings: 87 },
  { id: 'U-010', name: 'Zulfiya Ismoilova', email: 'zulfiya@example.com', role: 'CELEBRITY', status: 'ACTIVE', createdAt: '2026-05-01', bookings: 43 },
];

const roleColors: Record<string, string> = {
  FAN: 'bg-[#4cd7f6]/20 text-[#4cd7f6]',
  CELEBRITY: 'bg-[#a078ff]/20 text-[#d0bcff]',
  ADMIN: 'bg-[#ffb0cd]/20 text-[#ffb0cd]',
};

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-emerald-500/20 text-emerald-400',
  SUSPENDED: 'bg-yellow-500/20 text-yellow-400',
  BANNED: 'bg-red-500/20 text-red-400',
};

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [users, setUsers] = useState<User[]>(mockUsers);

  const filtered = users.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'ALL' || u.role === roleFilter;
    const matchStatus = statusFilter === 'ALL' || u.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  function toggleStatus(id: string) {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== id) return u;
        return { ...u, status: u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE' };
      })
    );
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">Foydalanuvchilar</h1>
          <p className="text-[#958ea0] text-sm mt-1">{users.length} ta foydalanuvchi</p>
        </div>
        <button className="gradient-btn px-5 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-base">person_add</span>
          Qo'shish
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-[200px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#958ea0] text-lg">search</span>
          <input
            type="text"
            placeholder="Ism yoki email bo'yicha qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-[#dae2fd] placeholder-[#958ea0] focus:outline-none focus:border-[#a078ff]/50 text-sm"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha rollar</option>
          <option value="FAN">Fan</option>
          <option value="CELEBRITY">Celebrity</option>
          <option value="ADMIN">Admin</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha holat</option>
          <option value="ACTIVE">Faol</option>
          <option value="SUSPENDED">To'xtatilgan</option>
          <option value="BANNED">Bloklangan</option>
        </select>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#958ea0] text-xs uppercase tracking-wider border-b border-white/10 bg-white/3">
                <th className="text-left px-6 py-4">Foydalanuvchi</th>
                <th className="text-left px-4 py-4">Rol</th>
                <th className="text-left px-4 py-4">Holat</th>
                <th className="text-left px-4 py-4">Buyurtmalar</th>
                <th className="text-left px-4 py-4">Ro'yxatdan o'tgan</th>
                <th className="text-right px-6 py-4">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#a078ff] to-[#ffb0cd] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-white">{user.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-[#dae2fd] font-medium">{user.name}</p>
                        <p className="text-[#958ea0] text-xs">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${roleColors[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#cbc3d7]">{user.bookings}</td>
                  <td className="px-4 py-4 text-[#958ea0]">{user.createdAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => toggleStatus(user.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          user.status === 'ACTIVE'
                            ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
                        }`}
                      >
                        {user.status === 'ACTIVE' ? 'To\'xtatish' : 'Faollashtirish'}
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/10 text-[#958ea0] hover:text-[#dae2fd] transition-colors">
                        <span className="material-symbols-outlined text-base">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#958ea0]">
            <span className="material-symbols-outlined text-4xl mb-2 block">search_off</span>
            Foydalanuvchi topilmadi
          </div>
        )}
      </div>
    </div>
  );
}
