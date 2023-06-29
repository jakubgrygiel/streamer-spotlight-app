import API_URL from "@/services/API";
import useFetch from "./useFetch";

export default function useSendNewData() {
  const { sendRequest } = useFetch(API_URL);

  async function sendNewData(data: any) {
    await sendRequest("post", undefined, data);
  }

  return { sendNewData };
}
