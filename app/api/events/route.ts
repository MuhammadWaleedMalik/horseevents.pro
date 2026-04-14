import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import Event from '@/lib/models/Event';

export async function GET() {
  try {
    await dbConnect();
    const events = await Event.find({}).sort({ createdAt: -1 });
    return NextResponse.json(events);
  } catch (error: any) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== 'Admin') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { title, description, imageUrl } = await req.json();

    if (!title || !description) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    await dbConnect();
    const newEvent = await Event.create({
      title,
      description,
      imageUrl: imageUrl || '/horse_competition_hero.png',
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
