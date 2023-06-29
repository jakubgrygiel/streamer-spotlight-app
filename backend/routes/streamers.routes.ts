import { Request, Response, Router } from "express";
import {
  addStreamer,
  getAllStreamers,
  getStreamer,
  updateStreamer,
} from "../controllers/streamer.controller";
import { wrapper } from "../utils/helpers";
import { streamer } from "../middleware/streamer.middleware";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  wrapper(req, res, getAllStreamers)
);
router.post("/", [streamer.empty], (req: Request, res: Response) =>
  wrapper(req, res, addStreamer)
);

router.get("/:streamerId", [streamer.exists], (req: Request, res: Response) =>
  wrapper(req, res, getStreamer)
);
router.put(
  "/:streamerId/vote",
  [streamer.updateType, streamer.exists],
  (req: Request, res: Response) => wrapper(req, res, updateStreamer)
);

export default router;
