import { Response } from "express";
import Streamer from "../models/streamer.model";

export function bodyValidator(object: any) {
  for (let key in object) {
    if (object[key] === undefined) {
      return { status: 400, message: `Missing value in '${key}'` };
    }
  }
}
