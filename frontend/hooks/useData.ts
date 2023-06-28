import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { IStreamer } from "@/models/Streamer";
import API_URL from "@/services/API";

export default function useData() {
  const { data, sendRequest } = useFetch(API_URL);
  const [streamers, setStreamers] = useState<IStreamer[] | undefined>();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setStreamers(data);
  }, [data]);

  function getData() {
    sendRequest("get");
  }

  async function updateData<K extends keyof IStreamer>(
    key: K,
    newValue: IStreamer[K],
    id: string
  ) {
    const index = streamers!.findIndex((streamer) => streamer.id === id);
    if (index > -1) {
      let streamersCopy = JSON.parse(JSON.stringify(streamers));
      streamersCopy[index][key] = newValue;
      setStreamers(streamersCopy);
      sendRequest("put", id, streamersCopy[index]);
    }
  }

  return { streamers, getData, updateData };
}
