'use client';
import { useState } from 'react';

interface Config {
  platformFee: number;
  minWithdrawal: number;
  maxBookingAdvanceDays: number;
  maintenanceMode: boolean;
  newRegistrations: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  autoVerify: boolean;
  minVideoCallPrice: number;
  minChatPrice: number;
  minMeetGreetPrice: number;
}

export default function SettingsPage() {
  const [config, setConfig] = useState<Config>({
    platformFee: 15,
    minWithdrawal: 100000,
    maxBookingAdvanceDays: 30,
    maintenanceMode: false,
    newRegistrations: true,
    emailNotifications: true,
    smsNotifications: true,
    autoVerify: false,
    minVideoCallPrice: 100000,
    minChatPrice: 30000,
    minMeetGreetPrice: 300000,
  });

  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
    return (
      <button
        onClick={() => onChange(!value)}
        className={`relative w-11 h-6 rounded-full transition-colors ${value ? 'bg-[#a078ff]' : 'bg-white/20'}`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    );
  }

  return (
    <div className="p-8 space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">Sozlamalar</h1>
        <p className="text-[#958ea0] text-sm mt-1">Platforma konfiguratsiyasi</p>
      </div>

      <div className="glass-card rounded-2xl divide-y divide-white/10">
        <div className="p-6">
          <h2 className="text-base font-semibold text-[#dae2fd] mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#a078ff]">payments</span>
            Moliyaviy sozlamalar
          </h2>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#dae2fd] text-sm font-medium">Platforma komissiyasi (%)</p>
                <p className="text-[#958ea0] text-xs">Har bir muvaffaqiyatli buyurtmadan olinadigan foiz</p>
              </div>
              <input
                type="number"
                min={5}
                max={30}
                value={config.platformFee}
                onChange={(e) => setConfig((c) => ({ ...c, platformFee: Number(e.target.value) }))}
                className="w-24 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[#dae2fd] text-sm text-center focus:outline-none focus:border-[#a078ff]/50"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#dae2fd] text-sm font-medium">Minimal pul chiqarish (so'm)</p>
                <p className="text-[#958ea0] text-xs">Mashhurlar uchun minimal chiqarish miqdori</p>
              </div>
              <input
                type="number"
                step={10000}
                value={config.minWithdrawal}
                onChange={(e) => setConfig((c) => ({ ...c, minWithdrawal: Number(e.target.value) }))}
                className="w-32 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[#dae2fd] text-sm text-center focus:outline-none focus:border-[#a078ff]/50"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#dae2fd] text-sm font-medium">Oldindan bron (kun)</p>
                <p className="text-[#958ea0] text-xs">Qancha oldin bron qilish mumkin</p>
              </div>
              <input
                type="number"
                min={1}
                max={90}
                value={config.maxBookingAdvanceDays}
                onChange={(e) => setConfig((c) => ({ ...c, maxBookingAdvanceDays: Number(e.target.value) }))}
                className="w-24 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[#dae2fd] text-sm text-center focus:outline-none focus:border-[#a078ff]/50"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-base font-semibold text-[#dae2fd] mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb0cd]">price_change</span>
            Minimal narxlar (so'm)
          </h2>
          <div className="space-y-5">
            {[
              { label: 'Video Call', key: 'minVideoCallPrice' as keyof Config },
              { label: 'Chat', key: 'minChatPrice' as keyof Config },
              { label: 'Meet & Greet', key: 'minMeetGreetPrice' as keyof Config },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <p className="text-[#dae2fd] text-sm font-medium">{item.label}</p>
                <input
                  type="number"
                  step={10000}
                  value={config[item.key] as number}
                  onChange={(e) => setConfig((c) => ({ ...c, [item.key]: Number(e.target.value) }))}
                  className="w-36 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[#dae2fd] text-sm text-center focus:outline-none focus:border-[#a078ff]/50"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-base font-semibold text-[#dae2fd] mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6]">toggle_on</span>
            Platforma holati
          </h2>
          <div className="space-y-5">
            {[
              { label: 'Texnik ishlar rejimi', desc: 'Platforma vaqtincha o\'chiriladi', key: 'maintenanceMode' as keyof Config },
              { label: 'Yangi ro\'yxatdan o\'tish', desc: 'Yangi foydalanuvchilar ro\'yxatdan o\'ta oladi', key: 'newRegistrations' as keyof Config },
              { label: 'Avtomatik tasdiqlash', desc: 'Mashhurlarni avtomatik tasdiqlash', key: 'autoVerify' as keyof Config },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="text-[#dae2fd] text-sm font-medium">{item.label}</p>
                  <p className="text-[#958ea0] text-xs">{item.desc}</p>
                </div>
                <Toggle
                  value={config[item.key] as boolean}
                  onChange={(v) => setConfig((c) => ({ ...c, [item.key]: v }))}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-base font-semibold text-[#dae2fd] mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400">notifications</span>
            Bildirishnomalar
          </h2>
          <div className="space-y-5">
            {[
              { label: 'Email bildirishnomalar', desc: 'Foydalanuvchilarga email yuborish', key: 'emailNotifications' as keyof Config },
              { label: 'SMS bildirishnomalar', desc: 'Foydalanuvchilarga SMS yuborish', key: 'smsNotifications' as keyof Config },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="text-[#dae2fd] text-sm font-medium">{item.label}</p>
                  <p className="text-[#958ea0] text-xs">{item.desc}</p>
                </div>
                <Toggle
                  value={config[item.key] as boolean}
                  onChange={(v) => setConfig((c) => ({ ...c, [item.key]: v }))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="gradient-btn px-8 py-3 rounded-xl text-white font-semibold transition-all"
        >
          {saved ? '✓ Saqlandi' : 'Saqlash'}
        </button>
        <p className="text-[#958ea0] text-sm">
          O'zgarishlar darhol kuchga kiradi
        </p>
      </div>
    </div>
  );
}
