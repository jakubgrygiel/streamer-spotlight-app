import { IStreamer } from "@/models/Streamer";

export function getDataById(data: IStreamer[], id: string) {
  return data.find((d) => d.id === id);
}
