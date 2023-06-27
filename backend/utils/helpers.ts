import { Request, Response } from "express";

export const wrapper = async (
  req: Request,
  res: Response,
  callback: (req: Request, res: Response) => void
) => {
  try {
    await callback(req, res);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
};
