import CardsSectionWrapper from "@/components/card/CardsSectionWrapper";
import CardsSection from "@/components/card/CardsSection";
import ErrorInfo from "@/components/ui/ErrorInfo";
import LoadingSection from "@/components/ui/LoadingSection";
import useData from "@/hooks/useData";

export default function Home() {
  const { streamers, error } = useData();

  if (error)
    return (
      <CardsSectionWrapper>
        <ErrorInfo />
      </CardsSectionWrapper>
    );

  return (
    <CardsSectionWrapper>
      <h1 className="font-medium text-2xl w-full">Streamer profiles</h1>
      {streamers === undefined ? (
        <LoadingSection />
      ) : (
        <CardsSection data={streamers} />
      )}
    </CardsSectionWrapper>
  );
}
