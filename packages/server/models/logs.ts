import mongoose from 'mongoose';

interface LogDocument extends mongoose.Document {
  streamer: string;
  viewers: Array<string>;
}

const LogSchema = new mongoose.Schema({
  streamer: { type: String },
  viewers: { type: Array }
});

export default mongoose.model<LogDocument>('logs', LogSchema);
