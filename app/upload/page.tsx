/* eslint-disable */
'use client';

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="w-full max-w-2xl px-margin-mobile h-16 flex items-center justify-between glass-panel sticky top-0 z-50 border-b border-white/10 shadow-[0_0_20px_rgba(208,188,255,0.05)]">
<button aria-label="Close" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container/50 hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-on-surface">close</span>
</button>
<h1 className="font-headline-md text-headline-md text-on-surface">Post yaratish</h1>
<div className="w-10"></div> 
</header>

<main className="w-full max-w-2xl px-margin-mobile pt-stack-lg flex flex-col gap-stack-lg">

<section className="w-full aspect-[4/3] md:aspect-video rounded-xl glass-panel flex flex-col items-center justify-center border-dashed border-2 border-outline-variant hover:border-primary-container transition-colors cursor-pointer group relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined text-5xl text-primary mb-stack-sm group-hover:scale-110 transition-transform duration-300">add_photo_alternate</span>
<p className="font-label-md text-label-md text-on-surface-variant">Rasm yoki video yuklash</p>
<p className="font-label-sm text-label-sm text-outline mt-base">Tugmani bosing yoki faylni tortib keling</p>
</section>

<section className="flex flex-col gap-stack-sm">
<div className="glass-panel rounded-xl p-4 focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(208,188,255,0.2)] transition-all">
<textarea className="w-full bg-transparent border-none outline-none resize-none font-body-md text-body-md text-on-surface placeholder:text-outline-variant min-h-[120px]" placeholder="Tavsif yozing..."></textarea>
</div>
</section>

<section className="glass-panel rounded-xl p-4 flex flex-col gap-stack-md">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary" data-weight="fill">lock</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Eksklyuziv kontent</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Faqat obunachilar uchun</p>
</div>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10 translate-x-6 border-primary" id="exclusive-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary-container cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="exclusive-toggle"></label>
</div>
</div>
<div className="w-full h-[1px] bg-white/5"></div>

<div className="flex flex-col gap-stack-sm" id="subscription-tiers">
<p className="font-label-sm text-label-sm text-outline mb-base">Qaysi obunachilar ko'ra oladi?</p>
<div className="grid grid-cols-3 gap-3">
<button className="glass-panel py-3 rounded-lg border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all font-label-md text-label-md">
                        Bronze
                    </button>
<button className="glass-panel py-3 rounded-lg border border-primary text-primary bg-primary/10 transition-all font-label-md text-label-md relative overflow-hidden">
<div className="absolute inset-0 bg-primary/10"></div>
                        Silver
                    </button>
<button className="glass-panel py-3 rounded-lg border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all font-label-md text-label-md">
                        Gold
                    </button>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 w-full max-w-2xl px-margin-mobile py-4 bg-background/90 backdrop-blur-xl border-t border-white/5 z-50">
<button className="w-full primary-gradient neon-glow py-4 rounded-xl font-label-md text-label-md text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">send</span>
            Ulashish
        </button>
</div>
    </div>
  );
}
