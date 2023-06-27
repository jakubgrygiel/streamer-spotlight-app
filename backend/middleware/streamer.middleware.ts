import { NextFunction, Request, Response } from "express";

export const streamer = {
  add: async (req: Request, res: Response, next: NextFunction) => {
    next();
  },
};
