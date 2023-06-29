import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { IStreamer } from "@/models/Streamer";
import API_URL from "@/services/API";
import { socket } from "@/pages/_app";
import { getDataById } from "@/utils/crud";
import { socketGetDataWhenServerIsUpdated } from "@/services/socket";

export type TVote = "upvote" | "downvote";

export default function useDataById(id: string | undefined) {
  const { data, error, sendRequest } = useFetch(API_URL);
  const [streamer, setStreamer] = useState<IStreamer | undefined>();

  useEffect(() => {
    if (id) sendRequest("get", id);
  }, [id]);

  useEffect(() => {
    setStreamer(data);
  }, [data]);

  useEffect(() => {
    socketGetDataWhenServerIsUpdated(updateStreamerBySocket);
  }, [socket]);

  function updateData<K extends keyof IStreamer>(
    key: K,
    newValue: IStreamer[K] | TVote
  ) {
    if (key === "votes") {
      sendRequest("put", `${id}/vote`, { type: newValue });
    }
  }

  function updateStreamerBySocket(newData: IStreamer[]) {
    if (!id) return;
    const updatedStreamer = getDataById(newData, id);
    if (!updatedStreamer) return;
    setStreamer(updatedStreamer);
  }

  return { streamer, error, updateData };
}
