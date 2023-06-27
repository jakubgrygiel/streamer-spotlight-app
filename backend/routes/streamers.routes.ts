import { Request, Response, Router } from "express";
import {
  addStreamer,
  getAllStreamers,
  getStreamer,
  updateStreamer,
} from "../controllers/streamer.controller";
import { wrapper } from "../utils/helpers";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  wrapper(req, res, getAllStreamers)
);
router.post("/", (req: Request, res: Response) =>
  wrapper(req, res, addStreamer)
);

router.get("/:streamerId", (req: Request, res: Response) =>
  wrapper(req, res, getStreamer)
);
router.put("/:streamerId", (req: Request, res: Response) =>
  wrapper(req, res, updateStreamer)
);

export default router;
