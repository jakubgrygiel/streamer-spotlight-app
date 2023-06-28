import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { IStreamer } from "@/models/Streamer";
import API_URL from "@/services/API";

export default function useGetData() {
  const { data, getData } = useFetch(API_URL);
  const [streamers, setStreamers] = useState<IStreamer[] | undefined>();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setStreamers(data);
  }, [data]);

  function updateData() {
    getData();
  }

  return { streamers, updateData };
}
