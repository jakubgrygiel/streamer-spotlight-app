import { socket } from "@/pages/_app";

socket.on("connect", () => {
  console.log(socket.id);
});

export function socketDataUpdated() {
  socket.emit("newData", true);
}
