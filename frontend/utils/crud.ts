import { THttpMethod } from "@/hooks/useFetch";

type TVote = "upvote" | "downvote";

export function updateVote(
  prevValue: number,
  newValue: number,
  id: string,
  callback: (method: THttpMethod, id?: string, data?: any) => void
) {
  let type: TVote = prevValue < newValue ? "upvote" : "downvote";
  callback("put", `${id}/vote`, { type });
}
