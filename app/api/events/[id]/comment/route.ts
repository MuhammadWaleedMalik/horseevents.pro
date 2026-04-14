import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import Event from '@/lib/models/Event';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ message: 'Comment text required' }, { status: 400 });
    }

    await dbConnect();
    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    const newComment = {
      userId: (session.user as any).id,
      userName: session.user.name || 'Anonymous',
      text,
      date: new Date()
    };

    event.comments.push(newComment);
    await event.save();

    return NextResponse.json(event.comments[event.comments.length - 1], { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
