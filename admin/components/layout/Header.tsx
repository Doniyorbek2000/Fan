'use client';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-transparent">
      {/* Left: Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#dae2fd]">{title}</h1>
        {subtitle && (
          <p className="text-sm text-[#958ea0] mt-0.5">{subtitle}</p>
        )}
      </div>

      {/* Middle: Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#958ea0] text-xl">
            search
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#dae2fd] placeholder-[#958ea0] text-sm focus:outline-none focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff] transition-colors"
          />
        </div>
      </div>

      {/* Right: Notifications & Avatar */}
      <div className="flex items-center gap-5">
        {/* Notification Bell */}
        <button className="relative text-[#958ea0] hover:text-[#dae2fd] transition-colors">
          <span className="material-symbols-outlined text-2xl">
            notifications
          </span>
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#a078ff] rounded-full">
            3
          </span>
        </button>

        {/* Admin Avatar */}
        <button className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#a078ff]/20 border border-[#a078ff]/40 flex items-center justify-center group-hover:border-[#a078ff] transition-colors">
            <span className="material-symbols-outlined text-[#a078ff] text-xl">
              person
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
