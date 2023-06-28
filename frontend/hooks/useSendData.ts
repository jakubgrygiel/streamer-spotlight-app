import { socket } from "@/pages/_app";
import API_URL from "@/services/API";
import { socketDataUpdated } from "@/services/socket";
import axios, { AxiosError } from "axios";

export default function useSendData() {
  async function sendData(data: any) {
    try {
      await axios.post(API_URL, data);
      socketDataUpdated();
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

  return { sendData };
}
