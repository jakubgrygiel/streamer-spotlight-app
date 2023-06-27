import { Request, Response } from "express";
import Streamer, { IStreamer } from "../models/streamer.model";

export async function getAllStreamers(req: Request, res: Response) {
  const streamers = await Streamer.find();

  res.status(200).json(streamers);
}

export async function addStreamer(req: Request, res: Response) {
  const newStreamer = new Streamer(req.body);
  const savedStreamer = await newStreamer.save();
  console.log(req.body);
  res.status(200).json(savedStreamer);
}

export async function getStreamer(req: Request, res: Response) {
  const { streamerId } = req.params;
  const streamer = await Streamer.findById(streamerId);

  if (!streamer) {
    return res.status(404).json({ message: "Streamer not found" });
  }

  res.status(200).json(streamer);
}

export async function updateStreamer(req: Request, res: Response) {
  const { streamerId } = req.params;
  const updatedStreamer = await Streamer.findByIdAndUpdate(
    streamerId,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedStreamer) {
    return res.status(404).json({ message: "Streamer not found" });
  }

  res.status(200).json(updatedStreamer);
}
