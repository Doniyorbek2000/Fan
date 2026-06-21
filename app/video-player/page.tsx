/* eslint-disable */
'use client';

import { useState } from 'react';

export default function VideoPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(75);
  const [showQuality, setShowQuality] = useState(false);
  const [quality, setQuality] = useState('720p');
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const relatedVideos = [
    { title: 'Konsert sahna ortida', celebrity: 'Sardor M.', views: '245K', duration: '12:34' },
    { title: 'Yangi qo\'shiq premyerasi', celebrity: 'Ozoda N.', views: '1.2M', duration: '4:21' },
    { title: 'Eksklyuziv intervyu', celebrity: 'Jasur U.', views: '89K', duration: '18:45' },
    { title: 'Fan meeting highlights', celebrity: 'Shahzoda', views: '567K', duration: '8:12' },
  ];

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]" suppressHydrationWarning>
      {/* Video Area */}
      <div className="relative w-full aspect-video bg-[#060e20] flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes"
          alt="Video thumbnail"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Play Button Overlay */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center active:scale-90 transition-transform border border-white/30"
        >
          <span className="material-symbols-outlined text-white text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>

        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
          <button className="active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-white">arrow_back</span>
          </button>
          <div className="flex gap-3">
            <button
              onClick={() => setShowQuality(!showQuality)}
              className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs text-white border border-white/20"
            >
              {quality}
            </button>
            <button className="active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-white">picture_in_picture_alt</span>
            </button>
            <button className="active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-white">fullscreen</span>
            </button>
          </div>
        </div>

        {/* Quality Selector Dropdown */}
        {showQuality && (
          <div className="absolute top-14 right-4 z-20 glass-card rounded-xl p-2 min-w-[120px] animate-fade-in">
            {['1080p', '720p', '480p', '360p'].map((q) => (
              <button
                key={q}
                onClick={() => { setQuality(q); setShowQuality(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  quality === q ? 'text-[#a078ff] bg-[#a078ff]/10' : 'text-[#cbc3d7] hover:bg-white/5'
                }`}
              >
                {q} {q === '1080p' && <span className="text-[10px] text-[#ffb0cd]">HD</span>}
              </button>
            ))}
          </div>
        )}

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          {/* Seek Bar */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-white/70 w-10">1:24</span>
            <div className="flex-1 relative h-1.5 bg-white/20 rounded-full cursor-pointer" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setProgress(((e.clientX - rect.left) / rect.width) * 100);
            }}>
              <div className="absolute h-full rounded-full bg-gradient-to-r from-[#a078ff] to-[#ffb0cd]" style={{ width: `${progress}%` }} />
              <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_6px_rgba(160,120,255,0.6)]" style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }} />
            </div>
            <span className="text-xs text-white/70 w-10 text-right">4:02</span>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlaying(!isPlaying)} className="active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-white text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
              <button className="active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-white text-[24px]">skip_next</span>
              </button>
              <button onClick={() => setIsMuted(!isMuted)} className="active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-white text-[24px]">
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
              </button>
              <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: isMuted ? '0%' : `${volume}%` }} />
              </div>
            </div>
            <div className="flex gap-3">
              <button className="active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-white text-[22px]">picture_in_picture_alt</span>
              </button>
              <button className="active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-white text-[22px]">fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="px-5 py-4">
        <h1 className="text-xl font-bold text-[#dae2fd] font-[Montserrat]">
          Eksklyuziv sahna ortidagi video
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <img
            className="w-10 h-10 rounded-full border border-[#a078ff]/30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0iSoDTTav6mLvLHwxFgQBsMKt6ktku-ZFrcPhSYcbz-uRQTQfMVVRqa28c8dAIlecULFKHbUfkGEtHlkWKsV4-Yzy9NdNQfOe03wZY2EHOqdQlzH5o0Dx5t3mzOqKvqA1SSy0bY69Q8NB6xPJdd3qWGlH3Dd_ON6yR_03EGNy3dkfIdSpcdPR9ZmbOE1B0aWZLh_Iyru3rEolKV_hm-3keaI74H-dqDteS4sSHsHmWLEXFqf-oW987QI8L0NJls_pyiI8VUYT7sc"
            alt="Celebrity"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-[#dae2fd]">Sardor Mamadaliyev</span>
              <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">verified</span>
            </div>
            <span className="text-xs text-[#958ea0]">2.4M followers</span>
          </div>
          <button className="px-4 py-1.5 rounded-full border border-[#a078ff]/30 text-sm text-[#a078ff] active:scale-95 transition-transform">
            Follow
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 px-5 pb-4 border-b border-white/5">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="flex items-center gap-1.5 active:scale-95 transition-transform"
        >
          <span
            className={`material-symbols-outlined text-[22px] ${isLiked ? 'text-[#ffb0cd]' : 'text-[#958ea0]'}`}
            style={isLiked ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
          <span className="text-sm text-[#958ea0]">12.4K</span>
        </button>
        <button className="flex items-center gap-1.5 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[22px] text-[#958ea0]">chat_bubble</span>
          <span className="text-sm text-[#958ea0]">342</span>
        </button>
        <button className="flex items-center gap-1.5 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[22px] text-[#958ea0]">share</span>
          <span className="text-sm text-[#958ea0]">Ulashish</span>
        </button>
        <button className="flex items-center gap-1.5 ml-auto active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[22px] text-[#958ea0]">bookmark</span>
        </button>
      </div>

      {/* Related Videos */}
      <div className="px-5 py-4">
        <h2 className="text-lg font-bold text-[#d0bcff] font-[Montserrat] mb-4">O&apos;xshash videolar</h2>
        <div className="flex flex-col gap-3">
          {relatedVideos.map((video, i) => (
            <div key={i} className="flex gap-3 active:scale-[0.98] transition-transform cursor-pointer">
              <div className="w-36 h-20 rounded-xl bg-[#131b2e] overflow-hidden relative flex-shrink-0">
                <img
                  className="w-full h-full object-cover opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes"
                  alt={video.title}
                />
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/70 rounded text-[10px] text-white">
                  {video.duration}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium text-[#dae2fd] line-clamp-2">{video.title}</p>
                <p className="text-xs text-[#958ea0] mt-1">{video.celebrity}</p>
                <p className="text-xs text-[#958ea0]">{video.views} ko&apos;rish</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
