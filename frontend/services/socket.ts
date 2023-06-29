import { IStreamer } from "@/models/Streamer";
import { socket } from "@/pages/_app";

export function socketGetDataWhenServerIsUpdated(
  callback: (newData: IStreamer[]) => void
) {
  socket.on("data", (newData: IStreamer[]) => {
    callback(newData);
  });
}

export function socketInfoServerIsUpdated() {
  socket.emit("dataIsUpdated", true);
}
