import { DUMMY_DATA } from "@/data/dummy-data";
import Card from "./Card";

export default function CardsSection() {
  return (
    <section className="flex flex-col gap-8 w-full py-6 md:gap-6 md:py-3">
      <h1 className="font-medium text-2xl w-full">Streamer profiles</h1>
      <div className="grid grid-cols-4 gap-6 w-full 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:gap-4 ">
        {DUMMY_DATA.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}
