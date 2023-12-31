import { FilterQuery } from "mongoose";
import Streamer from "../models/streamer.model";
import { IStreamerClient } from "../types/types";
import dummyStreamerData from "./dummyData";

async function isDatabaseEmpty() {
  const count = await Streamer.countDocuments();
  return count === 0 ? true : false;
}

async function fillDatabaseWithDummyData() {
  const dummyData = JSON.parse(JSON.stringify(dummyStreamerData));
  await Streamer.insertMany(dummyData);
}

export async function fillDatabaseIfEmpty() {
  const isEmpty = await isDatabaseEmpty();
  if (isEmpty) {
    await fillDatabaseWithDummyData();
  }
}

export function prepareDataForClient(data: any) {
  const responseData: IStreamerClient = {
    id: data._id.toString(),
    avatar: data.avatar,
    background: data.background,
    description: data.description,
    name: data.name,
    platform: data.platform,
    votes: data.votes,
  };
  return responseData;
}

export async function documentMissing<T>(filter: FilterQuery<T>) {
  try {
    return (await Streamer.countDocuments(filter)) === 0;
  } catch (err) {
    return true;
  }
}
