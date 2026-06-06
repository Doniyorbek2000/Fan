/* eslint-disable */
'use client';

export default function CelebrityProfilePage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(208,188,255,0.1)] flex items-center justify-between px-margin-mobile h-16 w-full">
<button className="active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<span className="font-headline-md text-headline-md font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FanMeet</span>
<div className="w-8 h-8 rounded-full border border-primary/30 bg-surface-container overflow-hidden">
<img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0iSoDTTav6mLvLHwxFgQBsMKt6ktku-ZFrcPhSYcbz-uRQTQfMVVRqa28c8dAIlecULFKHbUfkGEtHlkWKsV4-Yzy9NdNQfOe03wZY2EHOqdQlzH5o0Dx5t3mzOqKvqA1SSy0bY69Q8NB6xPJdd3qWGlH3Dd_ON6yR_03EGNy3dkfIdSpcdPR9ZmbOE1B0aWZLh_Iyru3rEolKV_hm-3keaI74H-dqDteS4sSHsHmWLEXFqf-oW987QI8L0NJls_pyiI8VUYT7sc" />
</div>
</header>

<section className="relative w-full h-[530px] overflow-hidden">
<div className="absolute inset-0">
<img className="w-full h-full object-cover object-top" data-alt="A cinematic, high-definition portrait of a charismatic male pop star with silver-toned hair and a sharp jawline, wearing a bespoke velvet blazer. The setting is a moody, dimly lit backstage lounge with hints of neon electric purple and soft pink backlighting. The aesthetic is vibrant glassmorphism, featuring deep blacks and rich, saturated jewel tones. Soft volumetric lighting creates a premium, exclusive celebrity vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes" />
</div>
<div className="absolute inset-0 backstage-overlay"></div>
<div className="absolute bottom-0 left-0 w-full p-margin-mobile flex flex-col gap-2">
<div className="flex items-center gap-2">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Julian Vane</h1>
<span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 bg-surface-container-highest/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="material-symbols-outlined text-secondary text-[16px]">star</span>
<span className="font-label-md text-label-md text-on-surface">4.9 (1.2k Reviews)</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-highest/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#ffb0cd]"></span>
<span className="font-label-md text-label-md text-on-surface">Available Now</span>
</div>
</div>
</div>
</section>

<main className="px-margin-mobile mt-stack-md flex flex-col gap-stack-lg">

<section className="flex flex-col gap-stack-sm">
<h2 className="font-headline-md text-headline-md text-primary">About Julian</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Grammy-nominated artist and global pop icon. Julian is known for his soulful vocals and electric stage presence. Get a personal video for your special day or chat with him about his upcoming world tour!
            </p>
</section>

<section className="flex flex-col gap-stack-md">
<h2 className="font-headline-md text-headline-md text-primary">Fan Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">

<div className="glass-card rounded-xl p-stack-md flex flex-col justify-between h-48 active:scale-[0.98] transition-transform">
<div className="flex justify-between items-start">
<div className="bg-primary/20 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary">videocam</span>
</div>
<span className="font-headline-md text-headline-md text-on-surface">$149</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface text-lg">Video Message</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Personalized shoutout for birthdays or special events.</p>
</div>
</div>

<div className="glass-card rounded-xl p-stack-md flex flex-col justify-between h-48 active:scale-[0.98] transition-transform">
<div className="flex justify-between items-start">
<div className="bg-secondary/20 p-2 rounded-lg">
<span className="material-symbols-outlined text-secondary">forum</span>
</div>
<span className="font-headline-md text-headline-md text-on-surface">$299</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface text-lg">Private Chat (15 min)</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Face-to-face 1-on-1 virtual conversation.</p>
</div>
</div>

<div className="glass-card rounded-xl p-stack-md flex flex-col justify-between h-48 md:col-span-2 active:scale-[0.98] transition-transform">
<div className="flex justify-between items-start">
<div className="bg-tertiary/20 p-2 rounded-lg">
<span className="material-symbols-outlined text-tertiary">groups</span>
</div>
<span className="font-headline-md text-headline-md text-on-surface">$499</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface text-lg">Virtual Meetup</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Group session with up to 5 friends and Julian.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-stack-md mb-8">
<div className="flex justify-between items-end">
<h2 className="font-headline-md text-headline-md text-primary">Fan Love</h2>
<span className="font-label-md text-label-md text-tertiary">View All</span>
</div>
<div className="flex flex-col gap-stack-sm">

<div className="p-stack-md bg-surface-container-low rounded-xl border border-white/5">
<div className="flex gap-stack-md items-center mb-2">
<img alt="Fan profile" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7o0XDK-QOXPKp_ZmRIl5RqoxKU5RCjOPZBFL2GDssBF3NXd_g6J-Y4ASDQj8HKAfDh-iqHZcuptZ8ZN6U2MIdaZ_p2vS6zcXLHOc05QYEJzDjjdBy4bJ0GnJilxFf24u5XZSSHh-duoa42mnVNBPSSI0HWD67hCHumOPjn_Z58-nQewXL2vTTScKvjq_FDzm3CSrgQOuqtIGPnl7r9kiQDLo8dqyE9c1tD1Oiy43E9_OfTPY370hmgFbt9Tzc5U9O-qDKnx-Ccw0" />
<div>
<p className="font-label-md text-label-md text-on-surface">Sarah Jenkins</p>
<div className="flex text-secondary text-[14px]">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">"The video message was so authentic! He even remembered my name from the last tour. Best gift ever!"</p>
</div>

<div className="p-stack-md bg-surface-container-low rounded-xl border border-white/5">
<div className="flex gap-stack-md items-center mb-2">
<img alt="Fan profile" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0ZZjL3OY278XM2NTWBPg-dFb3OUKlthbzNK4qy-h3YuvNHC8p7OV-eOA7uqhuJSANINi26j-sDO87F9zSZZU1Vw4SuD7Y_H_g6vUDV4wC2_ZEjh_kh9LWtKbmLNdojzt8dpKoEX4HNHh0BZIQ8QzU4bc9WjXHJJrN56v6TBRafsE9HcNDo9UOVpl_StQQ8DqcielQ0NTkOk3Wsadiz0_PeV6Akv1_UleqMjw-uLqmG_rgd_rN6T_GjCt7T93aOFUfILIcVk7cCo" />
<div>
<p className="font-label-md text-label-md text-on-surface">Michael R.</p>
<div className="flex text-secondary text-[14px]">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star_half</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">"15 minutes went by so fast! Julian was incredibly sweet and answered all my questions about his song writing process."</p>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 w-full bg-background/90 backdrop-blur-2xl border-t border-white/10 px-margin-mobile py-4 flex items-center justify-between z-50">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Starts from</span>
<span className="font-headline-md text-headline-md text-on-surface">$149</span>
</div>
<button className="primary-gradient glow-shadow-primary px-10 py-4 rounded-full font-headline-md text-[18px] text-white active:scale-95 transition-all">
            Book Now
        </button>
</div>
    </div>
  );
}
