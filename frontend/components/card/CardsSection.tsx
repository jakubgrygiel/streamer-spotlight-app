import { DUMMY_DATA } from "@/data/dummy-data";
import Card from "./Card";

export default function CardsSection() {
  return (
    <section className="grid grid-cols-4 gap-6 w-full py-6 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
      {DUMMY_DATA.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </section>
  );
}
