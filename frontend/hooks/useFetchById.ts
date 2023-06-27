import axios from "axios";
import { useState } from "react";

export default function useFetch(url: string, id: string) {
  const [data, setData] = useState();
  const API_URL = `${url}/${id}`;

  async function getData() {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (err: any) {
      console.log("Error", err.message);
    }
  }
  return { data, getData };
}
