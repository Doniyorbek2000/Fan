/* eslint-disable */
'use client';

export default function ProfileSettingsPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(208,188,255,0.1)] flex items-center justify-between px-margin-mobile h-16">
<button className="text-on-surface hover:opacity-80 transition-opacity active:scale-95 flex items-center justify-center">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline-md text-headline-md font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FanMeet</h1>
<button className="h-8 w-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity active:scale-95 border border-white/10">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A cinematic, high-quality profile headshot of a stylish young man in his late twenties. He wears a premium dark jacket and has a modern textured haircut. The lighting features subtle neon purple and deep blue accents against a dark background, conveying a premium, exclusive VIP app aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATEQqzPqq5Pryc7HO5uRqioPhiJ_VNwY2pzmdsKPxHd-IxeYN-Sn7DF6l1Cu_8vmS5ndrx64_ofoMhExcewu6RDby-xcheLSnnpZa07SbzsggUJ_uin9-UQJhskJS5TvZ46ob0Hl0iZB03Tjk4XpEeAEWJY074XESp34dm9aZDcTmIlSsZuUB3mhOM-StEmGfD4aqQTm0J7w-L-YJdATSBn6U4tpiEVjgLl5_OO5terxqKKwZ0eSX-vMTUCgOYsFsvr1yTXgJ4cY0" />
</button>
</header>
<main className="pt-24 px-margin-mobile flex flex-col gap-stack-lg max-w-2xl mx-auto">

<section className="flex flex-col items-center justify-center pt-stack-md pb-stack-lg relative">

<div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-2xl top-4"></div>
<div className="relative w-24 h-24 mb-stack-sm rounded-full overflow-hidden border-2 border-primary-container shadow-[0_0_20px_rgba(208,188,255,0.3)]">
<img alt="Alex Thompson" className="w-full h-full object-cover" data-alt="A cinematic, high-quality profile headshot of a stylish young man in his late twenties. He wears a premium dark jacket and has a modern textured haircut. The lighting features subtle neon purple and deep blue accents against a dark background, conveying a premium, exclusive VIP app aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr60pfaSQc_nDeYc5rKHt50o2kKeeVGQGpPG591cOfwOp_l5qSL1AkBtwzrI_MIBXMEYQ24x1VA75ZK8EIY11078NnAzg8Uy2Ysije07GUp3z3w0G8ouroDR31cC_7335UKvxJJtkRW9i699IHq-rPnfTWM_ztcCgHzExAnabNRnFq6FwcTXIErHZdy2zSeoPOeZokZwEKB7xmbKfJbhXYJXmu2Lod3jQP_BqkVN3h8ANyy5VnsrWFF37NzCsRO8uuc_ZoKCbLVVI" />
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Alex Thompson</h2>
<button className="text-primary font-label-md text-label-md hover:text-primary-container transition-colors mt-2 active:scale-95 inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">photo_camera</span>
                Change Photo
            </button>
</section>

<div className="flex flex-col gap-stack-lg">

<section className="flex flex-col gap-stack-sm">
<h3 className="font-label-md text-label-md text-primary pl-2 opacity-90">Account</h3>
<div className="bg-surface-container/60 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-lg">
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors active:scale-[0.98] border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Edit Profile</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors active:scale-[0.98] border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">mail</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Email Address</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors active:scale-[0.98]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">phone_iphone</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Phone Number</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</button>
</div>
</section>

<section className="flex flex-col gap-stack-sm">
<h3 className="font-label-md text-label-md text-primary pl-2 opacity-90">Security</h3>
<div className="bg-surface-container/60 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-lg">
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors active:scale-[0.98] border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">lock</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Change Password</span>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</button>
<div className="w-full flex items-center justify-between p-stack-md border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">shield_person</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Two-Factor Auth</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none opacity-0" id="toggle-2fa" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle-2fa"></label>
</div>
</div>
<div className="w-full flex items-center justify-between p-stack-md">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">fingerprint</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Biometric Lock</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none opacity-0" id="toggle-bio" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle-bio"></label>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-sm">
<h3 className="font-label-md text-label-md text-primary pl-2 opacity-90">Notifications</h3>
<div className="bg-surface-container/60 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-lg">
<div className="w-full flex items-center justify-between p-stack-md border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">notifications_active</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Push Notifications</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none opacity-0" id="toggle-push" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle-push"></label>
</div>
</div>
<div className="w-full flex items-center justify-between p-stack-md">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">mark_email_unread</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Email Alerts</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none opacity-0" id="toggle-email" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle-email"></label>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-sm mb-stack-md">
<h3 className="font-label-md text-label-md text-primary pl-2 opacity-90">General</h3>
<div className="bg-surface-container/60 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-lg">
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors active:scale-[0.98] border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">language</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Language</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">English</span>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
</button>
<div className="w-full flex items-center justify-between p-stack-md border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">dark_mode</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Dark Mode</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-not-allowed outline-none opacity-0" disabled="" id="toggle-dark" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-not-allowed opacity-80" htmlFor="toggle-dark"></label>
</div>
</div>
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors active:scale-[0.98]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">help</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Help Center</span>
</div>
<span className="material-symbols-outlined text-outline-variant">open_in_new</span>
</button>
</div>
</section>

<button className="w-full py-4 rounded-xl bg-surface-container border border-error/20 text-error font-label-md text-label-md hover:bg-error/10 hover:border-error/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(255,180,171,0.05)] mt-4">
<span className="material-symbols-outlined text-[20px]">logout</span>
                Log Out
            </button>
<div className="text-center mt-4 mb-8">
<p className="font-label-sm text-label-sm text-outline-variant">FanMeet App Version 2.4.1</p>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-container/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex justify-around items-center h-20 pb-safe md:hidden">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200 gap-1 w-full h-full" href="#">
<span className="material-symbols-outlined text-[24px]">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200 gap-1 w-full h-full" href="#">
<span className="material-symbols-outlined text-[24px]">explore</span>
<span className="font-label-sm text-label-sm">Explore</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200 gap-1 w-full h-full" href="#">
<span className="material-symbols-outlined text-[24px]">chat_bubble</span>
<span className="font-label-sm text-label-sm">Messages</span>
</a>
<a className="flex flex-col items-center justify-center text-primary font-bold active:scale-90 transition-transform duration-200 gap-1 w-full h-full relative" href="#">
<div className="absolute -top-3 w-10 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(208,188,255,0.8)]"></div>
<span className="material-symbols-outlined text-[24px]">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
    </div>
  );
}
