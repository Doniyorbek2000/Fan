'use client';

const months = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn'];
const revenueData = [12.4, 18.7, 15.2, 24.1, 31.8, 28.5];
const bookingsData = [420, 680, 540, 890, 1120, 970];
const maxRevenue = Math.max(...revenueData);
const maxBookings = Math.max(...bookingsData);

function BarChart({ data, max, color, unit }: { data: number[]; max: number; color: string; unit: string }) {
  return (
    <div className="flex items-end gap-3 h-40 mt-4">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <span className="text-[#958ea0] text-xs">{val}{unit}</span>
          <div className="w-full rounded-t-lg" style={{ height: `${(val / max) * 100}%`, background: color }} />
          <span className="text-[#958ea0] text-xs">{months[i]}</span>
        </div>
      ))}
    </div>
  );
}

const demographics = [
  { label: '18–24', pct: 38 },
  { label: '25–34', pct: 34 },
  { label: '35–44', pct: 18 },
  { label: '45+', pct: 10 },
];

const topCelebrities = [
  { name: 'Oybek Nazarov', bookings: 421, earnings: '31.8M', growth: '+24%' },
  { name: 'Ulmas Abdullayev', bookings: 284, earnings: '18.5M', growth: '+12%' },
  { name: 'Shahlo Toshmatova', bookings: 196, earnings: '12.2M', growth: '+8%' },
  { name: 'Bobur Yusupov', bookings: 87, earnings: '7.25M', growth: '+31%' },
  { name: 'Zulfiya Ismoilova', bookings: 43, earnings: '3.6M', growth: '+67%' },
];

const topCategories = [
  { label: 'Xonandalar', pct: 35, color: '#a078ff' },
  { label: 'Komediantlar', pct: 28, color: '#ffb0cd' },
  { label: 'Bloggerlar', pct: 18, color: '#4cd7f6' },
  { label: 'Sportchilar', pct: 12, color: '#34d399' },
  { label: 'Boshqalar', pct: 7, color: '#f59e0b' },
];

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">Tahlil</h1>
        <p className="text-[#958ea0] text-sm mt-1">Platforma ish ko'rsatkichlari</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Oylik o\'sish', value: '+18.4%', icon: 'trending_up', color: 'text-emerald-400' },
          { label: 'Avg. buyurtma qiymati', value: '213K so\'m', icon: 'payments', color: 'text-[#d0bcff]' },
          { label: 'Foydalanuvchi ushlab turish', value: '72%', icon: 'group_work', color: 'text-[#4cd7f6]' },
          { label: 'NPS score', value: '8.4', icon: 'star', color: 'text-yellow-400' },
        ].map((kpi) => (
          <div key={kpi.label} className="glass-card rounded-2xl p-5">
            <span className={`material-symbols-outlined text-2xl ${kpi.color}`}>{kpi.icon}</span>
            <p className="text-2xl font-bold text-[#dae2fd] mt-2 font-[Montserrat]">{kpi.value}</p>
            <p className="text-[#958ea0] text-xs mt-1">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#dae2fd]">Oylik daromad (M so'm)</h2>
          <BarChart data={revenueData} max={maxRevenue} color="linear-gradient(180deg, #a078ff, #6e3fff)" unit="M" />
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#dae2fd]">Oylik buyurtmalar</h2>
          <BarChart data={bookingsData} max={maxBookings} color="linear-gradient(180deg, #ffb0cd, #aa0266)" unit="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#dae2fd] mb-5">Yosh demografiyasi</h2>
          <div className="space-y-4">
            {demographics.map((d) => (
              <div key={d.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-[#cbc3d7]">{d.label} yosh</span>
                  <span className="text-[#958ea0] font-medium">{d.pct}%</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${d.pct}%`, background: 'linear-gradient(90deg, #a078ff, #ffb0cd)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#dae2fd] mb-5">Kategoriyalar bo'yicha</h2>
          <div className="space-y-4">
            {topCategories.map((cat) => (
              <div key={cat.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-[#cbc3d7]">{cat.label}</span>
                  <span className="text-[#958ea0] font-medium">{cat.pct}%</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${cat.pct}%`, backgroundColor: cat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-[#dae2fd] mb-5">Top mashhurlar</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#958ea0] text-xs uppercase tracking-wider border-b border-white/10">
                <th className="text-left py-3 pr-4">#</th>
                <th className="text-left py-3 pr-4">Mashhur</th>
                <th className="text-left py-3 pr-4">Buyurtmalar</th>
                <th className="text-left py-3 pr-4">Daromad</th>
                <th className="text-right py-3">O'sish</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {topCelebrities.map((celeb, i) => (
                <tr key={celeb.name} className="hover:bg-white/3 transition-colors">
                  <td className="py-3 pr-4 text-[#958ea0] font-mono">{i + 1}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a078ff] to-[#ffb0cd] flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{celeb.name[0]}</span>
                      </div>
                      <span className="text-[#dae2fd]">{celeb.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-[#cbc3d7]">{celeb.bookings}</td>
                  <td className="py-3 pr-4 text-[#cbc3d7]">{celeb.earnings} so'm</td>
                  <td className="py-3 text-right text-emerald-400 font-medium">{celeb.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
