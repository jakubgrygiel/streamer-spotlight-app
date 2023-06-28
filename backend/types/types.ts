import { ObjectId } from "mongoose";

export type TPlatform = "youtube" | "tiktok" | "twitch" | "rumble" | "kick";

export interface IStreamer {
  name: string;
  description: string;
  avatar: string;
  background: string;
  platform: TPlatform;
  rate: number;
}

export interface IStreamerDB {
  __v?: number;
  _id: string;
  name: string;
  description: string;
  avatar: string;
  background: string;
  platform: TPlatform;
  rate: number;
}

export interface IStreamerClient {
  id: string;
  name: string;
  description: string;
  avatar: string;
  background: string;
  platform: TPlatform;
  rate: number;
}
