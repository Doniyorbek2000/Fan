/* eslint-disable */
'use client';

export default function SecuritySettingsPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_0_20px_rgba(208,188,255,0.1)] flex items-center justify-between px-margin-mobile h-16">
<button aria-label="Go back" className="text-primary dark:text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform p-2 -ml-2">
<span className="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-bold">Security</h1>
<div className="w-10"></div> 
</header>
<main className="pt-24 px-margin-mobile max-w-[600px] mx-auto flex flex-col gap-stack-lg">

<section className="flex flex-col gap-stack-sm">
<h2 className="font-label-md text-label-md text-primary mb-2 uppercase">Authentication</h2>
<div className="glass-panel rounded-xl p-4 flex flex-col gap-stack-md">
<div className="flex justify-between items-center">
<div>
<p className="font-body-md text-body-md text-on-surface">Password</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Last changed: 3 months ago</p>
</div>
<button className="bg-gradient-to-r from-inverse-primary to-secondary-container hover:opacity-90 neon-glow text-white font-label-md text-label-md py-2 px-4 rounded-full transition-all active:scale-95">
                        Change
                    </button>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-sm">
<div className="glass-panel rounded-xl p-4 flex flex-col gap-stack-md">
<div className="flex justify-between items-center">
<div className="flex-1 pr-4">
<p className="font-body-md text-body-md text-on-surface">Two-Factor Authentication</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Add an extra layer of security to your account.</p>
</div>

<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface appearance-none cursor-pointer z-10 transition-transform duration-200 ease-in-out peer" id="toggle-2fa" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-high cursor-pointer transition-colors duration-200 ease-in-out peer-checked:bg-primary" htmlFor="toggle-2fa"></label>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-sm">
<div className="glass-panel rounded-xl p-4 flex flex-col gap-stack-md">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[28px]">fingerprint</span>
<div>
<p className="font-body-md text-body-md text-on-surface">Face ID / Fingerprint</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Log in faster and securely.</p>
</div>
</div>

<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-surface appearance-none cursor-pointer z-10 transition-transform duration-200 ease-in-out peer" id="toggle-bio" name="toggle-bio" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-high cursor-pointer transition-colors duration-200 ease-in-out peer-checked:bg-primary" htmlFor="toggle-bio"></label>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-sm">
<h2 className="font-label-md text-label-md text-primary mb-2 uppercase">Active Sessions</h2>
<div className="glass-panel rounded-xl flex flex-col overflow-hidden">

<div className="p-4 border-b border-white/5 flex items-start gap-4">
<div className="p-2 bg-surface-container-high rounded-full text-primary">
<span className="material-symbols-outlined">smartphone</span>
</div>
<div className="flex-1">
<p className="font-body-md text-body-md text-on-surface font-semibold">iPhone 13</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Tashkent, Uzbekistan</p>
<p className="font-label-sm text-label-sm text-tertiary mt-1">Active now</p>
</div>
</div>

<div className="p-4 border-b border-white/5 flex items-start gap-4">
<div className="p-2 bg-surface-container-high rounded-full text-on-surface-variant">
<span className="material-symbols-outlined">laptop_mac</span>
</div>
<div className="flex-1">
<p className="font-body-md text-body-md text-on-surface font-semibold">MacBook Pro</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">London, UK</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">2 hours ago</p>
</div>
</div>
<button className="w-full py-4 text-center font-label-md text-label-md text-error hover:bg-white/5 transition-colors">
                    Log out of all sessions
                </button>
</div>
</section>

<section className="flex flex-col gap-stack-sm mt-8 pb-8">
<button className="w-full py-4 text-center font-body-md text-body-md text-outline hover:text-error transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">delete</span>
                Delete Account
            </button>
</section>
</main>
    </div>
  );
}
