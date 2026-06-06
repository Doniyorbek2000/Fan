/* eslint-disable */
'use client';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-none">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full">
<div className="flex items-center gap-4">
<button aria-label="Orqaga" className="text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary">Notifications</h1>
</div>
<button className="font-label-md text-label-md text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform">
                Mark all as read
            </button>
</div>
</header>

<main className="flex-grow pt-24 pb-28 px-margin-mobile overflow-y-auto no-scrollbar">

<div className="flex gap-stack-sm overflow-x-auto no-scrollbar pb-stack-sm mb-stack-md">
<button className="whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md bg-primary-container/20 text-primary border border-primary/30">Hammasi</button>
<button className="whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md glass-card text-on-surface-variant hover:text-primary transition-colors">Uchrashuvlar</button>
<button className="whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md glass-card text-on-surface-variant hover:text-primary transition-colors">Xabarlar</button>
<button className="whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md glass-card text-on-surface-variant hover:text-primary transition-colors">Tizim</button>
</div>

<section className="mb-stack-lg animate-fade-in-up">
<h2 className="font-label-md text-label-md text-outline mb-stack-sm uppercase tracking-wider">Bugun</h2>
<div className="flex flex-col gap-stack-sm">

<div className="glass-card rounded-xl p-4 flex gap-4 relative overflow-hidden group hover:bg-white/10 transition-colors cursor-pointer">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(208,188,255,0.6)]"></div>
<div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center flex-shrink-0 border border-secondary-container/50">
<span className="material-symbols-outlined text-secondary font-[FILL_1] text-[24px]">calendar_month</span>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Yangi band qilish so'rovi</h3>
<span className="font-label-sm text-label-sm text-primary flex-shrink-0">5 daq avval</span>
</div>
<p className="font-body-md text-[14px] text-on-surface-variant leading-tight line-clamp-2">Aziza Rustamova siz bilan 15-oktabr kuni onlayn uchrashuv belgilamoqchi.</p>
</div>
</div>

<div className="glass-card rounded-xl p-4 flex gap-4 relative overflow-hidden group hover:bg-white/10 transition-colors cursor-pointer">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(208,188,255,0.6)]"></div>
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="A close-up studio portrait of a stylish young man with short dark hair, wearing a sleek black turtleneck. The lighting is dramatic and cinematic, employing a vibrant neon purple and deep navy blue color palette indicative of a premium VIP lounge aesthetic. The mood is confident and intense, perfectly suited for a high-end celebrity fan interaction platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGnupBAx1-V7RizPPjwmqayeuh7bPfFMk_Derd2PKM69yhGNzsvk0eWPDDLWJ5CzVtzd6MDw5GSCOycBdiarFzY8BrPo6VdlVUGf8Pz2X3Uvd_2M-GVUElauOmUD-gmglBF39pHIz-NzGkbVN112VZIgSXS_iEFhIJgg0k92L7kfak3yaAlkwpMfJa6zJP8kyq-2vX6GqO4a1wsjqY3Y6oQp6KH405fubmP6GKkpoJPzlvsQXph8cZfIg4gRDf-sD1X_lQvHMvgFw" />
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Julian Vane xabar yubordi</h3>
<span className="font-label-sm text-label-sm text-primary flex-shrink-0">1 soat avval</span>
</div>
<p className="font-body-md text-[14px] text-on-surface-variant leading-tight line-clamp-2">"Salom! Uchrashuv vaqtini biroz o'zgartira olamizmi? Men 15:00 da bandman."</p>
</div>
</div>
</div>
</section>

<section className="animate-fade-in-up">
<h2 className="font-label-md text-label-md text-outline mb-stack-sm uppercase tracking-wider">Kecha</h2>
<div className="flex flex-col gap-stack-sm">

<div className="glass-card rounded-xl p-4 flex gap-4 relative overflow-hidden opacity-75 group hover:opacity-100 transition-opacity cursor-pointer">
<div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center flex-shrink-0 border border-white/10">
<span className="material-symbols-outlined text-outline text-[24px]">verified</span>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Profilingiz tasdiqlandi</h3>
<span className="font-label-sm text-label-sm text-outline flex-shrink-0">Kecha, 14:30</span>
</div>
<p className="font-body-md text-[14px] text-on-surface-variant leading-tight line-clamp-2">Tabriklaymiz! Sizning VIP profilingiz muvaffaqiyatli tasdiqlandi. Endi siz VIP xizmatlardan foydalanishingiz mumkin.</p>
</div>
</div>

<div className="glass-card rounded-xl p-4 flex gap-4 relative overflow-hidden opacity-75 group hover:opacity-100 transition-opacity cursor-pointer">
<div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center flex-shrink-0 border border-tertiary-container/50">
<span className="material-symbols-outlined text-tertiary font-[FILL_1] text-[24px]">videocam</span>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-start mb-1">
<h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Jonli efir boshlandi</h3>
<span className="font-label-sm text-label-sm text-outline flex-shrink-0">Kecha, 10:00</span>
</div>
<p className="font-body-md text-[14px] text-on-surface-variant leading-tight line-clamp-2">Sevimli san'atkoringiz hozir jonli efirda. O'tkazib yubormang!</p>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-container-low/70 dark:bg-surface-container-low/70 backdrop-blur-2xl border-t border-white/5 shadow-[0_-4px_20px_rgba(208,188,255,0.15)] flex justify-around items-center h-20 px-4 pb-safe w-full md:hidden">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[24px]">home</span>
<span className="font-label-sm text-label-sm mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[24px]">chat_bubble</span>
<span className="font-label-sm text-label-sm mt-1">Connect</span>
</a>
<a className="flex flex-col items-center justify-center text-primary font-bold bg-primary-container/20 rounded-full px-4 py-1 hover:text-primary transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined font-[FILL_1] text-[24px]">notifications</span>
<span className="font-label-sm text-label-sm mt-1">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[24px]">person</span>
<span className="font-label-sm text-label-sm mt-1">Profile</span>
</a>
</nav>
    </div>
  );
}
