/* eslint-disable */
'use client';

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(208,188,255,0.15)] flex justify-between items-center px-margin-mobile h-16">
<button className="text-primary dark:text-primary hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center justify-center p-2 -ml-2 rounded-full">
<span className="material-symbols-outlined text-[28px]">menu</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">FanMeet</h1>
<div className="w-10 h-10 rounded-full bg-surface-container-highest border border-white/10 overflow-hidden flex items-center justify-center text-primary-fixed-dim hover:opacity-80 transition-opacity active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined">person</span>
</div>
</header>

<main className="relative z-10 pt-24 pb-32 px-margin-mobile flex flex-col items-center justify-center min-h-screen">

<div className="text-center mb-stack-lg max-w-md w-full">
<div className="inline-flex items-center justify-center gap-2 mb-stack-sm">
<span className="material-symbols-outlined text-secondary-fixed-dim text-[36px] drop-shadow-[0_0_15px_rgba(255,176,205,0.5)]">workspace_premium</span>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary drop-shadow-[0_0_10px_rgba(208,188,255,0.2)]">Fan Premium</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Elevate your experience and unlock forever storage for your exclusive content.</p>
</div>

<div className="w-full max-w-sm bg-surface-container/60 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_8px_32px_rgba(208,188,255,0.1)] overflow-hidden relative group">

<div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none transition-all duration-700 group-hover:bg-secondary-container/30 group-hover:scale-125"></div>
<div className="p-stack-lg relative z-10">

<div className="flex items-end justify-center gap-2 mb-stack-lg border-b border-white/10 pb-stack-md">
<span className="font-headline-xl text-headline-xl text-on-surface">$20</span>
<span className="font-body-md text-body-md text-on-surface-variant mb-[6px]">/ month</span>
</div>

<ul className="flex flex-col gap-stack-md mb-stack-lg">
<li className="flex gap-gutter items-start">
<div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary mt-1 shadow-[0_0_10px_rgba(208,188,255,0.1)]">
<span className="material-symbols-outlined text-[22px]">cloud_upload</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">High-Volume Uploads</h4>
<p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant">Upload up to 30 photos or videos per month.</p>
</div>
</li>
<li className="flex gap-gutter items-start">
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 border border-secondary-container/30 flex items-center justify-center flex-shrink-0 text-secondary-fixed-dim mt-1 shadow-[0_0_10px_rgba(255,176,205,0.1)]">
<span className="material-symbols-outlined text-[22px]">all_inclusive</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Forever Storage Guarantee</h4>
<p className="font-body-md text-[14px] leading-relaxed text-secondary-fixed-dim/90 font-medium">Siz yuklagan kontentlar obuna muddati tugasa ham foydalanuvchi o'zi o'chirmaguncha saqlanib qoladi.</p>
</div>
</li>
<li className="flex gap-gutter items-start">
<div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary mt-1 shadow-[0_0_10px_rgba(208,188,255,0.1)]">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Exclusive Recognition</h4>
<p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant">Display a premium badge proudly on your profile.</p>
</div>
</li>
<li className="flex gap-gutter items-start">
<div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary mt-1 shadow-[0_0_10px_rgba(208,188,255,0.1)]">
<span className="material-symbols-outlined text-[22px]">support_agent</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">VIP Priority Support</h4>
<p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant">Skip the line and get faster responses from our team.</p>
</div>
</li>
</ul>

<button className="w-full relative group overflow-hidden rounded-[16px] py-4 bg-gradient-to-r from-inverse-primary to-secondary-container shadow-[0_0_20px_rgba(109,59,215,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(170,2,102,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]">
<div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
<div className="relative z-10 flex items-center justify-center gap-2">
<span className="font-label-md text-[16px] text-white font-bold tracking-wide">Subscribe Now</span>
<span className="material-symbols-outlined text-white text-[20px]">arrow_forward</span>
</div>
</button>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-container/80 dark:bg-surface-container/80 backdrop-blur-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.5)] flex justify-around items-center h-20 px-2 pb-safe border-t-0">
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed-dim transition-colors active:scale-90 duration-200 w-16">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-label-sm text-label-sm">Feed</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed-dim transition-colors active:scale-90 duration-200 w-16">
<span className="material-symbols-outlined mb-1">search</span>
<span className="font-label-sm text-label-sm">Explore</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed-dim transition-colors active:scale-90 duration-200 w-16 relative">
<div className="absolute -top-6 bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(208,188,255,0.4)]">
<span className="material-symbols-outlined">add_circle</span>
</div>
<span className="font-label-sm text-label-sm mt-6 opacity-0">Post</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed-dim transition-colors active:scale-90 duration-200 w-16">
<span className="material-symbols-outlined mb-1">stars</span>
<span className="font-label-sm text-label-sm">Subs</span>
</button>

<button className="flex flex-col items-center justify-center text-primary font-bold bg-primary/10 rounded-xl px-3 py-1 active:scale-90 duration-200 w-16">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</button>
</nav>
    </div>
  );
}
