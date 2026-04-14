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
    const userId = (session.user as any).id;

    await dbConnect();
    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    const index = event.likes.indexOf(userId);
    if (index === -1) {
      event.likes.push(userId);
    } else {
      event.likes.splice(index, 1);
    }

    await event.save();

    return NextResponse.json({ likes: event.likes.length, isLiked: index === -1 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
