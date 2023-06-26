import { IData } from "@/data/dummy-data";
import Image from "next/image";

interface IUserAvatarWithBgProps {
  data: IData;
}

export default function UserAvatarWithBg({ data }: IUserAvatarWithBgProps) {
  return (
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
      <h2 className="relative font-semibold text-lg  text-white">
        {data.name}
      </h2>
    </div>
  );
}
