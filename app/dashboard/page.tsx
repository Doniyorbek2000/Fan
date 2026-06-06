/* eslint-disable */
'use client';

export default function CelebrityDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="bg-background/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_0_20px_rgba(208,188,255,0.1)]">
<div className="flex items-center justify-between px-margin-mobile h-16 max-w-5xl mx-auto">
<div className="flex items-center gap-3">
<img alt="Celebrity profile picture" className="w-10 h-10 rounded-full object-cover border-2 border-primary/50" data-alt="A close-up portrait of an elegant, confident celebrity with modern styling, bathed in soft, dramatic studio lighting with subtle purple and pink neon rim lights. The background is a dark, cinematic studio setting. High fashion aesthetic, polished and premium, fitting a luxury VIP profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLwGKA3HOSzbXbXHEd3E6uOMUwFFHZqH6jJU_0bzZngvgXVgJO9R_5i2PQDkG8wSf6apnox5BHkPdtSsL4zP5oHna3vniAQ7EqOLYD7yOdNVm9axOiFrbcWy5x907gff7B55FcACwzBC30ImLO6EgKKI4nroMjWEyYUezcc8PoPX28NNt9GypQ-Yfc1M_91MrK_zz8WoaVIZe-njrHKRY5YUBdeC3U34eyXwoQr0qnQhPR3tVA2EGJKCjTWgWzs1-AwbE8InE3YEU" />
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary text-gradient">FanMeet Pro</h1>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
</header>

<main className="pt-24 px-margin-mobile max-w-5xl mx-auto space-y-stack-lg">

<section className="flex flex-col md:flex-row gap-gutter justify-between items-start md:items-center">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Welcome back, Sarah</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Here's what's happening today.</p>
</div>
<div className="glass-card rounded-xl p-4 flex items-center justify-between gap-6 w-full md:w-auto">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-tertiary neon-glow animate-pulse"></div>
<span className="font-label-md text-label-md text-on-surface">Available for bookings</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value="" />
<div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container neon-glow"></div>
</label>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="glass-card rounded-xl p-6 md:col-span-2 relative overflow-hidden group">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<p className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">payments</span> Total Earnings
                            </p>
<h3 className="font-headline-xl text-headline-xl text-on-surface mt-2">$12,450.00</h3>
</div>
<div className="bg-tertiary/20 text-tertiary px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 border border-tertiary/30">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +15%
                        </div>
</div>

<div className="mt-8 h-24 flex items-end gap-2 w-full">
<div className="w-full bg-surface-container-highest rounded-t-sm h-[30%] hover:bg-primary/50 transition-colors"></div>
<div className="w-full bg-surface-container-highest rounded-t-sm h-[45%] hover:bg-primary/50 transition-colors"></div>
<div className="w-full bg-surface-container-highest rounded-t-sm h-[40%] hover:bg-primary/50 transition-colors"></div>
<div className="w-full bg-surface-container-highest rounded-t-sm h-[60%] hover:bg-primary/50 transition-colors"></div>
<div className="w-full bg-surface-container-highest rounded-t-sm h-[55%] hover:bg-primary/50 transition-colors"></div>
<div className="w-full bg-primary/40 rounded-t-sm h-[80%] hover:bg-primary/60 transition-colors border-t-2 border-primary"></div>
<div className="w-full bg-primary-container rounded-t-sm h-[100%] neon-glow border-t-2 border-primary"></div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 relative overflow-hidden bg-gradient-to-br from-surface-container-low to-surface-container-high border-t border-l border-white/10">
<div className="flex justify-between items-center mb-4">
<h4 className="font-label-md text-label-md text-secondary">Next Session</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">in 45m</span>
</div>
<div className="flex items-center gap-4 mt-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-white/10">
<span className="material-symbols-outlined text-on-surface-variant">person</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Alex Thompson</p>
<p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">videocam</span> Virtual Meetup
                        </p>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex-1 bg-gradient-primary neon-glow text-white font-label-md text-label-md py-2.5 rounded-lg hover:opacity-90 transition-opacity active:scale-95">
                        Join Room
                    </button>
<a className="flex items-center justify-center px-4 rounded-lg border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">calendar_today</span>
</a>
</div>
</div>
</section>

<section className="space-y-stack-md">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Active Services</h3>
<button className="text-primary font-label-md text-label-md hover:text-primary-container transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">add</span> Add New
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<div className="glass-card rounded-xl p-5 flex flex-col justify-between hover:bg-white/[0.08] transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
<span className="material-symbols-outlined">play_circle</span>
</div>
<span className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-label-sm border border-white/5">Active</span>
</div>
<div>
<h4 className="font-body-lg text-body-lg text-on-surface font-semibold">Video Message</h4>
<div className="flex justify-between items-end mt-2">
<p className="font-headline-md text-headline-md text-secondary">$149</p>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-label-sm opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[16px]">edit</span> Edit
                            </button>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5 flex flex-col justify-between hover:bg-white/[0.08] transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined">chat_bubble</span>
</div>
<span className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-label-sm border border-white/5">Active</span>
</div>
<div>
<h4 className="font-body-lg text-body-lg text-on-surface font-semibold">Private Chat <span className="text-on-surface-variant text-sm font-normal">(15 min)</span></h4>
<div className="flex justify-between items-end mt-2">
<p className="font-headline-md text-headline-md text-secondary">$299</p>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-label-sm opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[16px]">edit</span> Edit
                            </button>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5 flex flex-col justify-between hover:bg-white/[0.08] transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-tertiary-container/30 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined">groups</span>
</div>
<span className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-label-sm border border-white/5">Active</span>
</div>
<div>
<h4 className="font-body-lg text-body-lg text-on-surface font-semibold">Virtual Meetup</h4>
<div className="flex justify-between items-end mt-2">
<p className="font-headline-md text-headline-md text-secondary">$499</p>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-label-sm opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[16px]">edit</span> Edit
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="md:hidden bg-surface-container/90 backdrop-blur-2xl fixed bottom-0 w-full z-50 rounded-t-xl border-t border-white/5 shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
<div className="flex justify-around items-center pt-2 pb-safe px-4 h-16">

<a className="flex flex-col items-center gap-1 text-primary bg-primary/10 rounded-xl px-4 py-1 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</a>

<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors active:scale-90" href="#">
<span className="material-symbols-outlined">auto_fix_high</span>
<span className="font-label-sm text-label-sm">Services</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors active:scale-90" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-label-sm text-label-sm">Schedule</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors active:scale-90" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Earnings</span>
</a>
</div>
</nav>
    </div>
  );
}
