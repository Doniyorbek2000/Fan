/* eslint-disable */
'use client';

export default function PersonalCabinetPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(208,188,255,0.1)]">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full">
<button className="active:scale-95 transition-transform text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline-md text-headline-md font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FanMeet</h1>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary/50">
<img alt="User avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a stylish person in a modern tech-forward setting. The image uses a cool cinematic lighting palette with subtle hints of electric purple and pink neon in the blurred background, matching a premium glassmorphism dashboard aesthetic. The subject is well-lit and represents a tech-savvy early adopter of celebrity fan platforms." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVngR5jZWkJbzLcDfi5kRnGkBMDqBp9puyTjHmIDZTvuOxE7qxxrl3AWFe8MBD2H5Sa0Kxm51d9pnkPNVsyGG9ri9mNxbLZCB_NtsbgXwBdhy7YnLTIiHTFHWnk4JZWM8c7qPSpmZdYIdQrR0nLvYdVXS1epzppTnI-hfmXTvPCV6raVVnQVVEjzlteg92jImlUcPuSOHUM6AZ3sgLDf7Z0Kd1JMb3S0quyjwYL8Ler6sb6UV1OaE-aGzBrwpJseKMvQVs6WF7LVw" />
</div>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile max-w-2xl mx-auto space-y-stack-lg">

<section className="glass-card rounded-xl p-stack-md flex items-center space-x-gutter">
<div className="relative">
<div className="w-20 h-20 rounded-full border-2 border-primary glow-primary overflow-hidden">
<img alt="Alex Thompson" className="w-full h-full object-cover" data-alt="A detailed portrait of a youthful premium platform member with a confident smile. The background is a soft-focus studio setting with deep blue and purple backlighting. The lighting is high-end and professional, creating a sense of exclusivity and prestige for a VIP user profile card." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbPTTAW4sy0OApKTAyusZuqR-u6fh-WrbAb9wnEmwiS4GkT5JLRwQcYLxSsXSFIxmJa3ivPXGhVHWxJfa6VdYPCQNvO8iuNC4agtnAEnrltEwPyuzeTGDRKqxj6fa7rbr8PAhdDoDn6KF_MgntUJwoko1KMTgCHKTpgvwjoYushQ9bdY3NwsYk5zuqWq8MIEoquSBTHOoByJuXyI7PNkGbEPtBUrjPIC-cdhaXg8ZjrCrA551DetIZhJpUWEC1jiDV024_90OaYDo" />
</div>
<div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full px-2 py-0.5 flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]">stars</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Pro</span>
</div>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Alex Thompson</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Premium Member • Verified</p>
<div className="flex items-center space-x-2 mt-base">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse glow-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary">Online for 4 Sessions today</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="glass-card rounded-xl p-stack-md flex flex-col justify-between bg-gradient-to-br from-primary/10 to-transparent">
<div>
<span className="font-label-md text-label-md text-on-surface-variant flex items-center">
<span className="material-symbols-outlined mr-2 text-[18px]">account_balance_wallet</span>
                        Wallet Balance
                    </span>
<div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mt-2">$2,450.00</div>
</div>
<button className="mt-stack-md bg-gradient-to-r from-primary to-secondary text-on-primary py-3 rounded-xl font-headline-md text-[16px] glow-primary active:scale-95 transition-transform flex items-center justify-center space-x-2">
<span className="material-symbols-outlined">add_circle</span>
<span>Top Up</span>
</button>
</div>

<div className="grid grid-cols-2 gap-base">
<div className="glass-card rounded-xl p-stack-md flex flex-col justify-center items-center text-center">
<span className="font-headline-md text-headline-md text-tertiary">12</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Meets Done</span>
</div>
<div className="glass-card rounded-xl p-stack-md flex flex-col justify-center items-center text-center">
<span className="font-headline-md text-headline-md text-secondary">3</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Upcoming</span>
</div>
<div className="glass-card rounded-xl p-stack-md flex flex-col justify-center items-center text-center col-span-2">
<span className="font-label-md text-label-md text-on-surface-variant">Membership Level</span>
<div className="w-full bg-white/10 h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full w-3/4 glow-primary"></div>
</div>
<span className="font-label-sm text-label-sm text-primary mt-1">750/1000 XP to Platinum</span>
</div>
</div>
</section>

<section className="space-y-stack-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">My Bookings</h3>
<button className="text-primary font-label-md text-label-md hover:underline transition-all">View History</button>
</div>

<div className="glass-card rounded-xl overflow-hidden group">
<div className="flex p-stack-md space-x-gutter">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
<img alt="Artist Name" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A vibrant professional portrait of a pop music star with neon pink and purple background accents. The artist is wearing fashionable streetwear and has a charismatic expression, fitting for a premium celebrity interaction platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkDJa2dI9uO-nZO5Nyv7AMWbmQtVuvPsjeZ1OzyORHgL3_rHqKo-BNum2d6LN3luYbPZPkO4oMU-UsgGGkoIF9ZpcNN48hrlGFuZFK0Dob-H0qlIojS6blXinUa0DR6zSH74qfLSwX2flgFc45kOnQFU8up4bJnzY_1DVDVGKpErWQDqqaO-x3vaanYMLtgHeTkd3Kr3n_Yn-aBi4Z_lxnGxHd3qIkjuuj8O7aMBuOFIq1mz8I9D6IZLKYPy2ttDnweH3wpcdS-ls" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Private Chat with Luna</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Tomorrow • 8:30 PM (15 min)</p>
</div>
<span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/30">Upcoming</span>
</div>
<div className="flex items-center mt-stack-sm space-x-gutter">
<button className="text-primary font-label-sm text-label-sm flex items-center active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[16px] mr-1">calendar_today</span>
                                Reschedule
                            </button>
<button className="text-error font-label-sm text-label-sm flex items-center active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[16px] mr-1">cancel</span>
                                Cancel
                            </button>
</div>
</div>
</div>
<div className="bg-primary/10 px-stack-md py-2 border-t border-white/5 flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant italic">Link activates in 24h</span>
<button className="bg-surface-container-highest px-3 py-1 rounded-lg text-on-surface-variant font-label-sm text-label-sm cursor-not-allowed">Join Call</button>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
<div className="flex p-stack-md space-x-gutter">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
<img alt="Actor Name" className="w-full h-full object-cover" data-alt="A sophisticated portrait of a famous movie actor against a dark, textured background with golden lighting highlights. The style is classic Hollywood but with a modern, high-contrast digital finish, suggesting an exclusive high-tier celebrity interaction." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaAsatTGvTzJaPI5kXTRUomTRrE-oS_jBF5dfquBRfl5qrgb7hQgjyl9AmLOvApgebC_iQ6UrPBI-0t2SbpVQchT3GvkIsTtKWB410v91TksfvC_Ow_ZsoV_X50yzzhWWfXiDJX69wwm4Pv8qTcluwa7VjlQ7SmViEhqnyuKgTKBNpcr6-xgvOcP_5zv-4kn9Br2JrxBSo7H6qcLISS8VoUrx9I3u1baZ4dy4pb-uUFkSZdbTRBBDJvb_XdQKKo2XJuj6oX2dVdN0" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Greeting from David K.</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Jan 12, 2024 • Completed</p>
</div>
</div>
<div className="flex items-center mt-stack-sm">
<button className="text-secondary font-label-sm text-label-sm flex items-center active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[16px] mr-1">videocam</span>
                                Watch Recording
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-stack-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Favorite Celebrities</h3>
<div className="flex space-x-gutter overflow-x-auto hide-scrollbar pb-base">

<div className="shrink-0 text-center space-y-2 w-20">
<div className="w-20 h-20 rounded-2xl border border-white/10 p-1 relative">
<img alt="Luna" className="w-full h-full object-cover rounded-xl" data-alt="A close-up photographic portrait of a rising female music artist with purple-tinted hair and stylish avant-garde makeup. The image features soft bokeh lighting in the background with vibrant electric hues of cyan and magenta, reflecting the energetic glassmorphism UI theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB067rWtL1SwLp7glmrM6J7O1zVqydpi2LSAs6r9d5VVbYgfSSX8zDk2yWoxUsPf739nMDhU3-1hYj4v7j04yaUIO4flC9B9_wanvNNmwcs2K4-pgocDCB6NTy2uHR7eS9BV5aO2Xt58C0JTCrv2JfyLF7ol5XMEzpkTk0-lWVoxyRlbuI1IZ32GMP7l4xiG-lehWLNg3IAWEIxTjUu0vgDRXwAIjEIXRkTjGiejSiyUCOv2hKCfQHCA1hhM7bYbrO0YSUitWCiYuo" />
<div className="absolute -top-1 -right-1 bg-secondary w-4 h-4 rounded-full border-2 border-background"></div>
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate">Luna</p>
</div>

<div className="shrink-0 text-center space-y-2 w-20">
<div className="w-20 h-20 rounded-2xl border border-white/10 p-1">
<img alt="Z-Boy" className="w-full h-full object-cover rounded-xl" data-alt="A portrait of a male K-pop idol with striking silver hair and a charismatic gaze. He is wearing high-fashion jewelry and a metallic jacket. The background is a deep navy blue with subtle particle effects and lens flares in neon purple, creating a high-fidelity digital art feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqBLikRXAefUemf3ieRZMCV9GU8BwY5Gbj4tClpHoVmJ2GxiBxg6aV1utkCToYJBDcby_LG-h5nnOigVccpMyjEkfvwFe3iceSdyV-xcXQaoJ46ExMVl00RX6YotLWrAQF7wnM_b3mOqFimtZrZRAbGNd4EbwYLaNYqnl7erx_177zoeu3Cog1D6pjV6zgmulyl0NUdsbOG8wxdEMnjg8ntHDiOGDxy8a0e1QW0y7YywfODYWz-zvfBYLRCrj0RwpxHZLP-S-aKhg" />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate">Z-Boy</p>
</div>

<div className="shrink-0 text-center space-y-2 w-20">
<div className="w-20 h-20 rounded-2xl border border-white/10 p-1">
<img alt="Kara" className="w-full h-full object-cover rounded-xl" data-alt="A fashion-forward portrait of a top-tier influencer with a vibrant orange and pink color palette. The lighting is warm and sunset-like, with long shadows and high contrast. The image exudes energy and high-end celebrity lifestyle, set against a dark, sleek background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0e_GMcYFotKebuhZdAgLvRkAbY73ukSKC-alqB3gGZbXtAcVUgls6FyRCDr64uAirevug9-GS8DnQSqLQOxoIji8bNMiOXCovMuKMqH_gcv3RXQAA7ev0yPrhzE3oJVoOoSImhcU22PiPBOQ854Kg9fzy_44VH-wiamyfv3b1JzN71gyTfJtBQVFSVSUR72yfRGhjArXeyqu1eaSzb4yWWcL9Y9TAmQLazo0i02soJ-V0nsCZWRyLvwyUhj0wyXuBXialnCAGhu0" />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate">Kara</p>
</div>

<button className="shrink-0 w-20 h-20 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all">
<span className="material-symbols-outlined text-[32px]">add</span>
</button>
</div>
</section>

<section className="glass-card rounded-xl divide-y divide-white/5 overflow-hidden">
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors group">
<div className="flex items-center space-x-gutter">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">settings</span>
</div>
<div className="text-left">
<p className="font-label-md text-label-md text-on-surface">Account Settings</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Security, Notifications, Privacy</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors group">
<div className="flex items-center space-x-gutter">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">help</span>
</div>
<div className="text-left">
<p className="font-label-md text-label-md text-on-surface">Help Center</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Support tickets and FAQ</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-stack-md hover:bg-white/5 transition-colors group">
<div className="flex items-center space-x-gutter">
<div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center text-error group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">logout</span>
</div>
<div className="text-left">
<p className="font-label-md text-label-md text-error">Logout</p>
<p className="font-label-sm text-label-sm text-error/60">Sign out of your account</p>
</div>
</div>
</button>
</section>
</main>

<nav className="fixed bottom-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] rounded-t-xl">
<div className="flex justify-around items-center h-20 pb-safe w-full">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">explore</span>
<span className="font-label-sm text-label-sm mt-1">Explore</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-label-sm text-label-sm mt-1">Messages</span>
</a>
<a className="flex flex-col items-center justify-center text-primary font-bold active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm mt-1">Profile</span>
</a>
</div>
</nav>
    </div>
  );
}
