import { IStreamer } from "@/models/Streamer";
import UserAvatarWithBg from "../ui/UserAvatarWithBg";
import PlatformLogo from "../card/PlatformLogo";
import Rating from "../ui/Rating";

interface IProfileProps {
  data?: IStreamer;
}

export default function Profile({ data }: IProfileProps) {
  return (
    <section className="w-full mb-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-light)]">
      <UserAvatarWithBg data={data} />
      <div className="flex flex-col gap-3 p-6 pt-3">
        <div className="flex flex-col gap-3 ml-[112px] md:ml-0">
          <div className="flex items-center gap-3 md:ml-[112px]">
            {data ? (
              <>
                <PlatformLogo platform={data.platform} />
                <span className="text-[var(--text-dark)] text-xs font-medium">
                  @{data.name}
                </span>
              </>
            ) : (
              <span className="h-4 w-56 bg-[var(--bg-light2)] rounded animate-pulse"></span>
            )}
          </div>

          {data ? (
            <p className="text-[var(--text-main)] max-w-3xl md:mt-4 animate-fade animate-duration-800">
              {data.description}
            </p>
          ) : (
            <div className="flex flex-col gap-3 w-full md:mt-4">
              <span className="h-4 w-full bg-[var(--bg-light)] rounded animate-pulse"></span>
              <span className="h-4 w-full bg-[var(--bg-light)] rounded animate-pulse"></span>
              <span className="h-4 w-full bg-[var(--bg-light)] rounded animate-pulse"></span>
              <span className="h-4 w-12 bg-[var(--bg-light)] rounded animate-pulse"></span>
            </div>
          )}
          <div className="flex justify-between items-center gap-4 mt-4">
            {data ? (
              <span className="font-semibold text-lg text-[var(--text-main)] animate-fade animate-duration-800">
                Please give me a thumbs up!
              </span>
            ) : (
              <span></span>
            )}
            <Rating id={data?.id} votes={data?.votes} />
          </div>
        </div>
      </div>
    </section>
  );
}
