import { IStreamer } from "@/types/types";
import useGetData from "@/hooks/useGetData";
import { createContext } from "react";

interface IDataCtxProviderProps {
  children: React.ReactNode;
}

interface IDataCtx {
  streamers: IStreamer[] | undefined;
  updateData: () => void;
}

export const DataCtx = createContext<IDataCtx>({
  streamers: [],
  updateData: () => {},
});

export function DataCtxProvider({ children }: IDataCtxProviderProps) {
  const { streamers, updateData } = useGetData();

  const ctx: IDataCtx = { streamers, updateData };

  return <DataCtx.Provider value={ctx}>{children}</DataCtx.Provider>;
}
