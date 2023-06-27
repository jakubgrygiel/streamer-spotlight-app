import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

type TPlatform = "youtube" | "tiktok" | "twitch" | "rumble" | "kick";

export interface IStreamer {
  name: string;
  description: string;
  avatar: string;
  background: string;
  platform: TPlatform;
  rate: number;
}

const streamerSchema = new Schema<IStreamer>({
  name: String,
  description: String,
  avatar: String,
  background: String,
  platform: String,
  rate: Number,
});

const Streamer = model("Streamer", streamerSchema);

export default Streamer;
