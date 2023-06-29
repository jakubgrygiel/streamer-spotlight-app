import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { IStreamer } from "@/models/Streamer";
import API_URL from "@/services/API";
import { socket } from "@/pages/_app";
import { socketGetDataWhenServerIsUpdated } from "@/services/socket";

export default function useData() {
  const { data, error, sendRequest } = useFetch(API_URL);
  const [streamers, setStreamers] = useState<IStreamer[] | undefined>();

  useEffect(() => {
    sendRequest("get");
  }, []);

  useEffect(() => {
    setStreamers(data);
  }, [data]);

  useEffect(() => {
    socketGetDataWhenServerIsUpdated(updateStreamersBySocket);
  }, [socket]);

  function updateStreamersBySocket(newData: IStreamer[]) {
    setStreamers(newData);
  }

  return { streamers, error };
}
