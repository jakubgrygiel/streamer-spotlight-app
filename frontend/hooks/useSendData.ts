import API_URL from "@/services/API";
import axios, { AxiosError } from "axios";

export default function useSendData() {
  async function sendData(data: any) {
    try {
      await axios.post(API_URL, data);
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
