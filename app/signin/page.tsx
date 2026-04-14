'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import Header from '@/components/Header';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success('Logged in successfully!');
        router.push('/');
        router.refresh();
      }
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center pt-24 px-4">
        <div className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-xl border border-white/10 w-full max-w-md shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full bg-black/50 border border-white/20 text-white rounded px-3 py-2 outline-none focus:border-blue-500 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full bg-black/50 border border-white/20 text-white rounded px-3 py-2 outline-none focus:border-blue-500 transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <div className="mt-6 text-center text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-500 hover:text-blue-400 transition-colors">
              Sign Up
            </Link>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded text-xs text-blue-200">
            <p className="font-bold mb-1">Admin Credentials:</p>
            <p>Email: admin@saddle.com</p>
            <p>Pass: @Abc123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}
