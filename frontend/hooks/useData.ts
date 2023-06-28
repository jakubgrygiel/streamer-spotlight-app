import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { IStreamer } from "@/models/Streamer";
import API_URL from "@/services/API";
import { updateVote } from "@/utils/crud";

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
    if (index > -1 && streamers) {
      let streamersCopy = JSON.parse(JSON.stringify(streamers));
      streamersCopy[index][key] = newValue;
      setStreamers(streamersCopy);

      if (key === "votes") {
        updateVote(
          streamers[index][key] as number,
          streamersCopy[index][key] as number,
          id,
          sendRequest
        );
      }
    }
  }

  return { streamers, getData, updateData };
}
