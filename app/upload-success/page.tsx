/* eslint-disable */
'use client';

import { useState } from 'react';

export default function UploadSuccessPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col items-center px-5 pt-16 pb-8" suppressHydrationWarning>
      {/* Ambient glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(76,215,246,0.12)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

      {/* Success Checkmark */}
      <div className="relative mb-6 mt-8">
        <div className="absolute inset-0 w-28 h-28 rounded-full border border-[#4cd7f6]/20 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#4cd7f6] to-[#a078ff] flex items-center justify-center shadow-[0_0_40px_rgba(76,215,246,0.4)]">
          <span
            className="material-symbols-outlined text-white text-[48px]"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 600", animation: 'check-bounce 0.6s ease-out 0.3s both' }}
          >
            cloud_done
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-extrabold font-[Montserrat] text-center bg-gradient-to-r from-[#4cd7f6] to-[#d0bcff] bg-clip-text text-transparent mb-2 animate-fade-in">
        Kontent muvaffaqiyatli yuklandi!
      </h1>
      <p className="text-sm text-[#958ea0] text-center mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
        Sizning kontentingiz muvaffaqiyatli joylashtirildi
      </p>

      {/* Content Preview */}
      <div
        className="glass-card rounded-2xl overflow-hidden w-full max-w-sm mb-6 animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="relative aspect-video bg-[#131b2e]">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes"
            alt="Uploaded content preview"
          />
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md flex items-center gap-1">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="text-[10px] text-white">Yuklandi</span>
          </div>
          <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md">
            <span className="text-[10px] text-white">4:02</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-[#dae2fd]">Eksklyuziv sahna ortidagi video</h3>
          <p className="text-xs text-[#958ea0] mt-1">Yuklangan: 21 iyun, 2026 — 14:35</p>
        </div>
      </div>

      {/* Share Options */}
      <div
        className="w-full max-w-sm mb-6 animate-fade-in"
        style={{ animationDelay: '0.45s' }}
      >
        <h3 className="text-sm font-semibold text-[#958ea0] mb-3">Ulashish</h3>
        <div className="flex flex-col gap-3">
          {/* Copy Link */}
          <button
            onClick={handleCopy}
            className={`glass-card rounded-xl p-4 flex items-center justify-between active:scale-[0.98] transition-all ${
              copied ? 'border-green-500/30' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#a078ff] text-[22px]">{copied ? 'check' : 'link'}</span>
              <span className="text-sm text-[#dae2fd]">{copied ? 'Nusxa olindi!' : 'Havolani nusxalash'}</span>
            </div>
            <span className="material-symbols-outlined text-[#958ea0] text-[18px]">content_copy</span>
          </button>

          {/* Social Share */}
          <div className="flex gap-3">
            {[
              { icon: 'telegram', label: 'Telegram', color: '#4cd7f6' },
              { icon: 'share', label: 'Instagram', color: '#ffb0cd' },
              { icon: 'public', label: 'Boshqa', color: '#d0bcff' },
            ].map((social) => (
              <button
                key={social.label}
                className="flex-1 glass-card rounded-xl p-3 flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[22px]" style={{ color: social.color }}>
                  {social.icon === 'telegram' ? 'send' : social.icon}
                </span>
                <span className="text-[10px] text-[#958ea0]">{social.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Preview */}
      <div
        className="glass-card rounded-2xl p-4 w-full max-w-sm mb-8 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <div className="flex justify-between">
          {[
            { label: 'Ko\'rishlar', value: '0', icon: 'visibility' },
            { label: 'Yoqtirishlar', value: '0', icon: 'favorite' },
            { label: 'Izohlar', value: '0', icon: 'chat_bubble' },
            { label: 'Ulashishlar', value: '0', icon: 'share' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[#958ea0] text-[18px]">{stat.icon}</span>
              <span className="text-lg font-bold text-[#dae2fd]">{stat.value}</span>
              <span className="text-[9px] text-[#958ea0]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm flex flex-col gap-3 animate-fade-in" style={{ animationDelay: '0.75s' }}>
        <button className="w-full py-4 rounded-full gradient-btn neon-glow-button text-base font-bold text-white active:scale-95 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          Yangi kontent yuklash
        </button>
        <button className="w-full py-3.5 rounded-full border border-white/20 text-sm font-semibold text-[#cbc3d7] active:scale-95 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">person</span>
          Profilga qaytish
        </button>
      </div>

      <style jsx>{`
        @keyframes check-bounce {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
