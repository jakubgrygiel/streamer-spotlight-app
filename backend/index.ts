import express, { Express, Request, Response } from "express";
import mongoose, { MongooseError } from "mongoose";
import streamerRoutes from "./routes/streamers.routes";

import Streamer from "./models/streamer.model";

const PORT = 8000;
const DB_URL = "mongodb://localhost:27017";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("SERVER IS RUNNING");
});

app.use("/streamers", streamerRoutes);

mongoose
  .connect(DB_URL)
  .then(() => app.listen(PORT, () => console.log(`Running on port ${PORT}`)))
  .catch((error: MongooseError | Error) => {
    console.error(`Server error: ${error.message}`);
  });
