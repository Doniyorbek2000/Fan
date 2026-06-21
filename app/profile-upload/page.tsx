/* eslint-disable */
'use client';

import { useState } from 'react';

export default function ProfileUploadPage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  const handleChoosePhoto = () => {
    setHasImage(true);
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col" suppressHydrationWarning>
      {/* Header */}
      <header className="flex items-center justify-between px-5 h-16 border-b border-white/10 bg-[#0b1326]/80 backdrop-blur-xl">
        <button className="active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#d0bcff]">arrow_back</span>
        </button>
        <span className="font-bold text-lg text-[#dae2fd] font-[Montserrat]">Profil rasmi</span>
        <div className="w-6" />
      </header>

      <div className="flex-1 flex flex-col items-center px-5 pt-10">
        {/* Current Avatar Preview */}
        <div className="relative mb-8">
          {/* Outer decorative ring */}
          <div className="absolute -inset-3 rounded-full border border-[#a078ff]/20" />
          <div className="absolute -inset-5 rounded-full border border-[#a078ff]/10" />

          {/* Main avatar circle */}
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#a078ff] shadow-[0_0_30px_rgba(160,120,255,0.4)] relative">
            {hasImage ? (
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0iSoDTTav6mLvLHwxFgQBsMKt6ktku-ZFrcPhSYcbz-uRQTQfMVVRqa28c8dAIlecULFKHbUfkGEtHlkWKsV4-Yzy9NdNQfOe03wZY2EHOqdQlzH5o0Dx5t3mzOqKvqA1SSy0bY69Q8NB6xPJdd3qWGlH3Dd_ON6yR_03EGNy3dkfIdSpcdPR9ZmbOE1B0aWZLh_Iyru3rEolKV_hm-3keaI74H-dqDteS4sSHsHmWLEXFqf-oW987QI8L0NJls_pyiI8VUYT7sc"
                alt="Profile photo"
              />
            ) : (
              <div className="w-full h-full bg-[#131b2e] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#958ea0] text-[64px]">person</span>
              </div>
            )}

            {/* Crop overlay mockup */}
            {hasImage && isUploading && (
              <div className="absolute inset-0 border-[3px] border-dashed border-white/40 rounded-full pointer-events-none">
                <div className="absolute inset-0 bg-black/20 rounded-full" />
              </div>
            )}
          </div>

          {/* Camera badge */}
          <button
            onClick={handleChoosePhoto}
            className="absolute bottom-1 right-1 w-12 h-12 rounded-full gradient-btn flex items-center justify-center shadow-[0_4px_14px_rgba(160,120,255,0.39)] active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-white text-[22px]">photo_camera</span>
          </button>
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="w-full max-w-xs mb-6 animate-fade-in">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-[#cbc3d7]">Yuklanmoqda...</span>
              <span className="text-sm text-[#a078ff]">{uploadProgress}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#a078ff] to-[#ffb0cd] transition-all duration-100"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="glass-card rounded-2xl p-5 w-full max-w-sm mb-6">
          <h3 className="text-base font-semibold text-[#dae2fd] mb-3">Rasm talablari</h3>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: 'aspect_ratio', text: 'Minimal 400x400 piksel' },
              { icon: 'photo_size_select_large', text: 'Maksimal 10MB hajm' },
              { icon: 'face', text: 'Yuzingiz aniq ko\'rinishi kerak' },
              { icon: 'image', text: 'JPG, PNG yoki WebP formati' },
            ].map((req) => (
              <div key={req.text} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#a078ff] text-[18px]">{req.icon}</span>
                <span className="text-sm text-[#cbc3d7]">{req.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Choose Photo Button */}
        {!hasImage && (
          <button
            onClick={handleChoosePhoto}
            className="w-full max-w-sm py-4 rounded-full gradient-btn neon-glow-button text-base font-bold text-white active:scale-95 transition-all mb-4"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
              Rasm tanlash
            </span>
          </button>
        )}

        {/* Save Photo Button (shown after upload) */}
        {hasImage && !isUploading && uploadProgress === 100 && (
          <div className="w-full max-w-sm flex flex-col gap-3 animate-fade-in">
            <button className="w-full py-4 rounded-full gradient-btn neon-glow-button text-base font-bold text-white active:scale-95 transition-all">
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">check</span>
                Rasmni saqlash
              </span>
            </button>
            <button
              onClick={() => { setHasImage(false); setUploadProgress(0); }}
              className="w-full py-3.5 rounded-full border border-white/20 text-sm font-semibold text-[#958ea0] active:scale-95 transition-all"
            >
              Boshqa rasm tanlash
            </button>
          </div>
        )}

        {/* Recent Photos */}
        <div className="w-full max-w-sm mt-8 mb-8">
          <h3 className="text-sm font-semibold text-[#958ea0] mb-3">Oxirgi rasmlar</h3>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <button
                key={i}
                onClick={handleChoosePhoto}
                className="aspect-square rounded-xl bg-[#131b2e] border border-white/5 overflow-hidden active:scale-95 transition-transform"
              >
                <div className="w-full h-full bg-[#171f33] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#494454] text-[24px]">image</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
