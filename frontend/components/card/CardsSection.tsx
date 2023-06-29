import { IStreamer } from "@/models/Streamer";
import Card from "./Card";
import LoadingSection from "../ui/LoadingSection";
import useData from "@/hooks/useData";

export default function CardsSection() {
  const { streamers } = useData();

  return (
    <section className="flex flex-col gap-8 w-full py-6 md:gap-6 md:py-3">
      <h1 className="font-medium text-2xl w-full">Streamer profiles</h1>
      {streamers ? (
        <div className="grid grid-cols-4 gap-6 w-full 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:gap-4 ">
          {streamers.map((item: IStreamer) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <LoadingSection />
      )}
    </section>
  );
}
