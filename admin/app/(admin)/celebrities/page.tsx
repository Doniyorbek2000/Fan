'use client';
import { useState } from 'react';

interface Celebrity {
  id: string;
  name: string;
  email: string;
  category: string;
  verified: 'PENDING' | 'VERIFIED' | 'REJECTED';
  followers: number;
  totalEarnings: number;
  rating: number;
  joinedAt: string;
}

const mockCelebrities: Celebrity[] = [
  { id: 'C-001', name: 'Ulmas Abdullayev', email: 'ulmas@example.com', category: 'Xonanda', verified: 'VERIFIED', followers: 2_840_000, totalEarnings: 18_450_000, rating: 4.9, joinedAt: '2025-11-20' },
  { id: 'C-002', name: 'Shahlo Toshmatova', email: 'shahlo@example.com', category: 'Aktrisa', verified: 'VERIFIED', followers: 1_560_000, totalEarnings: 12_200_000, rating: 4.8, joinedAt: '2025-12-01' },
  { id: 'C-003', name: 'Oybek Nazarov', email: 'oybek@example.com', category: 'Komediant', verified: 'VERIFIED', followers: 4_200_000, totalEarnings: 31_800_000, rating: 4.7, joinedAt: '2026-01-05' },
  { id: 'C-004', name: 'Zulfiya Ismoilova', email: 'zulfiya@example.com', category: 'Blogger', verified: 'PENDING', followers: 892_000, totalEarnings: 3_600_000, rating: 4.5, joinedAt: '2026-05-01' },
  { id: 'C-005', name: 'Bobur Yusupov', email: 'bobur@example.com', category: 'Sportchi', verified: 'VERIFIED', followers: 1_100_000, totalEarnings: 7_250_000, rating: 4.6, joinedAt: '2026-02-14' },
  { id: 'C-006', name: 'Kamola Saidova', email: 'kamola@example.com', category: 'Model', verified: 'PENDING', followers: 430_000, totalEarnings: 0, rating: 0, joinedAt: '2026-06-01' },
  { id: 'C-007', name: 'Dostonbek Mirzaev', email: 'doston@example.com', category: 'Rapper', verified: 'REJECTED', followers: 680_000, totalEarnings: 0, rating: 0, joinedAt: '2026-04-10' },
];

const verifiedColors: Record<string, string> = {
  VERIFIED: 'bg-emerald-500/20 text-emerald-400',
  PENDING: 'bg-yellow-500/20 text-yellow-400',
  REJECTED: 'bg-red-500/20 text-red-400',
};

const verifiedLabels: Record<string, string> = {
  VERIFIED: 'Tasdiqlangan',
  PENDING: 'Kutmoqda',
  REJECTED: 'Rad etilgan',
};

function formatFollowers(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

export default function CelebritiesPage() {
  const [celebrities, setCelebrities] = useState<Celebrity[]>(mockCelebrities);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');

  const filtered = celebrities.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'ALL' || c.verified === filter;
    return matchSearch && matchFilter;
  });

  function updateVerification(id: string, status: 'VERIFIED' | 'REJECTED') {
    setCelebrities((prev) => prev.map((c) => (c.id === id ? { ...c, verified: status } : c)));
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">Mashhurlar</h1>
          <p className="text-[#958ea0] text-sm mt-1">{celebrities.filter((c) => c.verified === 'PENDING').length} ta tasdiqlash kutmoqda</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-[200px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#958ea0] text-lg">search</span>
          <input
            type="text"
            placeholder="Ism yoki kategoriya..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-[#dae2fd] placeholder-[#958ea0] focus:outline-none focus:border-[#a078ff]/50 text-sm"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha holat</option>
          <option value="VERIFIED">Tasdiqlangan</option>
          <option value="PENDING">Kutmoqda</option>
          <option value="REJECTED">Rad etilgan</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((celeb) => (
          <div key={celeb.id} className="glass-card rounded-2xl p-5 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a078ff] to-[#ffb0cd] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-white">{celeb.name[0]}</span>
                </div>
                <div>
                  <p className="text-[#dae2fd] font-semibold">{celeb.name}</p>
                  <p className="text-[#958ea0] text-xs">{celeb.category}</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${verifiedColors[celeb.verified]}`}>
                {verifiedLabels[celeb.verified]}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/5 rounded-xl p-2.5">
                <p className="text-[#dae2fd] font-semibold text-sm">{formatFollowers(celeb.followers)}</p>
                <p className="text-[#958ea0] text-xs mt-0.5">Followers</p>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5">
                <p className="text-[#dae2fd] font-semibold text-sm">
                  {celeb.totalEarnings > 0 ? `${(celeb.totalEarnings / 1_000_000).toFixed(1)}M` : '—'}
                </p>
                <p className="text-[#958ea0] text-xs mt-0.5">Daromad</p>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5">
                <p className="text-[#dae2fd] font-semibold text-sm">
                  {celeb.rating > 0 ? `⭐ ${celeb.rating}` : '—'}
                </p>
                <p className="text-[#958ea0] text-xs mt-0.5">Reyting</p>
              </div>
            </div>

            <p className="text-[#958ea0] text-xs">{celeb.email} · {celeb.joinedAt}</p>

            {celeb.verified === 'PENDING' && (
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => updateVerification(celeb.id, 'VERIFIED')}
                  className="flex-1 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 rounded-xl py-2 text-sm font-medium transition-colors"
                >
                  Tasdiqlash
                </button>
                <button
                  onClick={() => updateVerification(celeb.id, 'REJECTED')}
                  className="flex-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-xl py-2 text-sm font-medium transition-colors"
                >
                  Rad etish
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass-card rounded-2xl text-center py-16 text-[#958ea0]">
          <span className="material-symbols-outlined text-4xl mb-2 block">stars</span>
          Mashhur topilmadi
        </div>
      )}
    </div>
  );
}
