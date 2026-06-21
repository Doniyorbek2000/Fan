/* eslint-disable */
'use client';

import { useState } from 'react';

export default function VerificationTrackingPage() {
  const [currentStep] = useState(2);

  const steps = [
    { id: 1, title: 'Yuborildi', desc: 'Arizangiz qabul qilindi', icon: 'upload_file', date: '18 iyun, 2026' },
    { id: 2, title: 'Ko\'rib chiqilmoqda', desc: 'Hujjatlar tekshirilmoqda', icon: 'hourglass_top', date: '19 iyun, 2026' },
    { id: 3, title: 'Identifikatsiya', desc: 'Shaxsiy ma\'lumotlar tasdiqlash', icon: 'badge', date: 'Kutilmoqda' },
    { id: 4, title: 'Tasdiqlandi', desc: 'Profil rasmiy tasdiqlangan', icon: 'verified', date: 'Kutilmoqda' },
  ];

  const documents = [
    { name: 'Passport nusxasi', status: 'approved', icon: 'badge' },
    { name: 'Selfie rasm', status: 'approved', icon: 'face' },
    { name: 'Manzil tasdiqlash', status: 'pending', icon: 'location_on' },
    { name: 'Ijtimoiy tarmoq havolasi', status: 'pending', icon: 'link' },
  ];

  const getStepState = (stepId: number) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'active';
    return 'pending';
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] pb-8" suppressHydrationWarning>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-5 h-16">
        <button className="active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#d0bcff]">arrow_back</span>
        </button>
        <span className="font-bold text-lg text-[#dae2fd] font-[Montserrat]">Tasdiqlash holati</span>
        <div className="w-6" />
      </header>

      <main className="pt-20 px-5 flex flex-col gap-6">
        {/* Status Banner */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-[#a078ff]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#a078ff] text-[28px] animate-pulse">hourglass_top</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#dae2fd]">Ko&apos;rib chiqilmoqda</h2>
              <p className="text-sm text-[#958ea0]">Arizangiz ko&apos;rib chiqilmoqda</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#a078ff]/10 rounded-xl px-4 py-3">
            <span className="material-symbols-outlined text-[#a078ff] text-[18px]">schedule</span>
            <span className="text-sm text-[#cbc3d7]">Taxminiy kutish vaqti: <strong className="text-[#d0bcff]">24-48 soat</strong></span>
          </div>
        </div>

        {/* Progress Stepper */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const state = getStepState(step.id);
            return (
              <div key={step.id} className="flex gap-4 relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[22px] top-[48px] w-[2px] h-[calc(100%-8px)]">
                    <div
                      className={`w-full h-full ${
                        state === 'completed' ? 'bg-[#a078ff]' : 'bg-white/10'
                      }`}
                    />
                  </div>
                )}

                {/* Step circle */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 z-10 transition-all ${
                    state === 'completed'
                      ? 'bg-[#a078ff] shadow-[0_0_15px_rgba(160,120,255,0.4)]'
                      : state === 'active'
                      ? 'bg-[#a078ff]/20 border-2 border-[#a078ff] shadow-[0_0_15px_rgba(160,120,255,0.3)]'
                      : 'bg-[#131b2e] border border-white/10'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      state === 'completed'
                        ? 'text-white'
                        : state === 'active'
                        ? 'text-[#a078ff]'
                        : 'text-[#958ea0]'
                    }`}
                    style={state === 'completed' ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {state === 'completed' ? 'check_circle' : step.icon}
                  </span>
                </div>

                {/* Step content */}
                <div className={`flex-1 pb-8 ${state === 'pending' ? 'opacity-50' : ''}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className={`text-base font-semibold ${
                        state === 'active' ? 'text-[#a078ff]' : 'text-[#dae2fd]'
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-sm text-[#958ea0] mt-0.5">{step.desc}</p>
                    </div>
                    <span className="text-xs text-[#958ea0]">{step.date}</span>
                  </div>
                  {state === 'active' && (
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a078ff] animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a078ff] animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a078ff] animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <span className="text-xs text-[#a078ff]">Jarayonda...</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Document Checklist */}
        <div>
          <h3 className="text-lg font-bold text-[#d0bcff] font-[Montserrat] mb-4">Hujjatlar holati</h3>
          <div className="flex flex-col gap-3">
            {documents.map((doc) => (
              <div key={doc.name} className="glass-card rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-[#958ea0]">{doc.icon}</span>
                  <span className="text-sm text-[#dae2fd]">{doc.name}</span>
                </div>
                {doc.status === 'approved' ? (
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-green-400 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-xs text-green-400">Tasdiqlandi</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#ffb0cd] text-[18px]">pending</span>
                    <span className="text-xs text-[#ffb0cd]">Kutilmoqda</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-[#131b2e] rounded-2xl p-5 border border-white/5">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[22px] mt-0.5">info</span>
            <div>
              <p className="text-sm text-[#cbc3d7] leading-relaxed">
                Tasdiqlash jarayoni odatda 24-48 soat ichida yakunlanadi. Agar qo&apos;shimcha hujjatlar kerak bo&apos;lsa, sizga xabar beramiz.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <button className="w-full py-4 rounded-full border border-[#a078ff]/30 text-sm font-semibold text-[#a078ff] flex items-center justify-center gap-2 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[18px]">support_agent</span>
          Qo&apos;llab-quvvatlash xizmati bilan bog&apos;lanish
        </button>
      </main>
    </div>
  );
}
