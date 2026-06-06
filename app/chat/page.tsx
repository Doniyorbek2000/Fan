/* eslint-disable */
'use client';

export default function ChatInterfacePage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
<header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-margin-mobile py-4 shadow-[0_4px_20px_rgba(208,188,255,0.15)]">
<div className="flex items-center gap-3">
<button className="hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary">arrow_back_ios</span>
</button>
<div className="relative">
<div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30">
<img className="w-full h-full object-cover" data-alt="A professional close-up portrait of a charismatic male celebrity with styled dark hair and a confident expression. He is wearing a sleek tailored dark blazer against a soft-focus studio background with subtle purple and pink rim lighting. The overall mood is premium, exclusive, and high-fashion, aligned with a luxury digital experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5wcgHWl1JIpjDabPiNJWwtIvzrQcoU2x8JPZUXniBOErhP1cWcrhxRMIaAGwpR-cCjwzRT8GwTwqUnIwruWFxcx-oVM1fxzgZ-ASUFYBNW25T86MQxe_MYK8-npCcKAxHQQtdkFyKzWF01owyYuQtKgazOKzW_i3tI99sTy9o1mvyuOnsWUJgotWWp3uNf_ffSGtP2Km92QuLiNdU06-ObAgiqzZfQDMM8jV4lj9P7xgYd60I96-omcXEsBZoNJ5UFl45Cm1Dygo" />
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-label-md font-headline-md text-on-surface">Alex Rivera</span>
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant/70">Active now</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity">videocam</button>
<button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity">info</button>
</div>
</header>

<main className="flex-grow pt-24 pb-28 px-margin-mobile flex flex-col gap-stack-md overflow-y-auto">

<div className="flex justify-center my-4">
<span className="text-label-sm font-label-sm text-on-surface-variant/50 uppercase tracking-widest px-4 py-1 rounded-full bg-white/5">Today</span>
</div>

<div className="flex flex-col items-start max-w-[85%] self-start gap-1">
<div className="glass-card p-4 rounded-2xl message-in text-on-surface">
<p className="font-body-md">Hey! Just got off stage. That energy was incredible tonight! 🎸 Did you catch the finale?</p>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant/40 ml-1">9:41 PM</span>
</div>

<div className="flex flex-col items-end max-w-[85%] self-end gap-1">
<div className="primary-gradient p-4 rounded-2xl message-out text-on-primary glow-primary">
<p className="font-body-md font-medium">It was insane! I've never seen a solo like that. You absolutely killed it! 🔥</p>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant/40 mr-1">9:42 PM</span>
</div>

<div className="flex flex-col items-start max-w-[85%] self-start gap-1">
<div className="glass-card p-1.5 rounded-2xl message-in overflow-hidden relative group">
<div className="rounded-xl overflow-hidden aspect-[4/5] relative">
<img className="w-full h-full object-cover" data-alt="A cinematic, low-angle shot from backstage looking out at a sea of glowing phone lights in a packed stadium. A male silhouette is partially visible in the foreground with vibrant purple and magenta stage lights casting dramatic shadows and a luminous atmosphere. The aesthetic is energetic, high-fidelity, and evokes the feeling of a premium VIP live music event." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDguSLqI4-9FUAYcCGUp475j1sITFOQp1ACKPsklsVH2DoGlIjjI5sYmdDYpucUp5-HMq1pAab2tuF3yL-KwA0O311wjy0wW8LXSbG5HZYEB6_cWwXrbis4_ysHerewSVf1bAFVSLglb-iIUMcfqLbWwFvV47UXOtPa9CDghHtKlJXF-3crP2Pty4K6FM6HqkJtnPAN81E4fXtNOpnXQXCYz7YFjQrj9ZVWCwJ_8Qa_F3becLUI5Qiz-wyQn_4CyyKT-jj6lulbCL8" />

<div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 text-white font-medium text-label-md">View Original</div>
</div>
</div>
<div className="p-3">
<p className="font-body-md text-on-surface">Behind the scenes view. You guys looked amazing from up here!</p>
</div>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant/40 ml-1">9:43 PM</span>
</div>

<div className="flex flex-col items-end max-w-[70%] self-end gap-1">
<div className="primary-gradient p-3 rounded-2xl message-out text-on-primary glow-primary flex items-center gap-3 w-full">
<button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">play_arrow</span>
</button>
<div className="flex-grow flex items-center gap-1 h-6">
<div className="wave-bar h-2"></div>
<div className="wave-bar h-4"></div>
<div className="wave-bar h-3"></div>
<div className="wave-bar h-5"></div>
<div className="wave-bar h-2"></div>
<div className="wave-bar h-4"></div>
<div className="wave-bar h-3"></div>
<div className="wave-bar h-5"></div>
<div className="wave-bar h-2"></div>
</div>
<span className="text-label-sm font-medium pr-1">0:14</span>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant/40 mr-1">9:45 PM</span>
</div>

<div className="flex items-center gap-2 self-start ml-1 mt-2">
<div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"></div>
<div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"></div>
<div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"></div>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full px-margin-mobile pb-8 pt-4 bg-surface/90 backdrop-blur-2xl border-t border-white/10 z-50">
<div className="flex items-center gap-3">
<button className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary hover:bg-white/10 transition-colors active:scale-90 duration-200">
<span className="material-symbols-outlined">add</span>
</button>
<div className="flex-grow relative">
<input className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body-md" placeholder="Type a message..." type="text" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-primary transition-colors">
<span className="material-symbols-outlined">sentiment_satisfied</span>
</button>
</div>
<button className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center text-on-primary glow-primary active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined">mic</span>
</button>
</div>
</div>
    </div>
  );
}
