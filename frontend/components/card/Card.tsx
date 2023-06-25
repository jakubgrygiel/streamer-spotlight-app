import { IData } from "@/data/dummy-data";
import Image from "next/image";

interface ICardProps {
  data: IData;
}

export default function Card({ data }: ICardProps) {
  return (
    <div className="w-[400px] bg-[var(--bg-secondary)] rounded-xl">
      <div className="relative flex justify-start items-end gap-3 h-[100px] w-full px-6 py-2 bg-[var(--bg-light2)] rounded-t-xl">
        {data && (
          <>
            <Image
              src={`/assets/images/${data.background}.webp`}
              alt="background image"
              fill
              className=" rounded-t-xl"
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
          streamer123
        </h2>
      </div>
      <div className="flex flex-col gap-3 p-6 pt-3">
        <span className="ml-[112px]">@streamer123</span>
        <p>
          I'm a crazy streamer who interacts with fans with great enthusiasm. I
          love creating dynamic and energetic...
        </p>
        <div>Rate</div>
      </div>
    </div>
  );
}
