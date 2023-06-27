import { Request, Response } from "express";
import Streamer, { IStreamer } from "../models/streamer.model";

export async function getAllStreamers(req: Request, res: Response) {
  // res.json(savedStreamer);
}

export async function addStreamer(req: Request, res: Response) {
  const newStreamerData = {
    name: "CyberWarrior",
    description: "I'm a fearless streamer!",
    avatar: "user-1",
    background: "bg-1",
    platform: "twitch",
    rate: 0,
  };

  const newStreamer = new Streamer(newStreamerData);
  const savedStreamer = await newStreamer.save();

  res.json(savedStreamer);
}

export async function getStreamer(req: Request, res: Response) {
  // res.json(savedStreamer);
}

export async function updateStreamer(req: Request, res: Response) {
  // res.json(savedStreamer);
}
