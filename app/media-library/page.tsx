/* eslint-disable */
'use client';

export default function MediaLibraryPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 bg-surface/80 backdrop-blur-xl dark:bg-surface/80 border-b border-white/10 shadow-lg">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary active:scale-95 duration-200 transition-opacity hover:opacity-80 cursor-pointer" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary shadow-[0_0_10px_rgba(208,188,255,0.4)]">Media Library</h1>
</div>
<div className="flex items-center">
<span className="material-symbols-outlined text-primary active:scale-95 duration-200 transition-opacity hover:opacity-80 cursor-pointer" data-icon="search">search</span>
</div>
</header>
<main className="pt-16 pb-24 min-h-screen">

<nav className="sticky top-16 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/5 py-4 overflow-x-auto hide-scrollbar">
<div className="flex px-margin-mobile gap-3">
<button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md transition-all neon-glow-primary active:scale-95 whitespace-nowrap">All</button>
<button className="px-6 py-2 rounded-full glass-panel text-on-surface-variant font-label-md text-label-md hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">Photos</button>
<button className="px-6 py-2 rounded-full glass-panel text-on-surface-variant font-label-md text-label-md hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">Videos</button>
<button className="px-6 py-2 rounded-full glass-panel text-secondary font-label-md text-label-md hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap border-secondary/20 border">Premium</button>
<button className="px-6 py-2 rounded-full glass-panel text-on-surface-variant font-label-md text-label-md hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">Drafts</button>
</div>
</nav>

<section className="px-margin-mobile my-stack-md">
<div className="glass-panel rounded-xl p-4 flex flex-col gap-2">
<div className="flex justify-between items-end">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Storage Usage</span>
<span className="font-label-md text-label-md text-primary font-bold">30 / 100 uploads used</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary-container to-primary w-[30%] neon-glow-primary rounded-full"></div>
</div>
</div>
</section>

<div className="media-grid px-2 md:px-margin-mobile">

<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A cinematic close-up of a glamorous celebrity walking through a neon-lit futuristic backstage hallway. The atmosphere is charged with electric purple and deep magenta lighting, creating long shadows and high-contrast highlights. The style is hyper-realistic with a cinematic bokeh effect, emphasizing the high-end VIP exclusivity of the FanMeet platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVKyLfyaqCacqyp0n38xOkRnt8GVXXdk6mywDnAbCPmP3Uo__gzKAGkibfklqcHRJY5aNlU0q6J2a-94WHrcKQj5u5Otkkgbx-KNLolhzbHkKGzmIIcnPD12MeMfa-1Jgc3Solq6NUKImzMCtOQgdfQ04KrjmtzDspoJIwO7n8B_X6G6HPHzlcgOSqKWH7PBZvQp9btMCthu0csv0Z0KO9xlFdgZk8gO1iSbQk0RUkML55WgDlP1BCZQUW_Tz2PBR1fJwFXRYbKz0" />
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20 cursor-pointer hover:bg-primary/40 hover:border-primary transition-colors"></div>
<div className="absolute bottom-2 left-2 px-1.5 py-0.5 glass-panel rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-white" data-icon="videocam">videocam</span>
<span className="text-[10px] text-white font-bold">0:45</span>
</div>
<div className="absolute top-2 left-2 w-7 h-7 bg-secondary rounded-lg flex items-center justify-center neon-glow-error">
<span className="material-symbols-outlined text-[16px] text-on-secondary" data-icon="star" data-weight="fill">star</span>
</div>
</div>

<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A high-resolution professional studio portrait of a trendy musician holding a microphone, captured with soft-box lighting that creates a sophisticated glow. The background is a textured deep indigo wall that complements the electric purple accents of the musician's outfit. The mood is intimate and premium, showcasing high-quality media content for a media library interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtik81l3--7HQ0Vf_nNIrIYc4hDQf3DD1vN-o8IeGAw7dK-rXCwYZIjHfUD_IWfBir50eJbDY8_k0vltDMPgVMpHKTrzTquvmnyc_RKoWOI9iK72-VZYkGSQ_BU3nqG-ReHINRULO8vPrdek2hQOs0ox3XQfUuiP9-d4dDhvtC7wLVIfRS5rFv97QTHHrXVl1vF-hLYBHS0OwCIN41kvLawyYlGbNW4_nxgekbM2-FY4td6OMcM6MDewp9cJcgVbrJlkYcJ60E1os" />
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20"></div>
</div>

<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Vibrant concert stage photography with a sea of glowing fans in the foreground and a burst of purple laser lights piercing through the dark stadium air. The energy is palpable, featuring sharp details of the stage setup and atmospheric haze. The colors are dominated by deep blues and neon purples, aligning with the premium vibrant glassmorphism design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrO_dr8INN287Md2yFCU--SX6ej8N6urYVf0iC01LorrPzXsyYccl_ETid_pFyB9uBbfklxBxgG2efYV3hUdnxwKQN5zYUlTKtNjKd_82i30NHIbH4k6bXtS5G2_IyjYkamYBA82seCIGY8RBzBcx3KCn_5-NCwscdDt-N_owo6e_G6_GxRB9FN51joGjagVqcSvui9s9FhkAZ_2z20t8cEd4HFgdeFmqRG_bOC44yXafn9CcgBkeiM9yTjIAGj1kMaW6NtpY69o" />
<div className="absolute inset-0 bg-primary/20 ring-4 ring-primary ring-inset z-10"></div>
<div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-20">
<span className="material-symbols-outlined text-[16px] text-on-primary font-bold" data-icon="check">check</span>
</div>
</div>

<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A dynamic action shot of a celebrity athlete during an intense training session in a modern, dark gym. The lighting is focused and dramatic, highlighting the athlete's movement and sweat with a metallic sheen. The color palette features cool steel greys and sharp purple neon strip lights in the background, maintaining a high-octane backstage vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_SKkZ327vh-SXacf1fQrxZGFI3X7IrRatR-T1dsHhF4IDVgwGG7ya1SZaUBrHP1h7G7U9QWq8HlR0y6NGnbmYJSn1DC30DNYe44ikkCf23ao13U7GVMnehCttUcGYwK3iIyJGr1IQHmT4sfrF98evAK8w_dh-YcG55wmVbALMEp7t17zZCgAL5jDSDNGvdCOGqP0a7lxlQeaSDgkj5-W6LubQmMf1I45Wn6ElW7EKB1jl3q9j-ZesPehNW3TYvoXOlxe58gwzHKY" />
<div className="absolute bottom-2 left-2 px-1.5 py-0.5 glass-panel rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-white" data-icon="videocam">videocam</span>
<span className="text-[10px] text-white font-bold">1:20</span>
</div>
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20"></div>
</div>

<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Exclusive backstage candid moment showing a celebrity laughing with their crew in a luxury dressing room filled with flowers and mirrors. The mirror reflects glowing warm vanity lights while the room itself has a cool blue ambient lighting. This high-fidelity image captures an authentic, high-value moment typical of premium celebrity fan content." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOIWyzsqW5PviDW4ndRNyvjRT40KOurEXGMRYHc_Nbp9boAY0JiqkXFhtM_82Gn6D9PQZd4xjpT4H7CNHBN85ecjExfDbquROYQY93F07gSbP6JvTPAGyep5-dQq4-_3j1Tr_2KmbgCqJoVYI9BvrQP3a8aivcq6s00MpmKKs8RWFvYNfw-2kBOsxzW6oACVbdprDhY0vd9UUsFVnaC3UMX79gW1GC1feiyAsAul78y7ET1N4H3exH20bjZ9tlP-i151H7vBPcQRc" />
<div className="absolute top-2 left-2 w-7 h-7 bg-secondary rounded-lg flex items-center justify-center neon-glow-error">
<span className="material-symbols-outlined text-[16px] text-on-secondary" data-icon="lock" data-weight="fill">lock</span>
</div>
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20"></div>
</div>

<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60" data-alt="An artistic blurred long-exposure shot of city neon lights at night, creating abstract streaks of purple, pink, and cyan against a dark urban backdrop. The composition is modern and moody, perfect for representing draft content in a creative media library. The style is fluid and energetic, matching the overall vibrant digital glass aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfrEAGVJCAyOseTC5OTYknWrTOxngHBLnSye9ng-AHToGGckGQeN2Iqo8nufhG77CliVI3DLIHZmoibZ3hC1N-Ev_REBDbxMfI6Rl3anvilmv1apQ5anW8mPQaDEyHOzOqRenXMfi6GAFFXwseilLVKXLgciUFd1Sm0wAkZcNrDnA3KeV6HIkKlCcw9vyec9oMk4dAT_9S2Ki6log0UVEnjAO5nPlsFJsD7B-UdEEc-KBzDB99Ga5KldkakDkhyyVhiBV0u4MBMKU" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white/60 font-label-md text-label-md bg-black/40 px-3 py-1 rounded-full border border-white/10 uppercase tracking-tighter">Draft</span>
</div>
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20"></div>
</div>

<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover" data-alt="A professional flat-lay photograph of digital production gear including a high-end camera, a tablet showing fan analytics, and a pair of purple headphones. The items are arranged on a dark reflective surface with neon cyan backlighting. The image signifies the behind-the-scenes work involved in creating premium fan content." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqVo87W6ED60cDLjQuWbyuNmFVbuPzKRMuRHU104Ksk-U9SSpX58wEW9gy8Vhjy7B5PHSxupBsrFCwaeYOfU3PSDVtXQqIZc58QRRT5LlaSDFJrIMPtQMcXkAH2XJqeoZN7BWBx3sRFsDcsHw_jfwv6e-V7hLtVEnbkM81rhYyndFTqMd8tRjbcDdSyl6l20Fs8tl9OkTv2wr93lmAO-OzTAPz3bHyc-7nsXNaN52iz6yQKRsyjGlqKSB4nh1fLGAuW5jkp3tN5Ck" />
<div className="absolute bottom-2 left-2 px-1.5 py-0.5 glass-panel rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-white" data-icon="videocam">videocam</span>
<span className="text-[10px] text-white font-bold">0:15</span>
</div>
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20"></div>
</div>
<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover" data-alt="Close-up detail of a celebrity's hands signing a digital screen with a glowing purple stylus. The screen shows a vibrant piece of digital artwork being created. The lighting is focused and warm on the hands, with deep blue shadows in the surroundings, conveying a sense of artistic exclusivity and personal touch." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHi73W6TXBK1SyJcQI1XvN3_Kefo8b7tXGlaGCshvjdJk1ogP1uUsnUSZQSh8aTwW73mZj5X5thHOkMctIMo54v5J0lReuhkpaVIDC4IKjQbP3AFy29s-YQinh-F1B6nHBMwEFHWazMCZE65KZYg1CI1V6vXO2G7q7mfbi2Jf_tQeZsHmeUW93sNfwckXhmRty_pyi1cZBvn55yJxR06OJm2LcYvM_WWv3ZN00tu14-LgoPLb9752x1EyysIkpuyJrBBaUa8aR4FU" />
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20"></div>
</div>
<div className="relative aspect-square overflow-hidden group">
<img className="w-full h-full object-cover" data-alt="A wide-angle landscape shot of a futuristic music festival venue at twilight. The architecture is sleek and metallic, illuminated by hundreds of synchronized purple and pink drones forming a complex light pattern in the sky. The mood is epic and technologically advanced, representing the scale of top-tier celebrity events." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPC2H6x6t1vSHrgVrwEJR-D8Xb72JYOXt-cVc06POKvpttNKuemjA6EyHdZUNUPO2raEy2js8gZdzphnz_sS7hV_XFs2_V-IYM6KyhwtKOYc0BBtTlDTk5zu6zxJgtBayH9HifidtLMbnjFmYEezwE-e4Fg9EKd-xVlQIFuc79Nd6JhWZ9h3AYEO8rRYRnIGV1o9y7v3incgtYcaVRPLimu795-kcy6Io7XX4m6EOEAS6Cjz7_iwXP3zLvdE7sKYHgbkRCC3W26cI" />
<div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center bg-black/20"></div>
</div>
</div>
</main>

<button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-primary to-inverse-primary rounded-full flex items-center justify-center text-on-primary shadow-[0_0_20px_rgba(208,188,255,0.6)] z-50 active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[32px] font-bold" data-icon="add">add</span>
</button>

<nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 backdrop-blur-xl dark:bg-surface/80 border-t border-white/10 shadow-[0_-4px_12px_rgba(0,0,0,0.5)] flex justify-around items-center h-20 px-2 pb-safe">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-xl p-2 hover:text-primary transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="grid_view" data-weight="fill">grid_view</span>
<span className="font-label-sm text-label-sm">Media</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors active:scale-90 duration-200" href="#">
<div className="relative">
<span className="material-symbols-outlined" data-icon="videocam">videocam</span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full neon-glow-error animate-pulse"></span>
</div>
<span className="font-label-sm text-label-sm">Live</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span className="font-label-sm text-label-sm">Chat</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
    </div>
  );
}
