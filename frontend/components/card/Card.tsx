import { IStreamer } from "@/models/Streamer";
import PlatformLogo from "./PlatformLogo";
import Rating from "../ui/Rating";
import OpenProfileBtn from "./OpenProfileBtn";
import useObserver from "@/hooks/useObserver";
import { useRef } from "react";
import UserAvatarWithBg from "../ui/UserAvatarWithBg";

interface ICardProps {
  data: IStreamer;
}

export default function Card({ data }: ICardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { isVisible } = useObserver(cardRef);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col justify-between w-full bg-[var(--bg-secondary)] rounded-xl  border border-[var(--bg-light)] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <UserAvatarWithBg data={data} />
      <div className="flex flex-col justify-between h-[220px] gap-3 p-6 pt-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 ml-[112px]">
            <PlatformLogo platform={data.platform} />
            <span className="text-[var(--text-dark)] text-xs font-medium">
              @{data.name}
            </span>
          </div>
          <p className=" mt-3 text-[var(--text-secondary)] overflow-hidden">
            {data.description.slice(0, 90)}...
          </p>
        </div>
        <div className="flex justify-between">
          <Rating id={data.id} votes={data.votes} />
          <OpenProfileBtn id={data.id} />
        </div>
      </div>
    </div>
  );
}
