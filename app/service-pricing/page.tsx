/* eslint-disable */
'use client';

import { useState } from 'react';

export default function ServicePricingPage() {
  const [activeService, setActiveService] = useState('video');
  const [prices, setPrices] = useState({ video: '500000', chat: '150000', meetgreet: '2000000' });
  const [durations, setDurations] = useState({ video: '15', chat: '30', meetgreet: '60' });
  const [workingHours, setWorkingHours] = useState({
    Mon: { enabled: true, start: '09:00', end: '18:00' },
    Tue: { enabled: true, start: '09:00', end: '18:00' },
    Wed: { enabled: true, start: '09:00', end: '18:00' },
    Thu: { enabled: true, start: '09:00', end: '18:00' },
    Fri: { enabled: true, start: '09:00', end: '17:00' },
    Sat: { enabled: false, start: '10:00', end: '14:00' },
    Sun: { enabled: false, start: '10:00', end: '14:00' },
  });

  const services = [
    { id: 'video', icon: 'videocam', label: 'Video Qo\'ng\'iroq', color: '#a078ff' },
    { id: 'chat', icon: 'forum', label: 'Chat', color: '#ffb0cd' },
    { id: 'meetgreet', icon: 'groups', label: 'Meet & Greet', color: '#4cd7f6' },
  ];

  const durationOptions = ['15', '30', '45', '60', '90'];

  const dayLabels: Record<string, string> = {
    Mon: 'Dushanba',
    Tue: 'Seshanba',
    Wed: 'Chorshanba',
    Thu: 'Payshanba',
    Fri: 'Juma',
    Sat: 'Shanba',
    Sun: 'Yakshanba',
  };

  const toggleDay = (day: string) => {
    setWorkingHours((prev) => ({
      ...prev,
      [day]: { ...prev[day as keyof typeof prev], enabled: !prev[day as keyof typeof prev].enabled },
    }));
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] pb-28" suppressHydrationWarning>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-5 h-16">
        <button className="active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#d0bcff]">arrow_back</span>
        </button>
        <span className="font-bold text-lg text-[#dae2fd] font-[Montserrat]">Narxlar va jadval</span>
        <div className="w-6" />
      </header>

      <main className="pt-20 px-5 flex flex-col gap-6">
        {/* Service Type Selector */}
        <div>
          <h3 className="text-sm font-semibold text-[#958ea0] mb-3">Xizmat turini tanlang</h3>
          <div className="flex gap-2">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActiveService(svc.id)}
                className={`flex-1 flex flex-col items-center gap-2 py-3 rounded-xl transition-all ${
                  activeService === svc.id
                    ? 'glass-card border-[1px]'
                    : 'bg-[#131b2e] border border-white/5'
                }`}
                style={activeService === svc.id ? { borderColor: `${svc.color}40`, boxShadow: `0 0 15px ${svc.color}20` } : {}}
              >
                <span className="material-symbols-outlined text-[24px]" style={{ color: svc.color }}>{svc.icon}</span>
                <span className={`text-xs ${activeService === svc.id ? 'text-[#dae2fd]' : 'text-[#958ea0]'}`}>{svc.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Input */}
        <div className="glass-card rounded-2xl p-5">
          <h3 className="text-base font-semibold text-[#dae2fd] mb-4">Narx belgilash</h3>
          {services.map((svc) => (
            <div key={svc.id} className={`mb-4 last:mb-0 ${activeService !== svc.id && activeService !== 'all' ? 'opacity-50' : ''}`}>
              <label className="text-sm text-[#958ea0] mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]" style={{ color: svc.color }}>{svc.icon}</span>
                {svc.label}
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={prices[svc.id as keyof typeof prices]}
                    onChange={(e) => setPrices({ ...prices, [svc.id]: e.target.value.replace(/\D/g, '') })}
                    className="w-full bg-[#060e20] border border-white/10 rounded-xl px-4 py-3 text-[#dae2fd] text-base outline-none focus:border-[#a078ff]/50 transition-colors"
                    placeholder="Narxni kiriting"
                  />
                </div>
                <span className="text-sm text-[#958ea0] font-medium w-12">so&apos;m</span>
              </div>
            </div>
          ))}
        </div>

        {/* Duration Selector */}
        <div className="glass-card rounded-2xl p-5">
          <h3 className="text-base font-semibold text-[#dae2fd] mb-4">Davomiylik</h3>
          {services.map((svc) => (
            <div key={svc.id} className="mb-4 last:mb-0">
              <label className="text-sm text-[#958ea0] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]" style={{ color: svc.color }}>{svc.icon}</span>
                {svc.label}
              </label>
              <div className="flex gap-2">
                {durationOptions.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setDurations({ ...durations, [svc.id]: dur })}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                      durations[svc.id as keyof typeof durations] === dur
                        ? 'bg-[#a078ff]/20 text-[#a078ff] border border-[#a078ff]/30'
                        : 'bg-[#060e20] text-[#958ea0] border border-white/5'
                    }`}
                  >
                    {dur} min
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Availability Calendar Placeholder */}
        <div className="glass-card rounded-2xl p-5">
          <h3 className="text-base font-semibold text-[#dae2fd] mb-4">Mavjudlik jadvali</h3>

          {/* Month Selector */}
          <div className="flex items-center justify-between mb-4">
            <button className="active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[#958ea0]">chevron_left</span>
            </button>
            <span className="text-sm font-semibold text-[#dae2fd]">Iyun 2026</span>
            <button className="active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[#958ea0]">chevron_right</span>
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'].map((d) => (
              <div key={d} className="text-center text-xs text-[#958ea0] py-1">{d}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for first day offset */}
            {[null, null, null].map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
              const isSelected = [5, 6, 12, 13, 19, 20, 26, 27].includes(day);
              const isToday = day === 21;
              return (
                <button
                  key={day}
                  className={`aspect-square rounded-lg text-sm flex items-center justify-center transition-all ${
                    isToday
                      ? 'bg-[#a078ff] text-white font-bold shadow-[0_0_10px_rgba(160,120,255,0.4)]'
                      : isSelected
                      ? 'bg-[#a078ff]/15 text-[#d0bcff]'
                      : 'text-[#cbc3d7] hover:bg-white/5'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Working Hours */}
        <div className="glass-card rounded-2xl p-5">
          <h3 className="text-base font-semibold text-[#dae2fd] mb-4">Ish soatlari</h3>
          <div className="flex flex-col gap-3">
            {Object.entries(workingHours).map(([day, config]) => (
              <div key={day} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  {/* Toggle */}
                  <button
                    onClick={() => toggleDay(day)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${
                      config.enabled ? 'bg-[#a078ff]' : 'bg-white/10'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        config.enabled ? 'translate-x-[22px]' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                  <span className={`text-sm w-24 ${config.enabled ? 'text-[#dae2fd]' : 'text-[#958ea0]'}`}>
                    {dayLabels[day]}
                  </span>
                </div>
                {config.enabled && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#cbc3d7] bg-[#060e20] px-3 py-1.5 rounded-lg border border-white/10">{config.start}</span>
                    <span className="text-xs text-[#958ea0]">-</span>
                    <span className="text-sm text-[#cbc3d7] bg-[#060e20] px-3 py-1.5 rounded-lg border border-white/10">{config.end}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fixed Bottom Save */}
      <div className="fixed bottom-0 w-full bg-[#0b1326]/90 backdrop-blur-2xl border-t border-white/10 px-5 py-4 z-50">
        <button className="w-full py-4 rounded-full gradient-btn neon-glow-button text-base font-bold text-white active:scale-95 transition-all">
          Saqlash
        </button>
      </div>
    </div>
  );
}
