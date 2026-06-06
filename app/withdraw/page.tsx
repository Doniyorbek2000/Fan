/* eslint-disable */
'use client';

export default function WithdrawPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[150px]"></div>
</div>

<header className="fixed top-0 w-full bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(208,188,255,0.1)] flex items-center justify-between px-margin-mobile h-16 z-50">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md text-primary font-bold">Withdraw Funds</h1>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">history</span>
</button>
</header>

<main className="flex-1 w-full max-w-md mx-auto pt-24 pb-32 px-margin-mobile relative z-10 flex flex-col gap-stack-lg">

<section className="flex flex-col items-center justify-center py-stack-lg">
<p className="font-label-md text-label-md text-on-surface-variant mb-stack-sm">Mavjud balans: <span className="text-on-surface">$1,245.50</span></p>
<div className="relative w-full flex justify-center">
<span className="absolute left-8 top-1/2 -translate-y-1/2 font-headline-xl text-headline-xl text-primary/50">$</span>
<input className="amount-input w-full bg-transparent border-none text-center font-headline-xl text-headline-xl text-on-surface focus:ring-0 focus:outline-none py-4" placeholder="0.00" type="text" value="0.00" />
</div>
<div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2 rounded-full"></div>
</section>

<section className="flex flex-col gap-stack-md">
<h2 className="font-headline-md text-headline-md text-on-surface">To'lov usuli</h2>
<div className="flex flex-col gap-stack-sm" id="payment-methods">

<label className="glass-panel-active rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200">
<div className="flex items-center gap-gutter">
<div className="w-12 h-8 bg-surface-container rounded-md flex items-center justify-center border border-white/10">

<span className="font-label-sm text-label-sm text-on-surface font-bold italic">VISA</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Visa tugaydi ...4242</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Asosiy usul</span>
</div>
</div>
<div className="relative flex items-center justify-center">
<input checked="" className="sr-only peer" name="payment_method" type="radio" />
<div className="w-6 h-6 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary/20 flex items-center justify-center transition-all">
<div className="w-3 h-3 rounded-full bg-primary opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200"></div>
</div>
</div>
</label>

<label className="glass-panel rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-surface-container-high/50">
<div className="flex items-center gap-gutter">
<div className="w-12 h-8 bg-surface-container rounded-md flex items-center justify-center border border-white/10 relative overflow-hidden">
<div className="absolute w-5 h-5 rounded-full bg-[#eb001b]/80 left-1 mix-blend-screen"></div>
<div className="absolute w-5 h-5 rounded-full bg-[#f79e1b]/80 right-1 mix-blend-screen"></div>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">MasterCard ...8891</span>
</div>
</div>
<div className="relative flex items-center justify-center">
<input className="sr-only peer" name="payment_method" type="radio" />
<div className="w-6 h-6 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary/20 flex items-center justify-center transition-all">
<div className="w-3 h-3 rounded-full bg-primary opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200"></div>
</div>
</div>
</label>

<label className="glass-panel rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-surface-container-high/50">
<div className="flex items-center gap-gutter">
<div className="w-12 h-8 bg-[#003087]/20 rounded-md flex items-center justify-center border border-[#009cde]/30">
<span className="font-label-sm text-label-sm text-[#009cde] font-bold italic">PP</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">user@example.com</span>
</div>
</div>
<div className="relative flex items-center justify-center">
<input className="sr-only peer" name="payment_method" type="radio" />
<div className="w-6 h-6 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary/20 flex items-center justify-center transition-all">
<div className="w-3 h-3 rounded-full bg-primary opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200"></div>
</div>
</div>
</label>
</div>

<button className="mt-stack-sm flex items-center justify-center gap-2 py-4 rounded-xl border border-dashed border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span className="font-label-md text-label-md">Yangi karta qo'shish</span>
</button>
</section>
</main>

<div className="fixed bottom-0 w-full p-margin-mobile bg-gradient-to-t from-background via-background/90 to-transparent z-40 pb-safe">
<button className="w-full neon-button py-4 rounded-full font-label-md text-label-md text-white font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
<span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            Mablag'ni yechib olish
        </button>
</div>
    </div>
  );
}
