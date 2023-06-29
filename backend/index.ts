import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import streamerRoutes from "./routes/streamers.routes";
import { fillDatabaseIfEmpty, prepareDataForClient } from "./utils/database";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import Streamer from "./models/streamer.model";
import { IStreamerDB } from "./types/types";

const PORT = 8000;
const DB_URL = "mongodb://localhost:27017";
const CLIENT_URL = "http://localhost:3000";

const app: Express = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["Content-Type"],
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("SERVER IS RUNNING");
});

app.use("/streamers", streamerRoutes);

io.on("connection", (socket) => {
  socket.on("dataIsUpdated", async (isSend) => {
    const streamers: IStreamerDB[] = await Streamer.find();
    const data = streamers.map((streamer) => prepareDataForClient(streamer));
    io.emit("data", data);
  });
});

(async () => {
  try {
    await mongoose.connect(DB_URL);
    await fillDatabaseIfEmpty();

    httpServer.listen(PORT, () => console.log(`Running on port ${PORT}`));
  } catch (error: any) {
    console.error("Server error:", error.message);
  }
})();
