'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import Header from '@/components/Header';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Registration successful! Please sign in.');
        router.push('/signin');
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center pt-24 px-4">
        <div className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-xl border border-white/10 w-full max-w-md shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full bg-black/50 border border-white/20 text-white rounded px-3 py-2 outline-none focus:border-blue-500 transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors mt-4"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center text-gray-400">
            Already have an account?{' '}
            <Link href="/signin" className="text-blue-500 hover:text-blue-400 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
