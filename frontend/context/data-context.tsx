import { IStreamer } from "@/models/Streamer";
import { createContext } from "react";
import useData from "@/hooks/useData";

interface IDataCtxProviderProps {
  children: React.ReactNode;
}

interface IDataCtx {
  streamers: IStreamer[] | undefined;
  getData: () => void;
  updateData: <K extends keyof IStreamer>(
    key: K,
    newValue: IStreamer[K],
    id: string
  ) => void;
}

export const DataCtx = createContext<IDataCtx>({
  streamers: [],
  getData: () => {},
  updateData: <K extends keyof IStreamer>(
    key: K,
    newValue: IStreamer[K],
    id: string
  ) => {},
});

export function DataCtxProvider({ children }: IDataCtxProviderProps) {
  const { streamers, getData, updateData } = useData();

  const ctx: IDataCtx = { streamers, getData, updateData };

  return <DataCtx.Provider value={ctx}>{children}</DataCtx.Provider>;
}
