import axios, { AxiosError } from "axios";
import { useState } from "react";

export default function useFetch(url: string, id?: string) {
  const [data, setData] = useState();
  const API_URL = id ? `${url}/${id}` : url;

  async function getData() {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error("Error:", err.response.data);
      } else if (err.request) {
        console.error("Error:", err.request);
      } else {
        console.log("Error:", err.message);
      }
    }
  }
  return { data, getData };
}
