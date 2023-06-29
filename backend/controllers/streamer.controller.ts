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

  res.status(201).json(responseData);
}

export async function getStreamer(req: Request, res: Response) {
  const { streamerId } = req.params;
  const streamer = await Streamer.findById(streamerId);

  const responseData: IStreamerClient = prepareDataForClient(streamer);

  res.status(200).json(responseData);
}

export async function updateStreamer(req: Request, res: Response) {
  const { streamerId } = req.params;
  const { body } = req;

  let votesValue = 0;
  if (body.type === "upvote") votesValue = 1;
  if (body.type === "downvote") votesValue = -1;

  Streamer.findByIdAndUpdate(
    streamerId,
    { $inc: { votes: votesValue } },
    { new: true }
  ).then((updatedStreamer) => {
    if (updatedStreamer) {
      res.status(200).json(updatedStreamer);
    }
  });
}
