import { socketInfoServerIsUpdated } from "@/services/socket";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useState } from "react";

export type THttpMethod = "get" | "post" | "put";

export default function useFetch(url: string) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  async function sendRequest(method: THttpMethod, id?: string, data?: any) {
    try {
      const API_URL = id ? `${url}/${id}` : url;

      const config: AxiosRequestConfig = {
        method,
        url: API_URL,
        data,
      };
      const response = await axios(config);
      setError(false);
      if (method === "get") {
        setData(response.data);
      } else {
        socketInfoServerIsUpdated();
      }
    } catch (error) {
      const err = error as AxiosError;
      setError(true);
      if (err.response) {
        console.error("Error:", err.response.data);
      } else if (err.request) {
        console.error("Error:", err.request);
      } else {
        console.error("Error:", err.message);
      }
    }
  }

  return { data, error, sendRequest };
}
