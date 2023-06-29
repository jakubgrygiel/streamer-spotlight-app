import { NextFunction, Request, Response } from "express";
import { documentMissing } from "../utils/database";
import Streamer from "../models/streamer.model";
import { log } from "../utils/helpers";

export const streamer = {
  exists: async (req: Request, res: Response, next: NextFunction) => {
    if (await documentMissing({ _id: req.params.streamerId })) {
      log("Streamer with this id does not exist");
      return res.status(404).json("Streamer with this id does not exist");
    }

    next();
  },
  profileExists: async (req: Request, res: Response, next: NextFunction) => {
    const { name, platform } = req.body;
    const existingStreamer = await Streamer.findOne({ name, platform });

    if (existingStreamer) {
      let message = `Profile with name "${name}" already exists on platform "${platform}"`;
      log(message);
      return res.status(409).json({
        error: message,
      });
    }

    next();
  },
  empty: async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (Object.keys(body).length === 0) {
      let message = "Empty request body";
      log(message);
      return res.status(400).json(message);
    }

    try {
      const streamer = new Streamer(body);
      await streamer.validate();
    } catch (err: any) {
      log(err.message);
      return res.status(400).json(err.message);
    }

    next();
  },
  updateType: async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (!body.type || !["upvote", "downvote"].includes(body.type)) {
      let message = "Empty request body";
      log(message);
      return res.status(400).json(message);
    }

    next();
  },
};
