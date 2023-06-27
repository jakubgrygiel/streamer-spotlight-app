import Streamer from "../models/streamer.model";
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
