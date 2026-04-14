import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== 'Admin') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const users = await User.find({}, '-password').sort({ createdAt: -1 });

    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
