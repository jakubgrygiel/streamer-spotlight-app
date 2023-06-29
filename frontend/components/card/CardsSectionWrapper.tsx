interface ICardsSectionWrapperProps {
  children: React.ReactNode;
}

export default function CardsSectionWrapper({
  children,
}: ICardsSectionWrapperProps) {
  return (
    <section className="flex flex-col gap-8 w-full py-6 md:gap-6 md:py-3">
      {children}
    </section>
  );
}
