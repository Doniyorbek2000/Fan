/* eslint-disable */
'use client';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-lg flex justify-between items-center px-margin-mobile h-16">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary shadow-[0_0_10px_rgba(208,188,255,0.4)]">FanMeet</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
</div>
</header>
<main className="pt-24 pb-12 px-margin-mobile max-w-lg mx-auto min-h-screen flex flex-col justify-center">

<div className="text-center mb-stack-lg animate-in fade-in slide-in-from-bottom duration-700">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2">Xush kelibsiz!</h2>
<p className="text-on-surface-variant font-body-md">Sizning sevimli yulduzlaringiz bilan bir qadam yaqinroq bo'ling.</p>
</div>

<div className="glass-panel p-6 rounded-xl shadow-2xl relative overflow-hidden">

<div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>

<div className="flex p-1 bg-surface-container-lowest rounded-xl mb-stack-md gap-1">
<button className="flex-1 py-3 rounded-lg font-label-md text-label-md transition-all duration-300 bg-primary text-on-primary-container shadow-lg" id="muxlis-btn">
                    Muxlis
                </button>
<button className="flex-1 py-3 rounded-lg font-label-md text-label-md transition-all duration-300 text-on-surface-variant hover:bg-white/5" id="mashhur-btn">
                    Mashhur
                </button>
</div>

<form className="space-y-stack-md">
<div className="space-y-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">To'liq ism-sharifingiz</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary">person</span>
<input className="w-full bg-surface-container-low border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" placeholder="Ism Sharif" type="text" />
</div>
</div>
<div className="space-y-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Email manzilingiz</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary">mail</span>
<input className="w-full bg-surface-container-low border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" placeholder="example@mail.uz" type="email" />
</div>
</div>
<div className="space-y-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Telefon raqamingiz</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary">phone_iphone</span>
<input className="w-full bg-surface-container-low border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" placeholder="+998 90 123 45 67" type="tel" />
</div>
</div>
<div className="space-y-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Maxfiy parol</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary">lock</span>
<input className="w-full bg-surface-container-low border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" placeholder="********" type="password" />
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
</div>

<div className="flex items-start gap-3 pt-2">
<div className="flex items-center h-5">
<input className="w-5 h-5 bg-surface-container-low border-white/20 rounded-md text-primary focus:ring-offset-background focus:ring-primary cursor-pointer" id="terms" type="checkbox" />
</div>
<label className="font-label-sm text-label-sm text-on-surface-variant leading-tight" htmlFor="terms">
                        Men <span className="text-primary underline cursor-pointer">Foydalanish shartlari</span> va <span className="text-primary underline cursor-pointer">Maxfiylik siyosati</span> bilan tanishib chiqdim va roziman.
                    </label>
</div>

<button className="w-full gradient-btn text-white py-4 rounded-xl font-headline-md text-headline-md glow-primary active:scale-95 transition-all mt-4">
                    Ro'yxatdan o'tish
                </button>
</form>
<div className="mt-8 flex items-center justify-center gap-2">
<span className="text-on-surface-variant font-label-md text-label-md">Akkauntingiz bormi?</span>
<a className="text-primary font-label-md text-label-md hover:underline" href="#">Kirish</a>
</div>
</div>

<div className="mt-stack-lg text-center opacity-60 flex flex-col gap-stack-md">
<p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Top Mashhurlar bilan</p>
<div className="flex justify-center gap-6 grayscale contrast-125">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">stars</span>
</div>
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">diamond</span>
</div>
</div>
</div>
</main>
    </div>
  );
}
