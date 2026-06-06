/* eslint-disable */
'use client';

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 px-margin-mobile h-16 flex items-center justify-between">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container/50 text-on-surface-variant hover:text-primary transition-colors active:scale-95">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md text-on-surface absolute left-1/2 -translate-x-1/2">Hamyon</h1>
<div className="w-10 h-10"></div> 
</header>

<main className="flex-1 px-margin-mobile pt-stack-md pb-stack-lg max-w-md mx-auto w-full md:max-w-2xl md:pb-24">

<section className="relative bg-surface-container/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-[0_8px_32px_rgba(208,188,255,0.15)] overflow-hidden">

<div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-[40px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Umumiy Balans</span>
<h2 className="font-headline-xl text-headline-xl text-primary drop-shadow-[0_0_12px_rgba(208,188,255,0.4)]">$1,245.50</h2>
<span className="font-label-sm text-label-sm text-tertiary mt-2 flex items-center gap-1 bg-tertiary/10 px-2 py-0.5 rounded-full border border-tertiary/20">
<span className="material-symbols-outlined text-[14px]" data-icon="verified">verified</span>
                    Tasdiqlangan
                </span>
</div>
</section>

<section className="flex gap-stack-sm mt-stack-md">
<button className="flex-1 bg-gradient-to-br from-inverse-primary to-primary text-on-primary-fixed font-label-md text-label-md py-4 rounded-xl shadow-[0_4px_20px_rgba(208,188,255,0.2)] hover:opacity-90 active:scale-95 transition-all flex flex-col items-center justify-center gap-1 group relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="material-symbols-outlined text-[24px] relative z-10" data-icon="add_circle">add_circle</span>
<span className="relative z-10">To'ldirish</span>
</button>
<button className="flex-1 bg-surface-container border border-white/10 text-on-surface font-label-md text-label-md py-4 rounded-xl hover:bg-surface-container-high active:scale-95 transition-all flex flex-col items-center justify-center gap-1 shadow-lg">
<span className="material-symbols-outlined text-[24px] text-outline" data-icon="arrow_upward_alt">arrow_upward_alt</span>
<span>Yechib olish</span>
</button>
</section>

<section className="mt-stack-lg">
<div className="flex items-center justify-between mb-stack-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Tranzaksiyalar tarixi</h3>
<button className="font-label-sm text-label-sm text-primary hover:text-primary/80 transition-colors">Barchasi</button>
</div>
<div className="flex flex-col gap-stack-sm">

<div className="flex items-center justify-between p-4 bg-surface-container-lowest/50 backdrop-blur-sm rounded-xl border border-white/5 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_10px_rgba(208,188,255,0.1)]">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-medium line-clamp-1">Hamyonni to'ldirish</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">24 Okt, 14:30</p>
</div>
</div>
<p className="font-label-md text-label-md text-tertiary">+$500.00</p>
</div>

<div className="flex items-center justify-between p-4 bg-surface-container-lowest/50 backdrop-blur-sm rounded-xl border border-white/5 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-error/10 border border-error/20 flex items-center justify-center text-error shadow-[0_0_10px_rgba(255,180,171,0.1)]">
<span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-medium line-clamp-1">Julian Vane bilan chat</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">23 Okt, 21:15</p>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface">-$25.50</p>
</div>

<div className="flex items-center justify-between p-4 bg-surface-container-lowest/50 backdrop-blur-sm rounded-xl border border-white/5 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shadow-[0_0_10px_rgba(255,176,205,0.1)]">
<span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-medium line-clamp-1">Eksklyuziv kontent</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">21 Okt, 09:40</p>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface">-$15.00</p>
</div>
</div>
</section>
</main>

<nav className="md:hidden bg-surface-container/80 backdrop-blur-xl fixed bottom-0 w-full z-50 rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex justify-around items-center h-20 pb-safe w-full border-t-0">

<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</button>

<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined mb-1" data-icon="explore">explore</span>
<span className="font-label-sm text-label-sm">Explore</span>
</button>

<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined mb-1" data-icon="chat_bubble">chat_bubble</span>
<span className="font-label-sm text-label-sm">Messages</span>
</button>

<button className="flex flex-col items-center justify-center text-primary font-bold hover:text-primary/80 active:scale-90 transition-transform duration-200 relative">
<div className="absolute -top-2 w-8 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(208,188,255,0.8)]"></div>
<span className="material-symbols-outlined mb-1" data-icon="person" data-weight="fill">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</button>
</nav>
    </div>
  );
}
