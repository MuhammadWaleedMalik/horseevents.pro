'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Mail, User as UserIcon, Shield, Clock } from 'lucide-react';

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2 font-serif">Registered Users</h1>
        <p className="text-gray-400">Manage all your SaddleBook producers and riders.</p>
      </div>

      <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase">User</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase">Email</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase">Role</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 font-bold group-hover:scale-110 transition-transform">
                        {user.name[0].toUpperCase()}
                      </div>
                      <span className="text-white font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span>{user.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      user.role === 'Admin' 
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      <Shield className="w-3 h-3" />
                      <span>{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
