/* eslint-disable */
'use client';

export default function EditProfilePage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(208,188,255,0.1)] flex items-center justify-between px-margin-mobile h-16">
<button aria-label="Go back" className="w-10 h-10 flex items-center justify-center text-primary dark:text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform rounded-full">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile text-primary">Edit Profile</h1>
<button className="text-primary font-bold hover:opacity-80 transition-opacity active:scale-95 transition-transform font-label-md text-label-md px-2 py-1">Save</button>
</header>

<main className="flex-grow pt-24 pb-32 px-margin-mobile max-w-2xl mx-auto w-full flex flex-col gap-stack-lg">

<section className="flex flex-col items-center justify-center mt-stack-md">
<div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-surface-variant shadow-[0_0_24px_rgba(0,0,0,0.5)] group cursor-pointer">
<img alt="Profile picture of a person" className="w-full h-full object-cover" data-alt="A close-up portrait of an attractive young person with subtle, modern styling. The subject is bathed in soft, high-key studio lighting with a hint of neon violet edge-light. The background is a deeply blurred dark environment, perfectly complementing a vibrant glassmorphism UI aesthetic. The mood is confident, stylish, and premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvPAqMQ4t1duK5TgsLQZMdB6N3fB1bXF9ck9UjprV53kknyW1fyDB-oDsKfqM0hxTtGvYl_CV88J5PA2t-Hdsa1BjeKtgq9Z-g6E5wauFdlPOOKdUTWHLJRwDMPoQ7odiS4qWIn6JkrgxC5Wn_kvjTiQ0nMK2hcErX_tzXX9-dvTm6BAwlr3M-KZKIqwgA6lx96bAclpipq_xH9CSJcGmzgN_E1hLC3u8tCPccuNxThNv8ubTvOSSlVI8TV8DYF2mI07NGDOfB-dE" />

<div className="absolute inset-0 bg-surface/60 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="material-symbols-outlined text-white mb-1">photo_camera</span>
<span className="font-label-sm text-label-sm text-white font-medium">Change Photo</span>
</div>
</div>
</section>
<form className="flex flex-col gap-stack-lg w-full">

<div className="glass-card rounded-xl p-6 flex flex-col gap-stack-md">
<h2 className="font-label-md text-label-md text-primary mb-2 uppercase tracking-wider">Personal Info</h2>
<div className="flex flex-col gap-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="fullName">Full Name</label>
<input className="input-glass rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md w-full placeholder:text-on-surface-variant/50" id="fullName" type="text" value="Alex Thompson" />
</div>
<div className="flex flex-col gap-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="username">Username</label>
<input className="input-glass rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md w-full placeholder:text-on-surface-variant/50" id="username" type="text" value="@alex_t" />
</div>
<div className="flex flex-col gap-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="bio">Bio</label>
<textarea className="input-glass rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md w-full placeholder:text-on-surface-variant/50 resize-none" id="bio" rows="3">Fan of music and live sessions</textarea>
</div>
</div>

<div className="glass-card rounded-xl p-6 flex flex-col gap-stack-md">
<h2 className="font-label-md text-label-md text-primary mb-2 uppercase tracking-wider">Social</h2>
<div className="flex flex-col gap-base">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="website">Website / Link</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant/70">link</span>
<input className="input-glass rounded-lg pl-10 pr-4 py-3 text-on-surface font-body-md text-body-md w-full placeholder:text-on-surface-variant/50" id="website" placeholder="https://yourlink.com" type="url" />
</div>
</div>
</div>

<div className="pt-4">
<button className="btn-gradient w-full py-4 rounded-full font-label-md text-label-md text-white uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-transform duration-200" type="button">
                    Save Changes
                </button>
</div>
</form>
</main>

<nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-container/60 dark:bg-surface-container/60 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.4)] flex justify-around items-center h-20 pb-safe px-4">
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary/80 transition-colors active:scale-90 transition-transform w-16" href="#">
<span className="material-symbols-outlined mb-1" data-icon="explore">explore</span>
<span className="font-label-sm text-label-sm">Discover</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary/80 transition-colors active:scale-90 transition-transform w-16" href="#">
<span className="material-symbols-outlined mb-1" data-icon="videocam">videocam</span>
<span className="font-label-sm text-label-sm">Live</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary/80 transition-colors active:scale-90 transition-transform w-16" href="#">
<span className="material-symbols-outlined mb-1" data-icon="chat_bubble">chat_bubble</span>
<span className="font-label-sm text-label-sm">Messages</span>
</a>
<a className="flex flex-col items-center justify-center text-primary drop-shadow-[0_0_8px_rgba(208,188,255,0.6)] hover:opacity-80 transition-opacity active:scale-90 transition-transform w-16 relative" href="#">

<div className="absolute -top-1 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(208,188,255,0.8)]"></div>
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-label-sm text-label-sm font-bold">Profile</span>
</a>
</nav>
    </div>
  );
}
