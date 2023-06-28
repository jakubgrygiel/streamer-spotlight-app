export interface IStreamer {
  id: string;
  name: string;
  description: string;
  avatar: string;
  background: string;
  platform: TPlatform;
  rate: number;
}

export type TPlatform = "youtube" | "tiktok" | "twitch" | "rumble" | "kick";
