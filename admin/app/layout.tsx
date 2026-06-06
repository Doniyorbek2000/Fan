import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FanMeet Admin Panel',
  description: 'FanMeet platform boshqaruv paneli',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0b1326] text-[#dae2fd] min-h-screen">{children}</body>
    </html>
  );
}
