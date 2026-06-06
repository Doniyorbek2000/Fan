/* eslint-disable */
'use client';

export default function VideoCallPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<div className="absolute inset-0 z-0">
<img alt="Julian Vane Video Feed" className="w-full h-full object-cover" data-alt="A high-fidelity, dramatic portrait of a charismatic male celebrity, Julian Vane, engaged in a live video call. He is looking directly at the camera with an engaging smile. The lighting is moody and cinematic, featuring vibrant neon pink and electric purple edge lighting that highlights his profile against a dark, blurred background. The image has a premium, high-octane aesthetic, fitting a modern VIP video call experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeKDaKtJH99wjW_CElQb96qDR66OEE0fynpd03zteMDjMC7vpx0X0hdOxvDIHfB1RfvgACo9Oztp2ANNJuBp-X9e09sGSeR9Nu98m65FqyN1fp8pvs9NgjIzlLt8HwtDQ53X_yNGKv98bqyyrOEAvo1cEXX31GsuMyjDV5nP4Ek9z-ryyJe0lFi00aSy30IuTa4N3z1j6GHyRhl9BML5tITDJXiCHmcs58S3Dru7_8tgLHL3u5BXofJF85ZrpLGHOiAU7g8fE_rJ4" />

<div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/90"></div>
</div>

<div className="fixed top-0 w-full z-20 px-margin-mobile pt-stack-lg pb-stack-md flex justify-between items-start pointer-events-none">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
<img alt="Julian Vane Avatar" className="w-full h-full object-cover" data-alt="A close-up headshot of Julian Vane, a charismatic male celebrity, with dramatic neon purple lighting. He has a confident expression. The style is modern, vibrant, and premium, suitable for a dark-themed UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_dgmVOtji8fPIT-MH7sA5-LWSObrs_ugDtLoeyxrPQ_E9dZ1yph1tJqVqibjYSvSSqEwP3SUSbgNFWG_Q2JJBCynWFpBcvzNK9D_1Ctv1sHXzjPouOzEHGu4djz2UCHVxhJnJDe2qDFssDompCd38Zsh6Y7AVsy12CE4cOjMpRfmGJaHUPWAoLapoMahL5kiWU6hvBXnF2qaCWnk0SXvE0BZZ9uMvCfqTznTuFNu-ZWId7p-roLm9nxg0tBOrWs5QSUde2T1oxYI" />
</div>
<div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary pulse-dot shadow-[0_0_8px_#ffb0cd]"></span>
<span className="font-label-md text-label-md text-on-surface">Julian Vane</span>
</div>
</div>

<div className="glass-panel px-4 py-2 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(208,188,255,0.2)]">
<span className="font-headline-md text-headline-md-mobile text-primary tracking-widest" id="call-timer">14:20</span>
</div>
</div>

<div className="fixed top-24 right-margin-mobile w-[100px] h-[150px] z-30 rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-background/80 cursor-move" id="pip-container">
<img alt="User Camera Feed" className="w-full h-full object-cover" data-alt="A low-angle selfie-style portrait of a young fan during a video call. She looks excited and happy. The lighting is soft and natural, contrasting with the dark neon aesthetic of the main app, but still bright enough to be visible. The image represents a typical user's front-facing camera feed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACe9YrN2aN8caRTKeoXQlWJh44R8uD0tqV5G90XYnl5fqUUvy82jjfmUdDF1h0gy7MBjsZWIBSuMRDSvgmoKm-7yK5Kl3LK9rQMCFOBh_pzfN99wxJATvTt2XhssGDVl9s2spymsxXrxhfsI_c9eMZejni1eF4R5VccPJhmr00mQaijo6MxeTtSCNSSX4NgcRYmudOuTyb453X6brrjEN_FsCZY0Pw2EPu6izXioot82tgXr7UX67h57QBuanWSxDohiQ-R_TEhxc" />
</div>

<div className="fixed top-1/3 left-margin-mobile z-10 max-w-[200px] opacity-70">
<div className="glass-panel p-3 rounded-lg border-l-2 border-tertiary">
<p className="font-label-sm text-label-sm text-tertiary mb-1">VIP Fan Status</p>
<p className="font-body-md text-body-md text-on-surface">3 Oylik Obuna</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-2 line-clamp-2">"Men sizning eng katta muxlisingizman!"</p>
</div>
</div>

<div className="fixed bottom-0 w-full z-40 px-margin-mobile pb-stack-lg pt-stack-md bg-gradient-to-t from-background via-background/90 to-transparent">
<div className="glass-panel rounded-full flex justify-around items-center py-4 px-6 max-w-md mx-auto">

<button className="w-12 h-12 rounded-full bg-surface/40 hover:bg-surface/60 border border-white/10 flex items-center justify-center transition-all duration-200 text-on-surface-variant hover:text-primary active:scale-95">
<span className="material-symbols-outlined">cameraswitch</span>
</button>

<button className="w-12 h-12 rounded-full bg-surface/40 hover:bg-surface/60 border border-white/10 flex items-center justify-center transition-all duration-200 text-on-surface-variant hover:text-primary active:scale-95">
<span className="material-symbols-outlined">videocam</span>
</button>

<button className="w-12 h-12 rounded-full bg-surface/40 hover:bg-surface/60 border border-white/10 flex items-center justify-center transition-all duration-200 text-on-surface-variant hover:text-primary active:scale-95">
<span className="material-symbols-outlined">mic</span>
</button>

<button className="w-16 h-16 rounded-full bg-error hover:bg-error-container flex items-center justify-center transition-all duration-200 text-on-error shadow-[0_0_20px_rgba(255,180,171,0.3)] active:scale-90">
<span className="material-symbols-outlined">call_end</span>
</button>
</div>
</div>
    </div>
  );
}
