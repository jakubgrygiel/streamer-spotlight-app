import Rating from "./Rating";
import UserAvatarWithBg from "./UserAvatarWithBg";

export default function LoadingCard() {
  return (
    <div className="w-full mb-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-light)]">
      <UserAvatarWithBg />
      <div className="flex flex-col gap-3 p-6 pt-3">
        <div className="flex flex-col gap-6 ml-[112px] md:ml-0">
          <div className="flex items-center gap-3 md:ml-[112px]">
            <span className="h-4 w-56 bg-[var(--bg-light2)] rounded"></span>
          </div>
          <div className="flex flex-col gap-3 w-full md:mt-4">
            <span className="h-4 w-full bg-[var(--bg-light)] rounded"></span>
            <span className="h-4 w-full bg-[var(--bg-light)] rounded"></span>
            <span className="h-4 w-24 bg-[var(--bg-light)] rounded"></span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Rating />
          <span></span>
        </div>
      </div>
    </div>
  );
}
