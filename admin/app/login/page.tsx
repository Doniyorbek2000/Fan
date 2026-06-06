'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Login failed');
      }
      router.push('/dashboard');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0b1326] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#a078ff] to-[#ffb0cd] flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-2xl">star</span>
          </div>
          <h1 className="text-2xl font-bold text-[#dae2fd] font-[Montserrat]">FanMeet Admin</h1>
          <p className="text-[#958ea0] text-sm mt-1">Boshqaruv paneliga kiring</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs text-[#958ea0] uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@fanmeet.uz"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#dae2fd] placeholder-[#958ea0] focus:outline-none focus:border-[#a078ff]/50 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-[#958ea0] uppercase tracking-wider">Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#dae2fd] placeholder-[#958ea0] focus:outline-none focus:border-[#a078ff]/50 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full gradient-btn rounded-xl py-3 text-white font-semibold transition-opacity disabled:opacity-60"
          >
            {loading ? 'Kirish...' : 'Kirish'}
          </button>
        </form>
      </div>
    </div>
  );
}
