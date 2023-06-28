import mongoose, { model } from "mongoose";
import { IStreamer } from "../types/types";
const { Schema } = mongoose;

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
