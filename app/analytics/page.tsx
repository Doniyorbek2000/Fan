/* eslint-disable */
'use client';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-lg shadow-primary/20 flex justify-between items-center px-margin-mobile h-16">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Statistika</h1>
</div>
<div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden transition-all duration-300 active:scale-95">
<img alt="Creator Profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a charismatic male celebrity creator with a confident expression, set against a blurred neon-lit urban background. The lighting is dramatic with purple and pink highlights reflecting on his skin, maintaining a high-end editorial aesthetic consistent with a premium VIP celebrity service." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClQF4vg7GLwRVzzDE0v2fHBZ-tJBUz5Pcb5QesnFlmEdOZ-0nmJL_u_2tpp4VBVvjiaHFmfs8QYKl-XQS6Fl1Xypf8m0BFyw3iyZGzSHzeKXTHDvb_ZAwDV5SmCZuWFs7fhXUUwdfO7vPF0gBuPfX1RYol3JgXxnIPzdwA2SSu8LoGl-6Vxb2b6DWCkeANuEGNUPH0pXLfV2r84pId5Va7ukPWZeM6VY2AJ2lVkZ4q6alB5yGGp-RU8t_AR25lsfvteVGgFXIxJ7E" />
</div>
</header>
<main className="mt-20 px-margin-mobile flex flex-col gap-stack-lg">

<section className="flex bg-surface-container rounded-full p-1 border border-white/5">
<button className="flex-1 py-2 rounded-full font-label-md text-label-md transition-all duration-300 bg-primary text-on-primary-container font-bold shadow-lg shadow-primary/20">Haftalik</button>
<button className="flex-1 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-white/5">Oylik</button>
<button className="flex-1 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-white/5">Yillik</button>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
<div className="glass-card rounded-xl p-5 flex flex-col gap-base">
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Umumiy daromad</span>
<div className="flex items-end justify-between">
<span className="font-headline-md text-headline-md text-primary">$1,250.00</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined !text-[16px]" data-icon="trending_up">trending_up</span>
                        +12.5%
                    </span>
</div>
</div>
<div className="glass-card rounded-xl p-5 flex flex-col gap-base">
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Obunachilar</span>
<div className="flex items-end justify-between">
<span className="font-headline-md text-headline-md text-on-surface">+450</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined !text-[16px]" data-icon="trending_up">trending_up</span>
                        +8.2%
                    </span>
</div>
</div>
<div className="glass-card rounded-xl p-5 flex flex-col gap-base">
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Ko'rishlar</span>
<div className="flex items-end justify-between">
<span className="font-headline-md text-headline-md text-on-surface">12.4K</span>
<span className="text-error font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined !text-[16px]" data-icon="trending_down">trending_down</span>
                        -2.1%
                    </span>
</div>
</div>
</section>

<section className="glass-card rounded-xl p-6 relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Daromad o'sishi</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Oxirgi 7 kundagi ko'rsatkich</p>
</div>
<span className="material-symbols-outlined text-primary" data-icon="more_vert">more_vert</span>
</div>

<div className="h-48 w-full relative">
<svg className="w-full h-full chart-line-gradient" viewbox="0 0 400 150">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#d0bcff" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#d0bcff" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,120 Q50,110 80,80 T160,60 T240,90 T320,40 T400,20 L400,150 L0,150 Z" fill="url(#chartGradient)"></path>
<path d="M0,120 Q50,110 80,80 T160,60 T240,90 T320,40 T400,20" fill="none" stroke="#d0bcff" stroke-linecap="round" stroke-width="4"></path>

<circle cx="80" cy="80" fill="#d0bcff" r="4"></circle>
<circle cx="160" cy="60" fill="#d0bcff" r="4"></circle>
<circle cx="240" cy="90" fill="#d0bcff" r="4"></circle>
<circle cx="320" cy="40" fill="#d0bcff" r="4"></circle>
</svg>
<div className="flex justify-between mt-4 font-label-sm text-label-sm text-on-surface-variant/50">
<span>Du</span><span>Se</span><span>Ch</span><span>Pa</span><span>Ju</span><span>Sha</span><span>Yak</span>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-md">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Top Kontentlar</h3>
<button className="text-primary font-label-md text-label-md">Hammasi</button>
</div>
<div className="flex flex-col gap-stack-sm">

<div className="glass-card rounded-xl p-3 flex items-center gap-stack-md hover:bg-white/10 transition-colors duration-200">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Top Content 1" className="w-full h-full object-cover" data-alt="A cinematic, low-light shot of a professional studio microphone with purple neon glowing rings. The atmosphere is moody and high-tech, representing premium audio content. The background is a blurred digital recording interface with vibrant violet and cyan level bars." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO8Ayfh_o6L_1cDmvbLcxMyAZw_HL82SlWBJiQptGDBzs_Sjhhwy1ANtbarI3MgLKQaCos11nr8URs9obCWFO77SRauy2hpUzSdVToxDFUOhYLQQfpEIWGRBX7N8UmGUoAtWcuoTTPCSaSbwfOWLXArtta2imvx8HEql80hEdJowpnSES_JVGWM8v_J7Hg-Ri-uJ0QMV4s-hpVYsKSvVMvHThmFXsVTQlpBk4mAuYgox-EWmjTwXWpjZx0mTwDFquSIhwnBl2Up68" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface truncate">Yangi loyiha e'loni!</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">2.4K ko'rishlar • 12 soat oldin</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-primary font-bold font-label-md text-label-md">842</span>
<span className="material-symbols-outlined text-secondary text-[18px]" data-icon="favorite">favorite</span>
</div>
</div>

<div className="glass-card rounded-xl p-3 flex items-center gap-stack-md hover:bg-white/10 transition-colors duration-200">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Top Content 2" className="w-full h-full object-cover" data-alt="A high-energy concert scene from the stage's perspective, looking out at a sea of glowing smartphone screens in a dark arena. Electric purple and pink stage lights cut through a light haze of smoke, creating a vibrant, high-octane VIP backstage vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRzex2ASeS9a1UibUFczIStyknGfS9NTzmJx-nwGRfwMr7dlE3o6AkJwQ2SDf6_tOc73i7CtYqoZd6ROC4gqG3TPKXM6jy8_9ne56rJ80E1MHExGsVMVzyx_mmuwtphLI74U8FqWtmkpWyko_2PFeDB1jkjpXvYGxkbngcrydyeEDvzG6divPujZgGqjRIgRHcpzRu5Q6Et0sp_wJlDF1otA4N8nst6Aysaw63RJ6qbKXYIJXpnlXEjbZd8G-wfUm7V3NjsdvpAQQ" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface truncate">Jonli efir: Savol-javob</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">1.8K ko'rishlar • 2 kun oldin</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-primary font-bold font-label-md text-label-md">615</span>
<span className="material-symbols-outlined text-secondary text-[18px]" data-icon="favorite">favorite</span>
</div>
</div>

<div className="glass-card rounded-xl p-3 flex items-center gap-stack-md hover:bg-white/10 transition-colors duration-200">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Top Content 3" className="w-full h-full object-cover" data-alt="Abstract digital glass background with deep purple and electric magenta gradients. Soft geometric light reflections and a subtle bokeh effect create a premium, futuristic atmosphere that feels exclusive and energetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGjicX4KXNFO7XDHlEke4lTsHf1TLk-xmDLJc06vTMQ81CALh7ekv8siEqdiuEk66rbRvWMTUIRYCArgvgbKRLGoPyINUu1N9Y5ph-Nzvrnpjm9GpqebebM7iWFzbYWzlZY8HytdO7sCYgo4zJDNWJNGuz9Tc5IZtEEUFanHkLMeUraeFB9O_aocmG5uUf1vagS6MR6ptHaYTf4RUWDmOLC0FEf1XiztqPJiyM5b8FNUWJsBxoau531FUBdKXHOvSW__sN7lslWXY" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface truncate">Eksklyuziv rasm to'plami</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">950 ko'rishlar • 4 kun oldin</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-primary font-bold font-label-md text-label-md">320</span>
<span className="material-symbols-outlined text-secondary text-[18px]" data-icon="favorite">favorite</span>
</div>
</div>
</div>
</section>

<section className="glass-card rounded-xl p-6 mb-8">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6">Auditoriya</h3>
<div className="flex items-center gap-stack-lg">
<div className="relative w-32 h-32 flex-shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="4"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#d0bcff" stroke-dasharray="65, 100" stroke-linecap="round" stroke-width="4"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ffb0cd" stroke-dasharray="35, 100" stroke-dashoffset="-65" stroke-linecap="round" stroke-width="4"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="font-bold text-headline-md text-on-surface">65%</span>
<span className="text-[10px] uppercase text-on-surface-variant">Ayol</span>
</div>
</div>
<div className="flex flex-col gap-base flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="font-label-md text-label-md">Ayol</span>
</div>
<span className="font-bold">65%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="font-label-md text-label-md">Erkak</span>
</div>
<span className="font-bold">35%</span>
</div>
<div className="mt-4 pt-4 border-t border-white/10">
<p className="font-label-sm text-label-sm text-on-surface-variant">Top Davlat: <span className="text-on-surface font-bold">O'zbekiston</span></p>
</div>
</div>
</div>
</section>
</main>

<nav className="bg-surface-container/80 dark:bg-surface-container/80 backdrop-blur-xl fixed bottom-0 w-full z-50 rounded-t-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(208,188,255,0.15)] flex justify-around items-center pt-2 pb-safe-area px-4">
<div className="flex flex-col items-center gap-1 text-on-surface-variant/70 dark:text-on-surface-variant/70 transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-sm text-label-sm">Feed</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant/70 dark:text-on-surface-variant/70 transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined" data-icon="confirmation_number">confirmation_number</span>
<span className="font-label-sm text-label-sm">Events</span>
</div>

<div className="flex flex-col items-center gap-1 text-primary dark:text-primary font-bold transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-label-sm text-label-sm">Stats</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant/70 dark:text-on-surface-variant/70 transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined" data-icon="lock_person">lock_person</span>
<span className="font-label-sm text-label-sm">Vault</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant/70 dark:text-on-surface-variant/70 transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</div>
</nav>
    </div>
  );
}
