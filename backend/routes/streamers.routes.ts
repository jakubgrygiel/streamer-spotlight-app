import { Request, Response, Router } from "express";
import { streamer } from "../middleware/streamer.middleware";
import { createStreamer } from "../controllers/streamer.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Streamer GET");
});
router.post("/", [streamer.add], createStreamer);

router.get("/:streamerId", (req: Request, res: Response) => {
  res.send("Streamer Id GET");
});
router.put("/:streamerId", (req: Request, res: Response) => {
  res.send("Streamer Id PUT");
});

export default router;
