/* eslint-disable */
'use client';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<div className="ambient-glow top-[-100px] left-[-100px]"></div>
<div className="ambient-glow bottom-[-100px] right-[-100px]"></div>
<main className="w-full max-w-md flex flex-col items-center space-y-stack-lg z-10">

<header className="text-center animate-fade-in">
<h1 className="font-headline-xl text-headline-xl text-primary drop-shadow-[0_0_12px_rgba(208,188,255,0.6)]">
                FanMeet
            </h1>
<p className="font-label-md text-label-md text-on-surface-variant mt-2 tracking-widest">
                EXKLYUZIV BACKSTAGE DUNYOSI
            </p>
</header>

<section className="glass-card w-full rounded-xl p-8 space-y-stack-md transition-all duration-500 hover:border-primary/30">

<div className="flex p-1 bg-surface-container-low rounded-lg border border-white/5 mb-stack-md">
<button className="flex-1 py-2 rounded-md font-label-md text-label-md transition-all duration-300 bg-primary-container text-on-primary-container shadow-lg" id="toggle-fan">
                    Muxlis
                </button>
<button className="flex-1 py-2 rounded-md font-label-md text-label-md transition-all duration-300 text-on-surface-variant hover:text-on-surface" id="toggle-celeb">
                    Mashhur
                </button>
</div>

<form className="space-y-stack-md">
<div className="space-y-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Email manzilingiz</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">mail</span>
<input className="w-full bg-surface-container-highest/30 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-body-md" placeholder="misol@fanmeet.uz" type="email" />
</div>
</div>
<div className="space-y-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Parol</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">lock</span>
<input className="w-full bg-surface-container-highest/30 border border-white/10 rounded-lg py-3.5 pl-12 pr-12 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-body-md text-body-md" placeholder="••••••••" type="password" />
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
</div>
<div className="flex justify-end">
<a className="font-label-sm text-label-sm text-primary hover:text-secondary-fixed transition-colors active:scale-95 duration-200" href="#">
                        Parolni unutdingizmi?
                    </a>
</div>
<button className="w-full bg-gradient-primary text-white font-headline-md text-headline-md py-4 rounded-xl neon-glow-button active:scale-95 hover:opacity-90 transition-all duration-300 mt-4 flex items-center justify-center gap-2">
                    Kirish
                    <span className="material-symbols-outlined">bolt</span>
</button>
</form>

<div className="flex items-center gap-4 py-4">
<div className="h-px flex-1 bg-white/10"></div>
<span className="font-label-sm text-label-sm text-on-surface-variant">yoki</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>

<div className="grid grid-cols-2 gap-stack-md">
<button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-lg hover:bg-white/10 transition-all active:scale-95">
<img alt="Google Logo" className="w-4 h-4 grayscale group-hover:grayscale-0" data-alt="The iconic multi-colored Google logo icon, presented in a clean minimalist format suitable for a premium dark mode user interface. The logo is sharp and vector-aligned, representing a secure third-party authentication method within a sophisticated digital environment featuring deep indigo and purple accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARsqZbKi3QbZj3j8pdB7R4rShOi0Z3q0EGqZcFGAAZC52Pc1PZhmGwEFFHdKolD36m1SaqjuE3ed7VnehAxso9FHCeiGVwoBNunDgyDppa9z7B6ctbBPh5nFf_IBArN2wQ2961lbn3v7ExbAxg-TDTa0QDS2If7X21efiun1eEGXWDsWVN-11a05nUS1NvO8qNnNR2LSjsPh9GprRxeexMe_U6pX5VZhEpy6wTc44LpaZQyBTfhAOr4vrTIfz_KcMU9sMhl9_hcVU" />
<span className="font-label-md text-label-md text-on-surface">Google</span>
</button>
<button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-lg hover:bg-white/10 transition-all active:scale-95">
<span className="material-symbols-outlined text-on-surface">apps</span>
<span className="font-label-md text-label-md text-on-surface">Apple</span>
</button>
</div>
</section>

<footer className="text-center animate-fade-in">
<p className="font-body-md text-body-md text-on-surface-variant">
                Hali hisobingiz yo'qmi? 
                <a className="text-primary font-bold hover:underline ml-1 active:scale-95 inline-block" href="#">
                    Ro'yxatdan o'tish
                </a>
</p>
</footer>
</main>

<div className="fixed top-12 right-12 opacity-20 hidden lg:block">
<div className="relative w-64 h-64 border-2 border-primary/20 rounded-full animate-pulse"></div>
<div className="absolute inset-8 border border-secondary/20 rounded-full"></div>
</div>
    </div>
  );
}
