'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavTab {
  label: string;
  icon: string;
  href: string;
}

const tabs: NavTab[] = [
  { label: 'Home', icon: 'home', href: '/home' },
  { label: 'Search', icon: 'search', href: '/content-feed' },
  { label: 'Messages', icon: 'chat_bubble', href: '/messages' },
  { label: 'Bookings', icon: 'event_available', href: '/bookings' },
  { label: 'Profile', icon: 'person', href: '/profile' },
];

/** Routes where the bottom nav should be hidden */
const hiddenRoutes = ['/login', '/register', '/reset-password', '/admin', '/dashboard'];

export default function BottomNav() {
  const pathname = usePathname();

  const shouldHide = hiddenRoutes.some(
    (route) => pathname === route || pathname?.startsWith(route + '/')
  );

  if (shouldHide) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#131b2e] border-t border-white/10 pb-safe">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href || pathname?.startsWith(tab.href + '/');

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors"
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{
                  color: isActive ? '#d0bcff' : '#958ea0',
                  fontVariationSettings: isActive
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {tab.icon}
              </span>
              <span
                className="text-[10px] font-medium"
                style={{ color: isActive ? '#d0bcff' : '#958ea0' }}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
