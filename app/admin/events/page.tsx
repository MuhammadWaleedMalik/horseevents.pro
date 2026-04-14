'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Plus, Trash2, Calendar, Image as ImageIcon, Type, FileText } from 'lucide-react';

interface EventData {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

export default function AdminEvents() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('/horse_competition_hero.png');

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      toast.error('Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, imageUrl }),
      });

      if (res.ok) {
        toast.success('Event created successfully!');
        setTitle('');
        setDescription('');
        setShowForm(false);
        fetchEvents();
      } else {
        toast.error('Failed to create event');
      }
    } catch (err) {
      toast.error('An error occurred');
    }
  };

  if (loading) return <div className="text-white p-12 text-center animate-pulse">Loading events...</div>;

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 font-serif">Event Management</h1>
          <p className="text-gray-400">Create and manage your professional horse competitions.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          <Plus className="w-5 h-5" />
          <span>{showForm ? 'Cancel' : 'Add New Event'}</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/20 p-8 rounded-3xl animate-in zoom-in-95 duration-300">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-blue-500" />
            <span>New Event Details</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 flex items-center space-x-2">
                  <Type className="w-4 h-4" />
                  <span>Event Title</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  placeholder="e.g., Grand Prix Summer Classic 2026"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 flex items-center space-x-2">
                  <ImageIcon className="w-4 h-4" />
                  <span>Thumbnail Image URL</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all font-mono text-sm"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2 flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Professional Description</span>
              </label>
              <textarea
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all resize-none"
                placeholder="Describe the competition, discipline, and registration requirements..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                Publish Event
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={event.imageUrl} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={event.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{event.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4">{event.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500 font-mono">
                  {new Date(event.createdAt).toLocaleDateString()}
                </span>
                <button className="text-red-500 hover:text-red-400 p-2 rounded-lg hover:bg-red-500/10 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fixed import of Trophy
function Trophy({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  );
}
