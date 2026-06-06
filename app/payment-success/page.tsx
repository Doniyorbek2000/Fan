/* eslint-disable */
'use client';

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
<main className="w-full max-w-md flex flex-col items-center z-10">

<div className="w-24 h-24 rounded-full bg-tertiary-container/30 flex items-center justify-center mb-stack-lg success-glow animate-scale-in border border-tertiary/30">
<span className="material-symbols-outlined text-tertiary">
                check_circle
            </span>
</div>

<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-center mb-stack-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            To'lov muvaffaqiyatli yakunlandi!
        </h1>

<div className="glass-card w-full rounded-xl p-stack-md mb-stack-lg flex flex-col gap-stack-sm relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>
<div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/20 to-transparent"></div>
<div className="flex justify-between items-center py-stack-sm border-b border-white/5">
<span className="font-body-md text-body-md text-on-surface-variant">Order ID</span>
<span className="font-label-md text-label-md text-on-surface">#FM-8829</span>
</div>
<div className="flex justify-between items-center py-stack-sm border-b border-white/5">
<span className="font-body-md text-body-md text-on-surface-variant">Xizmat</span>
<span className="font-label-md text-label-md text-on-surface text-right">Private Chat with Julian Vane</span>
</div>
<div className="flex justify-between items-center py-stack-sm border-b border-white/5">
<span className="font-body-md text-body-md text-on-surface-variant">To'langan summa</span>
<span className="font-label-md text-label-md text-secondary text-lg">$313.95</span>
</div>
<div className="pt-stack-sm">
<h3 className="font-label-sm text-label-sm text-on-surface-variant mb-stack-sm uppercase tracking-wider">Tafsilotlar</h3>
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md text-on-surface-variant">Sana va vaqt</span>
<span className="font-body-md text-body-md text-on-surface">12 Okt 2023, 14:30</span>
</div>
</div>
</div>

<div className="w-full flex flex-col gap-stack-sm">
<button className="w-full h-14 rounded-xl btn-gradient font-label-md text-label-md text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
<span className="material-symbols-outlined">chat_bubble</span>
                Suhbatga o'tish
            </button>
<button className="w-full h-14 rounded-xl border border-outline-variant bg-transparent font-label-md text-label-md text-on-surface hover:bg-white/5 active:scale-95 transition-all">
                Asosiy sahifaga qaytish
            </button>
</div>
</main>
    </div>
  );
}
