'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { href: '/users', icon: 'group', label: 'Foydalanuvchilar' },
  { href: '/celebrities', icon: 'stars', label: 'Mashhurlar' },
  { href: '/bookings', icon: 'event_available', label: 'Buyurtmalar' },
  { href: '/payments', icon: 'payments', label: "To'lovlar" },
  { href: '/content', icon: 'perm_media', label: 'Kontent' },
  { href: '/analytics', icon: 'analytics', label: 'Tahlil' },
  { href: '/settings', icon: 'settings', label: 'Sozlamalar' },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-64 min-h-screen bg-[#131b2e] border-r border-white/10 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#a078ff] to-[#ffb0cd] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">star</span>
          </div>
          <div>
            <p className="font-bold text-[#dae2fd] font-[Montserrat]">FanMeet</p>
            <p className="text-xs text-[#958ea0]">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = path.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-[#a078ff]/20 text-[#d0bcff] font-semibold'
                  : 'text-[#cbc3d7] hover:bg-white/5 hover:text-[#d0bcff]'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${isActive ? 'text-[#d0bcff]' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
              {isActive && <div className="ml-auto w-1.5 h-5 bg-[#d0bcff] rounded-full" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 cursor-pointer transition-all">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a078ff] to-[#ffb0cd] flex items-center justify-center">
            <span className="text-xs font-bold text-white">A</span>
          </div>
          <div>
            <p className="text-sm font-medium text-[#dae2fd]">Admin</p>
            <p className="text-xs text-[#958ea0]">admin@fanmeet.uz</p>
          </div>
          <span className="material-symbols-outlined text-[#958ea0] ml-auto text-lg">logout</span>
        </div>
      </div>
    </aside>
  );
}
