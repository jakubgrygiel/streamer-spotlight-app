import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { IStreamer } from "@/types/types";
import API_URL from "@/services/API";

export default function useGetDataById(id: string) {
  const { data, getData } = useFetch(API_URL, id);
  const [streamer, setStreamer] = useState<IStreamer | undefined>();

  useEffect(() => {
    if (id) getData();
  }, [id]);

  useEffect(() => {
    setStreamer(data);
  }, [data]);

  console.log(data);

  function updateData() {
    getData();
  }

  return { streamer, updateData };
}
