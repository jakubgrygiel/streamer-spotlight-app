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
    return res
      .status(404)
      .json({ message: "Streamer with this id does not exist" });
  }

  const responseData: IStreamerClient = prepareDataForClient(streamer);

  res.status(200).json(responseData);
}

export async function updateStreamer(req: Request, res: Response) {
  const { streamerId } = req.params;
  const { body } = req;

  const votesValue = body.type === "upvote" ? 1 : -1;

  Streamer.findByIdAndUpdate(
    streamerId,
    { $inc: { votes: votesValue } },
    { new: true }
  ).then((updatedStreamer) => {
    if (updatedStreamer) {
      res.status(200).json(updatedStreamer);
    } else {
      return res
        .status(404)
        .json({ message: "Streamer with this id does not exist" });
    }
  });
}
