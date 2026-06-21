/* eslint-disable */
'use client';

import { useState } from 'react';

export default function CelebrityFullPage() {
  const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'gallery'>('services');

  const reviews = [
    {
      name: 'Aziza M.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7o0XDK-QOXPKp_ZmRIl5RqoxKU5RCjOPZBFL2GDssBF3NXd_g6J-Y4ASDQj8HKAfDh-iqHZcuptZ8ZN6U2MIdaZ_p2vS6zcXLHOc05QYEJzDjjdBy4bJ0GnJilxFf24u5XZSSHh-duoa42mnVNBPSSI0HWD67hCHumOPjn_Z58-nQewXL2vTTScKvjq_FDzm3CSrgQOuqtIGPnl7r9kiQDLo8dqyE9c1tD1Oiy43E9_OfTPY370hmgFbt9Tzc5U9O-qDKnx-Ccw0',
      rating: 5,
      text: '"Juda ajoyib tajriba! Shaxsiy video xabar uchun katta rahmat. Har bir so\'zini his qildim."',
    },
    {
      name: 'Bobur T.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0ZZjL3OY278XM2NTWBPg-dFb3OUKlthbzNK4qy-h3YuvNHC8p7OV-eOA7uqhuJSANINi26j-sDO87F9zSZZU1Vw4SuD7Y_H_g6vUDV4wC2_ZEjh_kh9LWtKbmLNdojzt8dpKoEX4HNHh0BZIQ8QzU4bc9WjXHJJrN56v6TBRafsE9HcNDo9UOVpl_StQQ8DqcielQ0NTkOk3Wsadiz0_PeV6Akv1_UleqMjw-uLqmG_rgd_rN6T_GjCt7T93aOFUfILIcVk7cCo',
      rating: 4,
      text: '"Chat sessiyasi juda qiziq o\'tdi. Savollarimga batafsil javob berdi."',
    },
    {
      name: 'Dilorom S.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0iSoDTTav6mLvLHwxFgQBsMKt6ktku-ZFrcPhSYcbz-uRQTQfMVVRqa28c8dAIlecULFKHbUfkGEtHlkWKsV4-Yzy9NdNQfOe03wZY2EHOqdQlzH5o0Dx5t3mzOqKvqA1SSy0bY69Q8NB6xPJdd3qWGlH3Dd_ON6yR_03EGNy3dkfIdSpcdPR9ZmbOE1B0aWZLh_Iyru3rEolKV_hm-3keaI74H-dqDteS4sSHsHmWLEXFqf-oW987QI8L0NJls_pyiI8VUYT7sc',
      rating: 5,
      text: '"Meet & Greet tadbiri hayotimning eng yaxshi kunlaridan biri bo\'ldi!"',
    },
  ];

  const galleryImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7o0XDK-QOXPKp_ZmRIl5RqoxKU5RCjOPZBFL2GDssBF3NXd_g6J-Y4ASDQj8HKAfDh-iqHZcuptZ8ZN6U2MIdaZ_p2vS6zcXLHOc05QYEJzDjjdBy4bJ0GnJilxFf24u5XZSSHh-duoa42mnVNBPSSI0HWD67hCHumOPjn_Z58-nQewXL2vTTScKvjq_FDzm3CSrgQOuqtIGPnl7r9kiQDLo8dqyE9c1tD1Oiy43E9_OfTPY370hmgFbt9Tzc5U9O-qDKnx-Ccw0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0ZZjL3OY278XM2NTWBPg-dFb3OUKlthbzNK4qy-h3YuvNHC8p7OV-eOA7uqhuJSANINi26j-sDO87F9zSZZU1Vw4SuD7Y_H_g6vUDV4wC2_ZEjh_kh9LWtKbmLNdojzt8dpKoEX4HNHh0BZIQ8QzU4bc9WjXHJJrN56v6TBRafsE9HcNDo9UOVpl_StQQ8DqcielQ0NTkOk3Wsadiz0_PeV6Akv1_UleqMjw-uLqmG_rgd_rN6T_GjCt7T93aOFUfILIcVk7cCo',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA0iSoDTTav6mLvLHwxFgQBsMKt6ktku-ZFrcPhSYcbz-uRQTQfMVVRqa28c8dAIlecULFKHbUfkGEtHlkWKsV4-Yzy9NdNQfOe03wZY2EHOqdQlzH5o0Dx5t3mzOqKvqA1SSy0bY69Q8NB6xPJdd3qWGlH3Dd_ON6yR_03EGNy3dkfIdSpcdPR9ZmbOE1B0aWZLh_Iyru3rEolKV_hm-3keaI74H-dqDteS4sSHsHmWLEXFqf-oW987QI8L0NJls_pyiI8VUYT7sc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7o0XDK-QOXPKp_ZmRIl5RqoxKU5RCjOPZBFL2GDssBF3NXd_g6J-Y4ASDQj8HKAfDh-iqHZcuptZ8ZN6U2MIdaZ_p2vS6zcXLHOc05QYEJzDjjdBy4bJ0GnJilxFf24u5XZSSHh-duoa42mnVNBPSSI0HWD67hCHumOPjn_Z58-nQewXL2vTTScKvjq_FDzm3CSrgQOuqtIGPnl7r9kiQDLo8dqyE9c1tD1Oiy43E9_OfTPY370hmgFbt9Tzc5U9O-qDKnx-Ccw0',
  ];

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] pb-28" suppressHydrationWarning>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-5 h-16">
        <button className="active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#d0bcff]">arrow_back</span>
        </button>
        <span className="font-bold text-lg bg-gradient-to-r from-[#d0bcff] to-[#ffb0cd] bg-clip-text text-transparent font-[Montserrat]">FanMeet</span>
        <button className="active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#958ea0]">share</span>
        </button>
      </header>

      {/* Cover Photo */}
      <section className="relative w-full h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-top"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWX5eMsDG1rpnCI3-woHqoPBgV2bza_UCPU58IoHhs6T_4y_OPA8qniQUi95Ci7ERPYL2MDXuh3znhA0857yzItMBAc2FU3jXaSNNBFW92E6gEnq38g3dhxT7J49OuARLmtD9fCYQ3aP_yTa3E0Mwm2jdZS7zodgTLlM7zkAP2FkiI1Ipj9L43N2WO0Etwt56OnqSA5krV2SiGS3dVa32ecan2XC7Ibk4-eW8TynsU-JBO9OybCxhm0C9027pcZgf1D-o7nzWSes"
            alt="Celebrity cover"
          />
        </div>
        <div className="absolute inset-0 backstage-overlay"></div>
      </section>

      {/* Avatar & Info Overlay */}
      <div className="relative px-5 -mt-20 z-10">
        <div className="flex items-end gap-4">
          <div className="w-28 h-28 rounded-full border-4 border-[#a078ff] overflow-hidden shadow-[0_0_20px_rgba(160,120,255,0.4)]">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0iSoDTTav6mLvLHwxFgQBsMKt6ktku-ZFrcPhSYcbz-uRQTQfMVVRqa28c8dAIlecULFKHbUfkGEtHlkWKsV4-Yzy9NdNQfOe03wZY2EHOqdQlzH5o0Dx5t3mzOqKvqA1SSy0bY69Q8NB6xPJdd3qWGlH3Dd_ON6yR_03EGNy3dkfIdSpcdPR9ZmbOE1B0aWZLh_Iyru3rEolKV_hm-3keaI74H-dqDteS4sSHsHmWLEXFqf-oW987QI8L0NJls_pyiI8VUYT7sc"
              alt="Celebrity avatar"
            />
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-[#dae2fd] font-[Montserrat]">Sardor Mamadaliyev</h1>
              <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">verified</span>
            </div>
            <p className="text-sm text-[#958ea0]">Xonanda / Musiqachi</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-sm text-[#cbc3d7] leading-relaxed">
          O&apos;zbek estrada san&apos;atining yulduzlaridan biri. Millionlab muxlislar sevimli san&apos;atkor. Konsertlar, shaxsiy videolar va eksklyuziv uchrashuv uchun band qiling!
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-3 px-5 mt-6">
        {[
          { label: 'Followers', value: '2.4M', icon: 'group' },
          { label: 'Buyurtmalar', value: '1,847', icon: 'calendar_today' },
          { label: 'Reyting', value: '4.9', icon: 'star' },
          { label: 'Javob', value: '2 soat', icon: 'schedule' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-3 flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-[#a078ff] text-[20px]">{stat.icon}</span>
            <span className="text-base font-bold text-[#dae2fd]">{stat.value}</span>
            <span className="text-[10px] text-[#958ea0]">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 px-5 mt-6">
        {(['services', 'reviews', 'gallery'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === tab
                ? 'gradient-btn text-white shadow-[0_4px_14px_rgba(160,120,255,0.39)]'
                : 'bg-white/5 text-[#958ea0] border border-white/10'
            }`}
          >
            {tab === 'services' ? 'Xizmatlar' : tab === 'reviews' ? 'Sharhlar' : 'Galereya'}
          </button>
        ))}
      </div>

      <main className="px-5 mt-6 flex flex-col gap-4">
        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="flex flex-col gap-4 animate-fade-in">
            {[
              { icon: 'videocam', color: '#a078ff', bg: 'rgba(160,120,255,0.2)', title: 'Video Qo\'ng\'iroq', desc: 'Shaxsiy video aloqa — 1 ga 1', price: '500,000', duration: '15 daqiqa' },
              { icon: 'forum', color: '#ffb0cd', bg: 'rgba(255,176,205,0.2)', title: 'Chat', desc: 'Matnli muloqot imkoniyati', price: '150,000', duration: '30 daqiqa' },
              { icon: 'groups', color: '#4cd7f6', bg: 'rgba(76,215,246,0.2)', title: 'Meet & Greet', desc: 'Jonli uchrashuv yoki virtual sessiya', price: '2,000,000', duration: '60 daqiqa' },
            ].map((service) => (
              <div key={service.title} className="glass-card rounded-2xl p-5 flex flex-col gap-3 active:scale-[0.98] transition-transform">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: service.bg }}>
                    <span className="material-symbols-outlined text-[28px]" style={{ color: service.color }}>{service.icon}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#dae2fd]">{service.price} <span className="text-xs text-[#958ea0]">so&apos;m</span></p>
                    <p className="text-xs text-[#958ea0]">{service.duration}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#dae2fd]">{service.title}</h3>
                  <p className="text-sm text-[#cbc3d7]">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="flex flex-col gap-4 animate-fade-in">
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-[#dae2fd] font-[Montserrat]">4.9</p>
                <div className="flex text-[#ffb0cd] text-[16px] mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined">star</span>
                  ))}
                </div>
                <p className="text-xs text-[#958ea0] mt-1">1,247 sharh</p>
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                {[
                  { stars: 5, pct: 88 },
                  { stars: 4, pct: 8 },
                  { stars: 3, pct: 3 },
                  { stars: 2, pct: 1 },
                  { stars: 1, pct: 0 },
                ].map((bar) => (
                  <div key={bar.stars} className="flex items-center gap-2">
                    <span className="text-xs text-[#958ea0] w-3">{bar.stars}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#a078ff] to-[#ffb0cd]" style={{ width: `${bar.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {reviews.map((review, i) => (
              <div key={i} className="p-4 bg-[#131b2e] rounded-xl border border-white/5">
                <div className="flex gap-3 items-center mb-2">
                  <img alt="Reviewer" className="w-10 h-10 rounded-full" src={review.avatar} />
                  <div>
                    <p className="text-sm font-medium text-[#dae2fd]">{review.name}</p>
                    <div className="flex text-[#ffb0cd] text-[14px]">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <span key={j} className="material-symbols-outlined">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#cbc3d7]">{review.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-3 gap-2 animate-fade-in">
            {galleryImages.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/10">
                <img className="w-full h-full object-cover" src={src} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 w-full bg-[#0b1326]/90 backdrop-blur-2xl border-t border-white/10 px-5 py-4 flex items-center justify-between z-50">
        <div className="flex flex-col">
          <span className="text-xs text-[#958ea0] uppercase tracking-wider">Narxdan boshlab</span>
          <span className="text-xl font-bold text-[#dae2fd]">150,000 so&apos;m</span>
        </div>
        <button className="gradient-btn neon-glow-button px-8 py-3.5 rounded-full text-base font-bold text-white active:scale-95 transition-all">
          Band qilish
        </button>
      </div>
    </div>
  );
}
