/* eslint-disable */
'use client';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
<div className="absolute top-[40%] -right-[5%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px]"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-lg px-margin-mobile h-16 flex justify-between items-center">
<a className="font-headline-md text-headline-md font-bold text-primary shadow-[0_0_10px_rgba(208,188,255,0.4)] transition-opacity hover:opacity-80" href="#">
            FanMeet
        </a>
<button className="text-on-surface-variant active:scale-95 duration-200">
<span className="material-symbols-outlined">help</span>
</button>
</header>
<main className="relative z-10 flex-1 flex flex-col items-center justify-center px-margin-mobile pt-24 pb-12">
<div className="w-full max-w-md">

<div className="flex justify-center mb-stack-lg">
<div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center glow-purple">
<span className="material-symbols-outlined text-[40px] text-primary">lock_reset</span>
</div>
</div>

<div className="text-center mb-stack-lg space-y-stack-sm">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Parolni unutdingizmi?</h1>
<p className="font-body-md text-body-md text-on-surface-variant px-4">
                    Xavotir olmang! Email manzilingizni kiriting va biz sizga parolni tiklash uchun maxsus kod yuboramiz.
                </p>
</div>

<form className="space-y-stack-md">
<div className="space-y-base">
<label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="email">Email manzil</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px] group-focus-within:text-primary transition-colors">mail</span>
</div>
<input className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all duration-200" id="email" placeholder="example@mail.com" type="email" />
</div>
</div>
<button className="w-full bg-gradient-primary text-on-primary-fixed font-headline-md text-headline-md h-14 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mt-4" id="submit-btn">
<span>Kodni yuborish</span>
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</form>

<div className="mt-stack-lg text-center">
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary-fixed transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Kirish sahifasiga qaytish
                </a>
</div>

<div className="mt-12 glass-panel p-gutter rounded-xl flex items-center gap-gutter">
<div className="w-12 h-12 rounded-full bg-tertiary-container/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary">verified_user</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Xavfsiz ulanish</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Sizning ma'lumotlaringiz 256-bitli shifrlash bilan himoyalangan.</p>
</div>
</div>
</div>
</main>

<footer className="relative z-10 py-stack-md text-center">
<p className="font-label-sm text-label-sm text-outline opacity-50 uppercase tracking-widest">Premium Backstage Experience</p>
</footer>
    </div>
  );
}
