'use client';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0b1326]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header title="Dashboard" subtitle="Welcome back, Admin" />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
