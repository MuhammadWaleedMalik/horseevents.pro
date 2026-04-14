'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Users, Calendar, LayoutDashboard, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    } else if (status === 'authenticated' && session?.user?.role !== 'Admin') {
      router.push('/');
    }
  }, [status, session, router]);

  if (status === 'loading' || !session || session.user?.role !== 'Admin') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading Admin Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <div className="flex-grow pt-24 pb-12 flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 px-4 hidden md:block">
          <div className="space-y-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4">
              Management
            </h2>
            <nav className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-all group"
              >
                <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Overview</span>
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-all group"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Users</span>
              </Link>
              <Link
                href="/admin/events"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-all group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Events</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
