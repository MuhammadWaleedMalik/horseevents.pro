import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IComment {
  userId: string;
  userName: string;
  text: string;
  date: Date;
}

export interface IEvent extends Document {
  title: string;
  description: string;
  imageUrl: string;
  likes: string[]; // User IDs who liked
  comments: IComment[];
}

const CommentSchema: Schema = new Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true, default: '/horse_competition_hero.png' },
    likes: [{ type: String }],
    comments: [CommentSchema]
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
