'use client';

import { Trophy, UserPlus, LogIn, LogOut, LayoutDashboard, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { toast } from 'sonner';

export default function Header() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
    toast.success('Signed out successfully');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-white text-black font-bold text-2xl px-3 py-1 rounded">
              SB
            </div>
            <span className="text-white text-xl font-semibold">SaddleBook</span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              href="/events"
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </Link>

            {session ? (
              <>
                {session.user?.role === 'Admin' && (
                  <Link
                    href="/admin"
                    className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Admin</span>
                  </Link>
                )}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm hidden md:inline">
                    {session.user?.name}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Sign Up</span>
                </Link>
                <Link
                  href="/signin"
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
