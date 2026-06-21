/* eslint-disable */
'use client';

export default function PersonalCabinetPage() {
  const quickStats = [
    { label: 'Buyurtmalar', value: '24', icon: 'calendar_today', color: '#a078ff' },
    { label: 'Xabarlar', value: '156', icon: 'chat', color: '#ffb0cd' },
    { label: 'Sevimlilar', value: '38', icon: 'favorite', color: '#4cd7f6' },
    { label: 'Sharhlar', value: '12', icon: 'star', color: '#d0bcff' },
  ];

  const recentActivity = [
    { icon: 'videocam', text: 'Sardor M. bilan video qo\'ng\'iroq', time: '2 soat oldin', color: '#a078ff' },
    { icon: 'payment', text: 'Hamyon to\'ldirildi — 500,000 so\'m', time: 'Kecha', color: '#4cd7f6' },
    { icon: 'star', text: 'Ozoda N. ga 5 yulduz baho berildi', time: '2 kun oldin', color: '#ffb0cd' },
    { icon: 'forum', text: 'Jasur U. bilan chat sessiyasi', time: '3 kun oldin', color: '#d0bcff' },
    { icon: 'groups', text: 'Meet & Greet buyurtma qilindi', time: '1 hafta oldin', color: '#a078ff' },
  ];

  const quickActions = [
    { icon: 'edit', title: 'Profilni tahrirlash', desc: 'Ma\'lumotlarni yangilash', color: '#a078ff' },
    { icon: 'account_balance_wallet', title: 'Hamyon', desc: 'Balans: 1,250,000 so\'m', color: '#4cd7f6' },
    { icon: 'security', title: 'Xavfsizlik', desc: 'Parol va ikki bosqichli', color: '#ffb0cd' },
    { icon: 'help', title: 'Yordam', desc: 'FAQ va qo\'llab-quvvatlash', color: '#d0bcff' },
  ];

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] pb-8" suppressHydrationWarning>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-5 h-16">
        <button className="active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#d0bcff]">arrow_back</span>
        </button>
        <span className="font-bold text-lg text-[#dae2fd] font-[Montserrat]">Shaxsiy kabinet</span>
        <button className="active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#958ea0]">settings</span>
        </button>
      </header>

      <main className="pt-20 px-5 flex flex-col gap-6">
        {/* User Info Card */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-18 h-18 rounded-full overflow-hidden border-2 border-[#a078ff] shadow-[0_0_15px_rgba(160,120,255,0.3)]">
              <img
                className="w-[72px] h-[72px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0iSoDTTav6mLvLHwxFgQBsMKt6ktku-ZFrcPhSYcbz-uRQTQfMVVRqa28c8dAIlecULFKHbUfkGEtHlkWKsV4-Yzy9NdNQfOe03wZY2EHOqdQlzH5o0Dx5t3mzOqKvqA1SSy0bY69Q8NB6xPJdd3qWGlH3Dd_ON6yR_03EGNy3dkfIdSpcdPR9ZmbOE1B0aWZLh_Iyru3rEolKV_hm-3keaI74H-dqDteS4sSHsHmWLEXFqf-oW987QI8L0NJls_pyiI8VUYT7sc"
                alt="User avatar"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-[#dae2fd] font-[Montserrat]">Alisher Karimov</h2>
                <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">verified</span>
              </div>
              <p className="text-sm text-[#958ea0]">alisher@email.com</p>
              <p className="text-xs text-[#958ea0] mt-1">
                <span className="material-symbols-outlined text-[12px] align-middle mr-1">calendar_month</span>
                A&apos;zo bo&apos;lgan: 2024 yil mart
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-3">
          {quickStats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-3 flex flex-col items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px]" style={{ color: stat.color }}>{stat.icon}</span>
              <span className="text-lg font-bold text-[#dae2fd]">{stat.value}</span>
              <span className="text-[10px] text-[#958ea0] text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Subscription Status */}
        <div className="glass-card rounded-2xl p-5 border-[#a078ff]/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb0cd]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
              <h3 className="text-base font-bold text-[#dae2fd]">Premium obuna</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#a078ff]/20 text-xs font-semibold text-[#a078ff]">Faol</span>
          </div>
          <p className="text-sm text-[#cbc3d7] mb-3">Sizning premium obunangiz 2026 yil 15 iyulgacha amal qiladi</p>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-[#a078ff] to-[#ffb0cd]" style={{ width: '65%' }} />
          </div>
          <p className="text-xs text-[#958ea0] mt-2">24 kunlik qoldi</p>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-bold text-[#d0bcff] font-[Montserrat] mb-4">Oxirgi faoliyat</h3>
          <div className="flex flex-col gap-0.5">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-3 py-3 relative">
                {/* Timeline line */}
                {i < recentActivity.length - 1 && (
                  <div className="absolute left-[18px] top-[44px] w-[2px] h-[calc(100%-20px)] bg-white/10" />
                )}
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${activity.color}20` }}>
                  <span className="material-symbols-outlined text-[18px]" style={{ color: activity.color }}>{activity.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#dae2fd]">{activity.text}</p>
                  <p className="text-xs text-[#958ea0] mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-bold text-[#d0bcff] font-[Montserrat] mb-4">Tezkor harakatlar</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <div
                key={action.title}
                className="glass-card rounded-2xl p-4 flex flex-col gap-3 active:scale-[0.97] transition-transform cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${action.color}20` }}>
                  <span className="material-symbols-outlined text-[22px]" style={{ color: action.color }}>{action.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#dae2fd]">{action.title}</p>
                  <p className="text-xs text-[#958ea0] mt-0.5">{action.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <button className="w-full py-3.5 rounded-full border border-red-500/30 text-sm font-semibold text-red-400 active:scale-95 transition-all mt-2">
          <span className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Chiqish
          </span>
        </button>
      </main>
    </div>
  );
}
