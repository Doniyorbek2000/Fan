'use client';
import { useState } from 'react';

interface Content {
  id: string;
  celebrity: string;
  title: string;
  type: 'VIDEO' | 'PHOTO' | 'AUDIO' | 'POST';
  status: 'PUBLISHED' | 'DRAFT' | 'FLAGGED' | 'REMOVED';
  views: number;
  likes: number;
  createdAt: string;
  reported: boolean;
}

const mockContent: Content[] = [
  { id: 'CT-001', celebrity: 'Ulmas Abdullayev', title: 'Yangi qo\'shiq — "Bahor"', type: 'VIDEO', status: 'PUBLISHED', views: 42800, likes: 3200, createdAt: '2026-06-06', reported: false },
  { id: 'CT-002', celebrity: 'Shahlo Toshmatova', title: 'Eksklyuziv foto-session', type: 'PHOTO', status: 'PUBLISHED', views: 18500, likes: 1450, createdAt: '2026-06-05', reported: false },
  { id: 'CT-003', celebrity: 'Oybek Nazarov', title: 'Kulgi labidan — 2-qism', type: 'VIDEO', status: 'FLAGGED', views: 85000, likes: 6200, createdAt: '2026-06-04', reported: true },
  { id: 'CT-004', celebrity: 'Zulfiya Ismoilova', title: 'Hayot haqida blog', type: 'POST', status: 'DRAFT', views: 0, likes: 0, createdAt: '2026-06-06', reported: false },
  { id: 'CT-005', celebrity: 'Bobur Yusupov', title: 'Trening darsliği', type: 'VIDEO', status: 'PUBLISHED', views: 29100, likes: 2100, createdAt: '2026-06-03', reported: false },
  { id: 'CT-006', celebrity: 'Dostonbek Mirzaev', title: 'Freestyle rap session', type: 'AUDIO', status: 'REMOVED', views: 5400, likes: 380, createdAt: '2026-05-28', reported: true },
];

const typeColors: Record<string, string> = {
  VIDEO: 'bg-[#a078ff]/20 text-[#d0bcff]',
  PHOTO: 'bg-[#ffb0cd]/20 text-[#ffb0cd]',
  AUDIO: 'bg-emerald-500/20 text-emerald-400',
  POST: 'bg-[#4cd7f6]/20 text-[#4cd7f6]',
};

const typeIcons: Record<string, string> = {
  VIDEO: 'videocam',
  PHOTO: 'image',
  AUDIO: 'headphones',
  POST: 'article',
};

const statusColors: Record<string, string> = {
  PUBLISHED: 'bg-emerald-500/20 text-emerald-400',
  DRAFT: 'bg-[#958ea0]/20 text-[#958ea0]',
  FLAGGED: 'bg-yellow-500/20 text-yellow-400',
  REMOVED: 'bg-red-500/20 text-red-400',
};

const statusLabels: Record<string, string> = {
  PUBLISHED: 'Nashr qilingan',
  DRAFT: 'Qoralama',
  FLAGGED: 'Shikoyat qilingan',
  REMOVED: 'O\'chirilgan',
};

function formatNum(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}

export default function ContentPage() {
  const [content, setContent] = useState<Content[]>(mockContent);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');

  const filtered = content.filter((c) => {
    const matchStatus = statusFilter === 'ALL' || c.status === statusFilter;
    const matchType = typeFilter === 'ALL' || c.type === typeFilter;
    return matchStatus && matchType;
  });

  function removeContent(id: string) {
    setContent((prev) => prev.map((c) => (c.id === id ? { ...c, status: 'REMOVED' } : c)));
  }

  function approveContent(id: string) {
    setContent((prev) => prev.map((c) => (c.id === id ? { ...c, status: 'PUBLISHED', reported: false } : c)));
  }

  const flaggedCount = content.filter((c) => c.status === 'FLAGGED').length;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">Kontent</h1>
          <p className="text-[#958ea0] text-sm mt-1">
            {flaggedCount > 0 && (
              <span className="text-yellow-400 font-medium">{flaggedCount} ta shikoyat ko'rib chiqishni kutmoqda · </span>
            )}
            {content.length} ta kontent
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha holat</option>
          <option value="PUBLISHED">Nashr qilingan</option>
          <option value="DRAFT">Qoralama</option>
          <option value="FLAGGED">Shikoyat qilingan</option>
          <option value="REMOVED">O'chirilgan</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#cbc3d7] text-sm focus:outline-none focus:border-[#a078ff]/50"
        >
          <option value="ALL">Barcha turlar</option>
          <option value="VIDEO">Video</option>
          <option value="PHOTO">Foto</option>
          <option value="AUDIO">Audio</option>
          <option value="POST">Post</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`glass-card rounded-2xl p-5 space-y-4 ${item.status === 'FLAGGED' ? 'border-yellow-500/30 ring-1 ring-yellow-500/20' : ''}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`w-10 h-10 rounded-xl ${typeColors[item.type]} flex items-center justify-center flex-shrink-0`}>
                  <span className="material-symbols-outlined text-lg">{typeIcons[item.type]}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[#dae2fd] font-medium truncate">{item.title}</p>
                  <p className="text-[#958ea0] text-xs">{item.celebrity} · {item.createdAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {item.reported && (
                  <span className="material-symbols-outlined text-yellow-400 text-lg" title="Shikoyat qilingan">flag</span>
                )}
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                  {statusLabels[item.status]}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-[#958ea0]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">visibility</span>
                {formatNum(item.views)}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">favorite</span>
                {formatNum(item.likes)}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${typeColors[item.type]}`}>{item.type}</span>
            </div>

            {(item.status === 'FLAGGED' || item.status === 'PUBLISHED') && (
              <div className="flex gap-2 pt-1">
                {item.status === 'FLAGGED' && (
                  <button
                    onClick={() => approveContent(item.id)}
                    className="flex-1 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 rounded-xl py-2 text-sm font-medium transition-colors"
                  >
                    Tasdiqlash
                  </button>
                )}
                {item.status !== 'REMOVED' && (
                  <button
                    onClick={() => removeContent(item.id)}
                    className="flex-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-xl py-2 text-sm font-medium transition-colors"
                  >
                    O'chirish
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass-card rounded-2xl text-center py-16 text-[#958ea0]">
          <span className="material-symbols-outlined text-4xl mb-2 block">perm_media</span>
          Kontent topilmadi
        </div>
      )}
    </div>
  );
}
