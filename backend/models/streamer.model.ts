import mongoose, { model } from "mongoose";
import { IStreamer } from "../types/types";
const { Schema } = mongoose;

const streamerSchema = new Schema<IStreamer>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  avatar: { type: String, required: true },
  background: { type: String, required: true },
  platform: { type: String, required: true },
  rate: { type: Number, required: true },
});

const Streamer = model("Streamer", streamerSchema);

export default Streamer;
