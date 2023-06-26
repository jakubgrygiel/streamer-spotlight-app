import CardsSection from "@/components/card/CardsSection";
import { DUMMY_DATA } from "@/data/dummy-data";

export default function Home() {
  return (
    <>
      <CardsSection data={DUMMY_DATA} />
    </>
  );
}
