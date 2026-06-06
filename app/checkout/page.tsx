/* eslint-disable */
'use client';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 pt-safe bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(208,188,255,0.05)] transition-all duration-300" id="header">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full">
<button aria-label="Orqaga" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95 transition-all text-on-surface">
<span className="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md text-on-surface">To'lov</h1>

<div className="w-10 h-10"></div>
</div>
</header>

<main className="flex-1 mt-[calc(64px+env(safe-area-inset-top))] px-margin-mobile py-stack-md flex flex-col gap-stack-lg mb-[120px]">

<section className="relative bg-surface-container/60 backdrop-blur-2xl border border-white/10 rounded-xl p-stack-md overflow-hidden shadow-lg">

<div className="absolute top-0 left-0 w-full h-full border-t border-l border-white/5 rounded-xl pointer-events-none"></div>
<h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-stack-md">Buyurtma Tafsiloti</h2>
<div className="flex items-center gap-stack-md">
<div className="relative w-20 h-20 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(208,188,255,0.2)]">
<img alt="Julian Vane Avatar" className="w-full h-full object-cover" data-alt="A high-quality, professional headshot of a stylish male celebrity, 30s, looking directly at the camera with a confident, charismatic expression. He is wearing a dark, fashionable designer jacket against a deep, moody, dark background with subtle neon purple backlighting. The lighting is dramatic, creating a premium, exclusive, and vibrant glassmorphism aesthetic suitable for a high-end fan interaction app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr8hQWUTBN_UNfqt7eWAFUkHAbCFOT9uInBbr98UnmZpeIf4EkeRtIbgGknOYYxUiRWsPmb2b7xGmyqk4TIcc9-pFqHDzeUenA1Ovk0A1tIxbo-ZcnG9aQpBaNT9DdsqiAGyj429gT1-yH2gX4jFwFle2bdBJ5-j__KQDEvIN75_RSFO9uzPR66SbZnWyHB-DsrmNVlePAfudv-sBrNuMzMD0vSSixK-FeIJwdrgzBz7TBAbGv0AXBQiM05VJVviG97XRBhwq6JWE" />
</div>
<div className="flex-1 flex flex-col justify-center">
<h3 className="font-label-md text-label-md text-primary mb-1">Yakkama-yakka suhbat</h3>
<p className="font-body-md text-body-md text-on-surface font-semibold">Julian Vane bilan</p>
<div className="flex items-center gap-2 mt-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">15 daqiqa</span>
</div>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-on-surface">$299</p>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-sm">
<h2 className="font-label-md text-label-md text-on-surface-variant px-2">To'lov usulini tanlang</h2>

<div className="relative w-full rounded-xl bg-surface-container-high border border-primary p-stack-md flex items-center justify-between cursor-pointer overflow-hidden shadow-[0_0_20px_rgba(208,188,255,0.15)] group transition-all">

<div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
<div className="flex items-center gap-stack-md z-10">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-[28px] text-primary">credit_card</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Kredit / Debit Karta</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Visa, Mastercard tugaydi</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center z-10">
<div className="w-3 h-3 rounded-full bg-primary"></div>
</div>
</div>

<div className="w-full rounded-xl bg-surface-container/60 border border-white/5 p-stack-md flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors">
<div className="flex items-center gap-stack-md">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-[28px] text-on-surface">contactless</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Apple Pay</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Tezkor to'lov</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center"></div>
</div>

<div className="w-full rounded-xl bg-surface-container/60 border border-white/5 p-stack-md flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors opacity-60">
<div className="flex items-center gap-stack-md">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-[28px] text-on-surface">account_balance_wallet</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Hamyon balansi</p>
<p className="font-label-sm text-label-sm text-error mt-1">Mablag' yetarli emas ($45.00)</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center"></div>
</div>
</section>

<section className="bg-surface-container-lowest/50 rounded-xl p-stack-md border border-white/5">
<div className="flex flex-col gap-stack-sm">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md text-on-surface-variant">Oraliq summa</span>
<span className="font-body-md text-body-md text-on-surface">$299.00</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md text-on-surface-variant">Xizmat haqi</span>
<span className="font-body-md text-body-md text-on-surface">$14.95</span>
</div>
<div className="w-full h-px bg-white/10 my-2 border-dashed border-b border-white/20"></div>
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface">Jami</span>
<span className="font-headline-md text-headline-md text-primary">$313.95</span>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-2xl border-t border-white/10 p-margin-mobile pb-safe z-50">
<button className="w-full relative overflow-hidden rounded-full group active:scale-[0.98] transition-transform duration-200">

<div className="absolute inset-0 bg-gradient-to-r from-inverse-primary via-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity"></div>

<div className="relative px-6 py-4 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-white text-[20px]">lock</span>
<span className="font-label-md text-label-md text-white tracking-wide">To'lovni tasdiqlash</span>
</div>

<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-primary blur-xl opacity-40 mix-blend-screen pointer-events-none"></div>
</button>
<p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-4 opacity-70 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified_user</span> Xavfsiz to'lov tizimi
        </p>
</div>
    </div>
  );
}
