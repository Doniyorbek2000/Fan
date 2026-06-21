/* eslint-disable */
'use client';

export default function VerificationSuccessPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col items-center justify-center px-5" suppressHydrationWarning>
      {/* Ambient glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(160,120,255,0.15)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

      {/* Checkmark Animation */}
      <div className="relative mb-8">
        {/* Outer ring pulse */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-[#a078ff]/30 animate-ping" />
        <div className="absolute inset-0 w-32 h-32 rounded-full border border-[#a078ff]/20" style={{ animation: 'pulse-ring 2s ease-out infinite 0.5s' }} />

        {/* Main circle */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#a078ff] to-[#ffb0cd] flex items-center justify-center shadow-[0_0_40px_rgba(160,120,255,0.5)]">
          <span
            className="material-symbols-outlined text-white text-[56px]"
            style={{
              animation: 'check-draw 0.6s ease-out 0.3s both',
              fontVariationSettings: "'FILL' 1, 'wght' 600",
            }}
          >
            check
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-extrabold font-[Montserrat] bg-gradient-to-r from-[#d0bcff] to-[#ffb0cd] bg-clip-text text-transparent mb-3 text-center animate-fade-in">
        Tabriklaymiz!
      </h1>

      {/* Message */}
      <p className="text-base text-[#cbc3d7] text-center mb-6 max-w-xs animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Sizning profilingiz muvaffaqiyatli tasdiqlandi
      </p>

      {/* Verified Badge Display */}
      <div
        className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3 mb-10 animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="material-symbols-outlined text-[#4cd7f6] text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          verified
        </span>
        <div>
          <p className="text-sm font-semibold text-[#dae2fd]">Tasdiqlangan profil</p>
          <p className="text-xs text-[#958ea0]">Sizning hisobingiz rasmiy tasdiqlandi</p>
        </div>
      </div>

      {/* Benefits */}
      <div className="w-full max-w-sm flex flex-col gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        {[
          { icon: 'shield', text: 'Ishonchli profil belgisi' },
          { icon: 'trending_up', text: 'Qidiruv natijalarida yuqori o\'rin' },
          { icon: 'star', text: 'Premium xususiyatlarga kirish' },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-3 px-4 py-3 bg-[#131b2e] rounded-xl border border-white/5">
            <span className="material-symbols-outlined text-[#a078ff] text-[20px]">{item.icon}</span>
            <span className="text-sm text-[#cbc3d7]">{item.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="w-full max-w-sm py-4 rounded-full gradient-btn neon-glow-button text-base font-bold text-white active:scale-95 transition-all animate-fade-in" style={{ animationDelay: '0.8s' }}>
        Bosh sahifaga qaytish
      </button>

      {/* Inline Keyframes */}
      <style jsx>{`
        @keyframes check-draw {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-45deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
