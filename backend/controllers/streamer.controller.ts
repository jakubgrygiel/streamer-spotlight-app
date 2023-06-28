import { Request, Response } from "express";
import Streamer from "../models/streamer.model";
import { IStreamerClient, IStreamerDB } from "../types/types";
import { prepareDataForClient } from "../utils/database";

export async function getAllStreamers(req: Request, res: Response) {
  const streamers: IStreamerDB[] = await Streamer.find();
  const responseData = streamers.map((streamer) =>
    prepareDataForClient(streamer)
  );

  res.status(200).json(responseData);
}

export async function addStreamer(req: Request, res: Response) {
  const newStreamer = new Streamer(req.body);
  const savedStreamer = await newStreamer.save();
  const responseData: IStreamerClient = prepareDataForClient(savedStreamer);

  res.status(200).json(responseData);
}

export async function getStreamer(req: Request, res: Response) {
  const { streamerId } = req.params;
  const streamer = await Streamer.findById(streamerId);

  if (!streamer) {
    return res.status(404).json({ message: "Streamer not found" });
  }

  const responseData: IStreamerClient = prepareDataForClient(streamer);

  res.status(200).json(responseData);
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

  const responseData: IStreamerClient = prepareDataForClient(updateStreamer);

  res.status(200).json(responseData);
}
