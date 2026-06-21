/* eslint-disable */
'use client';

import { useState } from 'react';

export default function MediaEditorPage() {
  const [brightness, setBrightness] = useState(50);
  const [contrast, setContrast] = useState(50);
  const [saturation, setSaturation] = useState(50);
  const [activeFilter, setActiveFilter] = useState('original');
  const [activeTool, setActiveTool] = useState<'filters' | 'adjust' | 'crop' | 'text'>('filters');
  const [rotation, setRotation] = useState(0);

  const filters = [
    { id: 'original', name: 'Original' },
    { id: 'vivid', name: 'Vivid' },
    { id: 'warm', name: 'Issiq' },
    { id: 'cool', name: 'Sovuq' },
    { id: 'noir', name: 'Noir' },
    { id: 'vintage', name: 'Vintage' },
    { id: 'neon', name: 'Neon' },
  ];

  const getFilterStyle = () => {
    const b = brightness / 50;
    const c = contrast / 50;
    const s = saturation / 50;
    let extra = '';
    if (activeFilter === 'vivid') extra = 'saturate(1.5)';
    if (activeFilter === 'warm') extra = 'sepia(0.3)';
    if (activeFilter === 'cool') extra = 'hue-rotate(20deg)';
    if (activeFilter === 'noir') extra = 'grayscale(1)';
    if (activeFilter === 'vintage') extra = 'sepia(0.5) contrast(0.9)';
    if (activeFilter === 'neon') extra = 'saturate(2) hue-rotate(-10deg)';
    return {
      filter: `brightness(${b}) contrast(${c}) saturate(${s}) ${extra}`,
      transform: `rotate(${rotation}deg)`,
    };
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col" suppressHydrationWarning>
      {/* Header */}
      <header className="flex items-center justify-between px-5 h-16 border-b border-white/10 bg-[#0b1326]/80 backdrop-blur-xl">
        <button className="text-sm text-[#958ea0] active:scale-95 transition-transform">
          Bekor qilish
        </button>
        <span className="font-bold text-lg bg-gradient-to-r from-[#d0bcff] to-[#ffb0cd] bg-clip-text text-transparent font-[Montserrat]">Tahrirlash</span>
        <button className="text-sm font-semibold text-[#a078ff] active:scale-95 transition-transform">
          Saqlash
        </button>
      </header>

      {/* Preview Area */}
      <div className="flex-1 flex items-center justify-center bg-[#060e20] relative overflow-hidden min-h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            className="max-w-full max-h-full rounded-lg object-contain transition-all duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes"
            alt="Editing preview"
            style={getFilterStyle()}
          />
        </div>
      </div>

      {/* Tool Tabs */}
      <div className="bg-[#131b2e] border-t border-white/10">
        <div className="flex border-b border-white/5">
          {([
            { id: 'filters', icon: 'auto_awesome', label: 'Filtrlar' },
            { id: 'adjust', icon: 'tune', label: 'Sozlash' },
            { id: 'crop', icon: 'crop', label: 'Kesish' },
            { id: 'text', icon: 'title', label: 'Matn' },
          ] as const).map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                activeTool === tool.id ? 'text-[#a078ff]' : 'text-[#958ea0]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{tool.icon}</span>
              <span className="text-[10px]">{tool.label}</span>
            </button>
          ))}
        </div>

        {/* Filters Panel */}
        {activeTool === 'filters' && (
          <div className="p-4 animate-fade-in">
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex flex-col items-center gap-2 flex-shrink-0 ${
                    activeFilter === filter.id ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeFilter === filter.id ? 'border-[#a078ff] shadow-[0_0_10px_rgba(160,120,255,0.4)]' : 'border-white/10'
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes"
                      alt={filter.name}
                    />
                  </div>
                  <span className="text-[11px] text-[#cbc3d7]">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Adjust Panel */}
        {activeTool === 'adjust' && (
          <div className="p-5 flex flex-col gap-5 animate-fade-in">
            {[
              { label: 'Yorqinlik', icon: 'brightness_6', value: brightness, setter: setBrightness },
              { label: 'Kontrast', icon: 'contrast', value: contrast, setter: setContrast },
              { label: 'To\'yinganlik', icon: 'palette', value: saturation, setter: setSaturation },
            ].map((slider) => (
              <div key={slider.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#a078ff]">{slider.icon}</span>
                    <span className="text-sm text-[#cbc3d7]">{slider.label}</span>
                  </div>
                  <span className="text-sm text-[#958ea0]">{slider.value}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={slider.value}
                  onChange={(e) => slider.setter(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#a078ff]"
                  style={{
                    background: `linear-gradient(to right, #a078ff 0%, #a078ff ${slider.value}%, rgba(255,255,255,0.1) ${slider.value}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Crop Panel */}
        {activeTool === 'crop' && (
          <div className="p-5 animate-fade-in">
            <div className="flex justify-center gap-6">
              {[
                { icon: 'rotate_left', label: 'Chapga', action: () => setRotation((r) => r - 90) },
                { icon: 'rotate_right', label: 'O\'ngga', action: () => setRotation((r) => r + 90) },
                { icon: 'crop_square', label: '1:1', action: () => {} },
                { icon: 'crop_16_9', label: '16:9', action: () => {} },
                { icon: 'crop_portrait', label: '4:5', action: () => {} },
                { icon: 'flip', label: 'Aks', action: () => {} },
              ].map((tool) => (
                <button
                  key={tool.label}
                  onClick={tool.action}
                  className="flex flex-col items-center gap-1.5 text-[#958ea0] active:text-[#a078ff] transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px]">{tool.icon}</span>
                  <span className="text-[10px]">{tool.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Text Panel */}
        {activeTool === 'text' && (
          <div className="p-5 flex flex-col gap-4 animate-fade-in">
            <button className="glass-card rounded-xl p-4 flex items-center gap-3 active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-[#a078ff]">add</span>
              <span className="text-sm text-[#cbc3d7]">Matn qo&apos;shish</span>
            </button>
            <div className="flex gap-3">
              {['Montserrat', 'Inter', 'Serif'].map((font) => (
                <button
                  key={font}
                  className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-[#cbc3d7] active:border-[#a078ff] transition-colors"
                  style={{ fontFamily: font }}
                >
                  {font}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {['#ffffff', '#d0bcff', '#ffb0cd', '#4cd7f6', '#a078ff', '#ff6b6b'].map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-white/20 active:scale-90 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="px-5 py-4 bg-[#0b1326] border-t border-white/10 flex gap-3">
        <button className="flex-1 py-3.5 rounded-full border border-white/20 text-sm font-semibold text-[#958ea0] active:scale-95 transition-all">
          Bekor qilish
        </button>
        <button className="flex-1 py-3.5 rounded-full gradient-btn neon-glow-button text-sm font-bold text-white active:scale-95 transition-all">
          Saqlash
        </button>
      </div>
    </div>
  );
}
