import express, { Express, Request, Response } from "express";
import mongoose, { MongooseError } from "mongoose";
import streamerRoutes from "./routes/streamers.routes";
import { fillDatabaseIfEmpty } from "./utils/database";
import cors from "cors";

const PORT = 8000;
const DB_URL = "mongodb://localhost:27017";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("SERVER IS RUNNING");
});

app.use("/streamers", streamerRoutes);

(async () => {
  try {
    await mongoose.connect(DB_URL);
    await fillDatabaseIfEmpty();

    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  } catch (error: any) {
    console.error("Server error:", error.message);
  }
})();
