import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { IStreamer } from "@/models/Streamer";
import API_URL from "@/services/API";

export default function useDataById(id: string) {
  const { data, sendRequest } = useFetch(API_URL);
  const [streamer, setStreamer] = useState<IStreamer | undefined>();

  useEffect(() => {
    if (id) getData();
  }, [id]);

  useEffect(() => {
    setStreamer(data);
  }, [data]);

  function getData() {
    sendRequest("get", id);
  }

  async function updateData<K extends keyof IStreamer>(
    key: K,
    newValue: IStreamer[K],
    id: string
  ) {
    if (streamer && id === streamer.id) {
      let streamerCopy = { ...streamer };
      streamerCopy[key] = newValue;
      setStreamer(streamerCopy);
      sendRequest("put", id, streamerCopy);
    }
  }

  return { streamer, getData, updateData };
}
