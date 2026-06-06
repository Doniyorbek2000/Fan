/* eslint-disable */
'use client';

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/20 flex justify-between items-center px-margin-mobile h-16">
<div className="flex items-center gap-4">
<button className="transition-all duration-300 active:scale-95 text-on-surface-variant hover:bg-white/5 p-2 rounded-full">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary">FanMeet Pro</h1>
</div>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
<img alt="Creator Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a stylish celebrity creator with sharp features and a confident expression. The lighting is dramatic and moody, with purple and pink rim lights reflecting the FanMeet brand identity. The background is a soft-focus studio setting with deep blue shadows, emphasizing the premium and exclusive nature of the profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSBCmpqs2UZMNhTYxMARo_BfsxjQDjRkB0oCt19Lru5iWrwTCN0MOdTdlYdwuiyg7LfqCQJiZw5r5kCH2s1UXuXW7UX69Wu304UVtGf6igTXJbFHyBKEq8NWZTQX7qM-M5VDgcz0ojcn1Syg_9eqgGf8jJbliaC-6-A8geHP9b7uy7m_xD5iq-mL6XlNoFvov8_0cjGQvBapnP5n2vXd8sfgB8pSIiohOy7e0qTkljTtZLd18iQWYPucf1Gb2fEZnt-Y8hPaQLGqo" />
</div>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile max-w-lg mx-auto min-h-screen">

<div className="flex justify-between items-center mb-stack-lg">
<div className="flex flex-col items-center gap-2" id="step-1-indicator">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold neon-glow-primary">1</div>
<span className="text-label-sm font-label-sm text-primary">Identity</span>
</div>
<div className="flex-1 h-[2px] bg-surface-container-highest mx-2 mb-6"></div>
<div className="flex flex-col items-center gap-2" id="step-2-indicator">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">2</div>
<span className="text-label-sm font-label-sm text-on-surface-variant">Liveness</span>
</div>
<div className="flex-1 h-[2px] bg-surface-container-highest mx-2 mb-6"></div>
<div className="flex flex-col items-center gap-2" id="step-3-indicator">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">3</div>
<span className="text-label-sm font-label-sm text-on-surface-variant">Review</span>
</div>
</div>

<section className="space-y-stack-md transition-all duration-500 opacity-100" id="screen-document">
<div className="text-center mb-stack-lg">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Verify Your Account</h2>
<p className="text-on-surface-variant">Upload a government-issued photo ID to start your application.</p>
</div>
<div className="glass-card rounded-xl p-6 space-y-stack-md">
<div className="border-2 border-dashed border-outline-variant rounded-xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary transition-colors group" id="upload-zone">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl">cloud_upload</span>
</div>
<div className="text-center">
<p className="font-bold text-on-surface">Tap to upload ID</p>
<p className="text-label-sm text-on-surface-variant">Passport, Driver's License or ID Card</p>
</div>
<input className="hidden" id="file-input" type="file" />
</div>

<div className="hidden space-y-2" id="progress-container">
<div className="flex justify-between text-label-sm">
<span className="text-on-surface">identity_document.jpg</span>
<span className="text-primary font-bold" id="progress-percent">45%</span>
</div>
<div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300" id="progress-bar"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-lg">verified_user</span>
<p>Your document is encrypted and securely stored for verification purposes only.</p>
</div>
<div className="flex items-start gap-3 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-lg">info</span>
<p>Ensure all four corners are visible and the image is clear without glare.</p>
</div>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary-container font-bold neon-glow-primary opacity-50 cursor-not-allowed transition-all active:scale-95" disabled="" id="btn-next-1">
                Continue to Liveness Check
            </button>
</section>

<section className="hidden space-y-stack-md transition-all duration-500" id="screen-liveness">
<div className="text-center mb-stack-lg">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Biometric Scan</h2>
<p className="text-on-surface-variant">Align your face within the circle and follow the prompts.</p>
</div>
<div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary p-2 neon-glow-primary overflow-hidden glass-card">

<div className="w-full h-full rounded-full overflow-hidden relative">
<img alt="Selfie Preview" className="w-full h-full object-cover" data-alt="A close-up selfie preview within a circular frame, featuring a young adult male looking directly into the camera. The scene is illuminated by the soft purple and neon pink glow of a smartphone screen in a dark environment. Digital scanning artifacts and a translucent holographic interface overlay his face, creating a high-tech biometric verification aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGVKBc8ap3qcUBDsRqd5W2NZ8a1vZK-3VPgt75hAmxQV5PhhfA0gVhsd9K-28dBqefoq6xmeBRY_8ie0HjJai5BLelM3xeGW7dzicXKRPVHprdMxkSGnJt-UmuMhb7bJfxWLiiqLLPafr0Ar8Xxhxe-FHBKlKdfbhNmQQgp2CtXBm7pS0ZDBur-ULUFOdfnz2935r6r6Oox5sAP4bTEHNCBHHecSFsdXGiQNVsS67getFvj-sxIs6DBkpErpNVmHtlh--NkzjIgxE" />

<div className="absolute inset-0 scan-line"></div>
<div className="absolute inset-0 border-[30px] border-surface/40 rounded-full"></div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full pulse-pink ml-2"></div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full pulse-pink mr-2"></div>
</div>
<div className="glass-card rounded-xl p-4 text-center" id="liveness-instruction">
<p className="text-headline-md font-bold text-primary" id="instruction-text">Look Straight</p>
<div className="mt-4 flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
<div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
</div>
</div>
<div className="grid grid-cols-1 gap-stack-sm">
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary-container font-bold neon-glow-primary transition-all active:scale-95" id="btn-start-scan">
                    Start Identity Scan
                </button>
</div>
</section>

<section className="hidden space-y-stack-lg transition-all duration-500 text-center" id="screen-success">
<div className="py-8">
<div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow-primary relative">
<span className="material-symbols-outlined text-6xl text-primary">check_circle</span>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center pulse-pink">
<span className="material-symbols-outlined text-white text-sm">celebration</span>
</div>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">Application Sent!</h2>
<p className="text-on-surface-variant max-w-xs mx-auto">Welcome to the elite tier, Creator. Our VIP concierge team is reviewing your profile.</p>
</div>

<div className="glass-card rounded-xl p-8 text-left space-y-8 relative">

<div className="absolute left-11 top-12 bottom-12 w-[2px] bg-surface-container-highest"></div>
<div className="flex items-center gap-6 relative z-10">
<div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-on-primary neon-glow-primary">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Application Submitted</h4>
<p className="text-label-sm text-on-surface-variant">Today at 2:45 PM</p>
</div>
</div>
<div className="flex items-center gap-6 relative z-10">
<div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] text-on-secondary pulse-pink">
<span className="material-symbols-outlined text-sm">visibility</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Identity Verification</h4>
<p className="text-label-sm text-secondary">In Progress (Estimated 2h)</p>
</div>
</div>
<div className="flex items-center gap-6 relative z-10 opacity-40">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-on-surface-variant">
<span className="material-symbols-outlined text-sm">verified</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Profile Verified</h4>
<p className="text-label-sm text-on-surface-variant">Access all features</p>
</div>
</div>
</div>
<button className="w-full py-4 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all">
                Back to Dashboard
            </button>
</section>
</main>

<nav className="fixed bottom-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-t border-white/10 rounded-t-xl shadow-[0_-4px_20px_rgba(208,188,255,0.15)] flex justify-around items-center pt-2 pb-8 px-4" id="bottom-nav">
<div className="flex flex-col items-center gap-1 text-on-surface-variant/70 hover:text-primary/80 transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined">grid_view</span>
<span className="text-label-sm font-label-sm">Feed</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant/70 hover:text-primary/80 transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined">confirmation_number</span>
<span className="text-label-sm font-label-sm">Events</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant/70 hover:text-primary/80 transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined">insights</span>
<span className="text-label-sm font-label-sm">Stats</span>
</div>
<div className="flex flex-col items-center gap-1 text-primary font-bold transition-transform duration-200 active:scale-110">
<span className="material-symbols-outlined">person</span>
<span className="text-label-sm font-label-sm">Profile</span>
</div>
</nav>
    </div>
  );
}
