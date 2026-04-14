'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { Heart, MessageSquare, Clock, MapPin, Send, Trophy } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Comment {
  _id: string;
  userName: string;
  text: string;
  date: string;
}

interface EventData {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: string[];
  comments: Comment[];
  createdAt: string;
}

export default function EventsPage() {
  const { data: session } = useSession();
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState<{ [key: string]: string }>({});

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      toast.error('Failed to load events');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLike = async (eventId: string) => {
    if (!session) {
      toast.error('Please sign in to like events');
      return;
    }

    try {
      const res = await fetch(`/api/events/${eventId}/like`, { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        setEvents(events.map(e => e._id === eventId ? { 
          ...e, 
          likes: data.isLiked 
            ? [...e.likes, (session.user as any).id] 
            : e.likes.filter(id => id !== (session.user as any).id) 
        } : e));
      }
    } catch (err) {
      toast.error('Failed to update like');
    }
  };

  const handleComment = async (eventId: string) => {
    const text = commentText[eventId];
    if (!text) return;

    if (!session) {
      toast.error('Please sign in to comment');
      return;
    }

    try {
      const res = await fetch(`/api/events/${eventId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (res.ok) {
        setEvents(events.map(e => e._id === eventId ? { ...e, comments: [...e.comments, data] } : e));
        setCommentText({ ...commentText, [eventId]: '' });
        toast.success('Comment added');
      }
    } catch (err) {
      toast.error('Failed to add comment');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl font-serif animate-pulse">Gathering competitions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
              Upcoming Competitions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join the elite circle of horse racing and equestrian sports management. Explore high-stakes events and connect with top producers.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {events.map((event) => (
              <div 
                key={event._id} 
                className="group bg-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-700 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt={event.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex space-x-2">
                       <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Trophy className="w-3 h-3" />
                         <span>Grand Prix</span>
                       </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
                         <MapPin className="w-4 h-4 text-blue-500" />
                         <span>Professional Arena</span>
                         <span className="mx-2">•</span>
                         <Clock className="w-4 h-4 text-blue-500" />
                         <span>{new Date(event.createdAt).toLocaleDateString()}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 font-serif leading-tight group-hover:text-blue-400 transition-colors">
                        {event.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed mb-6 italic">
                        "{event.description}"
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button 
                            onClick={() => handleLike(event._id)}
                            className={`flex items-center space-x-2 transition-all ${
                              session && event.likes.includes((session.user as any).id) 
                                ? 'text-pink-500' 
                                : 'text-gray-400'
                            }`}
                          >
                            <Heart className={`w-6 h-6 ${session && event.likes.includes((session.user as any).id) ? 'fill-current' : ''}`} />
                            <span className="font-bold">{event.likes.length}</span>
                          </button>
                          <div className="flex items-center space-x-2 text-gray-400">
                             <MessageSquare className="w-6 h-6" />
                             <span className="font-bold">{event.comments.length}</span>
                          </div>
                        </div>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:invert transition-all">
                          Register Now
                        </button>
                      </div>

                      {/* Comments Section */}
                      <div className="space-y-4 max-h-48 overflow-y-auto no-scrollbar pr-2">
                        {event.comments.map((comment) => (
                          <div key={comment._id} className="bg-white/5 p-3 rounded-2xl border border-white/5">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{comment.userName}</span>
                              <span className="text-gray-600 text-[10px]">{new Date(comment.date).toLocaleDateString()}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{comment.text}</p>
                          </div>
                        ))}
                      </div>

                      {/* Comment Input */}
                      <div className="relative group/input">
                        <input 
                          type="text" 
                          placeholder="Add a professional insight..."
                          value={commentText[event._id] || ''}
                          onChange={(e) => setCommentText({ ...commentText, [event._id]: e.target.value })}
                          onKeyDown={(e) => e.key === 'Enter' && handleComment(event._id)}
                          className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all pr-12"
                        />
                        <button 
                          onClick={() => handleComment(event._id)}
                          className="absolute right-3 top-2.5 text-blue-500 hover:text-white transition-colors"
                        >
                          <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-[3rem]">
              <p className="text-gray-500 text-xl italic font-serif">No competitions currently scheduled. Check back soon for the next Grand Prix.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
