import { IData } from "@/data/dummy-data";
import Image from "next/image";
import PlatformLogo from "./PlatformLogo";
import Rating from "./Rating";
import OpenProfileBtn from "./OpenProfileBtn";

interface ICardProps {
  data: IData;
}

export default function Card({ data }: ICardProps) {
  return (
    <div className="flex flex-col justify-between w-full bg-[var(--bg-secondary)] rounded-xl">
      <div className="relative flex justify-start items-end gap-3 h-[100px] w-full px-6 py-2 bg-[var(--bg-light2)] rounded-t-xl">
        {data && (
          <>
            <Image
              src={`/assets/images/${data.background}.webp`}
              alt="background image"
              fill
              className=" rounded-t-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[var(--bg-image-backdrop)]"></div>
          </>
        )}

        <div className="relative h-[52px] w-[100px]">
          <img
            src={`assets/images/${data ? data.avatar : "user-loading"}.webp`}
            alt=""
            className="absolute h-[100px] w-[100px] rounded-full"
          />
        </div>
        <h2 className="relative font-semibold text-base text-white">
          {data.name}
        </h2>
      </div>
      <div className="flex flex-col justify-between  h-[220px] gap-3 p-6 pt-3">
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
          <Rating id={data.id} rate={data.rate} />
          <OpenProfileBtn id={data.id} />
        </div>
      </div>
    </div>
  );
}
