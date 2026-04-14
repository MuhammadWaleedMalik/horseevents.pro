'use client';

import { Calendar, Users, Trophy, TrendingUp } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { label: 'Total Users', value: '128', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Total Events', value: '24', icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Active Competitions', value: '8', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Growth', value: '+12%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Welcome back, Main Admin. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                Live
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div>
                  <p className="text-white font-medium">New event entry submitted</p>
                  <p className="text-sm text-gray-500 italic">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white overflow-hidden relative group">
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4">System Health</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Server Status</span>
                  <span>99.9%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-white h-full w-[99.9%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>DB Load</span>
                  <span>14%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-white h-full w-[14%]" />
                </div>
              </div>
            </div>
            <button className="mt-8 bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
              View Logs
            </button>
          </div>
          <Trophy className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700" />
        </div>
      </div>
    </div>
  );
}
