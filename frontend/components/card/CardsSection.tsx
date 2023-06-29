import { IStreamer } from "@/models/Streamer";
import Card from "./Card";

interface ICardsSectionProps {
  data: IStreamer[];
}

export default function CardsSection({ data }: ICardsSectionProps) {
  return (
    <div className="grid grid-cols-4 gap-6 w-full 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:gap-4 ">
      {data.map((item: IStreamer) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
