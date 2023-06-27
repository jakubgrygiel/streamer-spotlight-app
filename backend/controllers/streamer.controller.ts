import { Request, Response } from "express";
import Streamer from "../models/streamer.model";

export async function createStreamer(req: Request, res: Response) {
  const newStreamer = new Streamer({
    id: "gj3pvhpu80e0kzggr6jqo005",
    name: "CyberWarrior",
    description:
      "I'm a fearless streamer who dives headfirst into the virtual realm. Join me on thrilling gaming adventures filled with heart-pounding action, epic battles, and jaw-dropping moments. Together, we'll conquer every virtual challenge that comes our way!",
    platform: "twitch",
    avatar: "user-1",
    background: "bg-1",
    rate: 0,
  });
  const createdStreamer = await newStreamer.save();
  res.json(createdStreamer);
}
