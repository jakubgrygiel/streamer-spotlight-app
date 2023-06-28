import { IStreamer } from "@/models/Streamer";
import Image from "next/image";

interface IUserAvatarWithBgProps {
  data?: IStreamer;
}

export default function UserAvatarWithBg({ data }: IUserAvatarWithBgProps) {
  return (
    <div className="relative flex justify-start items-end gap-3 h-[100px] w-full px-6 py-2 rounded-t-xl">
      {data ? (
        <Image
          src={`/assets/images/${data.background}.webp`}
          alt="background image"
          fill
          className=" rounded-t-xl animate-fade animate-duration-800 object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[var(--bg-light2)] rounded-t-xl animate-pulse"></div>
      )}
      <div className="absolute inset-0 bg-[var(--bg-image-backdrop)] rounded-t-xl"></div>
      <div className="relative h-[52px] w-[100px]">
        {data ? (
          <img
            src={`assets/images/${data.avatar}.webp`}
            alt=""
            className="absolute h-[100px] w-[100px] rounded-full animate-fade animate-duration-800"
          />
        ) : (
          <img
            src={`assets/images/user-loading.webp`}
            alt=""
            className="absolute h-[100px] w-[100px] rounded-full"
          />
        )}
      </div>
      {data ? (
        <h2 className="relative font-semibold text-lg text-white animate-fade animate-duration-800">
          {data.name}
        </h2>
      ) : (
        <span className="z-10 h-4 w-40 mb-1 bg-[var(--bg-very-light)] rounded animate-pulse"></span>
      )}
    </div>
  );
}
