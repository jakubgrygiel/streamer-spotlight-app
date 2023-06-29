import { NextFunction, Request, Response } from "express";
import { documentMissing } from "../utils/database";
import Streamer from "../models/streamer.model";

export const streamer = {
  exists: async (req: Request, res: Response, next: NextFunction) => {
    if (await documentMissing({ _id: req.params.streamerId }))
      return res.status(404).json("Streamer with this id does not exist");

    next();
  },
  empty: async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (Object.keys(body).length === 0) {
      return res.status(400).json("Empty request body");
    }

    try {
      const streamer = new Streamer(body);
      await streamer.validate();
    } catch (err: any) {
      return res.status(400).json(err.message);
    }

    next();
  },
  updateType: async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (!body.type || !["upvote", "downvote"].includes(body.type))
      return res.status(400).json("Empty request body");

    next();
  },
};
